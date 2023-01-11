---
title: Show Relations properties
description: Show Relations properties
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
model ProductRequest {
    id String @id @default(cuid())
    title String
    description String
    upVotes Int
    comments Comment[]
    category Category @relation(fields: [categoryId], references: [id])
    categoryId String
    status Status @relation(fields: [statusId], references: [id])
    statusId String
    user User @relation(fields: [userId], references: [id])
    userId String
}

model User {
    id String @id @default(cuid())
    username String @unique
    name String
    image String?
    productRequest ProductRequest[]
    comment Comment[]
}

```

As we can see by the above prisma schema, exists a relation between ProductRequest and User models.

In order to make a query to get all the data of a ProductRequest and for example all the properties of the comments, we have to do a query like this:

```jsx
return await ctx.prisma.productRequest.findUnique({
  where: {
    id: input.id,
  },
  include: {
    category: true,
    status: true,
    user: true,
    comments: {
      include: {
        user: true,
        replies: true,
      },
    },
  },
});
```

---
title: Transactions
description: Transactions
layout: ../../layouts/CodeDrops.astro
lang: en
---

[Prisma Makes Transactions so Easy!](https://www.youtube.com/shorts/0tJF8VzswZM)

![Screenshot 2022-11-01 at 11.18.40.png](/img/Transactions/Screenshot_2022-11-01_at_11.18.40.png)

On the image above we can see that we have multiples prisma request to the database, and the goal over here is have an atomic code, with means, that everything have to succeed of everything have to fail.

In order to accomplish this we have to use a feature from prisma called transactions:

![Screenshot 2022-11-01 at 11.22.36.png](/img/Transactions/Screenshot_2022-11-01_at_11.22.36.png)

Notice that we removed await from each transaction.

---
title: Stop Using Javascript Objects
description: Stop Using Javascript Objects
layout: ../../layouts/CodeDrops.astro
lang: en
---

- If you want to arbitrary destroy and create keys objecta are not the pattern to that
- Objects shapes should be determined when its instantiated and not modified on runtime because I can hurt performance significantly

## We should be using maps for this purpose

Maps can set, and get data

```jsx
(usersMap = new Map() < string),
  { id: number, status: string } >
    userMap.set('marl', { id: 1, status: 'offline' });

const user = userMap.get('mark');
```

It can be iterated

```jsx
[...userMap].map((user) => {
  console.log(user);
});
```

### We also can use Set<>()

With sets is very easy to remove and verify if a specific element exists, because all of them are unique.

```jsx
const userIdsInChatSet = new Set([1, 7, 17, 17]); // --> [1, 7, 17]

const isUserOnline = (id: number) => userIdsInChatSet.has(id);
const removeUserFromOnlineSet = (id: number) => userIdsInChatSet.delete(id);
```

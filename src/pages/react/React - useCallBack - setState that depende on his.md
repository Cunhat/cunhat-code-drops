---
title: React - useCallBack - setState that depende on his on state
description: React - useCallBack - setState that depende on his on state
layout: ../../layouts/CodeDrops.astro
lang: en
---

When we want to set a new value on useState hook, and this set depends on hius own value, instead of doing this:

```jsx
const addItemToWishList = useCallBack(
  (item) => {
    setWishList([...wishList, item]);
  },
  [wishList],
);
```

We can do this and we dont need the pass the state to the useCallBack

```jsx
const addItemToWishList = useCallBack((item) => {
  setWishList((state) => [...state, item]);
}, []);
```

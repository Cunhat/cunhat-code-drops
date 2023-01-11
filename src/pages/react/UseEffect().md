---
title: UseEffect()
description: UseEffect()
layout: ../../layouts/CodeDrops.astro
lang: en
---

In defense of useEffect

[https://www.youtube.com/watch?v=Zw4lJqBphvA](https://www.youtube.com/watch?v=Zw4lJqBphvA)

![Screenshot 2022-10-13 at 12.04.31.png](<UseEffect()%20d790b0d3f0604a60844fe3ada5197c0e/Screenshot_2022-10-13_at_12.04.31.png>)

Things you can do with useEffect()

- Run on every render
- Run on mount and unmount
- Run when a value changes

Please DO NOT useEffect for…

- Updating state (Derive it)
- Data fetching (React Query and such are cool)
- Actions (Bind to user actions)

Please useEffect For..

- Event listeners
- For “synchronising state” (but seriously use react query if you can)

Real example on this link

[https://beta.reactjs.org/learn/you-might-not-need-an-effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

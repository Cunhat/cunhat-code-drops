---
title: UseEffect()
description: UseEffect()
layout: ../../layouts/CodeDrops.astro
lang: en
---

In defense of useEffect

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zw4lJqBphvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

![Screenshot 2022-10-13 at 12.04.31.png](/img/UseEffect/Screenshot_2022-10-13_at_12.04.31.png)

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

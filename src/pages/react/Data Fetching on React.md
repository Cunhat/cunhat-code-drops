---
title: Data Fetching on React
description: Data Fetching on React
layout: ../../layouts/CodeDrops.astro
lang: en
---

Font Theo’s video about react fetching

[https://www.youtube.com/watch?v=M-aTAsYo-Lc&t=502s](https://www.youtube.com/watch?v=M-aTAsYo-Lc&t=502s)

React Query is by far my favourite fetching framework:

[Overview | TanStack Query Docs](https://tanstack.com/query/v4/docs/overview)

## When do you fetch your data?

### SPA

![Untitled](/img/Data%20Fetching%20on%20React/Untitled.png)

Example of pages state on render:

![Untitled](/img/Data%20Fetching%20on%20React/Untitled%201.png)

App render tree:

![Untitled](/img/Data%20Fetching%20on%20React/Untitled%202.png)

We have to make sure that the architecture is the correct one in order to render everything at the same time.

Like we can see by the above image, components b and c will need some data input from the a parent component. “A” component will perform some data fetching and only after that will have the inputs for the children components. As a good practice, is important to get all the data needed for the children component as a response from the useDataForA() request and pass it as props. This will avoid different render times.

### NextJS SSR

![Untitled](/img/Data%20Fetching%20on%20React/Untitled%203.png)

With NextJs and server side rendering we don’t have any loading zone because is the server the responsible for all the data processing and fetching and only when all of them are done he will return it to the client. So basically we’ll have, for a short period of time, an empty page and than all data is returned.

![Untitled](/img/Data%20Fetching%20on%20React/Untitled%204.png)

Comparison between SPA and SSR rendering

![Untitled](/img/Data%20Fetching%20on%20React/Untitled%205.png)

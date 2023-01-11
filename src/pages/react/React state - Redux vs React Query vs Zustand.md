---
title: React state - Redux vs React Query vs Zustand
description: React state - Redux vs React Query vs Zustand
layout: ../../layouts/CodeDrops.astro
lang: en
---

[https://www.youtube.com/watch?v=5-1LM2NySR0](https://www.youtube.com/watch?v=5-1LM2NySR0)

# The React State management Rant

If you can use React-query, you probably should!!

## What is state?

- State is a way to synchronise the server with the client
- Data, usually data that can change

## Types of state

- server state
- Application/client state

```jsx
//Application state
const [open, setOpen] = useState(false);

//Server state
const {data, isLoading} = useQuery('data', () => await fetch("/").json())
```

## What ins’t serve state?

- Av device management
- navigation state
- Open/close menu state
- “Is chat open”

## What should I use instead of React-query when its not ideal?

Built-in React useState

- Don’t be too scared of prop drilling
- I don’t recommend Context much

![Untitled](/img/React%20state%20-%20Redux%20vs%20React%20Query%20vs%20Zustand/Untitled.png)

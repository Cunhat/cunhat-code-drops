---
title: setInterval()
description: setInterval()
layout: ../../layouts/CodeDrops.astro
lang: en
---

setInterval() function will allow to execute any function repetetly on a specific interval of time

Example

[https://codesandbox.io/s/currying-cdn-qy4pc0?file=/src/App.tsx](https://codesandbox.io/s/currying-cdn-qy4pc0?file=/src/App.tsx)

```jsx
import './styles.css';
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState < number > 0;

  React.useEffect(() => {
    console.log('Render');
    console.log('huehueuhue');
    const teste = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(teste);
  }, []);

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Add</button>
    </div>
  );
}
```

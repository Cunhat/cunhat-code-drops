---
title: React Hooks
description: React Hooks
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
//Add objects to array on hooks
const [breadCrumbs, setBreadCrumbs] = useState([]);

setBreadCrumbs([...breadCrumbs, { label: steps[step].lbl, savedStep: step }]);
```

```jsx
//Add new object to array
setTheArray((currentArray) => [...currentArray, newElement]);
```

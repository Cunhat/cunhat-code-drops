---
title: React - Promise.All() with async function
description: React - Promise.All() with async function
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
let submission = await Promise.all(
  listOfMsisdnToActivate.map(async (elem) => {
    let resp = await handleActivationSubmitOperation(
      buildActivationSubmitOperation(elem.msisdn),
    );
    return resp;
  }),
);
```

The example will make async calls from values on a map()

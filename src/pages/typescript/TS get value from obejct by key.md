---
title: TS get value from obejct by key
description: TS get value from obejct by key
layout: ../../layouts/CodeDrops.astro
lang: en
---

Imagine the following scenario when we want to get a value from an object by his key.

```jsx
const images = {
  anne: Anne,
  elijah: Elijah,
  george: George,
  jackson: Jackson,
  james: James,
  javier: Javier,
  judah: Judah,
  roxanne: Roxanne,
  ryan: Ryan,
  suzanne: Suzanne,
  thomas: Thomas,
  victoria: Victoria,
  zena: Zena,
};

function getImageSrc(user: string) {
  const index = user?.split(' ')[0]?.toLowerCase(); //as keyof typeof images;
  return images[index];
}
```

Without set the typeof image key, Typescript will launch an error message saying the following:

Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ anne: StaticImageData; elijah: StaticImageData; george: StaticImageData; jackson: StaticImageData; james: StaticImageData; ... 7 more ...; zena: StaticImageData; }'.

No index signature with a parameter of type 'string' was found on type '{ anne: StaticImageData; elijah: StaticImageData; george: StaticImageData; jackson: StaticImageData; james: StaticImageData; ... 7 more ...; zena: StaticImageData; }'.ts(7053)
• PROBLEMS36
• OUTPUT
• DEBUG CONSOLE
• TERMINAL
• GITLENS
•
•

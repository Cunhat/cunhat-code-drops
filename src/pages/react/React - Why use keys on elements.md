---
title: React - Why use keys on elements
description: React - Why use keys on elements
layout: ../../layouts/CodeDrops.astro
lang: en
---

We use keys in order to give the reference from each element to React.

For example, if we have this list of li:

```jsx
<ul>
  <li key='2015'>Duke</li>
  <li key='2016'>Villanova</li>
</ul>
```

and we add a new one like this:

```jsx
<ul>
  <li key='2014'>Connecticut</li>
  <li key='2015'>Duke</li>
  <li key='2016'>Villanova</li>
</ul>
```

Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.

If we do not provide any key, the React will not have any information about the previous keys that already has been inserted and will render all the list.

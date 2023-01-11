---
title: Utility types
description: Utility types
layout: ../../layouts/CodeDrops.astro
lang: en
---

[https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)

```jsx
function createUser(name: string, id: number) {
	return {name: "name", id: 1}
}

type creatUserInput = Parameters<typeof createUser>

type createUserReturn = ReturnType<typeof createUser>

async function createUser(name: string, id: number) {
	return {name: "name", id: 1}
}

type createUserReturn = Awaited<ReturnType<typeof createUser>>

type User = {
	name: string;
	email: string;
	password: string;
}

type UserInfo = Omit<User, 'password'>>

interface ButtonProps exteds ButtonHTMLAttributer<HTMLButtonsElement>
```

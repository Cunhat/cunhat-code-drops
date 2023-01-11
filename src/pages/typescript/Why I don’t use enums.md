---
title: Why I don’t use enums
description: Why I don’t use enums
layout: ../../layouts/CodeDrops.astro
lang: en
---

[https://www.youtube.com/watch?v=Anu8vHXsavo](https://www.youtube.com/watch?v=Anu8vHXsavo)

```jsx
enum UserRole {
	User,
	Admin,
	Staff
}

if (UserRole.User) {
	console.log("This will never get hit");
}
```

The problem with the showed solution is that I can acess any UserRole value because it return 0 and its false.

For a better user experience its way better to use the following solution:

```jsx
const UserRoles = ["User", "Admin", "Staff"] as const;

type UserRole = typeof UserRole[number];

type User = {
	role: UserRole;
}

const Dropdown = () => {
	const data = UserRoles.map(role => ({value: role, label: role}));
}
```

With this solution we can easily iterate though the UserRole properties and use it like on the example on a dropdown.

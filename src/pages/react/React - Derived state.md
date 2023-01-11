---
title: React - Derived state
description: React - Derived state
layout: ../../layouts/CodeDrops.astro
lang: en
---

[https://blog.webdevsimplified.com/2019-11/never-store-derived-state/](https://blog.webdevsimplified.com/2019-11/never-store-derived-state/)

What is derived state?

Derived state, in essence, is some state that is derived from other state that is already stored in the application. Since this definition is pretty vague, here is a concrete example. Image an app with 3 counter stored in 3 states. Then we have another state with the total amount of this counters. This is derived state in is glance.

Store that total in the state is what needs to be avoided, because when derived state is stored in state it makes it very easy for the state to be out of sync.

Code example:

```jsx
function User() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Kyle' },
    { id: 2, name: 'John' },
  ]);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    setSelectedUser({ ...user });

    updateUser(1, 'Kate');
  }, []);

  function updateUser(id, name) {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      const user = newUsers.find((user) => user.id === id);
      user.name = name;
      return newUsers;
    });
  }

  return users.map((user) => user.name).join(', ');
}
```

As we can see by the above code, the selected user depends from the user state.

The problem here is the useEffect, the setSelectedUser will set a copy of the current user, in this case, with the name “Kyle” and then we are updating the same user, and give it “Kate” as his new name . This will provide an out sync between the states as we already mentioned. Because if we try to get the current user immediately after the useEffects runs out, we will get as current user the name Kyle, instead of Kate.

In other to avoid this behaviour we should not store the current user as a full copy of the user.

The correct form to do it, is to use Memo, and every time the user state updates, the Memo will run and update the current user value

```jsx
const selectedUser = useMemo(() => {
  return users.find((user) => user.id === selectedUserId);
}, [users, selectedUserId]);
```

---
title: Satisfies
description: Satisfies
layout: ../../layouts/CodeDrops.astro
lang: en
---

[https://www.youtube.com/watch?v=7vHKeFrwvYk](https://www.youtube.com/watch?v=7vHKeFrwvYk)

```jsx
type CityName = "New York" | "Mumbai" | "Lagos";

type CityCoordinates = {
	x: number;
	y: number;
}

type User = {
	birthCity: City;
	currentCity: city;
};

type City = CityName | CityCoordinates;

const user = {
	birthCity: "Mumbai",
	currentCity: { x: 6, y: 3 }
} satisfies User;

const user: User = {
	birthCity: "Mumbai",
	currentCity: { x: 6, y: 3 }
}

user.birthCity.toUpperCase () ;
```

If we use const user without the satisfies, and only assigned the User type we will have an error trying to perform the uppercase function;

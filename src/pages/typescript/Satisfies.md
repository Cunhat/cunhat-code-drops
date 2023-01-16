---
title: Satisfies
description: Satisfies
layout: ../../layouts/CodeDrops.astro
lang: en
---

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7vHKeFrwvYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

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

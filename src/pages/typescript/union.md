---
title: Union
description: Union
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
export type IObject = {
    type: "checked"
    parameters: IParametersCheck
} | {
    type: "counter"
    parameters: IParametersCounter
}
export type ObjectType = IObject['type'] //// in case you need this union
export type ObjectParameters = IObject['parameters']  //// in case you need this union

export interface IParametersCheck {
    checked: boolean
}
export interface IParametersCounter {
    max: number
    min: number
    step: number
}
```

---
title: Create refs dynamically
description: Create refs dynamically
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
const info = global?.window?.betShowcases; //return an array
const elementsRef = useRef(info?.showcases.map(() => useRef()));

(...)

{info?.showcases &&
            info?.showcases.map((showcase: ShowcaseType, **index: number**) => (
              <Showcase
                key={index}
                {...showcase}
                **ref={elementsRef.current[index]}**
                increaseBet={increaseBet}
                decreaseBet={decreaseBet}
                availableTokens={availableChips}
                setAvailableChips={setAvailableChipsFn}
                betHoldAmount={info?.betHoldAmount}
                totalBetsMade={totalBetsMade}
                minTotalBets={info?.minTotalBets}
                percentageLabel={info?.percentageLabel}
                selected={selectedShowcaseId === showcase.id}
                setSelected={setOpenAndScroll}
                offerConditionsLabel={info?.offerConditionsLabel}
                chipsColor={showcase?.chipsColor}
                buttonLabel={showcase?.buttonLabel}
              />
            ))}
```

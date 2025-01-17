# Traffic Intersection

## Implementation

My approach is to have a ticker that updates every 1 second.
On each tick, we evaluate if we need to make any updates to the app's states.
The flow of the intersection is determined by 2 states:

1. `flowDirection` (north-south or east-west)
2. `phase` (green, warning, etc.)

Each phase is allocated a certain number of ticks. Once thier allocation is used up, the app progresses to the next phase.
Once each phase has been cycled through, move to the next flowDirection

## Setup

This is a Vite, React, TS, and Mantine app. It was bootstrapped with a starter package, so excuse all the config stuff. For the sake of simplicity, all styles are inlined (for the most part)

## Scripts

There are 4 scripts (all of which were defined in the Vite starter template):

- `start`
- `dev`
- `lint`
- `build`

Example:

```shell
pnpm dev
```

## Prompt

> ### Make a Traffic Intersection
>
> Write a program that models a traffic intersection.
>
> The intersection is a four-way intersection. Each part of the intersection has four lanes:
>
> - A left turn lane
> - Two middle lanes that go straight
> - A right turn lane
>
> The light can either be red, yellow, or green.
> The left-hand turn lane has its own dedicated light. That light can either be red, yellow, green, or flashing orange (go if no cars are coming the other way).
>
> The UI for this is completely up to you. You could print to a console. You could write to a div. You could make an API call to OpenAI to generate an image based on the state of your program! Whatever you like.
>
> #### The Features
>
> Your program should support the following features (time permitting):
>
> - Create a traffic signal whose lights change on a timer.
> - Model cars arriving at the intersection and traveling through while the light is green.
> - Make the left-hand turn lights on opposite sides of the intersection turn green at the same time, letting cars safely turn left. Make sure the "straight" lights are red. You > don't want any accidents!
> - Some traffic lights have sensors underneath the road to detect if there are cars waiting. Make your signal smart! For example, if there are no cars waiting, keep that light red. What if cars begin to arrive? How long do you keep the light red?
> - Add support for a "walk" button at each intersection. When the button is pressed, it should cause the intersection to become clear long enough for a person to walk through it.

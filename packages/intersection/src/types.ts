export const directions = ["north", "south", "east", "west"] as const;
export type Direction = (typeof directions)[number];

export const flowDirections = ["north-south", "east-west"] as const;
export type FlowDirection = (typeof flowDirections)[number];

export const phases = ["turn-only", "proceed", "warning", "stop"] as const;
export type Phase = (typeof phases)[number];

export const lightColors = ["green", "yellow", "red", "orange"] as const;
export type LightColor = (typeof lightColors)[number];

import { Center, Flex, MantineStyleProp } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Light from "./Light";

export const directions = ["north", "south", "east", "west"] as const;
export type Direction = (typeof directions)[number];

export interface RowProps {
  direction: Direction;
}

const cellCount = 7;
const rowArray = Array.from({ length: cellCount }, (_el, i) => i);

const styles: Record<Direction, MantineStyleProp> = {
  north: { transform: "rotate(180deg)", top: 0, left: 0 },
  south: { transform: `rotate(0deg)`, bottom: 0, left: 0 },
  west: { transform: `rotate(90deg)`, transformOrigin: "top left" },
  east: { transform: `rotate(270deg)`, transformOrigin: "top right" },
};

export default function Row({ direction }: RowProps) {
  const { height, width } = useViewportSize();

  const size = Math.floor(Math.min(height, width) / 11);
  const style = styles[direction];

  return (
    <Flex pos="absolute" w="100%" gap="xs" style={style} justify="center">
      {rowArray.map((cell) => {
        return (
          <Center bg={cell < 3 ? "gray.2" : "gray.5"} h={size} w={size}>
            {cell === 3 && (
              <Light
                state="green"
                arrow
                style={{ transform: `translate(0, -${size}px)` }}
              />
            )}
            {cell === 5 && (
              <Light
                state="orange"
                style={{ transform: `translate(0, -${size}px)` }}
              />
            )}
          </Center>
        );
      })}
    </Flex>
  );
}

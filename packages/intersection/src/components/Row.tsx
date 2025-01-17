import { Center, Flex, MantineStyleProp } from "@mantine/core";
import useDisplaySize from "../hooks/useDisplaySize";
import Light from "./Light";

export const directions = ["north", "south", "east", "west"] as const;
export type Direction = (typeof directions)[number];

export interface RowProps {
  direction: Direction;
}

const rowArray = Array.from({ length: 7 }, (_el, i) => i);

const styles: Record<Direction, MantineStyleProp> = {
  north: { transform: "rotate(180deg)", top: 0, left: 0 },
  south: { transform: `rotate(0deg)`, bottom: 0, left: 0 },
  west: { transform: `rotate(90deg)`, transformOrigin: "top left" },
  east: { transform: `rotate(270deg)`, transformOrigin: "top right" },
};

export default function Row({ direction }: RowProps) {
  const size = useDisplaySize();

  const style = styles[direction];
  const lightStyle = { transform: `translate(0, -${size}px)` };

  return (
    <Flex pos="absolute" w="100%" gap="xs" style={style} justify="center">
      {rowArray.map((cell) => {
        return (
          <Center bg={cell < 3 ? "gray.2" : "gray.5"} h={size} w={size}>
            {/* turn signal */}
            {cell === 3 && <Light state="green" arrow style={lightStyle} />}
            {/* main signal */}
            {cell === 5 && <Light state="orange" style={lightStyle} />}
          </Center>
        );
      })}
    </Flex>
  );
}

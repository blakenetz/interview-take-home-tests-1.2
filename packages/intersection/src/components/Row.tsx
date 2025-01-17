import { Center, Flex, MantineStyleProp } from "@mantine/core";
import useDisplaySize from "../hooks/useDisplaySize";
import Light from "./light/Light";
import { Direction, FlowDirection, LightColor, Phase } from "../types";

export interface RowProps {
  direction: Direction;
  flowDirection: FlowDirection;
  phase: Phase;
}

const cellCount = 7;
const rowArray = Array.from({ length: cellCount }, (_el, i) => i);

const styles: Record<Direction, MantineStyleProp> = {
  north: { transform: "rotate(180deg)", top: 0, left: 0 },
  south: { transform: `rotate(0deg)`, bottom: 0, left: 0 },
  west: { transform: `rotate(90deg)`, transformOrigin: "top left" },
  east: { transform: `rotate(270deg)`, transformOrigin: "top right" },
};

export default function Row({ direction, phase, flowDirection }: RowProps) {
  const displaySize = useDisplaySize();
  const size = displaySize / (cellCount * 1.5); // add additional buffer

  const style = styles[direction];
  const lightStyle = { transform: `translate(0, -${size}px)` };

  const isRed = !flowDirection.includes(direction);

  let turnColor: LightColor;
  let mainColor: LightColor;
  switch (phase) {
    case "turn-only":
      turnColor = "green";
      mainColor = "red";
      break;
    case "proceed":
      turnColor = "orange";
      mainColor = "green";
      break;
    case "warning":
      turnColor = "orange";
      mainColor = "yellow";
      break;

    default:
      turnColor = "red";
      mainColor = "red";
  }

  return (
    <Flex pos="absolute" w="100%" gap="xs" style={style} justify="center">
      {rowArray.map((cell) => {
        return (
          <Center
            bg={cell < 3 ? "gray.2" : "gray.5"}
            h={size}
            w={size}
            key={cell}
          >
            {/* turn signal */}
            {cell === 3 && (
              <Light
                color={isRed ? "red" : turnColor}
                arrow
                style={lightStyle}
              />
            )}
            {/* main signal */}
            {cell === 5 && (
              <Light color={isRed ? "red" : mainColor} style={lightStyle} />
            )}
          </Center>
        );
      })}
    </Flex>
  );
}

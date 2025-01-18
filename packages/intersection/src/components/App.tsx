/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Row from "@/components/Row";
import useDisplaySize from "@/hooks/useDisplaySize";
import { directions, flowDirections, Phase, phases } from "@/types";
import { Box, Center } from "@mantine/core";
import { useCounter, useToggle } from "@mantine/hooks";
import { sum } from "@/utils";

// how many "ticks" allocated to each phase
const allocations: Record<Phase, number> = {
  "turn-only": 4,
  proceed: 10,
  warning: 3,
  stop: 1,
};

const phaseBreaksArr = Object.values(allocations).reduce<number[]>(
  (acc, val, i, array) => [...acc, sum(array.slice(0, i)) + val],
  []
);
const phaseBreaks = new Set<number>(phaseBreaksArr);
const [max] = phaseBreaksArr.slice(-1);

console.log({ max, phaseBreaksArr });

export default function App() {
  const size = useDisplaySize();

  const [tick, handler] = useCounter(0);
  const [flowDirection, toggleFlowDirection] = useToggle(flowDirections);
  const [phase, togglePhase] = useToggle(phases);

  function reset() {
    toggleFlowDirection();
    handler.reset();
  }

  // This effect hook has **one** job: tick every 1s
  useEffect(() => {
    console.log("initializing interval");
    const interval = setInterval(() => handler.increment(), 1000);
    return () => clearInterval(interval);
  }, []);

  // This effect handles changes on a per tick bases
  useEffect(() => {
    if (phaseBreaks.has(tick)) {
      console.log("updating phase", phase, tick);
      togglePhase();
    }
    if (tick > max) {
      console.log("reseting", phase, tick);
      reset();
    }
  }, [tick]);

  return (
    <Center>
      <Box pos="relative" h={size} w={size}>
        {directions.map((d) => (
          <Row
            key={d}
            direction={d}
            flowDirection={flowDirection}
            phase={phase}
          />
        ))}
      </Box>
    </Center>
  );
}

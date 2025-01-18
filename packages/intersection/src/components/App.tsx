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

// create an array of all the ticks that indicate a phase updates
const phaseBreaksArr = Object.values(allocations).reduce<number[]>(
  (acc, val, i, array) => [...acc, sum(array.slice(0, i)) + val],
  []
);
// create a set for better lookups
const phaseBreaks = new Set<number>(phaseBreaksArr);
const [max] = phaseBreaksArr.slice(-1);

export default function App() {
  const size = useDisplaySize();

  const [tick, handler] = useCounter(0);
  const [flowDirection, toggleFlowDirection] = useToggle(flowDirections);
  const [phase, togglePhase] = useToggle(phases);

  // This effect hook has ONLY one job: tick every 1s
  useEffect(() => {
    const interval = setInterval(() => handler.increment(), 1000);
    return () => clearInterval(interval);
  }, []);

  // This effect handles changes on a per tick bases
  useEffect(() => {
    if (phaseBreaks.has(tick)) togglePhase();
    if (tick > max) {
      toggleFlowDirection();
      handler.reset();
    }
  }, [tick]);

  const _handleWalkRequest = () => {
    /**
     * IF "flowDirection" is against the walk request
     * AND "phase" is still in `turn-only` of `proceed`
     * THEN reduce the tick allocation of "proceed"
     *
     * NOTE:
     * this would require moving "phaseBreaks" to internal state
     */

    return;
  };

  const _handleCarBuildUp = () => {
    /**
     * same logic as "handleWalkRequest"
     *
     * NOTE:
     * this would require moving all the "tick" logic to context
     * AND have logic in the "Row" component that measures cars on a per tick basis
     */
    return;
  };

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

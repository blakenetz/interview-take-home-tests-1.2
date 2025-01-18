import { useEffect } from "react";
import Row from "@/components/Row";
import useDisplaySize from "@/hooks/useDisplaySize";
import { directions, flowDirections, Phase, phases } from "@/types";
import { Box, Center } from "@mantine/core";
import { useCounter, useToggle } from "@mantine/hooks";

const phaseLength = phases.length;
const max = phaseLength * 4; // work in quarters

export default function App() {
  const size = useDisplaySize();

  const [count, countHandlers] = useCounter(0, { max });
  const [flowDirection, toggleFlowDirection] = useToggle(flowDirections);

  useEffect(() => {
    console.log("initializing interval");
    const interval = setInterval(
      () => countHandlers.increment(),
      // every second we reevaluate the stop light state
      1000
    );

    return () => clearInterval(interval);
    // only initialize this interval once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reset counter when it hits its max
  if (count === max) {
    countHandlers.reset();
    toggleFlowDirection();
  }

  let phase: Phase = "stop";
  if (count < phaseLength) phase = "turn-only"; // first length for turning
  else if (count < phaseLength * 3) phase = "proceed"; // 3/4 for all traffic
  else if (count < phaseLength * 3 + phaseLength * 0.75) phase = "warning"; // warn at very end
  // last .25 of a phase length is universal stop

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

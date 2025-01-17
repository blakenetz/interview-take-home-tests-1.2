import { useEffect } from "react";
import { Box, Center } from "@mantine/core";
import useDisplaySize from "../hooks/useDisplaySize";
import Row from "./Row";
import { directions, flowDirections, phases } from "../types";
import { useToggle } from "@mantine/hooks";

export default function App() {
  const size = useDisplaySize();
  const [phase, togglePhase] = useToggle(phases);
  const [flowDirection, toggleFlowDirection] = useToggle(flowDirections);

  useEffect(() => {
    const interval = setInterval(() => {
      togglePhase();
      if (phase === "stop") toggleFlowDirection();

      // every 1.5 seconds we update state
    }, 3000);

    return () => clearInterval(interval);
  }, [phase, toggleFlowDirection, togglePhase]);

  return (
    <Center>
      <Box pos="relative" h={size} w={size}>
        {directions.map((d) => (
          <Row
            direction={d}
            key={d}
            flowDirection={flowDirection}
            phase={phase}
          />
        ))}
      </Box>
    </Center>
  );
}

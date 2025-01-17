import { Box, Center } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Row, { directions } from "./Row";

export default function App() {
  const { height, width } = useViewportSize();
  const size = Math.min(height, width);

  return (
    <Center>
      <Box pos="relative" h={size} w={size}>
        {directions.map((d) => (
          <Row direction={d} key={d} />
        ))}
      </Box>
    </Center>
  );
}

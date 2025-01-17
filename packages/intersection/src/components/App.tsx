import { Box, Center } from "@mantine/core";
import useDisplaySize from "../hooks/useDisplaySize";
import Row, { directions } from "./Row";

export default function App() {
  const size = useDisplaySize();

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

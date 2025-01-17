import { Box, BoxProps, ColorSwatch } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export interface LightProps extends BoxProps {
  arrow?: boolean;
  state: "green" | "yellow" | "red" | "orange";
}

export default function Light({ arrow, state, ...props }: LightProps) {
  return (
    <Box {...props}>
      <ColorSwatch color={`var(--mantine-color-${state}-5)`}>
        {arrow && <IconArrowLeft />}
      </ColorSwatch>
    </Box>
  );
}

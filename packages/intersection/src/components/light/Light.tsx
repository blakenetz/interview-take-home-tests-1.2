import { Box, BoxProps, ColorSwatch } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { LightColor } from "../../types";
import styles from "./light.module.css";

export interface LightProps extends BoxProps {
  arrow?: boolean;
  color: LightColor;
}

export default function Light({ arrow, color, ...props }: LightProps) {
  return (
    <Box {...props}>
      <ColorSwatch
        color={`var(--mantine-color-${color}-5)`}
        classNames={{ colorOverlay: color === "orange" ? styles.pulse : "" }}
      >
        {arrow && <IconArrowLeft />}
      </ColorSwatch>
    </Box>
  );
}

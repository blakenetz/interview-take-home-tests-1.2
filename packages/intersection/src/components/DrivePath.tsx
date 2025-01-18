import useDisplaySize from "@/hooks/useDisplaySize";
import { Box, Flex } from "@mantine/core";
import { IconArrowRightDashed } from "@tabler/icons-react";
import styles from "@/styles/pulse.module.css";

interface DrivePathProps {
  index: number;
}

export default function DrivePath({ index }: DrivePathProps) {
  const displaySize = useDisplaySize();
  const length = 16;

  if (index < 3) return;
  const left = index === 3;
  const right = index === 6;

  return (
    <Flex
      pos="absolute"
      align="center"
      w={displaySize / 3}
      gap="xs"
      style={{
        transform: `rotate(-90deg) translate(${displaySize / 6}px, 0)`,
      }}
    >
      {Array.from({ length }, (_el, i) => i).map((val) => (
        <Box
          key={val}
          bg="cyan.3"
          w={displaySize / 16}
          h={1}
          className={styles["pulse-cyan"]}
        />
      ))}
      <IconArrowRightDashed
        color="var(--mantine-color-cyan-3)"
        size="xs"
        {...(left && { style: { transform: `rotate(-90deg)` } })}
        {...(right && { style: { transform: `rotate(90deg)` } })}
      />
    </Flex>
  );
}

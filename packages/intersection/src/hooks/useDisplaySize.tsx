import { useViewportSize } from "@mantine/hooks";

export default function useDisplaySize() {
  const { height, width } = useViewportSize();
  return Math.min(height, width);
}

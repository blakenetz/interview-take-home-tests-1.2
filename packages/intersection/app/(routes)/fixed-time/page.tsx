export default async function FixedTime() {
  const cells = Array.from({ length: 8 * 8 }, (_el, i) => i);

  return cells.map((cell) => (
    <div key={cell} className="bg-gray-400 h-8 w-8" />
  ));
}

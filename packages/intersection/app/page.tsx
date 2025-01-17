import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 gap-4 flex items-center justify-center flex-col mt-[25%]">
      <h1>View implementations</h1>
      <Link href="/fixed-time">FIXED TIME</Link>
      <Link href="/adaptive">ADAPTIVE</Link>
    </main>
  );
}

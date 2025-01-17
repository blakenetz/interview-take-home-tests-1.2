import Link from "next/link";

export default async function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-8 gap-4 flex flex-col">
      <main className="grid grid-cols-4">{children}</main>
      <Link href="/">Go Home</Link>
    </div>
  );
}

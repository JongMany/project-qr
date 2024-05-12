import MenuItems from "@/app/(application)/_components/MenuItems";

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <MenuItems />
    </main>
  );
}

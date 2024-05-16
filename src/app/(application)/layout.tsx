import MenuItems from "@/app/(application)/_components/MenuItems";
import { Toaster } from "react-hot-toast";

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <MenuItems />
      <Toaster position="bottom-center" />
    </main>
  );
}

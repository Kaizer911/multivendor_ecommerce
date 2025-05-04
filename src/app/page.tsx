import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="font-bold text-blue-500 font-barlow">Home Page</h1>
    </div>
  );
}

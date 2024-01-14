"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function Navbar() {
  const { userId } = useAuth();
  const pathname = usePathname();

  const navList = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Write",
      href: "/write",
    },
  ];
  return (
    <div className="w-full fixed top-0 left-0 right-0">
      <div className="w-full max-w-5xl flex items-center justify-between mx-auto p-4">
        <div></div>
        <div className="flex items-center gap-4">
          {navList.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-black",
                pathname === item.href ? "text-black" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

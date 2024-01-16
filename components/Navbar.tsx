"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { userId } = useAuth();
  const pathname = usePathname();

  const router = useRouter();

  const { y } = useScroll();

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
    <div
      className={cn(
        "w-full fixed top-0 left-0 right-0 bg-white",
        y > 0 ? "shadow" : ""
      )}
    >
      <div className="w-full max-w-5xl flex items-center justify-between mx-auto p-4">
        <div>
          {pathname.includes("/post") ? (
            <ChevronLeft
              className="cursor-pointer w-5 h-5 md:w-8 md:h-8"
              onClick={() => router.back()}
            />
          ) : (
            <></>
          )}
        </div>
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

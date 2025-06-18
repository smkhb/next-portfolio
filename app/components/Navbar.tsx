"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const navigationsItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gustbook",
    href: "/guestbook",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export function Navbar() {
  const path = usePathname();
  console.log("Current path:", path);
  return (
    <nav className="max-w-7xl mx-auto px-4 py-6 md:px-8 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Samuel <span className="text-blue-500">Bernardo</span>
          </h1>
        </Link>
      </div>

      <div className="hidden md:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationsItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  active={path === item.href}
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      path === item.href ? "text-blue-500" : "text-gray-700"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden md:block">Contact Me</Button>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

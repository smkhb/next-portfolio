"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navigationsItems = [
  {
    title: "",
    href: "/",
  },
];

export function Navbar() {
  const path = usePathname();
  console.log("Current path:", path);
  return (
    <nav className="max-w-7xl mx-auto px-4 py-6 md:px-8 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Samuel{" "}
            <span className="hover:text-accent hover:bg-blue-500 rounded-md p-1 transition-colors">
              Bernardo
            </span>
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
                  className="text-xl"
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden md:flex" variant="blue" size="custom" asChild>
          <a href="mailto:hello@samuelbernardo.dev">Contact me</a>
        </Button>
        <div className="md:hidden">
        </div>
      </div>
    </nav>
  );
}

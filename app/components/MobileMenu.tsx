import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationsItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <div className="mt-5 flex px-4 space-y-1 flex-col">
          {navigationsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                path === item.href
                  ? "bg-muted text-blue-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-muted transition-colors",
                "group flex items-center px-2 py-2 text-sm font-semibold rounded-md"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button >Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

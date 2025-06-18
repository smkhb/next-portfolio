import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GradientPointer from "./GradientPointer";

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
      <div className="w-full relative col-span-1 rounded-md">
        <div className="h-100"></div>
        <GradientPointer />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none shadow-none">
          <CardHeader>
            <CardTitle className="font-medium text-2xl md:text-3xl">
              Take a look at my stack! 🚀
            </CardTitle>
            <CardDescription className="text-gray-700 text-lg md:text-xl">
              Here are some of the technologies I work with and enjoy using in
              my projects. I am always eager to learn new tools and improve my
              skills.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

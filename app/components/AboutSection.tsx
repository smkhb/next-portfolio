import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
      <Card className="col-span-1 border-none bg-gray-100 p-8 lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-medium text-2xl md:text-3xl">
            A versatile software developer 🔥
          </CardTitle>
          <CardDescription className="text-gray-700 text-lg md:text-xl">
            I am a versatile software developer, quick to learn and adapt to new
            technologies. I enjoy building innovative solutions and am always
            eager to tackle new challenges. My passion for technology drives me
            to continuously improve my skills and stay updated with the latest
            trends in the industry.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

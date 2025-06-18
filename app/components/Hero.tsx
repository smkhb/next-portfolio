import Image from "next/image";
import me from "../../public/me.jpg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BrazilText from "./BrazilText";

export function Hero() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="col-span-1 h-full bg-gray-100 rounded-2xl min-h-[500px] lg:min-h-[300px] lg:col-span-2">
        <Card className="bg-gray-100 border-none shadow-none">
          <CardHeader>
            <CardTitle className="font-medium text-2xl md:text-3xl">
              Hey I am Sam 💻
            </CardTitle>
            
            <CardDescription className="text-gray-700 text-lg md:text-xl">
              <BrazilText />
              I work with building web applications using modern
              technologies like React, Next.js, and Node.js. I enjoy creating
              intuitive user interfaces and efficient backend systems.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="px-6">
          <a
            href="mailto:hello@samuelbernardo.dev"
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get in touch!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-roundsed="rounded-lg"
            ></span>
          </a>
        </div>
      </div>

      <Image
        src={me}
        alt="Samuel Bernardo"
        className="col-span-1 rounded-2xl h-auto object-cover bg-gray-100"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

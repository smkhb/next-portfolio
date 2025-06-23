import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import linkedin from "../../public/socials/linkedin.svg";
import github from "../../public/socials/github.svg";
import { Spotify } from "react-spotify-embed";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    icon: linkedin,
    username: "@samuelbernardo",
    url: "https://www.linkedin.com/in/samuelbernardo/",
  },
  {
    id: 2,
    name: "GitHub",
    icon: github,
    username: "@smkhb",
    url: "https://www.github.com/smkhb",
  },
];

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
      <div className="col-span-1 lg:col-span-2">
        <Card className="border-none bg-gray-100 lg:min-h-[350px]">
          <CardHeader>
            <CardTitle className="font-medium text-2xl md:text-3xl">
              A versatile software developer 🔥
            </CardTitle>
            <CardDescription className="text-gray-700 text-lg md:text-xl">
              I am a versatile software developer, quick to learn and adapt to
              new technologies. I enjoy building innovative solutions and am
              always eager to tackle new challenges. My passion for technology
              drives me to continuously improve my skills and stay updated with
              the latest trends in the industry.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 text-lg md:text-xl">
            <div className="flex gap-6">
              {socials.map((social) => (
                <Card
                  key={social.id}
                  className="p-4 flex flex-row items-start bg-gray-100 border-none gap-2"
                >
                  <Image src={social.icon} alt={social.name} className="w-16" />
                  <div>
                    <h1 className="text-xl font-medium">{social.name}</h1>
                    <Button size="sm" variant="blue" asChild>
                      <a href={social.url} target="_blank">
                        Follow
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col items-center justify-center lg:items-end">
        <Spotify link="https://open.spotify.com/intl-pt/track/3X4JN049J3iPAkwkHVPJxD?si=627ef14d41cb4d15" />
      </div>
    </div>
  );
}

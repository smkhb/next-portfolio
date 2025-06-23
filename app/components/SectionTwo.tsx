import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Docker from "../../public/stack-icons/docker.svg";
import ExpressJS from "../../public/stack-icons/expressjs.svg";
import Figma from "../../public/stack-icons/figma.svg";
import Git from "../../public/stack-icons/git.svg";
import Github from "../../public/stack-icons/github.svg";
import JavaScript from "../../public/stack-icons/javascript.svg";
import NestJS from "../../public/stack-icons/nestjs.svg";
import NextJS from "../../public/stack-icons/nextjs.svg";
import NodeJS from "../../public/stack-icons/nodejs.svg";
import Npm from "../../public/stack-icons/npm.svg";
import PostgreSQL from "../../public/stack-icons/postgresql.svg";
import Postman from "../../public/stack-icons/postman.svg";
import React from "../../public/stack-icons/react.svg";
import TypeScript from "../../public/stack-icons/typescript.svg";
import Vite from "../../public/stack-icons/vite.svg";
import Vitest from "../../public/stack-icons/vitest.svg";
import VSCode from "../../public/stack-icons/vscode.svg";
import XD from "../../public/stack-icons/xd.svg";

import linkedin from "../../public/socials/linkedin.svg";
import github from "../../public/socials/github.svg";

const stackIcons = [
  Docker,
  ExpressJS,
  Figma,
  Git,
  Github,
  JavaScript,
  NestJS,
  NextJS,
  NodeJS,
  Npm,
  PostgreSQL,
  Postman,
  React,
  TypeScript,
  Vite,
  Vitest,
  VSCode,
  XD,
];

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

import GradientPointer from "./GradientPointer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
      <div className="w-full relative col-span-1 rounded-md">
        <GradientPointer />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none shadow-none">
          <CardHeader>
            <CardTitle className="font-medium text-2xl md:text-3xl">
              Take a look at my stack! 🚀
            </CardTitle>
            <CardDescription className="text-gray-700 text-lg md:text-xl">
              Here are some of the technologies I work with in when building my
              projects. I am always learning new tools to improve my skills.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {stackIcons.map((Icon, index) => (
              <Image
                key={index}
                src={Icon}
                alt={`Stack Icon ${Icon}`}
                className="w-16 hover:scale-120 transition-transform duration-300 ease-in-out"
              />
            ))}
          </CardContent>
        </Card>

        {/* <div className="grid grid-cols-2 w-full gap-4">
          {socials.map((social) => (
            <Card
              key={social.id}
              className="p-4 flex flex-row items-start bg-gray-100 border-none gap-2"
            >
              <Image
                src={social.icon}
                alt={social.name}
                className="w-16 hover:scale-120 transition-transform duration-300 ease-in-out"
              />
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
        </div> */}
      </div>
    </div>
  );
}

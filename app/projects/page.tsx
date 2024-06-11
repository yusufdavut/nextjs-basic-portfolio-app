import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectDatas } from "../../lib/projects";
import Project from "@/components/Project/Project";
import PageTitle from "@/components/PageTitle/PageTitle";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 max-md:px-0">
      <PageTitle title="My Projects" />
      <Tabs defaultValue="react" className="max-md:w-full">
        <TabsList className="w-full bg-transparent p-6 flex items-center justify-between rounded-2xl border shadow-none mb-10">
          <TabsTrigger
            value="react"
            className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl w-[160px]"
          >
            React
          </TabsTrigger>
          <TabsTrigger
            value="react-native"
            className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl w-[160px]"
          >
            React Native
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl w-[160px]"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="typescript"
            className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl w-[160px]"
          >
            TypeScript
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="react"
          className="flex flex-wrap justify-between w-full"
        >
          {projectDatas.map((proj) =>
            proj.categories.map(
              (p) => p === "React" && <Project key={proj.id} data={proj} />
            )
          )}
        </TabsContent>
        <TabsContent
          value="react-native"
          className="flex flex-wrap justify-between w-full"
        >
          {projectDatas.map((proj) =>
            proj.categories.map(
              (p) =>
                p === "React Native" && <Project key={proj.id} data={proj} />
            )
          )}
        </TabsContent>
        <TabsContent
          value="backend"
          className="flex flex-wrap justify-between w-full"
        >
          {projectDatas.map((proj) =>
            proj.categories.map(
              (p) => p === "Backend" && <Project key={proj.id} data={proj} />
            )
          )}
        </TabsContent>
        <TabsContent
          value="typescript"
          className="flex flex-wrap justify-between w-full"
        >
          {projectDatas.map((proj) =>
            proj.categories.map(
              (p) => p === "TypeScript" && <Project key={proj.id} data={proj} />
            )
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

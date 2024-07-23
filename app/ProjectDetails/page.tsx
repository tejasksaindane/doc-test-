// "use client";

import React from "react";
import { portfolios } from "../constants/Switch-theme-duration";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useRouter } from 'next/navigation'
// Either
// import { useRouter } from "next/router";
// import Router from 'next/router'
import { useRouter } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const getSingleProject = async (id: number) => {
  const item = portfolios;
  const singleItem = await item.find((portfolios: any) => portfolios.id === id);
  return singleItem;
};

const ProjectDetails = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const _id = Number(idString);
  const Project = await getSingleProject(_id);
  console.log("------>", Project);

  // const router = useRouter();

  // const router = useRouter();

  //   console.log(searchParams.id);
  //   console.log("Rendering PortfolioPage"); // Ex

  return (
    <div className="mt-[80px] ">
      <div className="flex ml-[20px] pb-[20px]">
        <span className="px-[5px]">
          <Link href="/portfolio">
            <ArrowLeft />
            </Link>
        </span>
        <Link href="/portfolio">
          <span
            className="text-md font-light tracking-wide"
           
          >
            All Projects
          </span>
        </Link>
      </div>

      <div className=" w-[90%] m-auto pb-[20px] ">
        <img src={Project?.image} alt="" className="rounded-xl shadow-xl" />
      </div>

      <div className="w-[90%] h-min m-auto  border-2 rounded-lg">
        <h1 className="tracking-wide text-xl font-semibold p-[10px]">
          {Project?.name}
        </h1>
        <p className="tracking-wide text-sm p-[10px]">
          {Project?.descriptiontwo}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;

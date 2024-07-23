"use client";

import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolios } from "../constants/Switch-theme-duration";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <>
      <div className="h-full lg:mb-[30px] ">
        <h1 className="dark:text-[#DEDEDE]  font-bold text-center mt-[70px] text-[#18181B] tracking-wide text-sm">
          PROJECTS
        </h1>
        <div className="flex pt-[50px] gap-4 justify-center h-screen w-full flex-wrap md:px-[80px] md:mb-[20px]">
          {portfolios.map((portfolio, id) => (
            <Link
              href={{
                pathname: "/ProjectDetails",
                query: { id: portfolio.id },
              }}
              key={id}
            >
              <PortfolioCard key={`experience-${id}`} {...portfolio} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

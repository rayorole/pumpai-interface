"use client";

import { DonutChart } from "@tremor/react";
const distribution = [
  {
    name: "Liquidity Pool",
    perc: 30,
  },
  {
    name: "Development & Marketing",
    perc: 5,
  },
  {
    name: "Team",
    perc: 5,
  },
  {
    name: "Presale",
    perc: 35,
  },
  {
    name: "Centralized Exchange",
    perc: 15,
  },
  {
    name: "Burn",
    perc: 10,
  },
];

export const TokenSharesDonut = () => {
  return (
    <>
      <DonutChart
        className="w-full h-full transition p-0 duration-150 rounded-full hover:scale-105"
        data={distribution}
        category="perc"
        index="name"
        valueFormatter={(v) => `${v}%`}
        label="Token distribution"
        showTooltip
        variant="pie"
        colors={[
          "violet-900",
          "violet-800",
          "violet-700",
          "violet-600",
          "violet-500",
          "violet-400",
        ]}
      />
    </>
  );
};

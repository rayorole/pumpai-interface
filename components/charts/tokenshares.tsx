"use client";

import { DonutChart } from "@tremor/react";
const distribution = [
  {
    name: "Liquidity Pool",
    perc: 27,
  },
  {
    name: "Development & Marketing",
    perc: 6,
  },
  {
    name: "Team",
    perc: 5,
  },
  {
    name: "Presale",
    perc: 27,
  },
  {
    name: "Centralized Exchange",
    perc: 15,
  },
  {
    name: "Burn",
    perc: 11,
  },
  {
    name: "Rewards",
    perc: 9,
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
          "violet-300",
        ]}
      />
    </>
  );
};

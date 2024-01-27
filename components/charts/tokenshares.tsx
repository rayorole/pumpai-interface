"use client";

import { DonutChart } from "@tremor/react";
const distribution = [
  {
    name: "Marketing",
    perc: 10,
  },
  {
    name: "Team",
    perc: 5,
  },
  {
    name: "Liquidity Pool",
    perc: 80,
  },
  {
    name: "Development",
    perc: 5,
  },
];

export const TokenSharesDonut = () => {
  return (
    <>
      <DonutChart
        className="w-full h-full hover:shadow-lg transition p-0 duration-150 rounded-full hover:shadow-violet-400/10 hover:scale-105"
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

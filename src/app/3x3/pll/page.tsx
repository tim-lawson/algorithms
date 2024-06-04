"use client";

import React from "react";
import { groups } from "@/app/3x3/pll/groups";
import { size } from "@/app/3x3/utils";
import Page from "@/components/page";
import { PageData } from "@/types";

const data: PageData = {
  id: "3x3-pll",
  label: "3x3 PLL",
  size,
  groups,
};

export default function Page3x3PLL() {
  return <Page data={data} />;
}

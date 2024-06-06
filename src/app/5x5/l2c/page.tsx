"use client";

import React from "react";
import { groups } from "@/app/5x5/l2c/groups";
import { size } from "@/app/5x5/utils";
import Page from "@/components/page";
import { PageData } from "@/types";

const data: PageData = {
  id: "5x5-l2c",
  label: "5x5 L2C",
  size,
  groups,
};

export default function Page5x5L2C() {
  return <Page data={data} />;
}

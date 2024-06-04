"use client";

import React from "react";
import { groups } from "@/app/5x5/l2e/groups";
import { size } from "@/app/5x5/utils";
import Page from "@/components/page";
import { PageData } from "@/types";

const data: PageData = {
  id: "5x5-l2e",
  label: "5x5 L2E",
  size,
  groups,
};

export default function Page5x5L2E() {
  return <Page data={data} />;
}

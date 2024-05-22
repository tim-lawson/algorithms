"use client";

import React from "react";
import { groups } from "@/app/3x3-oll/groups";
import Page from "@/components/page";
import { PageData } from "@/types";
import { size } from "@/utils-3x3";

const data: PageData = {
  id: "3x3-oll",
  label: "3x3 OLL",
  size,
  groups,
};

export default function Page3x3OLL() {
  return <Page data={data} />;
}

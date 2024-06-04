"use client";

import React from "react";
import { groups, size } from "@/app/2x2/ortega/groups";
import Page from "@/components/page";
import { PageData } from "@/types";

const data: PageData = {
  id: "2x2-ortega",
  label: "2x2 Ortega",
  size,
  groups,
};

export default function Page2x2Ortega() {
  return <Page data={data} />;
}

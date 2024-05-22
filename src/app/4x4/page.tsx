"use client";

import React from "react";
import { groups } from "@/app/4x4/groups";
import { size } from "@/app/4x4/utils";
import Page from "@/components/page";
import { PageData } from "@/types";

const data: PageData = {
  id: "4x4",
  label: "4x4",
  size,
  groups,
};

export default function Page4x4() {
  return <Page data={data} />;
}

"use client";

import React from "react";
import { Grid } from "@/components/grid";
import { Groups } from "@/components/groups";
import Layout from "@/components/layout";
import { PageData } from "@/types";

export default function Page({ data }: { data: PageData }) {
  return (
    <Layout
      title={`Tim's Algorithms / ${data.label}`}
      groups={<Groups groups={data.groups} />}
    >
      <Grid data={data} />
    </Layout>
  );
}

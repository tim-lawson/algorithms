"use client";

import React from "react";
import { Grid } from "@/components/grid";
import Layout from "@/components/layout";
import { PageContextProvider } from "@/page-context";
import { PageData } from "@/types";

export default function Page({ data }: { data: PageData }) {
  return (
    <PageContextProvider data={data}>
      <Layout title={data.label}>
        <Grid />
      </Layout>
    </PageContextProvider>
  );
}

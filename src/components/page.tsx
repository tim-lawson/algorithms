"use client";

import React from "react";
import { Box } from "@/components/box";
import { Grid } from "@/components/grid";
import { Groups } from "@/components/groups";
import Layout from "@/components/layout";
import { PageContextProvider } from "@/page-context";
import { PageData } from "@/types";

export default function Page({ data }: { data: PageData }) {
  return (
    <PageContextProvider data={data}>
      <Layout
        title={data.label}
        sidebar={
          <Box className="px-4 py-4 mb-4">
            <h3 className="mb-2 text-mauve8 font-medium uppercase tracking-widest cursor-default">
              Groups
            </h3>
            <Groups />
          </Box>
        }
      >
        <Grid />
      </Layout>
    </PageContextProvider>
  );
}

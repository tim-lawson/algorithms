"use client";

import Link from "next/link";
import React from "react";
import { parityProps } from "@/app/nxn/parity";
import { sliceFlipSliceProps } from "@/app/nxn/slice-flip-slice";
import { nxn, sizes } from "@/app/nxn/utils";
import { GridItemSimple } from "@/components/grid-item";
import Layout from "@/components/layout";

export default function PageNxN() {
  return (
    <Layout title={`Tim's Algorithms / NxN`}>
      <div className="px-4 md:text-lg flex flex-col gap-2">
        <p>
          Note: The F face is shown for slice-flip-slice cases, whereas the{" "}
          <Link href="/5x5/l2e">5x5 L2E</Link> page shows the U face. The U face
          is shown for parity cases, as usual.
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {sizes.map((size) => (
          <li key={size}>
            <div className="flex items-center justify-between pl-4 pr-2 py-2">
              <h2 className="text-mauve9 text-lg font-medium">{nxn(size)}</h2>
            </div>
            <ul className="w-full grid grid-flow-row lg:auto-rows-fr gap-4 grid-cols-1 lg:grid-cols-2">
              {sliceFlipSliceProps(size).map((props) => (
                <GridItemSimple key={props.algorithm.id} {...props} />
              ))}
              <GridItemSimple {...parityProps(size)} />
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

"use client";

import React from "react";
import { ExternalLink } from "@/components/external-link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout title="Tim's Algorithms">
      <div className="px-4 md:text-lg flex flex-col gap-2">
        <p>
          Hello, I&apos;m Tim (
          <ExternalLink href="https://www.worldcubeassociation.org/persons/2024LAWS03">
            2024LAWS03
          </ExternalLink>
          ). This site hosts the algorithms I use for speedcubing.
        </p>
        <p>The algorithms are from:</p>
        <ul className="list-disc pl-8">
          <li>
            <ExternalLink href="https://www.cuberoot.me">CubeRoot</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.cubeskills.com">
              CubeSkills
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://bit.ly/cubealgwb">
              Cube Alg WB
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.speedsolving.com/wiki/index.php">
              SpeedSolving.com
            </ExternalLink>
          </li>
        </ul>
        <p>
          This site is not a comprehensive resource and will change, but I hope
          you find it useful.
        </p>
        <p>
          The source code is available on{" "}
          <ExternalLink href="https://github.com/tslwn/algorithms">
            GitHub
          </ExternalLink>
          . It depends on the{" "}
          <ExternalLink href="https://tdecker91.github.io/puzzle-gen/">
            PuzzleGen
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://js.cubing.net/cubing/">
            cubing.js
          </ExternalLink>{" "}
          libraries.
        </p>
      </div>
    </Layout>
  );
}

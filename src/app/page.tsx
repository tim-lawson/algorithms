import React from "react";
import { ExternalLink } from "@/components/external-link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout title="Tim's Algorithms">
      <div className="mt-4 md:mt-2 px-4 md:text-lg flex flex-col gap-2">
        <p>
          Hello, I&apos;m Tim (
          <ExternalLink href="https://www.worldcubeassociation.org/persons/2024LAWS03">
            2024LAWS03
          </ExternalLink>
          ). This site hosts the algorithms I use for speedcubing.
        </p>
        <p>The algorithms are from:</p>
        <ul className="list-disc pl-6">
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
        </ul>
        <p>
          This site is not a comprehensive resource and will change, but I hope
          you find it useful.
        </p>
      </div>
    </Layout>
  );
}

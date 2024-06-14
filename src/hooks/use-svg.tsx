import { Alg } from "cubing/alg";
import React from "react";
import { SVG } from "sr-puzzlegen";
import { Algorithm, VisualizerType } from "@/types";
import { HEIGHT, WIDTH } from "@/utils";

export function useSVG(
  id: string,
  size: number,
  algorithm: Algorithm,
  type = VisualizerType.CUBE,
  width = WIDTH,
  height = HEIGHT,
): void {
  React.useEffect(() => {
    // clear container
    document.getElementById(id)!.innerHTML = "";

    let alg = algorithm.case;
    if (algorithm.casePrefix) {
      alg = alg + " " + algorithm.casePrefix;
    }
    alg = Alg.fromString(alg).expand().toString();

    // render svg into container
    SVG(`#${id}`, type, {
      width,
      height,
      puzzle: {
        case: alg,
        mask: algorithm.mask,
        rotations: algorithm.rotations,
        // @ts-ignore this is CubeOptions, not PuzzleOptions
        size,
        scheme: {
          U: { value: "#FFE629" }, // yellow
          R: { value: "#CE2C31" }, // red
          F: { value: "#0D74CE" }, // blue
          D: { value: "#FCFCFC" }, // white
          L: { value: "#F76B15" }, // orange
          B: { value: "#46A758" }, // green
        },
      },
    });
  }, [size, algorithm, id, type, width, height]);
}

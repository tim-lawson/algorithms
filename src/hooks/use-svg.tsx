import React from "react";
import { SVG } from "sr-puzzlegen";
import { Algorithm, AlgorithmCase, VisualizerType } from "@/types";
import { HEIGHT, WIDTH } from "@/utils";

export function useSVG(size: number, algorithm: AlgorithmCase): void {
  React.useEffect(() => {
    // clear container
    document.getElementById(algorithm.id)!.innerHTML = "";
    const firstAlgorithm = first(algorithm);
    // render svg into container
    SVG(`#${algorithm.id}`, algorithm.type ?? VisualizerType.CUBE, {
      width: WIDTH,
      height: HEIGHT,
      puzzle: {
        case: firstAlgorithm.case + (firstAlgorithm.casePrefix ?? ""),
        mask: firstAlgorithm.mask,
        rotations: firstAlgorithm.rotations,
        // @ts-ignore this is CubeOptions, not PuzzleOptions
        size,
        scheme: {
          U: { value: "#FFE629" }, // yellow
          R: { value: "#CE2C31" }, // red
          F: { value: "#0D74CE" }, // blue
          D: { value: "#FCFCFC" }, // white
          L: { value: "#F76B15" }, // orange
          B: { value: "#3E9B4F" }, // green
        },
      },
    });
  }, [size, algorithm]);
}

function first(algorithm: AlgorithmCase): Algorithm {
  return algorithm.algorithms[0];
}

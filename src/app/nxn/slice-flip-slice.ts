import { Size } from "@/app/nxn/utils";
import { Algorithm, AlgorithmCase, Mask, VisualizerType } from "@/types";
import {
  createMaskNone,
  createMaskOnlyEdges,
  hash,
  replaceInnerSlices,
} from "@/utils";

const casePrefix = "z x' y ";

const cases: Record<Size, [string, string][]> = {
  4: [
    ["Uw'", "Uw"],
    // ["Dw", "Dw'"],
  ],
  5: [
    ["Uw'", "Uw"],
    ["3Uw' 2Uw", "3Uw 2Uw'"],
    // ["3Dw 2Dw'", "3Dw' 2Dw"],
    ["Dw", "Dw'"],
  ],
  6: [
    ["Uw'", "Uw"],
    ["3Uw' 2Uw", "3Uw 2Uw'"],
    ["3Dw 2Dw'", "3Dw' 2Dw"],
    ["Dw", "Dw'"],
  ],
  7: [
    ["Uw'", "Uw"],
    ["3Uw' 2Uw", "3Uw 2Uw'"],
    ["3Dw 2Dw'", "3Dw' 2Dw"],
    ["Dw", "Dw'"],
  ],
};

const edges: Record<Size, Mask> = {
  4: {
    R: [4, 8],
    F: [4, 7, 8, 11],
    L: [7, 11],
  },
  5: {
    R: [5, 10, 15],
    F: [5, 9, 10, 14, 15, 19],
    L: [9, 14, 19],
  },
  6: {
    R: [6, 12, 18, 24],
    F: [6, 11, 12, 17, 18, 23, 24, 29],
    L: [11, 17, 23, 29],
  },
  7: {
    R: [7, 14, 21, 28, 35],
    F: [7, 13, 14, 20, 21, 27, 28, 34, 35, 41],
    L: [7, 13, 20, 27, 34, 41],
  },
} as const;

function props(size: Size, [forward, reverse]: [string, string]) {
  const alg = `${casePrefix}${forward} (R U R' F R' F' R) ${reverse}`;

  const maskNone = createMaskNone(size);
  const maskEdges = (edges?: number[]) => createMaskOnlyEdges(size, edges);

  const first: Algorithm = {
    id: hash(alg),
    label: `Slice-flip-slice (${replaceInnerSlices(forward)})`,
    case: alg,
    mask: {
      U: maskNone, // yellow
      R: maskEdges(edges[size]?.R), // red
      F: maskEdges(edges[size]?.F), // blue
      D: maskNone, // white
      L: maskEdges(edges[size]?.L), // orange
      B: maskNone, // green
    },
  };

  const algorithm: AlgorithmCase = {
    id: hash(alg + size),
    algorithms: [first],
    type: VisualizerType.CUBE_TOP,
  };

  return {
    size,
    algorithm,
    label: first.label,
    case: replaceInnerSlices(alg).replace(casePrefix, ""),
  };
}

export function sliceFlipSliceProps(size: Size) {
  return cases[size].map((c) => props(size, c));
}

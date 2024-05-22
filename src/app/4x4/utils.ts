import { AlgorithmCase, Mask, Rotations, VisualizerType } from "@/types";
import { createMaskNone, createMaskOnlyCenters, hash, mask } from "@/utils";

export const size = 4;

export const maskNone = createMaskNone(size);

export const maskOnlyCenters = createMaskOnlyCenters(size);

export const masks = {
  centers: {
    U: maskOnlyCenters,
    R: maskOnlyCenters,
    F: maskOnlyCenters,
    D: maskOnlyCenters,
    L: maskOnlyCenters,
    B: maskOnlyCenters,
  },
  centersU: {
    U: maskOnlyCenters,
    R: maskNone,
    F: maskNone,
    D: maskNone,
    L: maskNone,
    B: maskNone,
  },
  edgesTwo: {
    U: maskOnlyCenters,
    R: mask(size, { centers: true, edges: [7, 11], corners: false }),
    F: maskOnlyCenters,
    D: maskOnlyCenters,
    L: maskOnlyCenters,
    B: mask(size, { centers: true, edges: [4, 8], corners: false }),
  },
  U: {
    U: [],
    R: maskNone,
    F: maskNone,
    D: maskNone,
    L: maskNone,
    B: maskNone,
  },
};

export function algorithmCase(
  group: string,
  mask?: Mask,
  rotations?: Rotations,
  type?: VisualizerType,
) {
  return function (
    label: string,
    casePrefix: string,
    algorithms: string[],
  ): AlgorithmCase {
    return {
      id: hash([group, label].join(" ")),
      label,
      algorithms: algorithms.map((algorithm) => ({
        id: hash(algorithm),
        case: algorithm,
        casePrefix,
        mask,
        rotations,
      })),
      type,
    };
  };
}

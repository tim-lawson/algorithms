import { AlgorithmCase, Mask, VisualizerType } from "@/types";
import { createMaskNone, hash, mask } from "@/utils";

export const size = 3;

const maskNone = createMaskNone(size);

export const masks: Record<string, Mask> = {
  eoll: {
    U: mask(size, { edges: true, centers: true, corners: false }),
    R: maskNone,
    F: maskNone,
    D: maskNone,
    L: maskNone,
    B: maskNone,
  },
  oll: {
    U: [],
    R: maskNone,
    F: maskNone,
    D: maskNone,
    L: maskNone,
    B: maskNone,
  },
};

export function algorithmCase(group: string, mask?: Mask) {
  return function (
    label: string,
    algorithms: { label?: string; case: string }[],
  ): AlgorithmCase {
    return {
      id: hash([group, label].join(" ")),
      label,
      algorithms: algorithms.map((algorithm) => ({
        id: hash(algorithm.case),
        label: algorithm.label,
        case: algorithm.case,
        casePrefix: "",
        mask,
      })),
      type: VisualizerType.CUBE_TOP,
    };
  };
}

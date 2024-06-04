import {
  Algorithm,
  AlgorithmCase,
  Mask,
  Rotations,
  VisualizerType,
} from "@/types";
import { createMaskNone, createMaskOnlyCenters, hash } from "@/utils";

export const size = 5;

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
    algorithms: Pick<Algorithm, "case" | "label">[],
  ): AlgorithmCase {
    return {
      id: hash([group, label].join(" ")),
      label,
      algorithms: algorithms.map((algorithm) => ({
        id: hash(algorithm.case),
        casePrefix,
        mask,
        rotations,
        ...algorithm,
      })),
      type,
    };
  };
}

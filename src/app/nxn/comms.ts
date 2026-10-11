import { Size } from "@/app/nxn/utils";
import { Algorithm, AlgorithmCase, Mask, VisualizerType } from "@/types";
import {
  createMaskOnlyCenters,
  hash,
  replaceInnerSlices,
  rotations,
} from "@/utils";

const casePrefix = "z x' y ";

const cases: Record<Size, string> = {
  4: "Uw' Uw",
  5: "Uw' Uw",
  6: "Uw' Uw",
  7: "Uw' Uw",
};

function props(size: Size, alg: string) {
  const maskCenters = createMaskOnlyCenters(size);

  const first: Algorithm = {
    id: hash(alg),
    case: alg,
    mask: {
      U: maskCenters, // yellow
      R: maskCenters, // red
      F: maskCenters, // blue
      D: maskCenters, // white
      L: maskCenters, // orange
      B: maskCenters, // green
    },
    rotations: rotations.top,
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

export function l2cProps(size: Size) {
  return props(size, cases[size]);
}

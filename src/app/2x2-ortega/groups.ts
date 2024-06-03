import {
  AlgorithmCase,
  AlgorithmGroup,
  Mask,
  Rotations,
  VisualizerType,
} from "@/types";
import { createMaskNone, hash, rotations } from "@/utils";

export const size = 2;

const maskNone = createMaskNone(size);

const masks: Record<string, Mask> = {
  oll: {
    U: [],
    R: maskNone,
    F: maskNone,
    D: maskNone,
    L: maskNone,
    B: maskNone,
  },
};

function algorithmCase(
  group: string,
  mask?: Mask,
  rotations?: Rotations,
  type?: VisualizerType,
) {
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
        rotations,
      })),
      type,
    };
  };
}

const caseOll = algorithmCase(
  "oll",
  masks.oll,
  undefined,
  VisualizerType.CUBE_TOP,
);

export const oll: AlgorithmGroup = {
  id: "2x2-oll",
  label: "OLL",
  cases: [
    caseOll("H", [{ case: "R2 U2 R U2 R2" }]),
    caseOll("Pi", [{ case: "R U2 R2 U' R2 U' R2 U2 R" }]),
    caseOll("Antisune", [{ case: "R U2' R' U' R U' R'" }]),
    caseOll("Sune", [{ case: "R U R' U R U2' R'" }]),
    caseOll("L", [{ case: "(F R' F' R) (U R U' R')" }]),
    caseOll("T", [{ case: "(R U R' U') (R' F R F')" }]),
    caseOll("U", [{ case: "F (R U R' U') F'" }]),
  ],
};

const casePbl = algorithmCase(
  "pbl",
  undefined,
  rotations.default,
  VisualizerType.CUBE,
);

export const pbl: AlgorithmGroup = {
  id: "2x2-pbl",
  label: "PBL",
  cases: [
    casePbl("Adjacent", [
      { label: "Jb perm", case: "(R U R' F') (R U R' U') (R' F R2 U' R')" },
    ]),
    casePbl("Opposite", [
      { case: "(R U' R' U') F2 (U' R U R') U F2" },
      {
        label: "Y Perm",
        case: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
      },
    ]),
    casePbl("Opposite Opposite", [
      { case: "R2 F2 R2" },
      { case: "R2 B2 R2" },
      { case: "x R2 U2 R2" },
    ]),
    casePbl("Adjacent Adjacent", [
      { case: "R2 U' B2 U2 R2 U' R2" },
      { case: "R2 U R2 U2 F2 U R2" },
      { case: "y2 R2 U' R2 U2 F2 U' R2" },
    ]),
    casePbl("Adjacent Opposite", [
      { case: "R U' R F2 R' U R'" },
      { case: "R' F R' F2 R U' R" },
    ]),
    casePbl("Opposite Adjacent", [
      { case: "y (R2 U) (R2' U') (R2 U) (R2' U') R2" },
      { case: "R' D R' F2 R D' R" },
    ]),
  ],
};

export const groups = [oll, pbl];

import { algorithmCase, maskNone, size } from "@/app/5x5/utils";
import { Algorithm, AlgorithmGroup, VisualizerType } from "@/types";
import { mask } from "@/utils";

const maskEdges = (edges: number[]) =>
  mask(size, {
    centers: false,
    edges,
    corners: false,
  });

function caseL2e(
  group: string,
  label: string,
  algorithms: Omit<Algorithm, "id">[],
) {
  return algorithmCase(
    group,
    {
      U: maskEdges([1, 2, 3, 21, 22, 23]),
      R: maskNone,
      F: maskEdges([1, 2, 3]),
      D: maskNone,
      L: maskNone,
      B: maskEdges([1, 2, 3]),
    },
    undefined,
    VisualizerType.CUBE_TOP,
  )(label, "", algorithms);
}

const bothOrientedGroup = "5x5-l2e-both-oriented";

const bothOriented: AlgorithmGroup = {
  id: bothOrientedGroup,
  label: "Both edges oriented",
  cases: [
    // caseL2e(bothOrientedGroup, "Solved", [{ case: "" }]),
    caseL2e(bothOrientedGroup, "Swap middle", [
      { case: "(Rw2 F2 U2) Rw2 (U2 F2 Rw2)" },
    ]),
    caseL2e(bothOrientedGroup, "Swap FL and BR", [
      { case: "Lw2 F2 U2 Lw' U2 Lw2 F2 Lw' U2 Lw2 U2 F2 Lw' F2" },
      { case: "F2 Rw U2 Rw U2' Rw' F2 Rw' U2 Rw' U2' Rw U2 Rw' U2' Rw2" },
    ]),
    caseL2e(bothOrientedGroup, "Swap FR and BL", [
      { case: "Rw2 F2 U2 Lw' U2 Lw2 F2 Lw' U2 Rw2 U2 F2 Rw F2" },
      { case: "B2 Rw' U2 Rw' U2' Rw B2 Rw U2 Rw U2' Rw' U2 Rw U2' Rw2" },
    ]),
  ],
};

const bothCheckedGroup = "5x5-l2e-both-checked";

const bothChecked: AlgorithmGroup = {
  id: bothCheckedGroup,
  label: "Both edges checked",
  cases: [
    caseL2e(bothCheckedGroup, "Double edge parity", [
      {
        case: "Rw' Lw (U' R' U R' F R F') Rw Lw'",
      },
    ]),
    caseL2e(bothCheckedGroup, "Swap middle", [
      { case: "Rw U R U' Rw2 U' R U Rw2 U R U' Rw'" },
    ]),
    caseL2e(bothCheckedGroup, "Swap FL and BR", [
      {
        case: "Rw U2 Rw2 U2 Rw' U2 Rw U2 Rw' U2 Rw2 U2 Rw",
      },
    ]),
    caseL2e(bothCheckedGroup, "Swap FR and BL", [
      {
        case: "Rw' U2 Rw2 U2 Rw U2 Rw' U2 Rw U2 Rw2 U2 Rw'",
      },
    ]),
  ],
};

const orientedCheckedGroup = "5x5-l2e-oriented-checked";

const orientedChecked: AlgorithmGroup = {
  id: orientedCheckedGroup,
  label: "One edge oriented, one checked",
  cases: [
    caseL2e(orientedCheckedGroup, "Single edge parity", [
      {
        case: "Rw U2 x Rw U2 Rw U2 3Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'",
      },
    ]),
    caseL2e(orientedCheckedGroup, "Swap middle", [
      { case: "Rw2 B2 Rw' U2 Rw' U2' x' U2 Rw' U2' Rw U2 Rw' U2' Rw2 U2 x" },
    ]),
    caseL2e(orientedCheckedGroup, "Swap FL and BR", [
      { case: "Rw' (U' R' U R' F R F') Rw" },
    ]),
    caseL2e(orientedCheckedGroup, "Swap FR and BL", [
      { case: "Lw (U' R' U R' F R F') Lw'" },
    ]),
  ],
};

const bothPartialGroup = "5x5-l2e-both-partial";

const bothPartial: AlgorithmGroup = {
  id: bothPartialGroup,
  label: "Both edges partially oriented",
  cases: [
    caseL2e(orientedCheckedGroup, "Double edge parity", [
      { case: "Rw' U2 Rw' U2 B2 Rw' B2 Rw' F2 Lw2 F2 Rw U2 Rw2" },
    ]),
    caseL2e(orientedCheckedGroup, "Swap FL and BL", [
      { case: "Rw U2 Rw U2' x U2 Rw U2' 3Rw' U2 Lw U2' Rw2" },
    ]),
    caseL2e(orientedCheckedGroup, "Swap FR and BR", [
      { case: "Lw' U2 Lw' U2 F2 Lw' F2 Rw U2 Rw' U2 Lw2" },
      { case: "y2 Rw U2 Rw U2' Rw U2' 3Rw' U2 Lw U2' Rw2" },
    ]),
  ],
};

export const groups = [bothOriented, bothChecked, orientedChecked, bothPartial];

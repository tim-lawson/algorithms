import { algorithmCase, size } from "@/app/5x5/utils";
import { Algorithm, AlgorithmGroup } from "@/types";
import { mask, rotations } from "@/utils";

const maskCenters = mask(size, {
  centers: true,
  edges: false,
  corners: false,
});

function caseL2c(
  group: string,
  label: string,
  algorithms: Omit<Algorithm, "id">[],
) {
  return algorithmCase(
    group,
    {
      U: maskCenters,
      R: maskCenters,
      F: maskCenters,
      D: maskCenters,
      L: maskCenters,
      B: maskCenters,
    },
    rotations.top,
  )(label, "x z", algorithms);
}

function groupId(value: string): string {
  return `5x5-l2c-${value}`;
}

const groupIds = {
  one: groupId("one"),
  twoBars: groupId("two-bars"),
  twoSplit: groupId("two-split"),
  three: groupId("three"),
};

const oneUnsolved: AlgorithmGroup = {
  id: groupIds.one,
  label: "One piece unsolved",
  cases: [
    caseL2c(groupIds.one, "Corner / r and L-shape", [
      { case: "(Rw U Rw') U (Rw U2' Rw')" },
    ]),
    caseL2c(groupIds.one, "Corner / L and r-shape", [
      { case: "(Rw U' Rw') U' (Rw U2' Rw')" },
    ]),
    caseL2c(groupIds.one, "Edge / C-shapes", [
      { case: "Rw U' (Rw Lw' x')' U Rw' U' (Rw Lw' x')" },
    ]),
  ],
};

const twoUnsolvedBars: AlgorithmGroup = {
  id: groupIds.twoBars,
  label: "Two pieces unsolved (bars)",
  cases: [
    caseL2c(groupIds.twoBars, "d and r-shape", [{ case: "(Rw U Rw')" }]),
    caseL2c(groupIds.twoBars, "q and r-shape", [
      { case: "(Rw U Rw') U' (Rw U' Rw')" },
    ]),
    caseL2c(groupIds.twoBars, "q and L-shape", [{ case: "(Rw U' Rw')" }]),
    caseL2c(groupIds.twoBars, "d and L-shape", [
      { case: "(Rw U' Rw') U (Rw U Rw')" },
    ]),
  ],
};

const twoSplit: AlgorithmGroup = {
  id: groupIds.twoSplit,
  label: "Two pieces unsolved (split)",
  cases: [
    caseL2c(groupIds.twoSplit, "LTR v and r-shape", [
      { case: "(Rw U' Rw') U' (Rw U' Rw')" },
    ]),
    caseL2c(groupIds.twoSplit, "RTL v and r-shape", [
      { case: "(Rw U2' Rw') U (Rw U2' Rw')" },
    ]),
    caseL2c(groupIds.twoSplit, "RTL n and L-shape", [
      { case: "(Rw U Rw') U (Rw U Rw')" },
    ]),
    caseL2c(groupIds.twoSplit, "LTR n and L-shape", [
      { case: "(Rw U2 Rw') U' (Rw U2 Rw')" },
    ]),
    caseL2c(groupIds.twoSplit, "D-shapes", [
      { case: "(Rw U' Rw' U) (Rw U' Rw' U) (Rw U' Rw')" },
    ]),
    caseL2c(groupIds.twoSplit, "L and D-shape", [
      { case: "(Rw U' Rw') U2 (Rw U' Rw')" },
    ]),
  ],
};

const three: AlgorithmGroup = {
  id: groupIds.three,
  label: "Three pieces unsolved",
  cases: [
    caseL2c(groupIds.three, "Line", [{ case: "(Rw U2 Rw')" }]),
    caseL2c(groupIds.three, "A-shape", [
      { case: "(Rw U2' Rw') U2 (Rw U' Rw')" },
    ]),
    caseL2c(groupIds.three, "b-shape", [{ case: "(Rw U Rw') U' (Rw U2 Rw')" }]),
    caseL2c(groupIds.three, "p-shape", [
      { case: "(Rw U' Rw') U (Rw U2' Rw')" },
    ]),
    caseL2c(groupIds.three, "q-shape", [{ case: "(Rw U' Rw') U (Rw U' Rw')" }]),
    caseL2c(groupIds.three, "d-shape", [{ case: "(Rw U Rw') U' (Rw U Rw')" }]),
  ],
};

export const groups = [oneUnsolved, twoUnsolvedBars, twoSplit, three];

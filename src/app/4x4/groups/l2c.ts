import { algorithmCase, masks } from "@/app/4x4/utils";
import { AlgorithmGroup } from "@/types";
import { rotations } from "@/utils";

const group = "l2c";

const caseL2c = algorithmCase(group, masks.centers, rotations.top);

export const l2c: AlgorithmGroup = {
  id: group,
  label: "Last two centers",
  cases: [
    caseL2c("Swap U and D", "x", ["Rw2 S2 Rw2 S2"]),
    caseL2c("Swap U and F", "x", ["Rw U2 Rw' Lw' U2 Lw"]),
    caseL2c("Bar left", "z x2", ["Rw U2 Rw'"]),
    caseL2c("L-shape", "z x2", ["Rw U' Rw'"]),
    caseL2c("R-shape", "z x2", ["Rw U Rw'"]),
    caseL2c("Backwards L-shape", "z' y", ["Lw' U Rw"]),
    caseL2c("Backwards R-shape", "z' y", ["Lw' U' Rw"]),
    caseL2c("Checkerboard top", "z x2", ["(Rw U' Rw') U (Rw U2 Rw')"]),
  ],
};

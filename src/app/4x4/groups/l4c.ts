import { algorithmCase, masks } from "@/app/4x4/utils";
import { AlgorithmGroup } from "@/types";
import { rotations } from "@/utils";

const group = "l4c";

const caseL4c = algorithmCase(group, masks.centersU, rotations.top);

const prefix = "x";

export const l4c: AlgorithmGroup = {
  id: group,
  label: "Last four centers",
  cases: [
    caseL4c("Bar", prefix, ["Rw U2 Rw'"]),
    caseL4c("L-shape", prefix, ["Rw U' Rw'"]),
    caseL4c("R-shape", prefix, ["Rw U Rw'"]),
  ],
};

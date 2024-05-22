import { algorithmCase, maskOnlyCenters, size } from "@/app/4x4/utils";
import { AlgorithmGroup } from "@/types";
import { mask, rotations } from "@/utils";

const group = "l2e";

export const l2e: AlgorithmGroup = {
  id: group,
  label: "Last two edges",
  cases: [
    algorithmCase(
      group,
      {
        U: maskOnlyCenters,
        R: mask(size, { centers: true, edges: [7, 11], corners: false }),
        F: mask(size, { centers: true, edges: [13, 14], corners: false }),
        D: mask(size, { centers: true, edges: [1, 2], corners: false }),
        L: maskOnlyCenters,
        B: mask(size, { centers: true, edges: [4, 8], corners: false }),
      },
      rotations.top,
    )("Front", "L y'", ["Uw' (R U R' F R' F' R) Uw"]),
    algorithmCase(
      "group",
      {
        U: mask(size, { centers: true, edges: [13, 14], corners: false }),
        R: mask(size, { centers: true, edges: [7, 11], corners: false }),
        F: mask(size, { centers: true, edges: [1, 2], corners: false }),
        D: maskOnlyCenters,
        L: maskOnlyCenters,
        B: mask(size, { centers: true, edges: [4, 8], corners: false }),
      },
      rotations.top,
    )("Top", "B'", ["Rw' (U' R' U R' F R F') Rw"]),
  ],
};

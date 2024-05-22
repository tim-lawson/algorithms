import { algorithmCase, masks } from "@/app/4x4/utils";
import { AlgorithmGroup, VisualizerType } from "@/types";

const group = "parity";

const type = VisualizerType.CUBE_TOP;

export const parity: AlgorithmGroup = {
  id: group,
  label: "Parity",
  cases: [
    algorithmCase(
      group,
      masks.U,
      undefined,
      type,
    )("OLL double", "", [
      "Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'",
    ]),
    algorithmCase(
      group,
      masks.U,
      undefined,
      type,
    )("OLL single", "", [
      "R U2 R' U' (Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw') F R' F' R",
    ]),
    algorithmCase(
      group,
      undefined,
      undefined,
      type,
    )("PLL opposite", "", ["Rw2 R2 U2 Rw2 R2 Uw2 Rw2 R2 Uw2 U2"]),
    algorithmCase(
      group,
      undefined,
      undefined,
      type,
    )("PLL adjacent", "", [
      "R' U R U' (Rw2 R2 U2 Rw2 R2 Uw2 Rw2 R2 Uw2) U' R' U' R",
    ]),
  ],
};

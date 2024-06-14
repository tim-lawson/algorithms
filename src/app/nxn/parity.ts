import { AlgorithmCase, VisualizerType } from "@/types";
import { createMaskNone, hash } from "@/utils";
import { Size } from "./utils";

export function parityProps(size: Size) {
  const alg = `(Rw U2 x Rw U2 Rw U2) ${size - 2}Rw' (U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw')`;

  const maskNone = createMaskNone(size);

  const first = {
    id: hash(alg),
    label: "OLL Parity",
    case: alg,
    mask: {
      // yellow
      R: maskNone, // red
      F: maskNone, // blue
      D: maskNone, // white
      L: maskNone, // orange
      B: maskNone, // green
    },
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
    case: alg,
  };
}

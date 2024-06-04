import { AlgorithmGroup } from "@/types";
import { algorithmCase } from "@/utils-3x3";

const casePll = algorithmCase("pll");

export const edges: AlgorithmGroup = {
  id: "edges",
  label: "Edges only",
  cases: [
    casePll("Ua", [
      {
        label: "Bar back, RU-gen",
        case: "(R U' R U) R U R U' R' U' R2",
      },
      {
        label: "Bar back, M-slice",
        case: "(M2' U) (M U2') M' U M2'",
      },
      {
        label: "Bar left, RUS-gen",
        case: "R2' U R2 S R2' S' U' R2",
      },
    ]),
    casePll("Ub", [
      {
        label: "Bar back, M-slice",
        case: "(M2' U') (M U2) M' U' M2'",
      },
      {
        label: "Bar back, RU-gen",
        case: "(R' U R' U') (R' U' R' U) R U R2",
      },
      {
        label: "Bar left, RUS-gen",
        case: "R2 U' S' U2' S U' R2",
      },
    ]),
    casePll("H", [
      {
        case: "(M2' U ) (M2' U2) M2' U M2'",
      },
    ]),
    casePll("Z", [
      {
        label: "M-slice",
        case: "M' U' (M2' U' M2' U') (M' U2 M2')",
      },
      {
        label: "S-slice",
        case: "S M2' S' u M2' u' M2'",
      },
    ]),
  ],
};

export const corners: AlgorithmGroup = {
  id: "pll-corners",
  label: "Corners only",
  cases: [
    casePll("Aa", [
      {
        label: "Headlights back, RUD-gen",
        case: "x (R' U R' D2) (R U' R' D2) R2 x'",
      },
    ]),
    casePll("Ab", [
      {
        label: "Headlights left, RUD-gen",
        case: "x R2' D2 (R U R' D2) (R U' R) x'",
      },
    ]),
    casePll("E", [
      {
        label: "RUD-gen",
        case: "x (R' U R D') (R' U' R D) (R' U' R D') (R' U R D) x'",
      },
    ]),
  ],
};

export const adjacent: AlgorithmGroup = {
  id: "adjacent",
  label: "Swap adjacent corners",
  cases: [
    casePll("Ra", [
      {
        label: "Headlights left / bar front",
        case: "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R')",
      },
    ]),
    casePll("Rb", [
      {
        label: "Headlights left / bar back",
        case: "(R2' F R U R U') (R' F' R U2') (R' U2 R)",
      },
      {
        label: "Headlights front / bar left",
        case: "(R' U2 R U2') R' F (R U R' U') R' F' R2",
      },
    ]),
    casePll("Ja", [
      {
        label: "Bar left",
        case: "x (R2' F R F' R U2') (r' U r U2') x'",
      },
      {
        label: "Bar back",
        case: "z U' R D' R2' U R' U' R2 U D z'",
      },
    ]),
    casePll("Jb", [
      {
        label: "Bar left",
        case: "(R U R' F') (R U R' U') (R' F R2 U' R')",
      },
      {
        label: "Bar front",
        case: "z U R' D R2 U' R U R2' U' D' z'",
      },
    ]),
    casePll("T", [
      {
        label: "RUF-gen",
        case: "(R U R' U') (R' F R2 U' R') U' (R U R' F')",
      },
    ]),
    casePll("F", [
      {
        label: "Bar front",
        case: "(R' U R U') (R2' F' U' F U) R F (R' F' R2)",
      },
      {
        label: "Bar left, wide",
        case: "(R' F R f') (R' F R2 U R' U') (R' F' R2 U R') S",
      },
    ]),
  ],
};

export const diagonal: AlgorithmGroup = {
  id: "diagonal",
  label: "Swap diagonal corners",
  cases: [
    casePll("V", [
      {
        label: "RUD-gen",
        case: "(R' U R' U') (R D' R' D) R' U D' (R2 U' R2' D R2)",
      },
      {
        label: "Wide",
        case: "(R' U R' d') (R' F' R2 U') (R' U R' F) R F",
      },
      {
        label: "Rotation",
        case: "(R' U R' U') y (R' F' R2 U') (R' U R' F) R F",
      },
    ]),
    casePll("Y", [
      {
        label: "RUF-gen",
        case: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
      },
    ]),
    casePll("Na", [
      {
        label: "Jb extension",
        case: "(R U R' U) (R U R' F') (R U R' U') (R' F R2 U' R') (U2 R U' R')",
      },
    ]),
    casePll("Nb", [
      {
        label: "RUF-gen",
        case: "(R' U R') (F R F') (R U' R') (F' U F) (R U R' U' R)",
      },
      {
        label: "Wide",
        case: "(r' D' F r U' r' F' D) (r2 U r' U' r' F r F')",
      },
    ]),
  ],
};

export const g: AlgorithmGroup = {
  id: "g-perms",
  label: "G-perms",
  cases: [
    casePll("Ga", [
      {
        label: "Headlights left / bar front, RUD-gen",
        case: "R2 U (R' U R' U') (R U' R2 U' D) (R' U R D')",
      },
    ]),
    casePll("Gb", [
      {
        label: "Headlights back / bar front, wide",
        case: "(F' U' F R2) u (R' U R U' R u') R2'",
      },
      {
        label: "Headlights left / bar right, RUD-gen",
        case: "D (R' U' R U) D' (R2 U R' U) R U' R U' R2",
      },
    ]),
    casePll("Gc", [
      {
        label: "Headlights left / bar back, wide",
        case: "(R2' u' R U') (R U R' u) (R2 f R' f')",
      },
      {
        label: "Headlights left / bar back, RUD-gen",
        case: "D R2 U' (R U' R U) R' U R2 (D' U) R U' R'",
      },
    ]),
    casePll("Gd", [
      {
        label: "Headlights left / bar right, RUD-gen",
        case: "(R U R' U' D) (R2 U' R U') (R' U R' U) R2 D'",
      },
    ]),
  ],
};

export const groups = [edges, corners, adjacent, diagonal, g];

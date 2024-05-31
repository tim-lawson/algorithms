import { AlgorithmGroup } from "@/types";
import { algorithmCase, masks } from "@/utils-3x3";

const caseOll: ReturnType<typeof algorithmCase> = (labels, algorithms) =>
  algorithmCase("oll", masks.oll)("OLL " + labels, algorithms);

export const ocll: AlgorithmGroup = {
  id: "ocll",
  label: "OCLL",
  cases: [
    caseOll(["21", "H"].join(" / "), [
      { case: "R U2 R' (U' R U R') U' R U' R'" },
    ]),
    caseOll(["22", "Pi"].join(" / "), [
      { case: "f (R U R' U') f' F (R U R' U') F'" },
      { case: "R U2' R2' U' R2 U' R2' U2' R" },
    ]),
    caseOll(["23", "U"].join(" / "), [
      { case: "R2 D (R' U2 R) D' (R' U2 R')" },
    ]),
    caseOll(["24", "T"].join(" / "), [{ case: "(r U R' U') (r' F R F')" }]),
    caseOll(["25", "L"].join(" / "), [{ case: "F' (r U R' U') r' F R" }]),
    caseOll(["26", "Antisune", "S+"].join(" / "), [
      { case: "R U2' R' U' R U' R'" },
    ]),
    caseOll(["27", "Sune", "S-"].join(" / "), [{ case: "R U R' U R U2' R'" }]),
  ],
};

export const t: AlgorithmGroup = {
  id: "t-shape",
  label: "T-shapes",
  cases: [
    caseOll("33", [{ case: "(R U R' U') (R' F R F')" }]),
    caseOll("45", [{ case: "F (R U R' U') F'" }]),
  ],
};

export const square: AlgorithmGroup = {
  id: "square",
  label: "Squares",
  cases: [
    caseOll(["5", "O+"].join(" / "), [{ case: "r' U2' R U R' U r" }]),
    caseOll(["6", "O-"].join(" / "), [{ case: "r U2 R' U' R U' r'" }]),
  ],
};

export const c: AlgorithmGroup = {
  id: "c-shape",
  label: "C-shapes",
  cases: [
    caseOll(["34", "C1"].join(" / "), [{ case: "(f R f' U') (r' U' R U M')" }]),
    caseOll(["46", "C3"].join(" / "), [{ case: "R' U' (R' F R F') U R" }]),
  ],
};

export const w: AlgorithmGroup = {
  id: "w-shape",
  label: "W-shapes",
  cases: [
    caseOll(["36", "W+"].join(" / "), [
      { case: "(R U R' U) (R U' R' U') (R' F R F')" },
    ]),
    caseOll(["38", "W-"].join(" / "), [
      { case: "(L' U' L U') (L' U L U) (L F' L' F)" },
    ]),
  ],
};

export const corners: AlgorithmGroup = {
  id: "oll-corners",
  label: "Corners oriented",
  cases: [
    caseOll(["28", "A"].join(" / "), [
      { case: "(r U R' U') M (U R U' R')" },
      { case: "(S' R U' R') (S R U R')" },
    ]),
    caseOll(["57", "B"].join(" / "), [{ case: "(R U R' U') M' (U R U' r')" }]),
  ],
};

export const p: AlgorithmGroup = {
  id: "p-shape",
  label: "P-shapes",
  cases: [
    caseOll(["31", "Q-"].join(" / "), [{ case: "R' U' (F U R U' R' F') R" }]),
    caseOll(["32", "Q+"].join(" / "), [{ case: "S (R U R' U') (R' F R f')" }]),
    caseOll(["43", "P-"].join(" / "), [{ case: "R' (U' F' U F) R" }]),
    caseOll(["44", "P+"].join(" / "), [{ case: "F (U R U' R') F'" }]),
  ],
};

export const i: AlgorithmGroup = {
  id: "i-shape",
  label: "I-shapes",
  cases: [
    caseOll(["51"].join(" / "), [{ case: "F (U R U' R') (U R U' R') F'" }]),
    caseOll(["52"].join(" / "), [{ case: "(R' F' U' F U') (R U R' U R)" }]),
    caseOll(["55"].join(" / "), [
      { case: "(R' F U R U') (R2' F' R2 U) R' U' R" },
    ]),
    caseOll(["56"].join(" / "), [
      { case: "x' R' D' (F' D F D') (R U' R' D) R U x" },
    ]),
  ],
};

export const fish: AlgorithmGroup = {
  id: "fish",
  label: "Fish",
  cases: [
    caseOll(["9", "Y-"].join(" / "), [
      {
        case: "(R U R' U') (R' F R2 U R' U' F')",
      },
    ]),
    caseOll(["10", "Y+"].join(" / "), [
      {
        case: "F U F' (R' F R U') R' F' R",
      },
    ]),
    caseOll(["35", "K1"].join(" / "), [
      {
        case: "(R U2' R2' F R F') R U2' R'",
      },
    ]),
    caseOll(["36", "K2"].join(" / "), [
      {
        case: "(F R' F' R) (U R U' R')",
      },
    ]),
  ],
};

export const knight: AlgorithmGroup = {
  id: "knight",
  label: "Knights",
  cases: [
    caseOll(["13", "J+"].join(" / "), [
      { case: "F U (R U' R2' F' R) (U R U' R')" },
      { case: "(r U' r') (U' r U r') y' (R' U R)" },
    ]),
    caseOll(["14", "J-"].join(" / "), [
      { case: "F' U' (L' U L2 F L') (U' L' U L)" },
      { case: "(R' F R) (U R' F' R) (F U' F')" },
    ]),
    caseOll(["15", "L+"].join(" / "), [
      { case: "(r' U' r) (R' U' R U) (r' U r)" },
      { case: "(r' U' M' U' R) (U r' U r)" },
    ]),
    caseOll(["16", "L-"].join(" / "), [
      { case: "(r U r') (R U R' U') (r U' r')" },
    ]),
  ],
};

export const awkward: AlgorithmGroup = {
  id: "awkward",
  label: "Awkward shapes",
  cases: [
    caseOll(["29", "F+"].join(" / "), [
      { case: "y (R U R' U') (R U' R') (F' U' F) (R U R')" },
      { case: "r2' D' (r U r' D) (r2 U' r' U' r)" },
    ]),
    caseOll(["30", "F-"].join(" / "), [
      { case: "y' F U (R U2 R' U') (R U2 R' U') F'" },
      { case: "r' D' (r U' r' D) (r2 U' r' U) r U r'" },
    ]),
    caseOll(["41", "G+"].join(" / "), [
      {
        label: "Front left corner",
        case: "(R U R' U R U2' R') F (R U R' U') F'",
      },
      { label: "Back right corner", case: "S' (F R U R' U' F') U S" },
    ]),
    caseOll(["42", "G-"].join(" / "), [
      {
        label: "Back left corner",
        case: "(R' U' R U' R' U2 R) F (R U R' U') F'",
      },
      { label: "Front right corner", case: "S U' (R' F' U' F U R) S'" },
    ]),
  ],
};

export const l: AlgorithmGroup = {
  id: "l-shape",
  label: "L-shapes",
  cases: [
    caseOll(["49", "V-"].join(" / "), [
      {
        label: "Lefty",
        case: "F (L' U' L U) (L' U' L U) F",
      },
      {
        label: "Rotation",
        case: "z F' (U' R' U R) (U' R' U R) F z'",
      },
    ]),
    caseOll(["48", "V+"].join(" / "), [
      { case: "F (R U R' U') (R U R' U') F'" },
    ]),
    caseOll(["49", "R+"].join(" / "), [{ case: "r U' r2' U r2 U r2' U' r" }]),
    caseOll(["50", "R-"].join(" / "), [{ case: "r' U r2 U' r2' U' r2 U r'" }]),
    caseOll(["53", "E+"].join(" / "), [
      { case: "(r U R' U) (R U' R' U) R U2' r'" },
    ]),
    caseOll(["54", "E-"].join(" / "), [
      { case: "(l' U' L U') (L' U L U') L' U2' l" },
    ]),
  ],
};

export const lightning: AlgorithmGroup = {
  id: "lightning",
  label: "Lightning bolts",
  cases: [
    caseOll(["7", "N+"].join(" / "), [{ case: "r U R' U R U2' r'" }]),
    caseOll(["8", "N-"].join(" / "), [
      { label: "Righty", case: "r' U' R U' R' U2 r" },
      { label: "Lefty", case: "l' U' L U' L' U2 l" },
    ]),
    caseOll(["11", " M+"].join(" / "), [
      { label: "M-slice", case: "M (R U R' U R U2' R') U M'" },
      { label: "Wide", case: "r' (R2 U R' U R U2 R') U M'" },
    ]),
    caseOll(["12", "M-"].join(" / "), [
      { case: "M' (R' U' R U' R' U2 R U' r' R)" },
    ]),
    caseOll(["39", "Z-"].join(" / "), [{ case: "L F' (L' U' L U) F U' L'" }]),
    caseOll(["40", "Z+"].join(" / "), [
      { label: "RUF-gen", case: "R' F (R U R' U') F' U R" },
      { label: "Wide", case: "f (R' F' R U) (R U' R' S')" },
    ]),
  ],
};

export const dots: AlgorithmGroup = {
  id: "dots",
  label: "Dots",
  cases: [
    caseOll(["1", "DH"].join(" / "), [
      {
        case: "R U2' (R2' F R F') U2' (R' F R F')",
      },
    ]),
    caseOll(["2", "DPi"].join(" / "), [
      {
        label: "RUF-gen",
        case: "F (R U R' U') F' f (R U R' U') f'",
      },
      {
        label: "Wide",
        case: "(R U' R2' D') (r U r' D) R2 U R'",
      },
    ]),
    caseOll(["3", "DS+ L"].join(" / "), [
      {
        case: "M R U R' U r U2' r' U M'",
      },
    ]),
    caseOll(["3", "DS+ R"].join(" / "), [
      {
        case: "f (R U R' U') f' U' F (R U R' U') F'",
      },
    ]),
    caseOll(["4", "DS- F"].join(" / "), [
      {
        case: "(R' F R F') U' S R' U' R U R S'",
      },
    ]),
    caseOll(["4", "DS- B"].join(" / "), [
      {
        case: "f (R U R' U') f' U F (R U R' U') F'",
      },
    ]),
    caseOll(["17", "DL F"].join(" / "), [
      {
        case: "(F R' F' R) (U S' R U' R' S)",
      },
    ]),
    caseOll(["18", "DT"].join(" / "), [
      {
        label: "Rotation",
        case: "y R U2' (R2' F R F') U2' M' (U R U' r')",
      },
      {
        label: "Wide",
        case: "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
      },
    ]),
    caseOll(["19", "DU"].join(" / "), [
      {
        label: "M-slice",
        case: "M U (R U R' U') M' (R' F R F')",
      },
      {
        label: "S-slice",
        case: "(S' R U R' S U') (R' F R F')",
      },
    ]),
    caseOll(["20", "X"].join(" / "), [
      {
        label: "M-slice",
        case: "M U (R U R' U') M2' (U R U' r')",
      },
      {
        label: "S-slice",
        case: "S (R' U' R U) (R U R U' R') S'",
      },
    ]),
  ],
};

export const groups = [
  ocll,
  t,
  square,
  c,
  w,
  corners,
  p,
  i,
  fish,
  knight,
  awkward,
  l,
  lightning,
  dots,
];

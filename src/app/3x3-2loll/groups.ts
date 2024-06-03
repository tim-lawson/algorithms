import { AlgorithmGroup } from "@/types";
import { algorithmCase, masks } from "@/utils-3x3";

const caseEoll = algorithmCase("eoll", masks.eoll);

export const eoll: AlgorithmGroup = {
  id: "eoll",
  label: "EOLL",
  cases: [
    caseEoll("Line", [{ case: "F (U R U' R') F'" }]),
    caseEoll("L-shape", [{ case: "F (R U R' U') F'" }]),
    caseEoll("Dot", [
      { case: "F (R U R' U') F' U2 F (U R U' R') F'" },
      { case: "R U2 (R2' F R F') U2 (R' F R F')" },
    ]),
  ],
};

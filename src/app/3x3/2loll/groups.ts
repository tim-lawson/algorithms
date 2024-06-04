import { algorithmCase, masks } from "@/app/3x3/utils";
import { AlgorithmGroup } from "@/types";

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

import type { CubeOptions } from "sr-puzzlegen";
import { z } from "zod";

export enum VisualizerType {
  CUBE = "cube",
  CUBE_NET = "cube-net",
  CUBE_TOP = "cube-top",
  MEGAMINX = "megaminx",
  MEGAMINX_NET = "megaminx-net",
  MEGAMINX_TOP = "megaminx-top",
  PYRAMINX = "pyraminx",
  PYRAMINX_NET = "pyraminx-net",
  SKEWB = "skewb",
  SKEWB_NET = "skewb-net",
  SQUARE1 = "square1",
  SQUARE1_NET = "square1-net",
}

export const MaskSchema: z.ZodType<CubeOptions["mask"]> = z.object({
  U: z.array(z.number()),
  R: z.array(z.number()),
  F: z.array(z.number()),
  D: z.array(z.number()),
  L: z.array(z.number()),
  B: z.array(z.number()),
});

export type Mask = z.infer<typeof MaskSchema>;

export const RotationsSchema: z.ZodType<CubeOptions["rotations"]> = z.array(
  z.object({
    x: z.number().optional(),
    y: z.number().optional(),
    z: z.number().optional(),
  }),
);

export type Rotations = z.infer<typeof RotationsSchema>;

export const AlgorithmSchema = z.object({
  id: z.string(),
  label: z.string().optional(),
  description: z.string().optional(),
  case: z.string(),
  casePrefix: z.string().optional(),
  mask: MaskSchema.optional(),
  rotations: RotationsSchema.optional(),
});

export type Algorithm = z.infer<typeof AlgorithmSchema>;

export const AlgorithmCaseSchema = z.object({
  id: z.string(),
  label: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.string().optional(),
  type: z.nativeEnum(VisualizerType).optional(),
  algorithms: z.array(AlgorithmSchema),
});

export type AlgorithmCase = z.infer<typeof AlgorithmCaseSchema>;

export const AlgorithmGroupSchema = z.object({
  id: z.string(),
  label: z.string(),
  cases: z.array(AlgorithmCaseSchema),
});

export type AlgorithmGroup = z.infer<typeof AlgorithmGroupSchema>;

export const PageDataSchema = z.object({
  id: z.string(),
  label: z.string(),
  size: z.number(),
  groups: z.array(AlgorithmGroupSchema),
});

export type PageData = z.infer<typeof PageDataSchema>;

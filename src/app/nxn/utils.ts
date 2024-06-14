import { Algorithm, AlgorithmCase, VisualizerType } from "@/types";

export const sizes = [4, 5, 6, 7] as const;

export type Size = (typeof sizes)[number];

export function nxn(size: Size): string {
  return `${size}x${size}`;
}

export function createAlgorithm(
  algorithm: Algorithm,
  type = VisualizerType.CUBE,
): AlgorithmCase {
  return {
    id: algorithm.id,
    algorithms: [algorithm],
    type,
  };
}

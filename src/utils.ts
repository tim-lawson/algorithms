import { Alg } from "cubing/alg";

export const HEIGHT = 72;
export const WIDTH = 72;

export function hash(value: string): string {
  return btoa(value.replace(/[\(\)]/g, "")).replace(/=/g, "");
}

interface MaskOptions {
  centers?: boolean | number[];
  edges?: boolean | number[];
  corners?: boolean | [number, number, number, number];
}

// TODO: refactor
export function mask(size: number, options: MaskOptions = {}): number[] {
  const indices = Array.from({ length: size ** 2 }).map((_, i) => i);

  let mask: number[] = [];

  const centers = indices.filter((i) => {
    const col = i % size;
    const row = Math.floor(i / size);
    return col % (size - 1) !== 0 && row % (size - 1) !== 0;
  });

  if (options.centers !== undefined) {
    mask.push(
      ...centers.filter((i) => {
        if (options.centers === true) {
          return false;
        }
        if (Array.isArray(options.centers)) {
          return !options.centers.includes(i);
        }
        return true;
      }),
    );
  }

  const edges = indices.filter((i) => {
    const col = i % size;
    const row = Math.floor(i / size);
    return col % (size - 1) === 0 || row % (size - 1) === 0;
  });

  if (options.edges !== undefined) {
    mask.push(
      ...edges.filter((i) => {
        if (options.edges === true) {
          return false;
        }
        if (Array.isArray(options.edges)) {
          return !options.edges.includes(i);
        }
        return true;
      }),
    );
  }

  const corners = indices.filter((i) => {
    const col = i % size;
    const row = Math.floor(i / size);
    return col % (size - 1) === 0 && row % (size - 1) === 0;
  });

  if (options.corners !== undefined) {
    mask.push(
      ...corners.filter((i) => {
        if (options.corners === true) {
          return false;
        }
        if (Array.isArray(options.corners)) {
          return !options.corners.includes(i);
        }
        return true;
      }),
    );
  }

  return mask;
}

export function createMaskNone(size: number): number[] {
  return mask(size, { centers: false, edges: false, corners: false });
}

export function createMaskOnlyCenters(size: number): number[] {
  return mask(size, { centers: true, edges: false, corners: false });
}

export const rotations = {
  default: [{ x: 43, y: 35, z: 29 }],
  top: [{ x: 90, y: 50, z: 90 }],
};

// this is an annoying hack
export function replaceInnerSlices(algorithm: string) {
  return algorithm
    .replace(/Uw2 U2/g, "u2")
    .replace(/Rw2 R2/g, "r2")
    .replace(/Fw2 F2/g, "f2")
    .replace(/Dw2 D2/g, "d2")
    .replace(/Lw2 L2/g, "l2")
    .replace(/Bw2 B2/g, "b2");
}

export function countHtm(algorithm: string): number {
  return Alg.fromString(replaceInnerSlices(algorithm))
    .expand()
    .experimentalNumChildAlgNodes();
}

export interface Threshold {
  value: number;
  className: string;
}

export function color(thresholds: Threshold[]) {
  return function (value: number) {
    for (const { value: threshold, className } of thresholds) {
      if (value <= threshold) {
        return className;
      }
    }
    return "";
  };
}

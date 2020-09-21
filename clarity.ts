/* This is free and unencumbered software released into the public domain. */

export function requireVersion(version: string): void {
  // TODO: throw an error if the version isn't supported
}

export function requireFeature(feature: string): void {
  // TODO: throw an error if the version isn't supported
}

export function hash160(value: number | string | ArrayBuffer): ArrayBuffer {
  return new ArrayBuffer(20); // TODO
}

export function keccak256(value: number | string | ArrayBuffer): ArrayBuffer {
  return new ArrayBuffer(32); // TODO
}

export function sha256(value: number | string | ArrayBuffer): ArrayBuffer {
  return new ArrayBuffer(32); // TODO
}

export function sha512(value: number | string | ArrayBuffer): ArrayBuffer {
  return new ArrayBuffer(64); // TODO
}

export function sha512_256(value: number | string | ArrayBuffer): ArrayBuffer {
  return new ArrayBuffer(32); // TODO
}

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export function notImplemented(msg: string) {
  console.log(`${msg} is not implemented.`)
}

// TODO: import { deepFreeze } from '@osd/std';
export type Freezable = { [k: string]: any } | any[];

/**
 * Apply Object.freeze to a value recursively and convert the return type to
 * Readonly variant recursively
 */
export function deepFreeze<T extends Freezable>(object: T) {
  // for any properties that reference an object, makes sure that object is
  // recursively frozen as well
  for (const value of Object.values(object)) {
    if (value !== null && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object) as RecursiveReadonly<T>;
}

// TODO: import { RecursiveReadonly } from '@osd/utility-types';
// If we define this inside RecursiveReadonly TypeScript complains.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecursiveReadonlyArray<T> extends ReadonlyArray<RecursiveReadonly<T>> {}

export type RecursiveReadonly<T> = T extends (...args: any) => any
  ? T
  : T extends any[]
  ? RecursiveReadonlyArray<T[number]>
  : T extends object
  ? Readonly<{ [K in keyof T]: RecursiveReadonly<T[K]> }>
  : T;
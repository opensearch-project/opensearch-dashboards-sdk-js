/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IncomingHttpHeaders } from 'http';

/**
 * Creates a Union type of all known keys of a given interface.
 * @example
 * ```ts
 * interface Person {
 *   name: string;
 *   age: number;
 *   [attributes: string]: string | number;
 * }
 * type PersonKnownKeys = KnownKeys<Person>; // "age" | "name"
 * ```
 */
type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

/**
 * Set of well-known HTTP headers.
 * @public
 */
export type KnownHeaders = KnownKeys<IncomingHttpHeaders>;

/**
 * Http request headers to read.
 * @public
 */
export type Headers = { [header in KnownHeaders]?: string | string[] | undefined } & {
  [header: string]: string | string[] | undefined;
};

/**
 * Http response headers to set.
 * @public
 */
export type ResponseHeaders =
  | Record<KnownHeaders, string | string[]>
  | Record<string, string | string[]>;

const normalizeHeaderField = (field: string) => field.trim().toLowerCase();

export function filterHeaders(
  headers: Headers,
  fieldsToKeep: string[],
  fieldsToExclude: string[] = []
) {
  const fieldsToExcludeNormalized = fieldsToExclude.map(normalizeHeaderField);
  // Normalize list of headers we want to allow in upstream request
  const fieldsToKeepNormalized = fieldsToKeep
    .map(normalizeHeaderField)
    .filter((name) => !fieldsToExcludeNormalized.includes(name));

  return pick(headers, fieldsToKeepNormalized);
}


// import { pick } from '@osd/std';
function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {} as Pick<T, K>);
}

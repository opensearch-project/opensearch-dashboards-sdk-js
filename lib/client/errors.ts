/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResponseError } from '@opensearch-project/opensearch/lib/errors';

export type UnauthorizedError = ResponseError & {
  statusCode: 401;
};

export function isResponseError(error: any): error is ResponseError {
  return Boolean(error.body && error.statusCode && error.headers);
}

export function isUnauthorizedError(error: any): error is UnauthorizedError {
  return isResponseError(error) && error.statusCode === 401;
}

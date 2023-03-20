/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Request, RouteOptionsApp, RequestApplicationState } from '@hapi/hapi';
import { RouteMethod, RouteConfigOptions, validBodyOutput, isSafeMethod } from './route';

export class OpenSearchDashboardsRequest<
  Params = unknown,
  Query = unknown,
  Body = unknown,
  Method extends RouteMethod = any
> {
  /**
   * Factory for creating requests. Validates the request before creating an
   * instance of a OpenSearchDashboardsRequest.
   * @internal
   */
  public static from<P, Q, B>(
    req: Request,
    routeSchemas: RouteValidator<P, Q, B> | RouteValidatorFullConfig<P, Q, B> = {},
    withoutSecretHeaders: boolean = true
  ) {
    const routeValidator = RouteValidator.from<P, Q, B>(routeSchemas);
    const requestParts = OpenSearchDashboardsRequest.validate(req, routeValidator);
    return new OpenSearchDashboardsRequest(
      req,
      requestParts.params,
      requestParts.query,
      requestParts.body,
      withoutSecretHeaders
    );
  }

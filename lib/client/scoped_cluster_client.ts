/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OpenSearchClient } from './types';

/**
 * Serves the same purpose as the normal {@link IClusterClient | cluster client} but exposes
 * an additional `asCurrentUser` method that doesn't use credentials of the OpenSearch Dashboards internal
 * user (as `asInternalUser` does) to request OpenSearch API, but rather passes HTTP headers
 * extracted from the current user request to the API instead.
 *
 * @public
 **/
export interface IScopedClusterClient {
  /**
   * A {@link OpenSearchClient | client} to be used to query the opensearch cluster
   * on behalf of the internal OpenSearch Dashboards user.
   */
  readonly asInternalUser: OpenSearchClient;
  /**
   * A {@link OpenSearchClient | client} to be used to query the opensearch cluster
   * on behalf of the user that initiated the request to the OpenSearch Dashboards server.
   */
  readonly asCurrentUser: OpenSearchClient;
}

/** @internal **/
export class ScopedClusterClient implements IScopedClusterClient {
  constructor(
    public readonly asInternalUser: OpenSearchClient,
    public readonly asCurrentUser: OpenSearchClient
  ) {}
}

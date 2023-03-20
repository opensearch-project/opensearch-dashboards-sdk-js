/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { OpenSearchDashboardsClient } from '@opensearch-project/opensearch/api/opensearch_dashboards';
import type {
  ApiResponse,
  TransportRequestOptions,
  TransportRequestParams,
  TransportRequestPromise,
} from '@opensearch-project/opensearch/lib/Transport';

/**
 * Client used to query the opensearch cluster.
 *
 * @public
 */
export type OpenSearchClient = Omit<
  OpenSearchDashboardsClient,
  'connectionPool' | 'transport' | 'serializer' | 'extend' | 'child' | 'close'
> & {
  transport: {
    request(
      params: TransportRequestParams,
      options?: TransportRequestOptions
    ): TransportRequestPromise<ApiResponse>;
  };
};

/**
 * All response typings are maintained until elasticsearch-js provides them out of the box
 * https://github.com/elastic/elasticsearch-js/pull/970
 */

/**
 * @public
 */
export interface ShardsResponse {
  total: number;
  successful: number;
  failed: number;
  skipped: number;
}

/**
 * @public
 */
export interface Explanation {
  value: number;
  description: string;
  details: Explanation[];
}

/**
 * @public
 */
export interface ShardsInfo {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

/**
 * @public
 */
export interface CountResponse {
  _shards: ShardsInfo;
  count: number;
}

/**
 * @public
 */
export interface SearchResponse<T = unknown> {
  took: number;
  timed_out: boolean;
  _scroll_id?: string;
  _shards: ShardsResponse;
  hits: {
    total: number;
    max_score: number;
    hits: Array<{
      _index: string;
      _type: string;
      _id: string;
      _score: number;
      _source: T;
      _version?: number;
      _explanation?: Explanation;
      fields?: any;
      highlight?: any;
      inner_hits?: any;
      matched_queries?: string[];
      sort?: string[];
    }>;
  };
  aggregations?: any;
}

/**
 * @public
 */
export interface GetResponse<T> {
  _index: string;
  _type: string;
  _id: string;
  _version: number;
  _routing?: string;
  found: boolean;
  _source: T;
  _seq_no: number;
  _primary_term: number;
}

/**
 * @public
 */
export interface DeleteDocumentResponse {
  _shards: ShardsResponse;
  found: boolean;
  _index: string;
  _type: string;
  _id: string;
  _version: number;
  result: string;
  error?: {
    type: string;
  };
}

/**
 A user credentials container.
 * It accommodates the necessary auth credentials to impersonate the current user.
 *
 * @public
 * See {@link OpenSearchDashboardsRequest}.
 */
 export type ScopeableRequest = OpenSearchDashboardsRequest | LegacyRequest | FakeRequest;

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

var deepFreeze = require('./utils');

export const DEFAULT_HEADERS = deepFreeze({
  // OpenSearch uses this to identify when a request is coming from OpenSearch Dashboards, to allow OpenSearch Dashboards to
  // access system indices using the standard OpenSearch APIs without logging a warning. After migrating to
  // use the new system index APIs, this header can be removed.
  'x-opensearch-product-origin': 'opensearch-dashboards',
});




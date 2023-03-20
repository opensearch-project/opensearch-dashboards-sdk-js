/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Client } from '@opensearch-project/opensearch';

import { parseClientOptions, OpenSearchClientConfig } from './client_config';
import { notImplemented } from '../utils';

export const configureClient = (
  config: OpenSearchClientConfig,
  { logger, scoped = false }: { logger: any; scoped?: boolean }
): Client => {
  const clientOptions = parseClientOptions(config, scoped);

  const client = new Client(clientOptions);
  if (logger) {
    notImplemented('logger');
  }

  return client;
};

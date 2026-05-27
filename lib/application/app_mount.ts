/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ScopedHistory } from './scoped_history';
import type { AppLeaveHandler } from './app_leave';
import type { MountPoint } from '../mount/mount_point';

/**
 * A mount function called when the user navigates to this app's route.
 *
 * @param params {@link AppMountParameters}
 * @returns An unmounting function that will be called to unmount the application. See {@link AppUnmount}.
 *
 * @public
 */
export type AppMount<HistoryLocationState = unknown> = (
  params: AppMountParameters<HistoryLocationState>
) => AppUnmount | Promise<AppUnmount>;

/**
 * A function called when an application should be unmounted from the page. This function should be synchronous.
 * @public
 */
export type AppUnmount = () => void;

/** @public */
export interface AppMountParameters<HistoryLocationState = unknown> {
  /**
   * The container element to render the application into.
   */
  element: HTMLElement;

  /**
   * A scoped history instance for your application. Should be used to wire up
   * your applications Router.
   *
   * @example
   * How to configure react-router with a base path:
   *
   * ```ts
   * // inside your plugin's setup function
   * export class MyPlugin implements Plugin {
   *   setup({ application }) {
   *     application.register({
   *      id: 'my-app',
   *      appRoute: '/my-app',
   *      async mount(params) {
   *        const { renderApp } = await import('./application');
   *        return renderApp(params);
   *      },
   *    });
   *  }
   * }
   * ```
   *
   * ```ts
   * // application.tsx
   * import React from 'react';
   * import ReactDOM from 'react-dom';
   * import { Router, Route } from 'react-router-dom';
   *
   * import { CoreStart, AppMountParameters } from 'src/core/public';
   * import { MyPluginDepsStart } from './plugin';
   *
   * export renderApp = ({ element, history }: AppMountParameters) => {
   *   ReactDOM.render(
   *     <Router history={history}>
   *       <Route path="/" exact component={HomePage} />
   *     </Router>,
   *     element
   *   );
   *
   *   return () => ReactDOM.unmountComponentAtNode(element);
   * }
   * ```
   */
  history: ScopedHistory<HistoryLocationState>;

  /**
   * The route path for configuring navigation to the application.
   * This string should not include the base path from HTTP.
   *
   * @deprecated Use {@link AppMountParameters.history} instead.
   *
   * @example
   *
   * How to configure react-router with a base path:
   *
   * ```ts
   * // inside your plugin's setup function
   * export class MyPlugin implements Plugin {
   *   setup({ application }) {
   *     application.register({
   *      id: 'my-app',
   *      appRoute: '/my-app',
   *      async mount(params) {
   *        const { renderApp } = await import('./application');
   *        return renderApp(params);
   *      },
   *    });
   *  }
   * }
   * ```
   *
   * ```ts
   * // application.tsx
   * import React from 'react';
   * import ReactDOM from 'react-dom';
   * import { BrowserRouter, Route } from 'react-router-dom';
   *
   * import { CoreStart, AppMountParameters } from 'src/core/public';
   * import { MyPluginDepsStart } from './plugin';
   *
   * export renderApp = ({ appBasePath, element }: AppMountParameters) => {
   *   ReactDOM.render(
   *     // pass `appBasePath` to `basename`
   *     <BrowserRouter basename={appBasePath}>
   *       <Route path="/" exact component={HomePage} />
   *     </BrowserRouter>,
   *     element
   *   );
   *
   *   return () => ReactDOM.unmountComponentAtNode(element);
   * }
   * ```
   */
  appBasePath: string;

  /**
   * A function that can be used to register a handler that will be called
   * when the user is leaving the current application, allowing to
   * prompt a confirmation message before actually changing the page.
   *
   * This will be called either when the user goes to another application, or when
   * trying to close the tab or manually changing the url.
   *
   * @example
   *
   * ```ts
   * // application.tsx
   * import React from 'react';
   * import ReactDOM from 'react-dom';
   * import { BrowserRouter, Route } from 'react-router-dom';
   *
   * import { CoreStart, AppMountParameters } from 'src/core/public';
   * import { MyPluginDepsStart } from './plugin';
   *
   * export renderApp = ({ element, history, onAppLeave }: AppMountParameters) => {
   *    const { renderApp, hasUnsavedChanges } = await import('./application');
   *    onAppLeave(actions => {
   *      if(hasUnsavedChanges()) {
   *        return actions.confirm('Some changes were not saved. Are you sure you want to leave?');
   *      }
   *      return actions.default();
   *    });
   *    return renderApp({ element, history });
   * }
   * ```
   */
  onAppLeave: (handler: AppLeaveHandler) => void;

  /**
   * A function that can be used to set the mount point used to populate the application action container
   * in the chrome header.
   *
   * Calling the handler multiple time will erase the current content of the action menu with the mount from the latest call.
   * Calling the handler with `undefined` will unmount the current mount point.
   * Calling the handler after the application has been unmounted will have no effect.
   *
   * @example
   *
   * ```ts
   * // application.tsx
   * import React from 'react';
   * import ReactDOM from 'react-dom';
   * import { BrowserRouter, Route } from 'react-router-dom';
   *
   * import { CoreStart, AppMountParameters } from 'src/core/public';
   * import { MyPluginDepsStart } from './plugin';
   *
   * export renderApp = ({ element, history, setHeaderActionMenu }: AppMountParameters) => {
   *    const { renderApp } = await import('./application');
   *    const { renderActionMenu } = await import('./action_menu');
   *    setHeaderActionMenu((element) => {
   *      return renderActionMenu(element);
   *    })
   *    return renderApp({ element, history });
   * }
   * ```
   */
  setHeaderActionMenu: (menuMount: MountPoint | undefined) => void;
  /**
   * Optional datasource id to pass while mounting app
   */
  dataSourceId?: string;
}

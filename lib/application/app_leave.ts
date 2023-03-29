/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A handler that will be executed before leaving the application, either when
 * going to another application or when closing the browser tab or manually changing
 * the url.
 * Should return `confirm` to to prompt a message to the user before leaving the page, or `default`
 * to keep the default behavior (doing nothing).
 *
 * See {@link AppMountParameters} for detailed usage examples.
 *
 * @public
 */
export type AppLeaveHandler = (factory: AppLeaveActionFactory) => AppLeaveAction;

/**
 * Possible type of actions on application leave.
 *
 * @public
 */
export enum AppLeaveActionType {
  confirm = 'confirm',
  default = 'default',
}

/**
 * Action to return from a {@link AppLeaveHandler} to execute the default
 * behaviour when leaving the application.
 *
 * See {@link AppLeaveActionFactory}
 *
 * @public
 */
export interface AppLeaveDefaultAction {
  type: AppLeaveActionType.default;
}

/**
 * Action to return from a {@link AppLeaveHandler} to show a confirmation
 * message when trying to leave an application.
 *
 * See {@link AppLeaveActionFactory}
 *
 * @public
 */
export interface AppLeaveConfirmAction {
  type: AppLeaveActionType.confirm;
  text: string;
  title?: string;
}

/**
 * Possible actions to return from a {@link AppLeaveHandler}
 *
 * See {@link AppLeaveConfirmAction} and {@link AppLeaveDefaultAction}
 *
 * @public
 * */
export type AppLeaveAction = AppLeaveDefaultAction | AppLeaveConfirmAction;

/**
 * Factory provided when invoking a {@link AppLeaveHandler} to retrieve the {@link AppLeaveAction} to execute.
 */
export interface AppLeaveActionFactory {
  /**
   * Returns a confirm action, resulting on prompting a message to the user before leaving the
   * application, allowing him to choose if he wants to stay on the app or confirm that he
   * wants to leave.
   *
   * @param text The text to display in the confirmation message
   * @param title (optional) title to display in the confirmation message
   */
  confirm(text: string, title?: string): AppLeaveConfirmAction;
  /**
   * Returns a default action, resulting on executing the default behavior when
   * the user tries to leave an application
   */
  default(): AppLeaveDefaultAction;
}
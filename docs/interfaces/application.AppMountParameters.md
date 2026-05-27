[@opensearch-project/opensearch-dashboards-sdk](../README.md) / [Modules](../modules.md) / [application](../modules/application.md) / AppMountParameters

# Interface: AppMountParameters<HistoryLocationState\>

[application](../modules/application.md).AppMountParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `HistoryLocationState` | `unknown` |

## Table of contents

### Properties

- [appBasePath](application.AppMountParameters.md#appbasepath)
- [dataSourceId](application.AppMountParameters.md#datasourceid)
- [element](application.AppMountParameters.md#element)
- [history](application.AppMountParameters.md#history)
- [onAppLeave](application.AppMountParameters.md#onappleave)
- [setHeaderActionMenu](application.AppMountParameters.md#setheaderactionmenu)

## Properties

### appBasePath

• **appBasePath**: `string`

The route path for configuring navigation to the application.
This string should not include the base path from HTTP.

**`Deprecated`**

Use [history](application.AppMountParameters.md#history) instead.

**`Example`**

How to configure react-router with a base path:

```ts
// inside your plugin's setup function
export class MyPlugin implements Plugin {
  setup({ application }) {
    application.register({
     id: 'my-app',
     appRoute: '/my-app',
     async mount(params) {
       const { renderApp } = await import('./application');
       return renderApp(params);
     },
   });
 }
}
```

```ts
// application.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { CoreStart, AppMountParameters } from 'src/core/public';
import { MyPluginDepsStart } from './plugin';

export renderApp = ({ appBasePath, element }: AppMountParameters) => {
  ReactDOM.render(
    // pass `appBasePath` to `basename`
    <BrowserRouter basename={appBasePath}>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
}
```

#### Defined in

[application/app_mount.ts:129](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L129)

___

### dataSourceId

• `Optional` **dataSourceId**: `string`

Optional datasource id to pass while mounting app

#### Defined in

[application/app_mount.ts:197](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L197)

___

### element

• **element**: `HTMLElement`

The container element to render the application into.

#### Defined in

[application/app_mount.ts:33](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L33)

___

### history

• **history**: [`ScopedHistory`](application.ScopedHistory.md)<`HistoryLocationState`\>

A scoped history instance for your application. Should be used to wire up
your applications Router.

**`Example`**

How to configure react-router with a base path:

```ts
// inside your plugin's setup function
export class MyPlugin implements Plugin {
  setup({ application }) {
    application.register({
     id: 'my-app',
     appRoute: '/my-app',
     async mount(params) {
       const { renderApp } = await import('./application');
       return renderApp(params);
     },
   });
 }
}
```

```ts
// application.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import { CoreStart, AppMountParameters } from 'src/core/public';
import { MyPluginDepsStart } from './plugin';

export renderApp = ({ element, history }: AppMountParameters) => {
  ReactDOM.render(
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
    </Router>,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
}
```

#### Defined in

[application/app_mount.ts:79](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L79)

___

### onAppLeave

• **onAppLeave**: (`handler`: [`AppLeaveHandler`](../modules/application.md#appleavehandler)) => `void`

#### Type declaration

▸ (`handler`): `void`

A function that can be used to register a handler that will be called
when the user is leaving the current application, allowing to
prompt a confirmation message before actually changing the page.

This will be called either when the user goes to another application, or when
trying to close the tab or manually changing the url.

**`Example`**

```ts
// application.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { CoreStart, AppMountParameters } from 'src/core/public';
import { MyPluginDepsStart } from './plugin';

export renderApp = ({ element, history, onAppLeave }: AppMountParameters) => {
   const { renderApp, hasUnsavedChanges } = await import('./application');
   onAppLeave(actions => {
     if(hasUnsavedChanges()) {
       return actions.confirm('Some changes were not saved. Are you sure you want to leave?');
     }
     return actions.default();
   });
   return renderApp({ element, history });
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`AppLeaveHandler`](../modules/application.md#appleavehandler) |

##### Returns

`void`

#### Defined in

[application/app_mount.ts:162](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L162)

___

### setHeaderActionMenu

• **setHeaderActionMenu**: (`menuMount`: `undefined` \| [`MountPoint`](../modules/mount.md#mountpoint)<`HTMLElement`\>) => `void`

#### Type declaration

▸ (`menuMount`): `void`

A function that can be used to set the mount point used to populate the application action container
in the chrome header.

Calling the handler multiple time will erase the current content of the action menu with the mount from the latest call.
Calling the handler with `undefined` will unmount the current mount point.
Calling the handler after the application has been unmounted will have no effect.

**`Example`**

```ts
// application.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { CoreStart, AppMountParameters } from 'src/core/public';
import { MyPluginDepsStart } from './plugin';

export renderApp = ({ element, history, setHeaderActionMenu }: AppMountParameters) => {
   const { renderApp } = await import('./application');
   const { renderActionMenu } = await import('./action_menu');
   setHeaderActionMenu((element) => {
     return renderActionMenu(element);
   })
   return renderApp({ element, history });
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `menuMount` | `undefined` \| [`MountPoint`](../modules/mount.md#mountpoint)<`HTMLElement`\> |

##### Returns

`void`

#### Defined in

[application/app_mount.ts:193](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L193)

[@opensearch-project/opensearch-dashboards-sdk](../README.md) / [Modules](../modules.md) / application

# Module: application

## Table of contents

### Interfaces

- [AppLeaveActionFactory](../interfaces/application.AppLeaveActionFactory.md)
- [AppLeaveConfirmAction](../interfaces/application.AppLeaveConfirmAction.md)
- [AppLeaveDefaultAction](../interfaces/application.AppLeaveDefaultAction.md)
- [AppMountParameters](../interfaces/application.AppMountParameters.md)
- [ScopedHistory](../interfaces/application.ScopedHistory.md)

### Type Aliases

- [AppLeaveAction](application.md#appleaveaction)
- [AppLeaveHandler](application.md#appleavehandler)
- [AppMount](application.md#appmount)
- [AppUnmount](application.md#appunmount)

## Type Aliases

### AppLeaveAction

Ƭ **AppLeaveAction**: [`AppLeaveDefaultAction`](../interfaces/application.AppLeaveDefaultAction.md) \| [`AppLeaveConfirmAction`](../interfaces/application.AppLeaveConfirmAction.md)

Possible actions to return from a [AppLeaveHandler](application.md#appleavehandler)

See [AppLeaveConfirmAction](../interfaces/application.AppLeaveConfirmAction.md) and [AppLeaveDefaultAction](../interfaces/application.AppLeaveDefaultAction.md)

#### Defined in

[application/app_leave.ts:63](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_leave.ts#L63)

___

### AppLeaveHandler

Ƭ **AppLeaveHandler**: (`factory`: [`AppLeaveActionFactory`](../interfaces/application.AppLeaveActionFactory.md)) => [`AppLeaveAction`](application.md#appleaveaction)

#### Type declaration

▸ (`factory`): [`AppLeaveAction`](application.md#appleaveaction)

A handler that will be executed before leaving the application, either when
going to another application or when closing the browser tab or manually changing
the url.
Should return `confirm` to to prompt a message to the user before leaving the page, or `default`
to keep the default behavior (doing nothing).

See [AppMountParameters](../interfaces/application.AppMountParameters.md) for detailed usage examples.

##### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`AppLeaveActionFactory`](../interfaces/application.AppLeaveActionFactory.md) |

##### Returns

[`AppLeaveAction`](application.md#appleaveaction)

#### Defined in

[application/app_leave.ts:28](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_leave.ts#L28)

___

### AppMount

Ƭ **AppMount**<`HistoryLocationState`\>: (`params`: [`AppMountParameters`](../interfaces/application.AppMountParameters.md)<`HistoryLocationState`\>) => [`AppUnmount`](application.md#appunmount) \| `Promise`<[`AppUnmount`](application.md#appunmount)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HistoryLocationState` | `unknown` |

#### Type declaration

▸ (`params`): [`AppUnmount`](application.md#appunmount) \| `Promise`<[`AppUnmount`](application.md#appunmount)\>

A mount function called when the user navigates to this app's route.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppMountParameters`](../interfaces/application.AppMountParameters.md)<`HistoryLocationState`\> | [AppMountParameters](../interfaces/application.AppMountParameters.md) |

##### Returns

[`AppUnmount`](application.md#appunmount) \| `Promise`<[`AppUnmount`](application.md#appunmount)\>

An unmounting function that will be called to unmount the application. See [AppUnmount](application.md#appunmount).

#### Defined in

[application/app_mount.ts:18](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L18)

___

### AppUnmount

Ƭ **AppUnmount**: () => `void`

#### Type declaration

▸ (): `void`

A function called when an application should be unmounted from the page. This function should be synchronous.

##### Returns

`void`

#### Defined in

[application/app_mount.ts:26](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_mount.ts#L26)

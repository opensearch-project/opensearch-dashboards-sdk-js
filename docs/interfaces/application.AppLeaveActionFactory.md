[@opensearch-project/opensearch-dashboards-sdk](../README.md) / [Modules](../modules.md) / [application](../modules/application.md) / AppLeaveActionFactory

# Interface: AppLeaveActionFactory

[application](../modules/application.md).AppLeaveActionFactory

Factory provided when invoking a [AppLeaveHandler](../modules/application.md#appleavehandler) to retrieve the [AppLeaveAction](../modules/application.md#appleaveaction) to execute.

## Table of contents

### Methods

- [confirm](application.AppLeaveActionFactory.md#confirm)
- [default](application.AppLeaveActionFactory.md#default)

## Methods

### confirm

▸ **confirm**(`text`, `title?`): [`AppLeaveConfirmAction`](application.AppLeaveConfirmAction.md)

Returns a confirm action, resulting on prompting a message to the user before leaving the
application, allowing him to choose if he wants to stay on the app or confirm that he
wants to leave.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to display in the confirmation message |
| `title?` | `string` | (optional) title to display in the confirmation message |

#### Returns

[`AppLeaveConfirmAction`](application.AppLeaveConfirmAction.md)

#### Defined in

[application/app_leave.ts:77](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_leave.ts#L77)

___

### default

▸ **default**(): [`AppLeaveDefaultAction`](application.AppLeaveDefaultAction.md)

Returns a default action, resulting on executing the default behavior when
the user tries to leave an application

#### Returns

[`AppLeaveDefaultAction`](application.AppLeaveDefaultAction.md)

#### Defined in

[application/app_leave.ts:82](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/app_leave.ts#L82)

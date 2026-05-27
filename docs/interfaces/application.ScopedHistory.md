[@opensearch-project/opensearch-dashboards-sdk](../README.md) / [Modules](../modules.md) / [application](../modules/application.md) / ScopedHistory

# Interface: ScopedHistory<HistoryLocationState\>

[application](../modules/application.md).ScopedHistory

A wrapper around a `History` instance that is scoped to a particular base path of the history stack. Behaves
similarly to the `basename` option except that this wrapper hides any history stack entries from outside the scope
of this base path.

This wrapper also allows Core and Plugins to share a single underlying global `History` instance without exposing
the history of other applications.

The [createSubHistory](application.ScopedHistory.md#createsubhistory) method is particularly useful for applications that
contain any number of "sub-apps" which should not have access to the main application's history or basePath.

## Type parameters

| Name | Type |
| :------ | :------ |
| `HistoryLocationState` | `unknown` |

## Hierarchy

- `History`<`HistoryLocationState`\>

  ↳ **`ScopedHistory`**

## Table of contents

### Methods

- [createHref](application.ScopedHistory.md#createhref)
- [createSubHistory](application.ScopedHistory.md#createsubhistory)

## Methods

### createHref

▸ **createHref**(`location`, `options?`): `string`

Creates an href (string) to the location.
If `prependBasePath` is true (default), it will prepend the location's path with the scoped history basePath.

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `LocationDescriptorObject`<`HistoryLocationState`\> |
| `options?` | `Object` |
| `options.prependBasePath?` | `boolean` |

#### Returns

`string`

#### Overrides

History.createHref

#### Defined in

[application/scoped_history.ts:38](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/scoped_history.ts#L38)

___

### createSubHistory

▸ **createSubHistory**(`basePath`): [`ScopedHistory`](application.ScopedHistory.md)<`unknown`\>

Creates a `ScopedHistory` for a subpath of this `ScopedHistory`. Useful for applications that may have sub-apps
that do not need access to the containing application's history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string` | the URL path scope for the sub history |

#### Returns

[`ScopedHistory`](application.ScopedHistory.md)<`unknown`\>

#### Defined in

[application/scoped_history.ts:29](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/application/scoped_history.ts#L29)

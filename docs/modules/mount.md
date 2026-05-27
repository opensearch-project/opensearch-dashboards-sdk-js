[@opensearch-project/opensearch-dashboards-sdk](../README.md) / [Modules](../modules.md) / mount

# Module: mount

## Table of contents

### Type Aliases

- [MountPoint](mount.md#mountpoint)
- [UnmountCallback](mount.md#unmountcallback)

## Type Aliases

### MountPoint

Ƭ **MountPoint**<`T`\>: (`element`: `T`) => [`UnmountCallback`](mount.md#unmountcallback)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

#### Type declaration

▸ (`element`): [`UnmountCallback`](mount.md#unmountcallback)

A function that should mount DOM content inside the provided container element
and return a handler to unmount it.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | the container element to render into |

##### Returns

[`UnmountCallback`](mount.md#unmountcallback)

a [UnmountCallback](mount.md#unmountcallback) that unmount the element on call.

#### Defined in

[mount/mount_point.ts:15](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/mount/mount_point.ts#L15)

___

### UnmountCallback

Ƭ **UnmountCallback**: () => `void`

#### Type declaration

▸ (): `void`

A function that will unmount the element previously mounted by
the associated [MountPoint](mount.md#mountpoint)

##### Returns

`void`

#### Defined in

[mount/mount_point.ts:23](https://github.com/opensearch-project/opensearch-dashboards-sdk-js/blob/8190d60/lib/mount/mount_point.ts#L23)

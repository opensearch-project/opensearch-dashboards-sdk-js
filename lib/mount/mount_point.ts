/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A function that should mount DOM content inside the provided container element
 * and return a handler to unmount it.
 *
 * @param element the container element to render into
 * @returns a {@link UnmountCallback} that unmount the element on call.
 *
 * @public
 */
export type MountPoint<T extends HTMLElement = HTMLElement> = (element: T) => UnmountCallback;

/**
 * A function that will unmount the element previously mounted by
 * the associated {@link MountPoint}
 *
 * @public
 */
export type UnmountCallback = () => void;

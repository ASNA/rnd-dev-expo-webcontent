﻿/*
 * Copyright (c) ASNA, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { BrowserInfo };

class BrowserInfo {
    static NavigatorPlatform() {
        const platform = navigator.platform || navigator.userAgentData.platform;
        return platform;
    }

    static IsDesktop() {
        // See: https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
        const platform = BrowserInfo.NavigatorPlatform();
        if (typeof platform !== 'string' || // Not likely Mobile device
            platform === '') // FireFox - assume runs on Desktop.
            return true;
        if (!platform.startsWith) { // Very old device, assume Desktop.
        }
        return platform.startsWith("Win") || platform.startsWith("Mac");
    }
}

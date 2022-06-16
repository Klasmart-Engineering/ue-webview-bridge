
export module Utility {
    /**
     * Check if the `UnrealWebViewBridge` is installed.
     * @returns True if installed
     */
    export function IsUnrealWebViewBridgeInstalled() {
        return window.ue?.unrealjsbridge !== undefined;
    }

    /**
     * Throw error if the `UnrealWebViewBridge` isn't installed.
     */
    export function AssertUnrealWebViewBridgeInstalled() {
        if (!window.ue?.unrealjsbridge) {
            throw new Error(`This code isn't running within an Unreal Engine WebView compatible with \`ue-webview-bridge\``);
        }
    }
}

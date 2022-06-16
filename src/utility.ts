
export const IsUnrealWebViewBridgeInstalled = () => window.ue?.unrealjsbridge !== undefined;

export function AssertUnrealWebViewBridgeInstalled() {
    if (!window.ue?.unrealjsbridge) {
        throw new Error(`This code isn't running within an Unreal Engine WebView compatible with \`ue-webview-bridge\``);
    }
}

export const Utility = {
    IsUnrealWebViewBridgeInstalled,
    AssertUnrealWebViewBridgeInstalled,
}
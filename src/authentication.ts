import { Utility } from "./utility";

export module Authentication {
    /**
     * Send user authentication token to Unreal Engine for signing in.
     * @param domain The domain token is valid for.
     * @param token The JWT authentication token.
     * @param locale The locale selected by the user.
     */
    export function TransferLogin(domain: string, token: string, locale: string)
    {
        Utility.AssertUnrealWebViewBridgeInstalled();
        window.ue.unrealjsbridge.transferlogin(domain, token, locale);
    }
}
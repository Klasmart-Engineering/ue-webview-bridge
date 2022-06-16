import { Utility } from "./utility";

export module Testing {
    /**
     * Print a hello message to the Unreal Engine logs.
     * @param name The name to say hello to.
     */
    export function Hello(name: string) {
        Utility.AssertUnrealWebViewBridgeInstalled();
        window.ue.unrealjsbridge.hello(name);
    }
}

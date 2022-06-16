
/**
 * Print a hello message to the Unreal Engine logs.
 * @param name The name to say hello to.
 */
export function hello(name: string) {
    window.ue.unrealjsbridge.hello(name);
}



declare global {
    interface Window {
        ue: {
            unrealjsbridge: UnrealJsBridge
        };
    }
}

interface UnrealJsBridge {
    hello(name: string): void;
    transferlogin(domain: string, token: string, locale: string): void;
}

export { }


declare global {
    interface Window {
        ue: {
            unrealjsbridge: UnrealJsBridge
        };
    }
}

interface UnrealJsBridge {
    hello(name: string): void;
}

export { }

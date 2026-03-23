import type { ISimplesErrorChannel } from "../ISimplesErrorChannel.js";

export class ConsoleErrorChannel implements ISimplesErrorChannel {
    reportError(err: string): void {
        console.error(err);
    }
    
}

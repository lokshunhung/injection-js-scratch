import { Injectable } from "injection-js";

@Injectable()
export class CoffeeLogger {
    #logs: Array<string> = [];

    log(msg: string): void {
        this.#logs.push(msg);
    }

    getLogs(): Array<string> {
        return Array.from(this.#logs);
    }
}

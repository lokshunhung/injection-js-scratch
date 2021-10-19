import { Injectable } from "injection-js";
import { ConsoleOutput } from "../output/console-output";
import { Monitor } from "./monitor";

@Injectable()
export class RetinaMonitor implements Monitor {
    #consoleOutput: ConsoleOutput;

    constructor(consoleOutput: ConsoleOutput) {
        this.#consoleOutput = consoleOutput;
    }

    info(): string {
        return "retina monitor";
    }

    show(text: string): void {
        this.#consoleOutput.println(`🍎: ${text}`);
    }
}

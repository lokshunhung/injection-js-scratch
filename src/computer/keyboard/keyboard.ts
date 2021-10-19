import { Injectable } from "injection-js";
import { ConsoleOutput } from "../output/console-output";

@Injectable()
export class Keyboard {
    #consoleOutput: ConsoleOutput;

    constructor(consoleOutput: ConsoleOutput) {
        this.#consoleOutput = consoleOutput;
    }

    info(): string {
        return "standard keyboard";
    }

    type(key: string): void {
        this.#consoleOutput.println(`typing: ${key}`);
    }
}

import { Injectable } from "injection-js";
import { ConsoleOutput } from "../output/console-output";
import { Monitor } from "./monitor";

@Injectable()
export class Dell24Monitor implements Monitor {
    #consoleOutput: ConsoleOutput;

    constructor(consoleOutput: ConsoleOutput) {
        this.#consoleOutput = consoleOutput;
    }

    info(): string {
        return "dell 24 monitor";
    }

    show(text: string): void {
        this.#consoleOutput.println("Dead pixel :(");
    }
}

import { Injectable } from "injection-js";
import { ConsoleOutput } from "../output/console-output";
import { Keyboard } from "./keyboard";

@Injectable()
export class HHKB extends Keyboard {
    constructor(consoleOutput: ConsoleOutput) {
        super(consoleOutput);
    }

    override info(): string {
        return "happy hacking keyboard";
    }

    override type(key: string): void {
        super.type(`${key} *thock*`);
    }
}

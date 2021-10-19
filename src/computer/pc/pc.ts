import { Inject, Injectable } from "injection-js";
import { Keyboard } from "../keyboard/keyboard";
import { MONITOR } from "../monitor/injection-tokens";
import { Monitor } from "../monitor/monitor";

@Injectable()
export class PC {
    #monitor: Monitor;
    #keyboard: Keyboard;

    constructor(
        @Inject(MONITOR) monitor: Monitor,
        keyboard: Keyboard // No injection token is needed since `Keyboard` is not an interface
    ) {
        this.#monitor = monitor;
        this.#keyboard = keyboard;
    }

    info(): string {
        return `Using PC with ${this.#keyboard.info()} and ${this.#monitor.info()}`;
    }

    boot(): void {
        this.#keyboard.type("CTRL");
        this.#keyboard.type("ALT");
        this.#keyboard.type("DEL");
        this.#monitor.show("Welcome");
    }
}

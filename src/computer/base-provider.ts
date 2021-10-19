import { Provider } from "injection-js";
import { Keyboard } from "./keyboard/keyboard";
import { ConsoleOutput } from "./output/console-output";

export const baseProvider: Array<Provider> = [
    ConsoleOutput,
    Keyboard,
    // If the symbols `A`, `B` inside `{ provide: A, useClass: B }` are the same thing,
    // the provider can be shortened to just `A`.
];

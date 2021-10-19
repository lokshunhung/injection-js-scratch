import { Provider } from "injection-js";
import { HHKB } from "../keyboard/hhkb";
import { Keyboard } from "../keyboard/keyboard";
import { Dell24Monitor } from "../monitor/dell-24-monitor";
import { MONITOR } from "../monitor/injection-tokens";
import { PC } from "./pc";

export const pcProvider: Array<Provider> = [
    {
        provide: PC,
        useClass: PC,
    },
    {
        provide: Keyboard,
        useClass: HHKB,
    },
    {
        provide: MONITOR,
        useClass: Dell24Monitor,
    },
];

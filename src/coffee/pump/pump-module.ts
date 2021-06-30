import { Provider } from "injection-js";
import { PUMP } from "./injection-tokens";
import { Thermosiphon } from "./thermosiphon";

export const PumpModule: Array<Provider> = [
    {
        provide: PUMP,
        useClass: Thermosiphon,
    },
];

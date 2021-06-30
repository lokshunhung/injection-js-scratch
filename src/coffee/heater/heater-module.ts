import { Provider } from "injection-js";
import { ElectricHeater } from "./electric-heater";
import { HEATER } from "./injection-tokens";

export const HeaterModule: Array<Provider> = [
    {
        provide: HEATER,
        useClass: ElectricHeater,
    },
];

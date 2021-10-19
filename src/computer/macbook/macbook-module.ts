import { Provider } from "injection-js";
import { MONITOR } from "../monitor/injection-tokens";
import { RetinaMonitor } from "../monitor/retina-monitor";
import { Macbook } from "./macbook";

export const macbookProviders: Array<Provider> = [
    {
        provide: Macbook,
        useClass: Macbook,
    },
    {
        provide: MONITOR,
        useClass: RetinaMonitor,
    },
];

import { Inject } from "injection-js";
import { Heater } from "./heater/heater";
import { HEATER } from "./heater/injection-tokens";
import { CoffeeLogger } from "./logger/coffee-logger";
import { PUMP } from "./pump/injection-tokens";
import { Pump } from "./pump/pump";

export class CoffeeMaker {
    #logger: CoffeeLogger;
    #heater: Heater;
    #pump: Pump;

    constructor(
        logger: CoffeeLogger,
        @Inject(HEATER) heater: Heater,
        @Inject(PUMP) pump: Pump
    ) {
        this.#logger = logger;
        this.#heater = heater;
        this.#pump = pump;
    }

    brew(): void {
        this.#heater.on();
        this.#pump.pump();
        this.#logger.log(" [_]P coffee! [_]P ");
        this.#heater.off();
    }
}

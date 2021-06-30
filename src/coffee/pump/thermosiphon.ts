import { Inject, Injectable } from "injection-js";
import { Heater } from "../heater/heater";
import { HEATER } from "../heater/injection-tokens";
import { CoffeeLogger } from "../logger/coffee-logger";
import { Pump } from "./pump";

@Injectable()
export class Thermosiphon implements Pump {
    #logger: CoffeeLogger;
    #heater: Heater;

    constructor(logger: CoffeeLogger, @Inject(HEATER) heater: Heater) {
        this.#logger = logger;
        this.#heater = heater;
    }

    pump(): void {
        if (this.#heater.isHot()) {
            this.#logger.log("=> => pumping => =>");
        }
    }
}

import { Injectable } from "injection-js";
import { CoffeeLogger } from "../logger/coffee-logger";
import { Heater } from "./heater";

@Injectable()
export class ElectricHeater implements Heater {
    #logger: CoffeeLogger;
    #heating: boolean;

    constructor(logger: CoffeeLogger) {
        this.#logger = logger;
        this.#heating = false;
    }

    on(): void {
        this.#heating = true;
        this.#logger.log("~ ~ ~ heating ~ ~ ~");
    }

    off(): void {
        this.#heating = false;
        this.#logger.log("... heater off ...");
    }

    isHot(): boolean {
        return this.#heating;
    }
}

import "reflect-metadata";

import { ReflectiveInjector } from "injection-js";
import { CoffeeMaker } from "./coffee-maker";
import { HeaterModule } from "./heater/heater-module";
import { CoffeeLogger } from "./logger/coffee-logger";
import { LoggerModule } from "./logger/logger-module";
import { PumpModule } from "./pump/pump-module";

export function main(): void {
    const injector = ReflectiveInjector.resolveAndCreate([
        CoffeeMaker,
        LoggerModule,
        HeaterModule,
        PumpModule,
    ]);

    const coffeeMaker: CoffeeMaker = injector.get(CoffeeMaker);
    coffeeMaker.brew();

    const logger: CoffeeLogger = injector.get(CoffeeLogger);
    logger.getLogs().forEach(log => console.log(log));
}

if (require.main === module) {
    main();
}

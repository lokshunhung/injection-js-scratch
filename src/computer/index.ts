import "reflect-metadata";

import { ReflectiveInjector } from "injection-js";
import { baseProvider } from "./base-provider";
import { Macbook } from "./macbook/macbook";
import { macbookProviders } from "./macbook/macbook-module";
import { PC } from "./pc/pc";
import { pcProvider } from "./pc/pc-modulet";
import { ConsoleOutput } from "./output/console-output";

export function main(): void {
    const base = ReflectiveInjector.resolveAndCreate(baseProvider);
    const consoleOutput: ConsoleOutput = base.get(ConsoleOutput);

    const macbookInjector = base.resolveAndCreateChild(macbookProviders);
    const macbook: Macbook = macbookInjector.get(Macbook);
    consoleOutput.println(macbook.info());
    macbook.boot();

    consoleOutput.println("");

    const pcInjector = base.resolveAndCreateChild(pcProvider);
    const pc: PC = pcInjector.get(PC);
    consoleOutput.println(pc.info());
    pc.boot();
}

if (require.main === module) {
    main();
}

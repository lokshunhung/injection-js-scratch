import "reflect-metadata";

import { strict as assert } from "assert";
import { ReflectiveInjector } from "injection-js";
import { baseProvider } from "./base-provider";
import { Macbook } from "./macbook/macbook";
import { macbookProviders } from "./macbook/macbook-module";
import { ConsoleOutput } from "./output/console-output";
import { PC } from "./pc/pc";
import { pcProvider } from "./pc/pc-module";

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

    // Check that there's only one instance of ConsoleOutput
    assert(
        Object.is(consoleOutput, base.get(ConsoleOutput)),
        "expect instance of ConsoleOutput is cached in base"
    );
    assert(
        Object.is(consoleOutput, macbookInjector.get(ConsoleOutput)),
        "expect instance of ConsoleOutput from macbookInjector is inherited from base"
    );
}

if (require.main === module) {
    main();
}

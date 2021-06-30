import { Provider } from "injection-js";
import { CoffeeLogger } from "./coffee-logger";

export const LoggerModule: Array<Provider> = [CoffeeLogger];

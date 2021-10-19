import { Injectable } from "injection-js";

@Injectable()
export class ConsoleOutput {
    println(text: string): void {
        console.log(text);
    }
}

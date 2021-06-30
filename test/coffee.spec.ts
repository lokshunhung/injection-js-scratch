import { expect, jest, test } from "@jest/globals";
import { main } from "../src/coffee";

test("main", () => {
    const consoleLogSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

    expect(() => main()).not.toThrowError();

    expect(consoleLogSpy.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "~ ~ ~ heating ~ ~ ~",
  ],
  Array [
    "=> => pumping => =>",
  ],
  Array [
    " [_]P coffee! [_]P ",
  ],
  Array [
    "... heater off ...",
  ],
]
`);
});

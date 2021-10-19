import { expect, jest, test } from "@jest/globals";
import { main } from "../src/computer";

test("main", () => {
    const consoleLogSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

    expect(() => main()).not.toThrowError();

    expect(consoleLogSpy.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "Using macbook with standard keyboard and retina monitor",
  ],
  Array [
    "typing: PWR",
  ],
  Array [
    "🍎: Welcome",
  ],
  Array [
    "",
  ],
  Array [
    "Using PC with happy hacking keyboard and dell 24 monitor",
  ],
  Array [
    "typing: CTRL *thock*",
  ],
  Array [
    "typing: ALT *thock*",
  ],
  Array [
    "typing: DEL *thock*",
  ],
  Array [
    "Dead pixel :(",
  ],
]
`);
});

import Button from "sap/m/Button";

describe("Some Test", () => {
  it("should do something", async () => {
    await browser.asControl<Button>({
      selector: {
        id: "myButton",
      },
    });
  });
});

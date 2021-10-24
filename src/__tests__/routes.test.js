import { index } from "../routes/index"

beforeEach(() => {
  jest.clearAllMocks()
})

describe("GET / test", () => {
  // is this thing on
  test("testing, testing 1", async () => {
    expect(true).toBe(true);
  });

  test("responds to /", () => {
    const req = {};

    const res = {
      text: "",
      send: function (input) {
        this.text = input;
      },
    };
    index(req, res);

    expect(res.text).toEqual("Hello Project!");
  });
});

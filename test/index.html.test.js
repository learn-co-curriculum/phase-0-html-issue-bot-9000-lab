const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

describe("index.html", () => {
  it("should be present", () => {
    const fileExists = fs.existsSync(
      path.resolve(__dirname, "..", "index.html")
    );
    const errorHint =
      "Make sure you have a file called 'index.html' in the lab directory with your HTML document in it!";

    expect(fileExists, errorHint).to.be.true;
  });
});

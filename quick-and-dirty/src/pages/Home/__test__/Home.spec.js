import Home from "..";
import { render } from "../../../test-utils";
import { screen } from "@testing-library/react";

describe("Homme Page", () => {
  it("renders home page", async () => {
    render(<Home />);
    expect(screen.getByText("pack section 1")).toBeVisible();
    expect(screen.getByText("pack section 2")).toBeVisible();
    expect(screen.getByText("pack section 3")).toBeVisible();
    expect(screen.getByText("build your pack")).toBeVisible();

    expect(screen.queryAllByTestId("section1-products").length).toEqual(8);
    expect(screen.queryAllByTestId("section2-products").length).toEqual(6);
    expect(screen.queryAllByTestId("section3-products").length).toEqual(6);
  });
});
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chk from "./chk";

test("Check Component", () => {
    render(<Chk />);
    const heading = screen.getByText("Check Component");
    expect(heading).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  test("Should load contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load 'submit' text inside Contact Component", () => {
    render(<Contact />);

    const buttonText = screen.getByText("Submit");

    expect(buttonText).toBeInTheDocument();
  });

  test("Should load input inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes)
    expect(inputBoxes.length).toBe(2);
  });

  it("Input boxes length should not be null", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes)
    expect(inputBoxes.length).not.toBe(null);
  });
});

// it() and test() is same thing, Generally 'should' is the start of test case name which reads as it should .......

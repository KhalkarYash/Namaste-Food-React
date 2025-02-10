import appStore from "../../utils/appStore";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("Should load login button", () => {
    render(
      <Provider store={appStore}>
        <Header />
      </Provider>
    );
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton)
    
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
  });
});

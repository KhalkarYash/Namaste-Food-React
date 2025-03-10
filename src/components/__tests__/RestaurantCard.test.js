import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("RestaurantCard", () => {
  it("Should render Restaurant Card Component with props data", () => {
    render(<RestaurantCard resdata={MOCK_DATA} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });
});

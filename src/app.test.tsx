import { renderWithProviders } from "./utils/test-utils";
import App from "./App";
import { screen, waitFor } from "@testing-library/react";

//* use 'screen.debug()' when want to output dom in terminal
describe("test msw", () => {
  it("should return healthy when call health-check endpoint", async () => {
    // Arrange
    renderWithProviders(<App />);
    const value = await screen.findByText("Status: Healthy");

    // Assert
    await expect(value).toBeDefined;
  });
});

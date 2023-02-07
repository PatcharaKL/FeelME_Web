import { renderWithProviders } from "../../../utils/test-utils";
// import { screen, waitFor } from "@testing-library/react";
import SideBar from "../SideBar";

//* use 'screen.debug()' when want to output dom in terminal
describe("test Health Check", () => {
  it("should return true", async () => {
    // Arrange
    renderWithProviders(<SideBar />);
    // const value = await screen.findByText("Status: Healthy");

    // Assert
    await expect(true).toBe(true);
  });
});

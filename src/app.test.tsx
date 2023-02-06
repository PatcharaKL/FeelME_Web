import { renderWithProviders } from "./utils/test-utils";
import App from "./App";
import { handlers } from "./mocks/handlers";
import { expect, test } from "vitest";
import { screen, act } from "@testing-library/react";

test("should return healthy when call health-check endpoint", async () => {
  renderWithProviders(<App />);

  await waitForFetch();
  screen.debug();

  await expect(screen.getByText("Healthy")).toEqual("Healthy");
});

const waitForFetch = async (ms: number = 300) => {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms));
  });
};

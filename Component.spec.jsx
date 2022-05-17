import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Component from "./Component";

it("should not call the error handler if an error is not thrown", async () => {
  const handleError = jest.fn();
  render(
    <Component
      onClick={() => {
        // ✅ do nothing
      }}
      handleError={handleError}
    />
  );
  const user = userEvent.setup();
  await user.click(await screen.findByRole("button"));
  expect(handleError).not.toHaveBeenCalled();
});

it("should call the error handler if an error is thrown", async () => {
  const handleError = jest.fn();
  render(
    <Component
      onClick={() => {
        // ❌ throw error
        throw new Error("Fail");
      }}
      handleError={handleError}
    />
  );
  const user = userEvent.setup();
  await user.click(await screen.findByRole("button"));
  expect(handleError).toHaveBeenCalledTimes(1);
});

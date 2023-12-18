import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoginForm } from "../src/features/auth/components/login";

const mockData = {
  email: "John@gmail.com",
  password: "password123",
};

const mockSubmitCallback = vi.fn();

describe("LoginForm", () => {
  it("should render the form and handle submission", async () => {
    render(<LoginForm submitCallback={mockSubmitCallback} />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText("input email"), {
      target: { value: mockData.email },
    });
    fireEvent.change(screen.getByPlaceholderText("input password"), {
      target: { value: mockData.password },
    });

    // NOTE: Improve this test later after finishing the other core features.
    // Submit the form
    fireEvent.click(screen.getByRole("button"));
    // Assertions
    await waitFor(() => {
      expect(mockSubmitCallback).toHaveBeenCalled();
    });
  });
});

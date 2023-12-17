import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RegistrationForm } from "../src/features/auth/components/register";

const mockData = {
  names: "John",
  last_names: "Doe",
  password: "password123",
  password_confirmation: "password123",
};

const mockSubmitCallback = vi.fn();

describe("RegistrationForm", () => {
  it("should render the form and handle submission", async () => {
    render(<RegistrationForm submitCallback={mockSubmitCallback} />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText("input name"), {
      target: { value: mockData.names },
    });
    fireEvent.change(screen.getByPlaceholderText("input last name"), {
      target: { value: mockData.last_names },
    });
    fireEvent.change(screen.getByPlaceholderText("input password"), {
      target: { value: mockData.password },
    });
    fireEvent.change(screen.getByPlaceholderText("confirm password"), {
      target: { value: mockData.password_confirmation },
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

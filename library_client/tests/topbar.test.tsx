import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TopBar } from "../src/components/topbar";
import React from "react";

describe("TopBar", () => {
  it("should render TopBar with correct user information", () => {
    const email = "test@example.com";
    const userType = "Librarian";
    const userName: [string, string] = ["Francisco", "Escalante"];

    render(<TopBar username={userName} email={email} userType={userType} />);

    const welcomeText = screen.getByText(`Welcome, ${email}`);
    const userIcon = screen.getByTestId("user-icon");
    expect(welcomeText).toBeDefined();
    expect(userIcon).toBeDefined();

    expect(welcomeText.innerText).toEqual(`Welcome, ${email}`);
  });
});

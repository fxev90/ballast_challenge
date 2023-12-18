import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { SideBar } from "../src/components/SideBar";
import { MenuItem } from "../src/types";
import React from "react";

// Mock data
const mockItems: MenuItem[] = [
  { key: "Dashboard", name: "Dashboard", cb: vi.fn() },
  { key: "Profile", name: "Profile", cb: vi.fn() },
  { key: "Logout", name: "Logout", cb: vi.fn() },
];

describe("SideBar", () => {
  it("should render SideBar with correct items", () => {
    render(<SideBar items={mockItems} />);

    mockItems.forEach((item) => {
      const itemName = screen.getByText(item.name);

      expect(itemName).toBeDefined();

      fireEvent.click(itemName);
      expect(item.cb).toHaveBeenCalled();
    });

    const logoutSeparator = screen.getByTestId("logout-separator");
    expect(logoutSeparator).toBeDefined();
  });
});

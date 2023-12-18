import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BookCard } from "../src/components/BookCard";
import React from "react";

// Mock data
const mockBookItem = {
  title: "Sample Book",
  isbn: "123456789",
  author_name: "John",
  author_last_name: "Doe",
  genre_name: "Fiction",
};

describe("BookCard", () => {
  it("should render BookCard with correct book information", () => {
    render(<BookCard bookItem={mockBookItem} />);

    const cardTitle = screen.getByText(mockBookItem.title);
    const cardDescription = screen.getByText(`ISBN: ${mockBookItem.isbn}`);
    const authorInfo = screen.getByText(
      `${mockBookItem.author_name} ${mockBookItem.author_last_name}`
    );
    const genreInfo = screen.getByText(`Genre: ${mockBookItem.genre_name}`);

    expect(cardTitle).toBeDefined();
    expect(cardDescription).toBeDefined();
    expect(authorInfo).toBeDefined();
    expect(genreInfo).toBeDefined();
  });
});

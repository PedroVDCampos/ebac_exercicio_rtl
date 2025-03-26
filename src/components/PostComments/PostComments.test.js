import { render, screen, fireEvent } from "@testing-library/react";
import Post from "../PostComments/index";

it("should add two comments to the list", () => {
  render(<Post />);
  const textarea = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /comentar/i });
  fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
  fireEvent.click(button);
  fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
  fireEvent.click(button);
  const comments = screen.getAllByRole("listitem");
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent("Primeiro comentário");
  expect(comments[1]).toHaveTextContent("Segundo comentário");
});

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { TaskStatus } from "./types";

describe("Task Management Application", () => {
  test("renders application title", () => {
    render(<App />);
    expect(screen.getByText("Task Management Application")).toBeInTheDocument();
  });

  test("renders all three columns", () => {
    render(<App />);
    expect(screen.getByText(TaskStatus.Todo)).toBeInTheDocument();
    expect(screen.getByText(TaskStatus.InProgress)).toBeInTheDocument();
    expect(screen.getByText(TaskStatus.Done)).toBeInTheDocument();
  });

  test("renders initial tasks", () => {
    render(<App />);
    expect(screen.getByText("Mow The lawn")).toBeInTheDocument();
    expect(screen.getByText("Pull Weeds")).toBeInTheDocument();
    expect(screen.getByText("Rake the leaves")).toBeInTheDocument();
  });

  test("can add a new task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add Task");
    const addButton = screen.getByText("+");

    fireEvent.change(input, { target: { value: "Water the plants" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Water the plants")).toBeInTheDocument();
  });

  test("shows alert when trying to add empty task", () => {
    render(<App />);
    const addButton = screen.getByText("+");
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.click(addButton);

    expect(alertMock).toHaveBeenCalledWith("Task cannot be empty");
    alertMock.mockRestore();
  });

  test("can move task to the right", () => {
    render(<App />);
    const rightArrowForTodoTask = screen
      .getByText("Mow The lawn")
      .parentElement?.querySelector("button:last-child") as HTMLElement;

    fireEvent.click(rightArrowForTodoTask);

    const inProgressColumn = screen.getByText(TaskStatus.InProgress)
      .parentElement as HTMLElement;
    expect(inProgressColumn.textContent).toContain("Mow The lawn");
  });

  test("cannot move task left when in Todo state", () => {
    render(<App />);
    const leftArrowForTodoTask = screen
      .getByText("Mow The lawn")
      .parentElement?.querySelector("button:first-child") as HTMLElement;

    expect(leftArrowForTodoTask).toBeDisabled();
  });

  test("cannot move task right when in Done state", () => {
    render(<App />);
    const rightArrowForDoneTask = screen
      .getByText("Rake the leaves")
      .parentElement?.querySelector("button:last-child") as HTMLElement;

    expect(rightArrowForDoneTask).toBeDisabled();
  });
});

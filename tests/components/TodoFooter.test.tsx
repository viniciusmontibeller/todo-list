import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";

import { TodoFooter } from '../../src/components/TodoFooter/TodoFooter'

describe('Todo footer component', () => {
    it('should render the correct number of incomplete items', () => {
        render(<TodoFooter todosLenght={5} filterType={""} setFilterType={jest.fn()} handleRevomeCompletedTodos={jest.fn()} />);
        const paragraphElement = screen.getByText("5 items left");
        expect(paragraphElement).toBeInTheDocument()
    })
})
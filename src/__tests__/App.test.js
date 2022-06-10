import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App tests", () =>{
  it('should find the text of the heading', () => {
    render(<App/>);
    const headingElementType = screen.getByText(/To-Do List/i)
    expect(headingElementType).toContainHTML('h1');
  });


});

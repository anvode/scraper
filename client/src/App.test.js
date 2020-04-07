import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('App', () => {
    test('renders title', () => {
        const { getByText } = render(<App />);
        const title = getByText(/Web Scraper/i);
        expect(title).toBeInTheDocument();
    });

    it("snapshot App", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
})


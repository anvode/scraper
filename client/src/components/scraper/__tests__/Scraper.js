import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Scraper from '../Scraper';

afterEach(cleanup);

describe('Scraper', () => {
    it("snapshot Scraper", () => {
        const { asFragment } = render(<Scraper />);
        expect(asFragment()).toMatchSnapshot();
    });
})


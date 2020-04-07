import React from 'react'
import './Scraper.scss';
import { scraperReducer } from './scraper.reducer';
import ScraperForm from '../scraper-form/ScraperForm';
import ScraperResults from '../scraper-results/ScraperResults';

const initialState = {
    status: true,
    results: [],
    scraperFetchLoading: false,
    scraperFetchError: false,
};

const Scraper = props => {
    const [state, dispatch] = React.useReducer(scraperReducer, initialState);

    return (
        <div className="scraper">
            <div className="scraper__header">
                <h1 className="scraper__title">Web Scraper</h1>
            </div>
            <div className="scraper__body">
                <ScraperForm dispatch={dispatch}></ScraperForm>
                <ScraperResults state={state}></ScraperResults>
            </div>
        </div>
    )
}

export default Scraper

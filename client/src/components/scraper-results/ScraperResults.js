import React from 'react'
import './ScraperResults.scss';
import Loader from '../loader/Loader';
import ScraperResultsList from './ScraperResultsList';

const ScraperResults = ({ state }) => {

    if (state.scraperFetchError) {
        return <div className="scraper-results">
            {state.scraperFetchError}
        </div>;
    }

    if (state.scraperFetchLoading) {
        return <div className="scraper-results">
            <Loader></Loader>
        </div>;
    }

    return (
        <div className="scraper-results">
            
            {state.results.length > 0 && <>
                <h2 className="scraper-results__title">{!state.status ? 'Failed' : 'Results'}</h2>
                <ScraperResultsList results={state.results}></ScraperResultsList>
                </>
            }
        </div>
    );
};

export default ScraperResults;

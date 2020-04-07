import React from 'react'

const ScraperResultsItem = ({result, topLevel}) => {

    return <div className="scraper-results__item">
        <div className={`scraper-results__name${topLevel ? ' scraper-results--bold' : ''}`}>{result.name}</div>
        <div className="scraper-results__value">{result.value}</div>
    </div>;
};

export default ScraperResultsItem;

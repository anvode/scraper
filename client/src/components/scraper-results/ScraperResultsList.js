import React from 'react'
import ScraperResultsItem from './ScraperResultsItem';

const ScraperResultsList = ({results}) => {
    return (
        <div className="scraper-results">
             {results.map((result, index) => {
                if (Array.isArray(result.value)) {
                    return <React.Fragment key={`main-item${index}`}>
                        <div className="scraper-results__name scraper-results--header">{result.name}</div>
                        {result.value.map((item, index) => {
                            return <ScraperResultsItem topLevel={false} key={`sub-item${index}`} result={item}></ScraperResultsItem> 
                        })}
                    </React.Fragment>
                } else {
                   return <ScraperResultsItem topLevel={true} key={`main-item${index}`} result={result}></ScraperResultsItem> 
                }
            })}
        </div>
    );
};

export default ScraperResultsList;

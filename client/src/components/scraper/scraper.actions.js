import { SCRAPER_FETCH_URL, SCRAPER_FETCH_LOADING, SCRAPER_FETCH_ERROR } from './scraper.constants';

export function setScraperFetchResult(status, results) {
    return {
        type: SCRAPER_FETCH_URL,
        status: status,
        results: results
    };
}

export function setScraperFetchError(error) {
    return {
        type: SCRAPER_FETCH_ERROR,
        error: error
    };
}

export function setScraperFetchLoading() {
    return {
        type: SCRAPER_FETCH_LOADING
    };
}

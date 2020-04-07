import { setScraperFetchResult, setScraperFetchLoading, setScraperFetchError } from '../scraper/scraper.actions';

export async function fetchData(dispatch, url) {
    dispatch(setScraperFetchLoading());
    try {
        const response = await fetch(`http://localhost:5050/api/scraper?url=${url}`);
        const {status, results} = await response.json();

        dispatch(setScraperFetchResult(status, results));

    } catch (err) {
        dispatch(setScraperFetchError(err));
    }
}
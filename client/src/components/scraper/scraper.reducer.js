import { SCRAPER_FETCH_URL, SCRAPER_FETCH_LOADING, SCRAPER_FETCH_ERROR } from './scraper.constants';

/**
 *
 * @param {object} state
 * @param {object} action
 */
export const scraperReducer = (state, action) => {

    switch (action.type) {

        case SCRAPER_FETCH_URL: {
            console.log('state, action', state, action)

            return {
                ...state,
                scraperFetchLoading: false,
                status: action.status,
                results: action.results
            };
        }

        case SCRAPER_FETCH_LOADING: {
            return {
                ...state,
                scraperFetchLoading: true
            };
        }

        case SCRAPER_FETCH_ERROR: {
            return {
                ...state,
                scraperFetchError: action.error
            };
        }

        default:
            return state;
    }
};
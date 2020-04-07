import React from 'react'
import { validUrl } from '../../utils';
import { fetchData } from './scraper.form.utils';
import './ScraperForm.scss';

const ScraperForm = ({ dispatch }) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValid = validUrl(value);
        if (!isValid) {
            setError(true);
            return;
        }

        try {
            await fetchData(dispatch, value)

            setValue('');
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        if (error) {
            setError(false);
        }
        setValue(value);
    };

    return (
        <div className="scraper-form">
            <div className="scraper-form__description">Please add also http Protocol. Example: http(s)://example.com</div>
            <form className="scraper-form__form" onSubmit={handleSubmit}>
                <div className={`scraper-form__field${error ? ` scraper-form__error` : ``}`}>
                    <input 
                        type="text" 
                        aria-label="Enter Url to scrape a Website" onChange={handleChange} 
                        placeholder="http(s)://exapmle.com" 
                        id="scraper-form-search" 
                        name="scraper-form-search" 
                        value={value} 
                        className="scraper-form__input" />
                    <button className="scraper-form__submit">Scrape Url</button>
                </div>
            </form>
            {error && <div className="scraper-form__error-message">This Url is not valid. Example: http(s)://example.com</div>}
        </div>
    );
};

export default ScraperForm;

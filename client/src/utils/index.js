/**
 * validate url 
 * @param {string} url 
 */
export const validUrl = (url) => {
    const regex = new RegExp(/(^|\s)((https?:\/\/)[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/, 'gi');
    const validateUrl = url.match(regex);

    return validateUrl !== null;
};

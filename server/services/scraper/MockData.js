const mockHtml5 = [{
    name: '!doctype',
    data: '!DOCTYPE html'
}];

const mockHtmlNoDoctype = [{
    name: 'html',
    children: []
}];

const mockHtml4 = [{
    name: '!doctype',
    data: '!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"'
}];

const mockHtml1 = [{
    name: '!doctype',
    data: '!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"'
}];

const mockHeadingHtml = `
    <div>
        <h1>test</h1>
        <h4>test</h4>
        <h1>test</h1>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <h3>test</h3>
        <div>
            <h1>Another</h1>
        </div>
        <h5>test</h5>
    </div>
`;

const mockNoHeadingHtml = `
    <div>   
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <div>
            <p>Another</p>
        </div>
    </div>
`;

const mockNoImageHtml = `
    <div>
        <p>No Images Found</p>
    </div>
`;

const mockLinksHtml = `
    <div>   
        <a href="http://localhost:3000/about">About</a>
        <a href="http://localhost:3000/search?term=fsdfsd">Search</a>
        <div>
        <a href="http://twitter.com/cbracco">@other</a>
        <a href="#top">top</a>
        </div>
        <p>
            <a href="http://localhost:3000"><span>Home</span></a>
        </p>
        <footer role="contentinfo">
            <p>
                Made by <a href="http://twitter.com/cbracco">@cbracco</a>.
                Code on
                <a href="http://github.com/cbracco/html5-test-page">GitHub</a>.
            </p>
        </footer>
        <a href="http://localhost:3000">Home</a>
    </div>
`;

const mockNoLinksHtml = `
    <div>
        <p>No Links Found</p>
    </div>
`;

module.exports = {
    mockHtml5,
    mockHtmlNoDoctype,
    mockHtml4,
    mockHtml1,
    mockHeadingHtml,
    mockNoHeadingHtml,
    mockNoImageHtml,
    mockLinksHtml,
    mockNoLinksHtml
};
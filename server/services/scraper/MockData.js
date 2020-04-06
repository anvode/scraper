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

module.exports = {
    mockHtml5,
    mockHtmlNoDoctype,
    mockHtml4,
    mockHtml1,
    mockHeadingHtml,
    mockNoHeadingHtml,
    mockNoImageHtml
};
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

module.exports = {
    mockHtml5,
    mockHtmlNoDoctype,
    mockHtml4,
    mockHtml1
};
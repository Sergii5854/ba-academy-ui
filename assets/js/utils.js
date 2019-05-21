/*************\
 * Utilities *
 \*************/
function strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || ""
}

function excerpt(text, length) {
    text = strip(text);
    text = $.trim(text);
    if (text.length > length) text = text.substring(0, length - 3) + '...';
    return text
}

function pad2Digit(num) {
    return ('0' + num.toString()).slice(-2)
}

function datetimeFormat(timestamp) {
    let date = new Date(timestamp),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]} ${pad2Digit(date.getFullYear())} ${pad2Digit(date.getHours())}:${pad2Digit(date.getMinutes())}`
}

function template(name) {
    console.log('template ', "/templates/" + name + ".ejs");
    return new EJS({url: "/templates/" + name + ".ejs"})
}


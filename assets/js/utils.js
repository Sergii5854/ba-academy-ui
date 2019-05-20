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

function template(name) {
    return new EJS({url: "/templates/" + name + ".ejs"})
}

let listData = {
    entryTemplate: template('entry'),
    entriesWrapper: false,
    newItems: false
};

function renderEntries(r) {
    listData.newItems = true;
    r.forEach(renderEntry)
}

function renderEntry(item) {
    if (!listData.newItems) return;
    let template = listData.entryTemplate.render({item: new EntryEntity(item)});
    if (listData.entriesWrapper.find(">div:first-child").length > 0)
        $(template).insertBefore(listData.entriesWrapper.find(">div:first-child"));
    else
        listData.entriesWrapper.append(template)
}

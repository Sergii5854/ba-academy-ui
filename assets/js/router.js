let lockHashchange = false;

let router = function () {
    if (lockHashchange) return false;
    let postPattern = /(apartment\/-[a-zA-Z0-9-_]{5,})/gm,
        expected = ["", "index", "profile", "create","apartament", postPattern, "login"],
        hash = window.location.hash.replace("#", "") || "index",
        name = 'index',
        proceed = false,
        post = false,
        data = {},
        $content = document.getElementById("content");

    expected.forEach(function (value) {
        if (typeof value === 'string' && hash === value)
            proceed = true;

        if (typeof value === 'object' && value.test(hash)) {
            post = true;
            proceed = true
        }
    });



    $content.html(template(name).render({data: data}))
};


$(window).on('hashchange', router);
$(document).ready(router);

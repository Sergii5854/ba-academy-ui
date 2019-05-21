let lockHashchange = false;
let router = function () {
    console.log("lockHashchange",lockHashchange);
    if (lockHashchange) return false;
    let postPattern = /(apartment\/-[a-zA-Z0-9-_]{5,})/gm,
        expected = ["", "index", "profile", "reg","apartament", postPattern, "login"],
        hash = window.location.hash.replace("#", "") || "index",
        name = 'index',
        proceed = false,
        post = false,
        data = {},
        $content = $("#content");


    expected.forEach(function (value) {
        if (typeof value === 'string' && hash === value)
            proceed = true;

        if (typeof value === 'object' && value.test(hash)) {
            post = true;
            proceed = true
            console.log(proceed);
        }
    });

    if (hash === 'create') {
        $("#dndUploadImagesCss").attr("media","all")
    }else{
        $("#dndUploadImagesCss").attr("media","print")
    }

    if (proceed)
        switch (true) {
            case post: {
                name = "post";
                data.postID = hash.split("/")[1];
                break
            }
            default:
                name = hash
        }
    else name = "notFound";

    $content.html(template(name).render({data: data}))
};


$(window).on('hashchange', router);
$(document).ready(router);

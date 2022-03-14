var input = document.getElementsByClassName("radio");
document.body.addEventListener('change', function(e) {
    if ($.cookie("ans" + $GET("id").split("+")[0]) == undefined) {
        $.cookie("ans" + $GET("id").split("+")[0], "")
    }
    let a = $.cookie("ans" + $GET("id").split("+")[0]).split(",")
    let obj = {};
    for (let i = 0; i < a.length - 1; i++) {
        obj[a[i].split(":")[0]] = a[i].split(":")[1]
    }
    obj[e.target.name] = e.target.id
    var str = ""
    for (let v in obj) {
        str += `${v}:${obj[v]},`
    }
    $.cookie("ans" + $GET("id").split("+")[0], str)
});
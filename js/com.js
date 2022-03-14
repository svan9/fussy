// console.clear();

if (window.location.href.split("/")[window.location.href.split("/").length - 2] == "test") {
    window.onload = () => {
        temp()
        var style = document.createElement("style")
        document.head.appendChild(style)
        style.innerHTML += `:root {
            --color-themes: #8f3620;
        }`
        let a = $.cookie("ans" + $GET("id").split("+")[0]).split(",")
        let obj = {};
        for (let i = 0; i < a.length - 1; i++) {
            obj[a[i].split(":")[0]] = a[i].split(":")[1]
        }
        for (let k in obj) {
            var inp = document.querySelectorAll(`input[name="${k}"]`)
            for (let i = 0; i < inp.length; i++) {
                if (inp[i].id == obj[k]) inp[i].checked = true
            }
        }

    }
}
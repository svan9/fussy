const body = document.body

function temp() {
    fetch("/data/tests.json")
        .then(res => res.json())
        .then(data => {
            let id = $GET("id").split("+")[0]
            if (!(id in data)) {
                body.innerHTML = `<div class="marg message" onclick="MSG$onclick()"><script>function MSG$onclick() {window.location.href = "index.html?page=main";}</script> <div class="head"><label for="head ">Bad requests</label></div><div class="body">Not true link </div></div>`
                return
            } else {
                body.innerHTML += `<div class="marg head"><div class="name">${data[$GET("id").split("+")[0]]["name"]}</div><div class="description">${data[$GET("id").split("+")[0]]["descr"]}</div></div>`

            }
            var value = data[id]

            for (let i in value["questions"]) {
                if (value["questions"][i]["type"] == "point") {
                    var in_ = ``
                    for (let num = 0; num < value["questions"][i]["vars"].length; num++) {
                        in_ += `<div class="radio" name="${i}" >
                    <input type="radio" name="${i}" id="${num+1}">
                    <label for="${i}">${value["questions"][i]["vars"][num]}</label>`
                    }

                    body.innerHTML += `
                <div class="marg card">
                <div class="question"> <label for="question">${i}. ${value["questions"][i]["Q"]}</label>
                <div class="mark">+${value["questions"][i]["mark"]}</div>
                </div>
                <div class="in">
                ${in_}
                </div>`
                }
            }
            body.innerHTML += `<div class='marg btn-group'><div class="btn-send"><label for='btn-send'>send</label></div><div class="btn-clear"><label for='btn-clear'>clean up form</label></div></div>`
            body.innerHTML += ``

        })
}
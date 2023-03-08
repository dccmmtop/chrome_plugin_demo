$(function () {

    findAndClick("button > span", "首页")
    findAndClick("div > button", "立即登录")
    // findAndClick("button > span", "通过 WeChat 登录")
})


function findAndClick(selector, text) {

    let retry = 0
    let id = setInterval(find, 100);

    function find() {
        retry = retry + 1
        console.log("第" + retry + "次查找 " + selector + " " + text)
        $(selector).each(function () {
            if (this.textContent == text) {
                console.log("找到 " + selector + " " + text)
                this.click()
                clearInterval(id)
                return
            }
        });
    }

}
let imgArray = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://niniandblue.com/wp-content/uploads/2021/05/1621553681-720e311691ecf4b22d5aa610e532e45c.jpg",
    "https://www.taimall.com.tw/inc/uploads/2018/06/2-01-7-11-1.jpg",
]
$(function () {
    $("input").on("click", function () {
        // alert("hi");
        // $("h1").text("hello");
        let numberodListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random() * numberodListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",imgArray[randomChildNumber]);

    });

});

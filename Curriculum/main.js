$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount= topic.length;
   let millisecsPerday=24*60*60*1000;
//    let dateObject=(new Date(startDate.getTime()+7*x*millisecsPerday).toLocaleDateString().substring(5));
    for (let x = 0; x <topicCount; x++){
        $("#courseTable").append(
            `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerday).toLocaleDateString())}</td><td>${topic[x]}</td></tr>`
        )

        // $("#courseTable").append(
        //     `<tr><td>${x+1}</td><td>${dateObject}</td><td>${topic[x]}</td></tr>`
        // )
    }

});
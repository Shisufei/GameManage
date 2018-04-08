function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}

function timeSelect(){
    $(".dateSet").click(function () {
        $(".dateSet").removeClass("active");
        $(this).addClass("active");
        var dateSet = $(this).attr("data-content");
        var startTime = "";
        var endTime = "";
        var today= GetDateStr(0);
        if (dateSet == 1) {
            startTime = today + " 00:00:00";
            endTime = today + " 23:59:59";
        }
        else if (dateSet == 2) {
            var yesterday = GetDateStr(-1);
            startTime = yesterday + " 00:00:00";
            endTime = yesterday + " 23:59:59";
        }
        else if (dateSet == 3) {
            var near7 = GetDateStr(-6);
            startTime = near7 + " 00:00:00";
            endTime = today + " 23:59:59";
        }
        else if(dateSet==4){
            var near30=GetDateStr(-29);
            startTime = near30 + " 00:00:00";
            endTime = today + " 23:59:59";
        }
        else if(dateSet==5){
            var near90=GetDateStr(-89);
            startTime = near90 + " 00:00:00";
            endTime = today + " 23:59:59";
        }

        $("#startTime").val(startTime);
        $("#endTime").val(endTime);
        $("#startTime2").val(startTime);
        $("#endTime2").val(endTime);
    });
}

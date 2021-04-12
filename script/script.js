$(function(){

    $("input[type=button]").click(function(){

        var pw = $("#pw").val().trim();
        var pwRE = $("#pwRE").val().trim();

        if( pw != pwRE ) {
            alert("비밀번호가 다릅니다.");
        } else {
            $("form").submit();
        }

    });


    $("#chkbox").click(function(){
        var chked = $(this).prop("checked");
        /*alert("chked : " + chked);*/
        if (chked) {
            $("input.pw").attr("type", "text");
        } else {
            $("input.pw").attr("type", "password");
        }
    });


    /*  출생년도 입력하기 select option 시작 */
    var now = new Date();
    var nowYear = now.getFullYear();  // 현재 년도
    var startYear = nowYear;    // 2021
    var endYear = 1930;

    var txtYear = "<option>년도</option>";
    for(var i = startYear; i>=1930; i--)  {
        // 처음 실행 =>  i값이 2021
        txtYear += "<option>" + i + "</option>";
        // 2회 순환 =>  i값이 2020
        //  ...
        // 마지막 순환 => i값이 1929
    }

    $("#birthYear").html(txtYear);


    /*  출생년도 입력하기 select option 끝 */





});

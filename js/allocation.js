/**
 * Created by luzhaolin on 2017/3/13.
 */
window.onload = getNumber;

function getNumber(){
    var number = document.getElementById("input")
    var num ;
    number.onblur=function(){
        num = number.value;
        if(parseInt(num) == num){
            if(num>3&&num<19)
            {
                allocate(num);
            }
            else{
                alert("请输入4~18的整数!");
                number.value = 8;
            }
        }
        else {
            alert("请输入4~18的整数");
            number.value = 8;
        }
    }
}

function allocate(a){
    var killerNumber = document.getElementById("killerNumber");
    var civilNumber = document.getElementById("civilNumber");
    var killerNum = Math.floor(a/4);
    var civilNum = a - killerNum;
    var killer = "杀手"+killerNum+"人";
    var civil = "平民" +civilNum + "人";
    killerNumber.innerHTML = killer;
    civilNumber.innerHTML = civil;
}



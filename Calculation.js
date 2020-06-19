"use strict";

let num = 0;
let num2 = 0;
let ans = 0;
let kigou;

function func(){
  num = document.getElementById("textbox1").value;
  num2 = document.getElementById("textbox2").value;
  kigou = document.getElementById("select").value;
  if(num === "" || num2 === ""){
    ans = "数値を入力してね";
  }else{
    num = parseInt(num,10);
    num2 = parseInt(num2,10);
    if(kigou === "+"){
      ans = num + num2;
    }else if(kigou === "-"){
      ans = num - num2;
    }else if(kigou === "*"){
      ans = num * num2;
    }else if(kigou === "/"){
      if(num2 === 0){
        ans = "エラー";
      }else{
      ans = num / num2;
      }
    }
  }
  document.getElementById("textbox3").value = ans ;
}

function func1(){
  if(ans === 0){

  }else{
    num = "";
    num2 = "";
    kigou = "+";
    ans = "";
    document.getElementById("textbox1").value = num;
    document.getElementById("textbox2").value = num2;
    document.getElementById("select").value = kigou;
    document.getElementById("textbox3").value = ans;
    console.log(ans);
  }
}

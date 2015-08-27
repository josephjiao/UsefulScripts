// ==UserScript==
// @name         lianjia
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @include     https://licai.lianjia.com/*
// @grant        none
// ==/UserScript==

console.log('put all');
setTimeout(function(){$("strong.qt").click();},100); 

console.log("agree");
setTimeout(function(){$("input:checkbox.bingo").attr("checked", true);},100); 

console.log("submit");
var v = $("input:button.butInfo");
v.click(function () {
    console.log("submit clicked");
    setTimeout(function(){
        console.log("add enter event for jymm");
        $("input:password.jyMms").keydown(function(e){
        if (e.which == 13) {       
            $("input:button.sureBut").click();
            console.log('submit confirm button');
        }
        });
    },100);         
});

setTimeout(function(){$("input:button.butInfo").click();},100); 
console.log("finish");

//for (var i = document.forms.length - 1; i >= 0; i--) {    
    //put all money
//    console.log("=================start=========================");
//    console.log(i);   
//    var elmForm = document.forms[i];        
//    var qtBt = document.evaluate("//strong[@class='c_blue qt']",elmForm, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;        
//    if(qtBt){
//        console.log("put all");
//        qtBt.focus();
//        qtBt.click();
//    }
//        
//    //agree user agreement
//    console.log("Before agreement");
//    var userAgreementInput = document.evaluate("//input[@type='checkbox'][@class='bingo']",	elmForm, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
//    for (var i = 0; i < userAgreementInput.snapshotLength; i++) {
//        console.log("agree agreement");
//        thisInput = userAgreementInput.snapshotItem(i);
//        thisInput.setAttribute('Checked', 'true')   
//    }
//    
//    //submit
//    console.log("Submit");

    
    //submit
//    console.log("Submit");
//    var submitButton = document.evaluate("//input[@type='button'][@class='butInfo']",elmForm, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;    
//    if (submitButton){
//        console.log("submit button");
//        submitButton.focus();    
//        submitButton.click();                
//    }
//    console.log("=================end=========================");
//}




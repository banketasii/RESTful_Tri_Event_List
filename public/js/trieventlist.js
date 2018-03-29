"use strict";
/* RESTful Tri Event List JS */
/* Remove jQuery */
//let ul: JQuery<HTMLElement> = $("ul");
//let delBtns: JQuery<HTMLElement> = $(".del-event-btn");
//let lis: JQuery<HTMLElement> = $("li");
//let txtBx: JQuery<HTMLElement> = $("#event-lstbox-txtbox");
//let openLI: string = '<li><span class="del-event-btn"><i class="fas fa-trash-alt"></i></span> ';
//let closeLIBeg: string = '<img class="event-icon" id="';
//let closeLIEnd: string = 'Icon"></li>';
//let addBtn: JQuery<HTMLElement> = $(".add-event-btn");
//Gets the build string for ul's <li> tag
//function BuildLI(ele: JQuery<HTMLElement>, oLI: string, cLIBeg: string, cLIEnd: string): string{
//  let txtInput: string;
//  let icon: string;
//  txtInput = ele.val().toString();    
//  ele.val("");
//  icon = GetIconName(txtInput);
//  return oLI + txtInput + cLIBeg + icon + cLIEnd;  
//}
//Gets the icon name for the <img class="event-icon"> tag
//function GetIconName(input: string): string{
//  let iconName: string;
//  input = input.toLowerCase();
//  
//  if(input.includes("swim")){
//    iconName = "swim";
//  } else if(input.includes("run") || input.includes("jog")){
//    iconName = "run";
//  } else if(input.includes("bike") || input.includes("cycle")){
//    iconName = "bike";
//  } else{
//    iconName = "finish";
//  }
//  
//  return iconName;
//}
//Delete specific exercises when the <span> is clicked
//Adds eventListener to current and future <span> tags
//ul.on("click", ".del-event-btn", function(event){
//  $(this).parent().fadeOut(500, function(){
//    $(this).remove();
//  });
//  event.stopPropagation();
//});
//Add new <li> tags
//txtBx.on("keypress", function(event){
//  
//  if(event.which === 13){    
//    ul.append(BuildLI($(this), openLI, closeLIBeg, closeLIEnd));
//  }
//});
//
//addBtn.on("click",function(){
//  txtBx.fadeToggle();
//});

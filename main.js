	
let dragger_one = $(".slide_1 .element_5")[0];
var click_macro = "{CLICK_MACRO}";

slide_1_show();
function slide_1_show(){
	$(".slide_1").removeClass("hidden");
    $(".slide_1 .drag").addClass("shake");
}

function slide_2_show(){
	
	$(".slide_1 .element_2").removeClass("pulse");
	$(".slide_1 .element_3").removeClass("pulse");
  	$(".slide_1 .element").filter((id,div)=>!$(div).hasClass("hidden")).addClass('hideZoomOut');
  // $("[class^='dragger_']").addClass('hideZoomOut');
  setTimeout(function() {
  	$(".slide_2").removeClass('hidden').addClass('showZoomIn');
  	$(".slide_2 .element_2").addClass('pulse');
  }, 500);
  $(".pp_wrapper").click(function(){
    window.open(click_macro);
  });
}

if (typeof window.orientation !== 'undefined'){
  dragElementMobile(dragger_one);
}else{
  dragElement(dragger_one);
}


function dragElement( elmnt ) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) 
  {
    $(".slide_1 .element_4").removeClass("shake");
    $(".slide_1 .element_5").removeClass("shake");
    $(".slide_1 .element_4").addClass("hideZoomOut");

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(leftSpace<75 && topSpace<90 ){
      $(".slide_1 .element_5").addClass("hideZoomOut");
      setTimeout(slide_2_show, 600);
      closeDragElement();
    }
    if(leftSpace>175) leftSpace=175;
    if(leftSpace<45) leftSpace=50;
    if(topSpace>160) topSpace=158;
    if(topSpace<60) topSpace=65;

    elmnt.style.top = topSpace + "px";
    elmnt.style.left = leftSpace + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragElementMobile(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  elmnt.ontouchstart = dragMouseDown;
  
  function dragMouseDown(e) {
    $(".slide_1 .element_4").removeClass("shake");
    $(".slide_1 .element_5").removeClass("shake");
    $(".slide_1 .element_4").addClass("hideZoomOut");
    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(leftSpace<75 && topSpace<90 ){
      $(".slide_1 .element_5").addClass("hideZoomOut");
      setTimeout(slide_2_show, 600);
      closeDragElement();
    }
    if(leftSpace>175) leftSpace=175;
    if(leftSpace<45) leftSpace=50;
    if(topSpace>160) topSpace=158;
    if(topSpace<60) topSpace=65;

    elmnt.style.top = topSpace + "px";
    elmnt.style.left = leftSpace + "px";   
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}

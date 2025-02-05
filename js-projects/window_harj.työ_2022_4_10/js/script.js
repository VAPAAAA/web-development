//VR course assignment 1/2

function window_calculation(){

let WindowHeight = Number(document.getElementById("window_height").value /100);
let WindowWidth = Number(document.getElementById("window_width").value /100);
let WindowAmount = Number(document.getElementById("window_amount").value);

//clearing outputs
document.getElementById("wood").innerHTML="";
document.getElementById("woods").innerHTML="";
document.getElementById("glass").innerHTML="";
document.getElementById("glasses").innerHTML="";
document.getElementById("size").innerHTML ="";
document.getElementById("error").innerHTML ="";

//calculations
let WoodREQ = (WindowHeight * 2 + (WindowWidth - 0.06 * 2)*2)*2;
let GlassREQ = (WindowHeight - 0.1) * (WindowWidth - 0.1);
let TotalWoodREQ = WoodREQ * WindowAmount;
let TotalGlassREQ = GlassREQ * WindowAmount;
let totalArea = WindowHeight * WindowWidth;

//sizes
let windowS ="Small window"
let windowM ="Medium window"
let windowL = "Large window"
let windowH = "Huge window"

//errors
let error1 = "Minimum height and width of window is 50cm"
let error2 = "Maximum height and width of window is 200cm"
let error3 = "No amount 1 assumed"
let error4 = "No more than 10 equal size windows"

//defining errors
if(WindowHeight < 0.5 || WindowWidth < 0.5) {
    document.getElementById("error").innerHTML = error1;
}   else if(WindowHeight > 2 || WindowWidth > 2) {
    document.getElementById("error").innerHTML = error2;
}   else if(WindowAmount < 1) {
    document.getElementById("error").innerHTML = error3;
}   else if(WindowAmount > 10) {
    document.getElementById("error").innerHTML = error4;
//outputs
}   else { 
    document.getElementById("wood").innerHTML= WoodREQ.toFixed(2);
    document.getElementById("glass").innerHTML= GlassREQ.toFixed(2);
    document.getElementById("woods").innerHTML= TotalWoodREQ.toFixed(2);
    document.getElementById("glasses").innerHTML= TotalGlassREQ.toFixed(2);

// defining sizes 
if (totalArea <= 0.5) {
    document.getElementById("size").innerHTML=windowS;
}   else if (totalArea <= 1.5) {
    document.getElementById("size").innerHTML=windowM;
}   else if (totalArea <= 2.5) {
        document.getElementById("size").innerHTML=windowL;
}   else {
    document.getElementById("size").innerHTML=windowH;
} 
}
}

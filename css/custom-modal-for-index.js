
//function to open Popup
window.onload=function()
{
//get modal element
var popup=document.getElementById('simplePopup');


popup.style.display='block';

//get close btn
var closeBtn=document.getElementsByClassName('closeBtn')[0];

//get maybe later button
var closeBtn2=document.getElementsByClassName('closePopup')[0];

//Listen for close click 
closeBtn.addEventListener('click',closePopup);
closeBtn2.addEventListener('click',closePopup);

//Listen for outside click
window.addEventListener('click',clickOutside)

//function to close Popup
function closePopup()
{
	popup.style.display='none';
}
//function called when click is outside the popup
function clickOutside(e)
{	if(e.target==popup){
	popup.style.display='none';
	}
}


}


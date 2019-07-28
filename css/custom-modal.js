//get openModal button
var popupBtn=document.getElementById('popupBtn');

//get modal element
var popup=document.getElementById('simplePopup');

//get close btn
var closeBtn=document.getElementsByClassName('closeBtn')[0];

//Listen for open click
popupBtn.addEventListener('click',openPopup);

//Listen for close click 
closeBtn.addEventListener('click',closePopup);

//Listen for outside click
window.addEventListener('click',clickOutside)

//function to open Popup
function openPopup()
{
	popup.style.display='block';
}

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



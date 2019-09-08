<<<<<<< HEAD
//Validating empty fields
function check_empty(){
	if (document.getElementById('name').value ==""||document.getElementById('email').value ==""||document.getElementById('msg').value == ""||document.getElementById('title').value == ""){
		alert("Fill all fields !");
	}else{
		document.getElementById('fform').submit();
		alert("Thanks for dropping by, I'll get back to you within the next 24hours");
	}
	}
	//fuction to display popup
	function div_show(){
		document.getElementById('mform').style.display = "block";
	}
	//function to hide popup
	function div_hide(){
		document.getElementById('mform').style.display = "none";
=======
//Validating empty fields
function check_empty(){
	if (document.getElementById('name').value ==""||document.getElementById('email').value ==""||document.getElementById('msg').value == ""||document.getElementById('title').value == ""){
		alert("Fill all fields !");
	}else{
		document.getElementById('fform').submit();
		alert("Thanks for dropping by, I'll get back to you within the next 24hours");
	}
	}
	//fuction to display popup
	function div_show(){
		document.getElementById('mform').style.display = "block";
	}
	//function to hide popup
	function div_hide(){
		document.getElementById('mform').style.display = "none";
>>>>>>> a614249e795a236c9949abbe2a2b7d87763e78b8
	};
function validate(){
	var name= document.getElementById("name").value;
	var email= document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if(name=="")
	{
		alert("plz enter name");
	return false;
	}
	
	else if(validemail.test(email)=="false"){
		alert("plz enter email");
		return false;
		}
		
	else if(message==""){
		alert("plz enter message");
		return false;
		
	}	
	
}
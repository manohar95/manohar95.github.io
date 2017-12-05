function validation{
	var name=document.getElementById("name").value;
	var name=document.getElementById("email").value;
	var name=document.getElementById("message").value;
	
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
	
	return false;
}
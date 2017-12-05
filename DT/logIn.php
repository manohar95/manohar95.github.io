
<? php	
$con=mysqli_connect("localhost","root","","my_db");
if(mysqli_connect_error($con))
	{
		echo"db not select";
	}

	if(isset($_POST["submit"]))
		$email=$_POST["gmail"];
		$pass=$_POST["passwod"];
		
			
		$query = "SELECT * FROM `login` WHERE 'u_name'='$eail' AND 'password'='$pass';";
		$run=mysqli_query($con,$query);
		$row =mysqli_num_rows($run);
		
		if($row <1)
?>
			<script>
					alert('username or password not match');
					window.open('login.php','_self');
					</script>

<?php
	
else
	{
		$data=mysqli_fetch_assoc($u_name);
		$id=$data['u_name'];
		
		echo "id=".$u_name;
		
	}			
	} 
?>	
					
			
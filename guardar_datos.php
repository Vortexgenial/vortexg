<!--
la linea refresh, le indica al navegador dentro de cuantos seguundos (en este caso cero que significa instantaneamente) se ira a tal url (en este caso index.html del mismo directorio)
!-->
<meta http-equiv="refresh" content="0;url=index.html ">

<?php
//Credenciales
$servername = "sql5.freesqldatabase.com";
$username = "sql5751858";
$password = "CUrU1KaUnQ";
$dbname = "sql5751858";  
$mysqli = new mysqli($servername, $username, $password, $dbname);
//captura de datos pasados desde vortex.html
$nombre = $_POST["Nombre"];
$correo = $_POST["Correo"];
$telefono = $_POST["Telefono"];
//crear y ejecutar consulta php
$query="INSERT INTO Vortexx (Nombre,Correo,Telefono) VALUES('".$Nombre."','".$Correo."','".$Telefono."')";
$mysqli->query($query) or die($mysqli->error.__LINE__);
?>

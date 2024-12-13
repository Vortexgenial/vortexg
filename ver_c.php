<table border=1>
<tr>
<th>id</th>
<th>nombre</th>
<th>correo</th>
<th>telefono</th>
</tr>
    <?php
    Function conectar(){
    $servername = "sql5.freesqldatabase.com";
    $username = "sql5751858";
    $password = CUrU1KaUnQ";
    $dbname = "sql5751858";  
	$conexion = new mysqli($servername, $username, $password, $dbname);
	return $conexion;
}
        $conexion = conectar();
        $query = $conexion->query("SELECT * from Vortexgs");
        $cols_num = 4; $matriz = array(); $f = 0;
        while($celda = $query->fetch_assoc()){$keys = array_keys($celda);for($c=0;$c<$cols_num;$c++){$matriz[$f][$c] = $celda[$keys[$c]];}$f++;}
        foreach ($matriz as $y){echo "<tr>";foreach ($y as $yx){echo "<td>".$yx."</td>";}echo "</tr>";}
    ?>
</table>

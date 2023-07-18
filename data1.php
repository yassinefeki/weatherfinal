<?php
require_once("conn.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    
</head>
<body>
<div class="container d-flex align-items-center " style="margin-top:0em;">
    
<table class="table table-striped border shadow  text-center   ">
  <thead>
    <tr>
      <th scope="col" class="bg-dark text-white">N°</th>
      <th scope="col" class="bg-dark text-white">Date</th>
      <th scope="col" class="bg-dark text-white">Temperature</th>
      <th scope="col" class="bg-dark text-white">Wind Speed</th>
    </tr>
  </thead>
  <tbody>
    <?php
    $sql = "select * from weather";
    $res = $con->query($sql);
    $i=0;
    while ($row=$res->fetch()) {
      $i++;
      echo "
      <tr>
      <th scope='row'>".$i."</th>
      <td>". $row["date"] ."</td>
      <td>". $row["temp"] ."</td>
      <td>". $row["wind"] ."</td>
    </tr>
      
      ";
    }
    ?>
    
   
  </tbody>
</table>

</div>    
    
    
    <?php
    
    /*
        $jsonString = $_POST['json'];

        // Decode the JSON string to a PHP object
        $data = json_decode($jsonString);

        // Access the data
        $name = $data->name;
        $age = $data->age;
        $city = $data->city;

        // Perform operations with the data, if needed

        // Send a response back to JavaScript
        $response = "Received JSON data from JavaScript: Name = $name, Age = $age, City = $city";
        echo $response;
    */
        ?>

    
    
    

       


</body>
</html>

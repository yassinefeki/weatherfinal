<?php
require_once("conn.php");
        $jsonString = $_POST['json'];

        // Decode the JSON string to a PHP object
        $data = json_decode($jsonString);

        // Access the data
        $temp = $data->hourly->temperature_2m;
        $date = $data->hourly->time;
        $wind = $data->hourly->windspeed_10m;
        $ele = $data->utc_offset_seconds;

        // Perform operations with the data, if needed

        // Send a response back to JavaScript
        
        //$response = "$temp[$i]/";
        //echo $response;
        try {
        for ($i=0; $i <720 ; $i++) { 
            
        
    
            //$sql="INSERT INTO `weather` (`id`, `date`, `temp`, `wind`) VALUES (NULL, '".$date[$i]."', '".$temp[$i]."', '".$wind[$i]."');";
            //$sql="UPDATE `weather` SET `date`=100, `temp`=200, `wind` = 300 WHERE `weather`.`id` = 1;";
            $sql="UPDATE `weather` SET `date`='".$date[$i]."', `temp`='".$temp[$i]."', `wind` = '".$wind[$i]."' WHERE `weather`.`id` = '".$i+1 ."';";
    $res=$con->query($sql);}
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    
        
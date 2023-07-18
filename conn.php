   <?php
   $serverName = "localhost";
        $userName = "root";
        $password = "";
        $dbName = "stage";

        try {
            $con = new PDO("mysql:host=$serverName;dbname=$dbName", $userName, $password);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
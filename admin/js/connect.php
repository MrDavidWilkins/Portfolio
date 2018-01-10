<?php
    // This file will connect us to the data base.
    $user = "root";
    $pass = "root";
    // On a PC the password string is always blank.
    //$pass = "";
    $url = "localhost";
    $db = "db_movies";

    //$link = mysqli_connect($url, $user, $pass, $db); //PC
    $link = mysqli_connect($url, $user, $pass, $db, "8888");

    if(mysqli_connect_errno()){
      printf("Connect failed: %s\n", mysqli_connect_error());
      exit();
    }


 ?>

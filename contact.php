<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];



$con = mysqli_connect(
    "chrisperko.net",
    "apollocanis",
    "contactpw123@",
    "apollocanis");

if(mysqli_connect_errno()) {
    echo "Failed to connect to database.<br/>" . mysqli_connect_error();
    return;
}

mysqli_query(
    $con,
    "INSERT INTO contact VALUES ($name, $email, $message, now(), 0)");

mysqli_close($con);

echo 'Email sent. Thank you!';
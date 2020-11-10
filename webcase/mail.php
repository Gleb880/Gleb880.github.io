<?php

$recepient = "gleb-krylov@bk.ru";
$siteName = "Webcase";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nEmail: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
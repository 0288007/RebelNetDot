<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nickname = htmlspecialchars($_POST['nickname']);
    $message = htmlspecialchars($_POST['message']);
    
    $chatLog = fopen("chatlog.txt", "a");
    fwrite($chatLog, "$nickname: $message\n");
    fclose($chatLog);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists("chatlog.txt")) {
        echo nl2br(file_get_contents("chatlog.txt"));
    }
}
?>

<?php

/* https://api.telegram.org/bot5975655516:AAEyvLR7FUZGxNIf8pYSI7_12CfhXSu_xkA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$comment = $_POST['user-comment'];
$token = "5975655516:AAEyvLR7FUZGxNIf8pYSI7_12CfhXSu_xkA";
$chat_id = "-881351540";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий: ' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Great!";
} else {
  echo "Error";
}
// ?>
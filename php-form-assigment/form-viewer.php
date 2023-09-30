<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        error_reporting(E_ALL)
        ini_set('display_errors', 1);
        if ($_SERVER ["REQUEST_METHOD"] == "POST"){
            $contactName = $_POST['contactname']
            $teamName = $_POST['teamname']
            $tournamenttype = $_POST['tournamenttype']
            $indooroutdoor = $_POST['indooroutdoor']
        }
</body>
</html>
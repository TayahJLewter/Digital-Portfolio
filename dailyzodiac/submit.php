<!DOCTYPE html>
<html>
    <body>
    <h1>Your Daily Horoscope</h1>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user-selected zodiac sign from the form
    $zodiacSign = strtolower($_POST["sign"]); // Convert to lowercase to match API format

    // API URL
    $url = "https://astrostyle.com/horoscopes/daily/" .$zodiacSign. "/";

    // Initialize cURL
    $ch = curl_init($url);

    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);

    // Check for cURL errors
    if ($response === false) {
        echo "<p>Error fetching horoscope: " . curl_error($ch) . "</p>";
        curl_close($ch);
        exit;
    }

    curl_close($ch);

      // Display the horoscope
      echo "<p>" . $response . "</p>";
} else {
}
?>

<br><br>
<a href="index.html">Go Back</a> <!-- Link back to the form -->
    </body>
</html>
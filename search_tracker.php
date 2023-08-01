<?php
$serveur = "127.0.0.1:3306";
$utilisateur = "u534274488_mplady";
$motdepasse = "3;MIl`gDycMR:KvFHOva";
$basededonnees = "u534274488_Search_tracker";

$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

if ($connexion->connect_error) {
    die("La connexion à la base de données a échoué : " . $connexion->connect_error);
} else {
    echo "connexion up\n";
}

if (isset($_COOKIE['searchCookie'])) {
    $userInput = $_COOKIE['searchCookie'];

    $requete = "INSERT INTO SearchTracker (terme_recherche, date_recherche) VALUES ('$userInput', NOW())";
    
    if ($connexion->query($requete) === TRUE) {
        echo "Les données ont été enregistrées avec succès dans la base de données.";
    } else {
        echo "Une erreur s'est produite lors de l'enregistrement des données : " . $connexion->error;
    }
} else {
    echo "Aucune valeur de recherche trouvée dans le cookie.";
}

$connexion->close();
?>
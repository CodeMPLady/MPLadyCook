<?php
// Connexion à la base de données (remplacez les valeurs par celles de votre base de données)
$serveur = "154.49.245.122:3306";
$utilisateur = "mplady";
$motdepasse = "3;MIl`gDycMR:KvFHOva";
$basededonnees = "u534274488_Search_tracker";

$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

// Vérifiez la connexion à la base de données
if ($connexion->connect_error) {
    die("La connexion à la base de données a échoué : " . $connexion->connect_error);
}

// Récupérer les données du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userInput = $_POST["search-input"];
    // Vous pouvez ajouter ici une validation ou un nettoyage des données avant de les insérer dans la base de données.

    // Requête d'insertion dans la base de données
    $requete = "INSERT INTO SearchTracker (terme_recherche, date_recherche) VALUES ('$userInput', NOW())";
    
    if ($connexion->query($requete) === TRUE) {
        echo "Les données ont été enregistrées avec succès dans la base de données.";
    } else {
        echo "Une erreur s'est produite lors de l'enregistrement des données : " . $connexion->error;
    }
}

// Fermer la connexion à la base de données
$connexion->close();
?>
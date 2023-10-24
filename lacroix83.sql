-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 24 oct. 2023 à 10:21
-- Version du serveur : 10.5.21-MariaDB-0+deb11u1
-- Version de PHP : 8.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `lacroix83`
--

-- --------------------------------------------------------

--
-- Structure de la table `Categories`
--

CREATE TABLE `Categories` (
  `id_categorie` int(11) NOT NULL,
  `nom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Categories`
--

INSERT INTO `Categories` (`id_categorie`, `nom`) VALUES
(1, 'Jeux vidéos'),
(2, 'Consoles'),
(3, 'Figurines');

-- --------------------------------------------------------

--
-- Structure de la table `Consoles`
--

CREATE TABLE `Consoles` (
  `id_produit` int(11) NOT NULL,
  `id_categorie` int(3) NOT NULL,
  `titre` text NOT NULL,
  `description` text NOT NULL,
  `prix` varchar(16) NOT NULL,
  `url_image` varchar(512) NOT NULL,
  `option_edition` varchar(128) NOT NULL,
  `option_collector` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Consoles`
--

INSERT INTO `Consoles` (`id_produit`, `id_categorie`, `titre`, `description`, `prix`, `url_image`, `option_edition`, `option_collector`) VALUES
(1, 2, 'Nintendo Switch', 'La Nintendo Switch est une console de jeu hybride révolutionnaire qui offre une expérience de jeu polyvalente. Elle vous permet de jouer à la fois sur votre téléviseur et en mode portable. Dotée d\'une bibliothèque de jeux variée, elle offre une diversité de titres, allant des classiques de Nintendo aux jeux tiers populaires. Sa conception ingénieuse, associée aux manettes Joy-Con amovibles, vous permet de jouer avec des amis n\'importe où. La Nintendo Switch incarne la convivialité, la mobilité et l\'amusement pour les joueurs de tous âges.', '290,43', '../assets/switch', '[\'Classique\', \'OLED\', \'Lite\']', '[\'Classique\', \'Mario\', \'Zelda\']'),
(2, 2, 'PlayStation 5', 'Entrez dans un monde où l\'avenir du jeu est à portée de main avec la PlayStation 5, l\'épopée numérique de Sony qui redéfinit les règles du jeu. Découvrez une convergence magique entre innovation technologique et émerveillement interactif, vous plongeant au cœur d\'une expérience de jeu hors du commun.', '483,27', '../assets/playstation_5', '[\'Classique\', \'Slim\']', '[\'Noir\', \'Final Fantasy\']'),
(3, 2, 'XBOX Series X', 'Absorbez l\'atmosphère d\'une nouvelle ère du divertissement vidéoludique avec la Xbox Series X, la console de jeu de nouvelle génération de Microsoft. Conçue pour les joueurs passionnés, cette machine puissante repousse les limites de la technologie, vous propulsant dans une expérience de jeu inégalée.', '479,99', '../assets/xbox_series_x', '[\'Series X\', \'Series S\']', '[\'Classique\', \'Halo\']');

-- --------------------------------------------------------

--
-- Structure de la table `Figurines`
--

CREATE TABLE `Figurines` (
  `id_produit` int(11) NOT NULL,
  `id_categorie` int(3) NOT NULL,
  `titre` text NOT NULL,
  `description` text NOT NULL,
  `prix` varchar(16) NOT NULL,
  `url_image` varchar(512) NOT NULL,
  `option_taille` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Figurines`
--

INSERT INTO `Figurines` (`id_produit`, `id_categorie`, `titre`, `description`, `prix`, `url_image`, `option_taille`) VALUES
(1, 3, 'Figurine Monkey D. Luffy', 'Plongez dans l\'univers épique de One Piece avec notre figurine haut de gamme de Monkey D. Luffy, le capitaine intrépide et élastique de l\'équipage du Chapeau de Paille ! Cette superbe figurine est une pièce de collection incontournable pour tous les fans de la série.', '59,99', '../assets/luffy', '[\'S\',\'M\']'),
(2, 3, 'Figurine Samus Metroid', 'Explorez le monde mystérieux et captivant de Metroid avec notre figurine exceptionnelle de Samus Aran, l\'héroïne intrépide et chasseuse de primes intergalactique. Cette pièce de collection est un hommage incontournable pour les fans de Metroid et de science-fiction.', '119,02', '../assets/samus', '[\'S\',\'M\']'),
(3, 3, 'Figurine Master Chief Halo', 'Plongez dans l\'univers futuriste et épique de la saga Halo avec notre figurine exceptionnelle de Master Chief, le Spartan légendaire et sauveur de l\'humanité. Cette pièce de collection est un hommage incontournable pour les fans de Halo et les amateurs de science-fiction.', '82,12', '../assets/master-chief', '[\'S\',\'M\']');

-- --------------------------------------------------------

--
-- Structure de la table `Jeux Videos`
--

CREATE TABLE `Jeux Videos` (
  `id_produit` int(11) NOT NULL,
  `id_categorie` int(3) NOT NULL,
  `titre` text NOT NULL,
  `description` text NOT NULL,
  `prix` varchar(16) NOT NULL,
  `url_image` varchar(512) NOT NULL,
  `option_edition` varchar(128) NOT NULL,
  `option_plateforme` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Jeux Videos`
--

INSERT INTO `Jeux Videos` (`id_produit`, `id_categorie`, `titre`, `description`, `prix`, `url_image`, `option_edition`, `option_plateforme`) VALUES
(1, 1, 'Halo Infinite', 'L’histoire de Halo Infinite prend la suite de Halo 5 : Guardians et commence en compagnie de deux personnages : John-117, alias le Master Chief, et un pilote de l’UNSC. Ensemble, ils vont devoir mener l’enquête pour comprendre ce qui a provoqué la chute de l’UNSC. En effet, les Parias, emmené par le redoutable Escharum, ont repris le contrôle du Halo Zêta après le crash de l’UNSC Infinity. C’est donc sur cette mégastructure que se déroulera l’essentiel de la campagne de Halo Infinite. Une campagne annoncée comme \"plus humaine\" par les développeurs qui cherchent à insuffler davantage d’émotion dans cet épisode.', '55,63', '../assets/halo_infinite', '[\'Classique\', \'Deluxe\']', '[\'XBOX Series\',\'XBOX One\']'),
(2, 1, 'Super Mario 3D World + Bowser Fury', 'Rejoignez Mario, Luigi, Peach et Toad, et partez à l\'aventure pour sauver le royaume des Libellas dans Super Mario 3D World + Bowser’s Fury sur Nintendo Switch ! En solo ou avec jusqu\'à trois autres joueurs, allez sauver la Princesse Libella et ses sujets dans cette version retravaillée de Super Mario 3D World.Ensuite, en solo ou avec un ami, vous pouvez aider Bowser Jr. à faire retrouver à son Papounet son état normal dans une toute nouvelle aventure bonus : Bowser’s Fury.', '41,15', '../assets/mario_3d_world', '[\'Classique\', \'Deluxe\']', '{\'Switch\',\'WII U\']'),
(3, 1, 'Hogwarts Legacy', 'Hogwarts Legacy : L\'Héritage de Poudlard est un RPG d\'action-aventure immersif en monde ouvert qui se déroule dans l’univers des livres Harry Potter. Pour la première fois, découvrez Poudlard dans les années 1800. Vous incarnez une élève détenant la clé d\'un ancien secret qui menace de déchirer le monde des sorciers. Vous pouvez maintenant prendre le contrôle de l\'action et être au centre de votre propre aventure dans le monde des sorciers. Votre héritage vous appartient.', '47,92', '../assets/hogwarts-legacy', '[\'Classique\', \'Deluxe\']', '[\'PS5\',\'XBOX Series\',\'PS4\',\'XBOX One\']');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `Consoles`
--
ALTER TABLE `Consoles`
  ADD PRIMARY KEY (`id_produit`);

--
-- Index pour la table `Figurines`
--
ALTER TABLE `Figurines`
  ADD PRIMARY KEY (`id_produit`);

--
-- Index pour la table `Jeux Videos`
--
ALTER TABLE `Jeux Videos`
  ADD PRIMARY KEY (`id_produit`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Consoles`
--
ALTER TABLE `Consoles`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Figurines`
--
ALTER TABLE `Figurines`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Jeux Videos`
--
ALTER TABLE `Jeux Videos`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

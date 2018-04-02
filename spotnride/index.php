<!DOCTYPE html>
<html lang="fr">
    <?php
        $title = 'Maxime Charpentier - SpotnRide';
        $description = '';
        include '../inc/head.php';
    ?>
    <body class="body--project" role="document">
        <?php include '../inc/header.php'; ?>
        <section class="section section--heading">
            <img class="heading__image" src="../assets/img/spotnride/spotnride.jpg" alt="Photo du projet SpotnRide">
            <h1 class="heading__title">SpotnRide</h1>
        </section>
        <section class="section section--intro">
            <div class="section__wrapper">
                <time class="section__date">novembre 2017</time>
                <p class="section__type">Intégration / Mobile design</p>
                <h2 class="section__name">SpotnRide</h2>
                <p class="section__text">Réalisation d'une landing page pour un concept d'application mobile : SpotnRide. Une application permettant aux amateurs de sport de glisse de rechercher, trouver et partager des spots à rider en toute simplicité.</p>
                <!--<a class="section__link" href="">Voir le site</a>-->
            </div>
        </section>
        <section class="section section--summary">
            <div class="section__wrapper">
                <ul class="section__indexes">
                    <li class="section__index">
                        <button class="section__button">Contexte</button>
                    </li>
                    <li class="section__index">
                        <button class="section__button">Fonctionnalités</button>
                    </li>
                    <li class="section__index">
                        <button class="section__button">Landing page</button>
                    </li>
                </ul>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Contexte</h3>
                <p class="section__text">Ce projet à été réalisé en groupe de 5 dans le cadre d'une semaine intensive d'intégration à HETIC. Nous avions eu les consignes le lundi, et nous devions présenter notre projet le vendredi matin. Nous avions donc quatre jours pour réaliser une landing page sur un concept de notre choix. Le thème à respecté était "urbain, mais classe", ce qui nous à diriger vers ce projet d'application mobile pour les riders.</p>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Fonctionnalités</h3>
                <p class="section__text">L'objectif était de réaliser l'application la plus simple d'utilisation possible. Pour cela, nous avons pensé l'application autour des fonctionnalités principales.</p>
                <img class="section__image section__image--noshadow" src="../assets/img/spotnride/sketches.png"></img>
                <h4 class="section__subtitle">Map</h4>
                <div class="section__subsection">
                    <div class="section__content">
                        <p class="section__text">Nous avons opté pour un système de carte pour la recherche de spot, qui faisait également office de page d'accueil de l'application. L'idée étant de pouvoir zoomer afin de trouver le spot qui vous convient, et de pouvoir suivre en temps réel vos riders favoris via un filtre sélectionné en haut de l'écran.</p>
                        <ul class="section__list">
                            <li class="section__item section__item--text">Rechercher un spot</li>
                            <li class="section__item section__item--text">Accéder à la page d'un spot</li>
                            <li class="section__item section__item--text">Suivis des riders favoris en temps réel</li>
                        </ul>
                    </div>
                    <img class="section__image section__image--spotnride section__image--1" src="../assets/img/spotnride/map.jpg" alt="Image des fiches de films spotnride">
                </div>
                <h4 class="section__subtitle">Recherche avancée</h4>
                <div class="section__subsection">
                    <div class="section__content section__content--2">
                        <p class="section__text">Toujours sur l'onglet map, l'utilisateur à la possibilité de faire une recherche de spot avancée selon différents critères.</p>
                    </div>
                    <img class="section__image section__image--spotnride section__image--2" src="../assets/img/spotnride/filters.jpg" alt="Image des fiches de films spotnride">
                </div>
                <h4 class="section__subtitle">Page des spots</h4>
                <div class="section__subsection">
                    <div class="section__content">
                        <p class="section__text">Les pages de spots permettent à l'utilisateur d'obtenir différents renseignements sur le spot comme la note des autres utilisateurs l'ayant expérimenté auparavant. De cette manière, l'utilisateur peut se faire un avis solide sur le spot et savoir si celui-ci lui correspond avant de se lancer. L'utilisateur a également la possibilité de laisser un avis, voir des images du spot, mais également de l'aimer, le partager ou le mettre dans ses spots favoris pour y accéder plus facilement ultérieurement.</p>
                    </div>
                    <img class="section__image section__image--spotnride section__image--3" src="../assets/img/spotnride/spot.jpg" alt="Image des fiches de films spotnride">
                </div>
                <h4 class="section__subtitle">Page de profil</h4>
                <div class="section__subsection">
                    <div class="section__content section__content--4">
                        <p class="section__text">La page de profil permet aux différents riders d'interagir facilement entre eux au sein même de l'application. Les utilisateurs peuvent accéder aux spots favoris des autres utilisateurs, suivre leur activité, ou tout simplement leur envoyé un message privé.</p>
                    </div>
                    <img class="section__image section__image--spotnride section__image--4" src="../assets/img/spotnride/profil.jpg" alt="Image des fiches de films spotnride">
                </div>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Landing page</h3>
                <p class="section__text">Visant un jeune public, nous avons opté pour un design simple, épuré et coloré afin de faire passé un message claire et mettre en avant les différents mockups de l'application ainsi que les principales fonctionnalités. Pour ne pas désintéresser le visiteur, nous avons jugé plus efficaces l'utilisation d'images plutôt qu'une présence trop importante de texte. Le but n'étant pas de rentrer dans le détail, mais plutôt de convaincre le visiteur de télécharger l'application afin qu'il puisse la découvrir par lui-même.</p>
                <img class="section__image section__image--shadow" src="../assets/img/spotnride/sketch.jpg" alt="Image des fiches de films spotnride">
            </div>
        </section>
        <footer class="section section--counter section--footer">
            <div class="section__wrapper">
                <nav class="section__nav">
                    <a class="section__link section__link--previous" href="../filmatics">Projet précédent</a>
                    <a class="section__link section__link--next" href="../nespresso">Projet suivant</a>
                </nav>
                <?php include '../inc/social.php' ?>
            </div>
        </footer>
        <?php include '../inc/modal.php'; ?>
        <script src="../assets/js/global.js"></script>
        <script src="../assets/js/project.js"></script>
        <?php include '../inc/analytics.php'; ?>
    </body>
</html>
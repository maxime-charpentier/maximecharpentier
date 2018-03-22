<!DOCTYPE html>
<html lang="fr">
    <?php
        $title = 'Maxime Charpentier - Nespresso';
        $description = '';
        include '../inc/head.php';
    ?>
    <body class="body--project" role="document">
        <?php include '../inc/header.php'; ?>
        <section class="section section--heading">
            <img class="heading__image" src="../assets/img/nespresso/nespresso.jpg" alt="Photo du projet Nespresso">
            <h1 class="heading__title">Nespresso</h1>
        </section>
        <section class="section section--intro">
            <div class="section__wrapper">
                <time class="section__date">novembre 2017</time>
                <p class="section__type">Homepage Redesign</p>
                <h2 class="section__name">Nespresso.com</h2>
                <p class="section__text">Redesign complet de la homepage du site de Nespresso. Le but était d’améliorer l’expérience utilisateur du site actuel tout en réflétant plus efficacement les valeurs de la marque.</p>
            </div>
        </section>
        <section class="section section--summary">
            <div class="section__wrapper">
                <ul class="section__indexes">
                    <li class="section__index">
                        <button class="section__button">Ton adopté</button>
                    </li>
                    <li class="section__index">
                        <button class="section__button">Objectifs</button>
                    </li>
                    <li class="section__index">
                        <button class="section__button">Analyse du site</button>
                    </li>
                    <li class="section__index">
                        <button class="section__button">Produit final</button>
                    </li>
                </ul>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Ton adopté</h3>
                <p class="section__text">Avant de commencer, je me suis d’abord renseigner sur l’identité de la marque, qu’elle image la marque Nespresso souhaite t-elle  transmettre à ses clients.</p>
                <div class="calibration">
                    <div class="calibration__item">
                        <p class="calibration__text">Grand public</p>
                        <div class="calibration__bar">
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot calibration__dot--active"></div>
                            <div class="calibration__dot"></div>
                        </div>
                        <p class="calibration__text">Luxieux</p>
                    </div>
                    <div class="calibration__item">
                        <p class="calibration__text">Friendly</p>
                        <div class="calibration__bar">
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot calibration__dot--active"></div>
                            <div class="calibration__dot"></div>
                        </div>
                        <p class="calibration__text">Professionnel</p>
                    </div>
                    <div class="calibration__item">
                        <p class="calibration__text">Masculin</p>
                        <div class="calibration__bar">
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot calibration__dot--active"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                        </div>
                        <p class="calibration__text">Féminin</p>
                    </div>
                    <div class="calibration__item">
                        <p class="calibration__text">Inhabituel</p>
                        <div class="calibration__bar">
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot"></div>
                            <div class="calibration__dot calibration__dot--active"></div>
                            <div class="calibration__dot"></div>
                        </div>
                        <p class="calibration__text">Familié</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Objectifs</h3>
                <p class="section__text">Je me suis ensuite renseigné sur quels étaient les principaux objectifs de la marque.</p>
                <ul class="section__list">
                    <li class="section__item">Vendre du café</li>
                    <li class="section__item">Vendre des machines</li>
                    <li class="section__item">Vendre une expertise</li>
                    <li class="section__item">Vendre du luxe</li>
                    <li class="section__item">Vendre du rêve</li>
                </ul>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Analyse du site</h3>
                <p class="section__text">La première chose qu’on peut remarquer est que le site actuel de Nespresso est surchagé d’information, rendant compliqué l’expérience l’utilisateur. La hiérarchisation de l’information est presque inexistante et les éléments graphiques dépassés.</p>
                <img class="section__image" src="../assets/img/nespresso/nespresso_old.jpg" alt="Image du site actuel Nespresso">
                <p class="section__text">Le site ne représente pas les valeurs de la marque.</p>
                <h4 class="section__subtitle">Points clés</h4>
                <ul class="section__list">
                    <li class="section__item section__item--text">Réorganiser la bar de navigation pour garder l’essentiel</li>
                    <li class="section__item section__item--text">Simplifier et structurer la navigation sur la page</li>
                    <li class="section__item section__item--text">Créer un interface plus moderne et luxieuse</li>
                    <li class="section__item section__item--text">Mettre en avant l’aspect écologique et équitable de la marque</li>
                </ul>
            </div>
        </section>
        <section class="section section--counter">
            <div class="section__wrapper">
                <h3 class="section__title">Produit final</h3>
                <p class="section__text">Une page d’accueil minimaliste, réorganiser de manière à ce que tout le monde puisse l’utiliser en toute simplicité.</p>
                <img class="section__image" src="../assets/img/nespresso/nespresso_redesign.jpg" alt="Image du site Nespresso redesigné">
            </div>
        </section>
        <?php include '../inc/modal.php'; ?>
        <script src="../assets/js/global.js"></script>
        <?php include '../inc/analytics.php'; ?>
    </body>
</html>
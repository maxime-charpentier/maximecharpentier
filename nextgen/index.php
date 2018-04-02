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
            <img class="heading__image" src="../assets/img/thumbnail/nextgen.jpg" alt="Photo du projet NextGen">
            <h1 class="heading__title">NextGen</h1>
        </section>
        <section class="section section--intro section--nextgen">
            <div class="section__wrapper">
                <time class="section__date">décembre 2017</time>
                <p class="section__type">Intégration</p>
                <h2 class="section__name">NextGen</h2>
                <p class="section__text">Ce projet consistait à intégrer une maquette desktop d'un site d'agence type, entièrement responsive.</p>
                <a class="section__link" href="nextgen/demo/">Voir le site</a>
                <img class="section__image" src="../assets/img/nextgen/nextgen_desktop.jpg" alt="Image du site actuel Nespresso">
                <a class="section__link section__link--bottom" href="">Voir le site</a>
            </div>
        </section>
        <footer class="section section--counter section--footer">
            <div class="section__wrapper">
                <nav class="section__nav">
                    <a class="section__link section__link--previous" href="../nespresso">Projet précédent</a>
                    <a class="section__link section__link--next" href="../filmatics">Projet suivant</a>
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
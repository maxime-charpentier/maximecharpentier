<!DOCTYPE html>
<html lang="fr">
    <?php
        $title = 'Maxime Charpentier - A propos';
        $description = '';
        include '../inc/head.php';
    ?>
    <body class="body--about" role="document">
        <?php include '../inc/header.php'; ?>
        <main class="about">
            <div class="about__wrapper">
                <div class="about__decoration">
                    <div class="about__line"></div>
                    <div class="about__line"></div>
                    <div class="about__line"></div>
                    <div class="about__line"></div>
                    <div class="about__line"></div>
                </div>
                <h3 class="about__title" role="heading">Nice to<br>meet <span class="about__title__underline">you.</span></h3>
                <ul class="social">
                    <li class="social__item">
                        <a class="social__link" href="mailto:maximecharpentier0@gmail.com" rel="nofollow" role="link">
                            <img class="social__icon" src="../assets/img/mail.svg" alt="Logo de l'e-mail de Maxime Charpentier">
                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="https://www.linkedin.com/in/maximecharpentier" rel="nofollow" target="_blank" role="link">
                            <img class="social__icon" src="../assets/img/linkedin.svg" alt="Logo du Linkedin de Maxime Charpentier">
                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="https://github.com/maxime-charpentier" rel="nofollow" target="_blank" role="link">
                            <img class="social__icon" src="../assets/img/github.svg" alt="Logo du Github de Maxime Charpentier">
                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="https://twitter.com/" rel="nofollow" target="_blank" role="link">
                            <img class="social__icon" src="../assets/img/twitter.svg" alt="Logo du Twitter de Maxime Charpentier">
                        </a>
                    </li>
                </ul>
                <div class="about__container">
                    <div class="about__images">
                        <img class="about__image" src="../assets/img/profil.jpg" alt="Picture of Maxime Charpentier"/>
                        <img class="about__image" src="../assets/img/profil2.jpg" alt="Picture of Maxime Charpentier"/>
                    </div>
                    <div class="about__content">
                        <p class="about__text">Je m'appelle Maxime Charpentier, je suis un <strong class="about__text__highlight">développeur</strong> de 20 ans situé à Paris. Je suis actuellement étudiant à HETIC et <strong class="about__text__highlight">passionné</strong> par le développement front-end.</p>
                        <p class="about__text">J'affectionne particulièrement le langage JavaScript qui me permet d'exploiter chaque jour (et nuit) ma créativité à coup de lignes et de lignes de code.</p>
                        <p class="about__text">Malgré une addiction indéniable pour le front-end (je me soigne), je m'intéresse également beaucoup au développement back-end ainsi qu'au WebDesign (parce que les trucs beaux, c'est cool).</p>
                        <p class="about__text">Je recherche actuellement un stage de juin à septembre 2017 ainsi qu’une alternance à partir d’octobre 2018 en tant que développeur front-end et blagueur en option.
                        Je suis extrêmement motivé, curieux et déterminé à donner le meilleur de moi-même.</p>
                        <ul class="about__social" role="list">
                            <li class="about__item" role="listitem">
                                <a class="about__link" href="mailto:maximecharpentier0@gmail.com" rel="nofollow" target="_blank" role="link">Email</a>
                            </li>
                            <li class="about__item" role="listitem">
                                <a class="about__link" href="https://www.linkedin.com/in/maximecharpentier" rel="nofollow" target="_blank" role="link">Linkedin</a>
                            </li>
                            <li class="about__item" role="listitem">
                                <a class="about__link" href="https://github.com/maxime-charpentier" rel="nofollow" target="_blank" role="link">Github</a>
                            </li>
                            <li class="about__item" role="listitem">
                                <a class="about__link" href="https://twitter.com/" rel="nofollow" target="_blank" role="link">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <?php include '../inc/modal.php'; ?>
        <script src="../assets/js/global.js"></script>
        <script src="../assets/js/about.js"></script>
        <?php include 'inc/analytics.php'; ?>
    </body>
</html>
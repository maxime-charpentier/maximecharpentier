<!DOCTYPE html>
<html lang="fr">
    <?php
        $title = 'Maxime Charpentier - Front-end Developer';
        $description = '';
        include 'inc/head.php';
    ?>
    <body class="body--projects" role="document">
        <div class="body__wrapper">
            <?php include 'inc/header.php'; ?>
            <div class="wrapper">
                <main class="works works--slider" role="main">
                    <div class="display">
                        <button class="display__button display__button--slider" role="button">
                            <svg class="display__icon display__icon--slider display__icon--active" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <rect rx="2" ry="2" width="24" height="24">
                            </svg>
                        </button>
                        <button class="display__button display__button--grid" role="button">
                            <svg class="display__icon display__icon--grid" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" width="10.5" height="10.5" rx="2" ry="2"/>
                                <rect x="13" y="0" width="10.5" height="10.5" rx="2" ry="2"/>
                                <rect x="0" y="13" width="10.5" height="10.5" rx="2" ry="2"/>
                                <rect x="13" y="13" width="10.5" height="10.5" rx="2" ry="2"/>
                            </svg>
                        </button>
                    </div>
                    <?php include 'inc/social.php'; ?>
                    <div class="works__container">
                        <article class="work" role="article" itemscope itemtype="http://schema.org/BlogPosting">
                            <a class="work__thumbnail" href="filmatics" rel="bookmark" itemprop="url" role="link"></a>
                            <div class="work__content" role="contentinfo">
                                <p class="work__type">Intégration / JavaScript</p>
                                <h2 class="work__title" itemprop="headline" role="heading">
                                    <a class="work__link" href="filmatics" rel="bookmark" itemprop="url" role="link">Filmatics</a>
                                </h2>
                                <p class="work__description">Réalisation d'un site de streaming de fanfilms gratuit visant à mettre en avant les réalisateurs et leurs créations.</p>
                                <a class="work__button" href="filmatics" rel="bookmark" itemprop="url" role="link">explorer <b class="work__button__bold">le projet</b></a>
                            </div>
                        </article>
                        <article class="work" role="article" itemscope itemtype="http://schema.org/BlogPosting">
                            <a class="work__thumbnail" href="spotnride" rel="bookmark" itemprop="url" role="link"></a>
                            <div class="work__content" role="contentinfo">
                                <p class="work__type">Intégration / Design</p>
                                <h2 class="work__title" itemprop="headline" role="heading">
                                    <a class="work__link" href="spotnride" rel="bookmark" itemprop="url" role="link">SpotnRide</a>
                                </h2>
                                <p class="work__description">Réalisation d'une landing page pour un concept d'application mobile : SpotnRide. Une application permettant aux amateurs de sport de glisse de rechercher, trouver et partager des spots à rider en toute simplicité.</p>
                                <a class="work__button" href="spotnride" rel="bookmark" rel="bookmark" itemprop="url" role="link">explorer<b class="work__button__bold">le projet</b></a>
                            </div>
                        </article>
                        <article class="work" role="article" itemscope itemtype="http://schema.org/BlogPosting">
                            <a class="work__thumbnail" href="nespresso" rel="bookmark" itemprop="url" role="link"></a>
                            <div class="work__content" role="contentinfo">
                                <p class="work__type">Redesign</p>
                                <h2 class="work__title" itemprop="headline" role="heading">
                                    <a class="work__link" href="nespresso" rel="bookmark" itemprop="url" role="link">Nespresso</a>
                                </h2>
                                <p class="work__description">Un redesign complet de la page d'accueil du site de Nespresso, visant à améliorer l'expérience utilisateur tout en respectant les valeurs et l'identité de la marque : minimaliste et élégant.</p>
                                <a class="work__button" href="nespresso" rel="bookmark" rel="bookmark" itemprop="url" role="link">explorer <b class="work__button__bold">le projet</b></a>
                            </div>
                        </article>
                        <article class="work" role="article" itemscope itemtype="http://schema.org/BlogPosting">
                            <a class="work__thumbnail" href="nextgen" rel="bookmark" itemprop="url" role="link"></a>
                            <div class="work__content" role="contentinfo">
                                <p class="work__type">Intégration</p>
                                <h2 class="work__title" itemprop="headline" role="heading">
                                    <a class="work__link" href="nextgen" rel="bookmark" itemprop="url" role="link">NextGen</a>
                                </h2>
                                <p class="work__description">Intégration entièrement responsive d'un site d'agence type.</p>
                                <a class="work__button" href="nextgen" rel="bookmark" itemprop="url" role="link">explorer <b class="work__button__bold">le projet</b></a>
                            </div>
                        </article>
                    </div>
                    <nav class="nav">
                        <div class="nav__wrapper">
                            <button class="nav__button nav__button--active" role="button"></button>
                            <button class="nav__button" role="button"></button>
                            <button class="nav__button" role="button"></button>
                            <button class="nav__button" role="button"></button>
                        </div>
                    </nav>
                </main>
            </div>
        </div>
        <?php include 'inc/modal.php'; ?>
        <script src="assets/js/global.js"></script>
        <script src="assets/js/script.js"></script>
        <?php include 'inc/analytics.php'; ?>
    </body>
</html>
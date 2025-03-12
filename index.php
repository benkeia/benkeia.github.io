<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/mode.css">
    <link rel="stylesheet" href="assets/css/button.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/voirplus.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio | Baptiste SAEGAERT</title>
</head>

<body>
    <main>

        <div style="position: relative;
    top:0;">
            <svg
                width="1000"
                height="2000"
                viewBox="0 0 1000 2000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="squiggle">

                <path
                    d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
                    stroke="#6e56cf"
                    stroke-width="30"
                    stroke-linejoin="round"
                    stroke-linecap="round" />
            </svg>
        </div>
        <nav>
            <img src="assets/img/Logo.svg" alt="">
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li><a href="Projets/index.html">Projets</a></li>

                <li><a href="contact.html">Me contacter</a></li>

            </ul>
        </nav>

        <h1 style="display: none;"> Enchanté, je m'appelle Baptiste, actuellement étudiant en développement web, design graphique, audiovisuel, UI/UX design</h1>

        <div id="container">
            <div>
                <div class="test">
                    <span id="hello">
                        <p class="variable">Enchanté !</p>
                        <img src="assets/img/emoji.png" id="emoji" class="waving-hand" alt="">
                    </span>
                    <p class="variable">
                        Je m'appelle Baptiste,
                    </p>
                    <p class="variable">actuellement étudiant en</p>


                    <p> <span id="typewriter"></span><span id="cursor">|</span></p>
                </div>

            </div>
            <div>
                <img id="portrait" src="assets/img/Photo.png" alt="Un portrait de moi">

            </div>

        </div>





        <section>
            <h2>
                Je travaille majoritairement avec
            </h2>

            <div class="soft-container">

                <div class="soft-subcontainer">

                    <div class="soft">
                        <img class="soft-icon" src="icons/Adobe.svg" alt="">
                        <p>Adobe Creative Cloud</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/AfterEffect.svg" alt="">
                        <p>Adobe After Effects</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Illustrator.svg" alt="">
                        <p>Adobe Illustrator</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Illustrator.svg" alt="">
                        <p>Adobe Lightroom</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Photoshop.svg" alt="">
                        <p>Adobe Photoshop</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/PremierePro.svg" alt="">
                        <p>Adobe Premiere Pro</p>
                    </div>

                </div>
                <div class="soft-subcontainer">

                    <div class="soft">
                        <img class="soft-icon" src="icons/HTML.svg" alt="">
                        <p>HTML</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/CSS.svg" alt="">
                        <p>CSS</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Javascript.svg" alt="">
                        <p>Javascript</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/html.svg" alt="">
                        <p>html</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Wordpress.svg" alt="">
                        <p>Wordpress</p>
                    </div>
                    <div class="soft">
                        <img class="soft-icon" src="icons/Github.svg" alt="">
                        <p>Github</p>
                    </div>

                </div>


            </div>


            <style>

            </style>


        </section>



        <section>
            <h2>
                Ces projets me tiennent à cœur
            </h2>


            <div class="project-container">

                <div class="project">

                    <img src="assets/img/vinyle laylow.png" alt="Projet 1">

                    <div class="side">

                        <h3>
                            Vinyle Laylow
                        </h3>

                        <button class="voir" onclick="window.location.href='Projets/Vinyle.html'">
                            Voir plus
                        </button>


                    </div>




                </div>
                <div class="project">

                    <img src="assets/img/cinecrazy.png" alt="Projet 1">
                    <div class="side">

                        <h3>
                            Cinécrazy
                        </h3>

                        <button class="voir" onclick="window.location.href='Projets/Cinecrazy.html'">
                            Voir plus
                        </button>

                    </div>



                </div>
                <div class="project">

                    <img src="assets/img/skates.png" alt="Projet 1">


                    <div class="side">

                        <h3>
                            Share Skatepark
                        </h3>

                        <button class="voir" onclick="window.location.href='Projets/Shareskate.html'">
                            Voir plus
                        </button>
                    </div>


                </div>

            </div>

            <div class="centrons">
                <button class='voirplus voirplus1'>Voir tout mes projets</button>
                <style>
                    .voirplus1 {

                        margin-top: 30px;

                    }
                </style>
                <script>
                    document.querySelector('.voirplus1').addEventListener('click', () => {
                        window.location.href = 'Projets/index.html';
                    });
                </script>
            </div>
        </section>


        <section>

            <div class="work-container">
                <div class="work-text">
                    <h2 class="CV">Télécharger mon CV</h2>
                    <p class="CV-p">
                        Actuellement en deuxième année de BUT Métiers du Multimédia et de l'Internet (MMI), je suis à la recherche d'une alternance pour ma troisième année à partir de septembre 2025.
                        Passionné par le développement web et le design d'interfaces, je souhaite intégrer une entreprise dynamique où je pourrai mettre en pratique mes compétences tout en continuant à apprendre et à évoluer. Mon parcours m’a permis de développer des compétences variées en Développement frontend, et je suis motivé à contribuer activement à vos projets.
                    </p>
                    <div class="centrons">
                        <button class='voirplus voirplus3'>Télécharger mon CV</button>
                    </div>
                    <style>
                        .voirplus3 {

                            margin-top: 30px;

                        }
                    </style>
                    <script>
                        document.querySelector('.voirplus3').addEventListener('click', () => {
                            window.open('assets/cv/Saegaert_Baptiste_CV.pdf', '_blank');
                        });
                    </script>

                </div>
                <img src="assets/cv/Saegaert_Baptiste_CV.png" alt="">
            </div>



        </section>

        <style>
            .CV-p {
                line-height: 1.5;
            }

            .CV {
                margin: 0;
                margin-bottom: 40px;
            }

            .work-container {
                margin: 100px 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                gap: 20px;
                padding: 50px;
                background-color: var(--violet-8);
            }

            .work-container img {
                height: fit-content;
                width: 100%;
                max-width: 300px;
                margin: 0 auto;
            }

            .work-text {
                align-self: center;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                .work-container {
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;

                }

                .work-container img {
                    width: 100%;
                    max-width: 300px;
                    margin: 0 auto;
                }

                .work-text {
                    align-self: center;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }



            }
        </style>

    </main>




    <footer>

        <div class="footer-container">
            <div class="footer-subcontainer">
                <h3>Me contacter</h3>
                <p>Mail : <a href="mailto:baptiste.saegaert@gmail.com"> baptiste.saegaert@gmail.com </a>
                <p>Téléphone : <a href="tel:+336 51 27 75 08"> 06 51 27 75 08 </a>
            </div>
            <div class="footer-subcontainer">
                <h3>Réseaux sociaux</h3>

                <div class="socials-container">
                    <a href="https://www.linkedin.com/in/baptiste-saegaert/" target="_blank">
                        <img src="assets/img/icons/LinkedIn.png" alt="LinkedIn">
                    </a>
                    <a href="https://github.com/benkeia" target="_blank">
                        <img src="assets/img/icons/Github.png" alt="GitHub">
                    </a>
                    <a href="https://www.instagram.com/bptoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                        <img src="assets/img/icons/Instagram.png" alt="Instagram">
                    </a>
                    <a href="https://www.behance.net/baptistesaegaert" target="_blank">
                        <img src="assets/img/icons/Behance.png" alt="Behance">
                    </a>
                </div>

            </div>
            <div class="footer-subcontainer">
                <h3>Navigation</h3>

                <a href="Projets/index.html">Projets</a>

                <a href="contact.html">Me contacter</a>


            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 Baptiste Saegaert - Tous droits réservés</p>
        </div>

    </footer>

    <style>
        footer {
            background-color: var(--violet-7);
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .footer-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .footer-subcontainer {
            width: 100%;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 20px;
        }

        .footer-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .socials-container {
            display: flex;
            gap: 20px;
        }

        .socials-container img {
            width: 50px;
            height: 50px;
        }

        @media (min-width: 768px) {
            .footer-container {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
            }

            .footer-subcontainer {
                width: 28vw;
            }
        }
    </style>







    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const toggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector("nav ul");

            toggle.addEventListener("click", () => {
                toggle.classList.toggle("active");
                navLinks.classList.toggle("active");
            });
        });
    </script>


    <script src="assets/js/scroll.js"></script>
    <script src="assets/js/dark.js"></script>
    <script src="assets/js/variable.js"></script>
    <script src="assets/js/typewriter.js"></script>





</body>

</html>
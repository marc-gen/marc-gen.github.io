<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 <!--   <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>--> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">  
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
 <link rel="stylesheet" href="./css/accueil.css" /> 
    <link rel="stylesheet" href="">
</head>
<body>

  <header id="ma_navigation">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img  class="logo" src="./images/logo-marc.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#anchor-about">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./projets.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-anchor">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!--------------  bannière   -------------------------> 

    <section></section>
      <div class="over-section">
          <div class="texte-intro">
              <div class="image-conteneur">
                <img src="./images/Marc_photo.JPG" alt="">
              </div>
              <div class="info-conteneur">
                <h1>Marc Généreux</h1>
                <h2>Développeur Web</h2>
                <h1>
<?php   
                $variable = "Salut, test en php";
                $number = 42;
                echo $variable ." ---- " .$number;
                include "./header_component.php";
                echo createHeader();
            ?>
</h1>
              </div>
          </div>
          <img class="ordi-dessin" src="./graphiques-elements/ordi-jaunes.svg" alt="">
    </div>
<!------------------  À propos   ----------------------> 
    <div  id="about">
      <div id="anchor-about"></div>
      <div class="container  about-container">
        <div class="row section-presentation-skill">
   
          <div class="col">
            <img class="mokup-about" src="./images/mockupid-584460-original.png" alt="">
          </div>
          <div class="col">
            <h2 id="about-title">Bonjour!</h2>
            <p class="presentation" >Je suis un programmeur web avec de solides connaissances et j'ai 14 mois d'expérience dans le domaine.
              J’ai aussi développé mes aptitudes à la résolution de problème, le souci du détail et j'ai le sens des responsabilités.
            </p>

            <div class="row language-row">
              <h2 class="titre-languages">Mes compétences</h2>
              <!--  <h3>Languages</h3> --> 
            <div class="all-skill">
                  <div class="conteneur-skill">
                        <div class="row">
                          <div class="col col-languages">HTML</div>
                          <div class="col col-languages">CSS</div>
                      </div>
                      <div class="row">
                            <div class="col">
                              <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level html"></div>
                            </div>
                            <div class="col">
                              <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level css"></div>
                            </div>
                      </div>
                  </div>
                  <div class="conteneur-skill">
                        <div class="row" >
                          <div class="col col-languages">PHP</div>
                          <div class="col col-languages">LARAVEL</div>
                      </div>
                      <div class="row">
                            <div class="col">
                              <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level php"></div>
                            </div>
                            <div class="col">
                              <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level laravel"></div>
                            </div>
                      </div>
                  </div>
                  <div class="conteneur-skill">
                        <div class="row">
                          <div class="col col-languages">JAVASCRIPT</div>
                          <div class="col col-languages">VUE.JS</div>
                        </div>
                        <div class="row">
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level js"></div>
                              </div>
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level vue"></div>
                              </div>
                        </div>
                  </div>
                  <div class="conteneur-skill">
                        <div class="row">
                            <div class="col col-languages">WORDPRESS</div>
                            <div class="col col-languages">JQUERY</div>
                        </div>
                        <div id="anchor-skill-anim" ></div>
                        <div class="row">
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level wordPress"></div>
                              </div>
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level jquery"></div>
                              </div>
                        </div> 
                  </div>
                  <div class="conteneur-skill"> 
                        <div class="row">
                          <div class="col col-languages">PHOTOSHOP</div>
                          <div class="col col-languages">ILLUSTRATOR</div>
                        </div>
                        <div class="row">
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level ps"></div>
                              </div>
                              <div class="col">
                                <div class="div-skill"></div><div class="skill-container"></div> <div class="skill-level ai"></div>
                              </div>
                        </div>
                  </div>
            </div>
<!--
              <div class="row ">
                <div class="col">
                  <div class="skill-container"></div> <div class="skill-level"></div>
                </div>
                <div class="col">
                </div><div class="skill-container"></div> <div class="skill-level"></div>
                </div>--> 
              

        

            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  <!------------------  Contact   ----------------------> 

  <div class="container  experience-container">
      <h2>Expérience Web</h2>
      <div class="row">
        <h3>Formation</h3>
          <div class="col col-indicateur">
            
            <h4>AEC - Conception et programmation de sites Web</h4>
            <p>Cégep de Saint-Jérome - Saint-Jérôme, QC</p>
            <p>Mai 2020 à Septembre 2021</p>
          </div>
         
      </div>

      <div class="row">
              <h3>Expérience professionnelle</h3>
              
              <div class="col col-indicateur">
                <h4>Intégrateur Web/Programmeur</h4>
                <p>Cienapps - Prévost, QC</p>
                <p>Juin 2022 à Octobre 2022</p>
                <ul>
                  <li>Intégration et programmation de fonctionnalités Web sur WordPress (Divi). Utilisation des langages suivants : HTML, CSS, PHP, Javascript et Jquery.</li>
                  <li>Utilisation de Photoshop et Illustrator pour des éléments graphiques.</li>
                  <li>L’intégration était en lien avec les sites déjà existants suivants :</li>
                  <li><a href="https://cienapps.com/">Cienapps</a>, <a href="https://cieblink.com/">Cieblink</a>et <a href="https://ciemetric.com/">Ciemetric</a>  </li>
                  <li>Utilisation du WLangage dans WinDev pour le logiciel Cienapps.</li>
                </ul>
              </div>
              
              <div class="col col-indicateur">
                <h4>Intégrateur Web</h4>
                <p>La petite boite web - Piedmont, QC</p>
                <p>Septembre 2021 à Mai 2022</p>
                <ul>
                  <li>Intégration et programmation de fonctionnalités Web sur WordPress (Divi, WPBakery, Tatsu builder).</li>
                  <li>Forte utilisation de code HTML, CSS, PHP, Javascript et Jquery.</li>
                  <li>Utilisation de Photoshop et Illustrator pour des éléments graphiques.</li>
                  <li>Exemple de réalisation : <a href="https://www.journallenord.com/">Journal Le Nord</a> </li>
                </ul>
              </div>
      </div>   
  </div>



<!------------------  Contact   ----------------------> 
  <div class="contact-container">
      <div id="contact-title">
        <h2 >Contact</h2>
        <div class="row contact-row">
          <div class="col">
            <p class="mail-p" ><a href="mailto:marc_gen@hotmail.com"><img class="mail-icon" src="./images/mail.png" alt=""></a></p>
          </div>
          <div class="col">
            <p class="tel"><a href="tel:14383762207"><img class="phone-icon" src="./images/phone.png" alt=""></a></p>
          </div>
        </div>
      </div>
      <div id="contact-anchor" class="contact"></div>
  </div>
  </body>
<footer>
 <a class="raw-pixel" href="https://www.rawpixel.com/">Image by rawpixel.com</a> 
 <p class="copy-right ">Copyright © 2023</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src="./js/accueil.js" ></script>
</html>
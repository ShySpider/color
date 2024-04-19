let blocCouleur = document.getElementById("couleur"); //contient la couleur à deviner
let score = document.getElementById("score"); //on recupere le score
let reponses = [...document.getElementsByClassName("reponse")]; //on recup les reponses et pour faire un tableau on destructure avec [...]

let compteurScore = 0;
let rgbADeviner; //garder en tete la bonne valeur

const genererEntierPourRgb = () => {
  return Math.floor(Math.random() * 256); // entier entre 0 et 255
};

const genererRgb = () => {    //creer nbres aleatoires
  let r = genererEntierPourRgb();
  let g = genererEntierPourRgb();
  let b = genererEntierPourRgb();

  return `rgb(${r},${g},${b})`;    //Backticks (altgr et 7 `` ). integrent des variables dynamiques
};

const initialiser = () => { 
  score.textContent = compteurScore; //mettre à  jour le score et le stocker dans la variable compteur score
  let reponseCorrecte = Math.floor(Math.random() * 4); // genere un nbre aleatoire entre 0 et 3 dans un tableau l'index commence à 0 donc de 0 à 3 

  reponses.forEach((rep) => (rep.textContent = genererRgb()));
  rgbADeviner = reponses[reponseCorrecte].textContent; //on prend une valeur parmi les 4 et on decide que c la bonne reponse

  blocCouleur.style.backgroundColor = rgbADeviner; //on affecte la couleur correcte au gros bloc qui sera la couleur a deviner
  blocCouleur.style.border = "4px solid grey"; // Ajoute une bordure noire de 2 pixels
};

const verifierReponse = (e) => {
  let valeurCliquee = e.target.textContent; //on recup l'element html et le code rgb de la boite cliquee

  if (valeurCliquee != rgbADeviner) { //si la valeur est differente != de la reponse à deviner
    window.alert(`Vous avez perdu ! La réponse était ${rgbADeviner}`);
    compteurScore = 0;
    return initialiser(); //pour remettre le compteur a 0
  }

  compteurScore++;
  initialiser(); // pour generer de nouvelle valeur
};

reponses.forEach((rep) => {
  rep.addEventListener("click", verifierReponse); //pour chaque clic on appelle verif reponse
});

initialiser();

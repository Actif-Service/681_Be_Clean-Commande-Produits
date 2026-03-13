(function(){
  emailjs.init("UIMYUuF1YijZh1DFI");
})();

function escapeHTML(str){
  if(!str) return "";
  return str.replace(/[&<>"']/g,function(m){
    return({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
  });
}

const chantiersBEClean=[
{nom:"AKROPOLIS",adresse:"Luitberg, 25 1853 Strombeek-Bever"},
{nom:"APOLLO 95-97",adresse:"Grotexinkellaan, 95-97 1853 Strombeek-Bever"},
{nom:"ECTA",adresse:"Rue de Trèves, 49-51 1040 Etterbeek"},
{nom:"EPHA",adresse:"Rue de Trèves, 49-51 1040 Etterbeek"},
{nom:"ERS",adresse:"Rue de Trèves, 49-51 1040 Etterbeek"},
{nom:"GROENDAL",adresse:"Sint-Annalaan, 74 1800 Vilvoorde"},
{nom:"STONE",adresse:"Steenstraat, 59 1800 Vilvoorde"},
{nom:"BWT",adresse:"Leuvensesteenweg, 633 1930 Zaventem"}
];

const produits=[
  { nom: "Ajax citron", image: "https://actif-service.github.io/Commande-Produits/images/Ajax%20citron.jpg" },
  { nom: "Glass 2000 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Glass%202000%201%20litre.jpg" },
  { nom: "Sani-day 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Sani-day%201%20litre.jpg" },
  { nom: "Detarsan 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Detarsan_1litre.jpg" },
  { nom: "Dreft 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Dreft%201%20litre.jpg" },
  { nom: "WC Gel avec Javel", image: "https://actif-service.github.io/Commande-Produits/images/WC%20Gel%20avec%20Javel.jpg" },
  { nom: "Gant de ménage Taille S", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20S.jpg" },
  { nom: "Gant de ménage Taille M", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20M.jpg" },
  { nom: "Gant de ménage Taille L", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20L.jpg" },
  { nom: "Lavette micro fibre", image: "https://actif-service.github.io/Commande-Produits/images/Lavette%20micro%20fibre.jpg" },
  { nom: "Torchon Micro fibre 50 x 70cm", image: "https://actif-service.github.io/Commande-Produits/images/Torchon%20Micro%20fibre%2050%20x%2070cm.jpg" },
  { nom: "Ballot - 48 rouleaux papier WC", image: "https://actif-service.github.io/Commande-Produits/images/Ballot%20-%2048%20rouleaux%20papier%20WC.jpg" },
  { nom: "Papier Zig Zag", image: "https://actif-service.github.io/Commande-Produits/images/Papier%20Zig%20Zag.jpg" },
  { nom: "Maxi Jumbo Papernet", image: "https://actif-service.github.io/Commande-Produits/images/Maxi%20Jumbo%20Papernet.jpg" },
  { nom: "Papier Toilette Mini Jumbo", image: "https://actif-service.github.io/Commande-Produits/images/Papier%20Toilette%20Mini%20Jumbo.jpg" },
  { nom: "Brosse coco 30 cm", image: "https://actif-service.github.io/Commande-Produits/images/Brosse%20coco%2030%20cm.jpg" },
  { nom: "Brosse de rue + manche", image: "https://actif-service.github.io/Commande-Produits/images/Brosse%20de%20rue%20+%20manche.jpg" },
  { nom: "Raclette Sol 45 cm", image: "https://actif-service.github.io/Commande-Produits/images/Raclette%20Sol%2045%20cm.jpg" },
  { nom: "Ramassette + brosse", image: "https://actif-service.github.io/Commande-Produits/images/Ramassette%20+%20brosse.jpg" },
  { nom: "Sacs poubelle bleus 70 x 110cm", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20bleus%2070%20x%20110cm.jpg" },
  { nom: "Sacs poubelle jaunes 70 x 110cm", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20jaunes%2070%20x%20110cm.jpg" },
  { nom: "Sacs poubelle noirs 70 x 110cm 50µ", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20noirs%2070%20x%20110cm%2050µ.jpg" },
  { nom: "Tête de Loup", image: "https://actif-service.github.io/Commande-Produits/images/Tête%20de%20Loup.jpg" },
  { nom: "Cube urinoir Nicols", image: "https://actif-service.github.io/Commande-Produits/images/Cube_urinoir_Nicols.jpg" },
  { nom: "Eau de javel 5 litres", image: "https://actif-service.github.io/Commande-Produits/images/Eau%20de%20javel%205%20litres.jpg" },
  { nom: "Vinaigre 1,5 litres", image: "https://actif-service.github.io/Commande-Produits/images/Vinaigre%201,5litres.jpg" },
  { nom: "Sac aspirateur Aero 8", image: "https://actif-service.github.io/Commande-Produits/images/sac%20aspirateur%20Aero%208.jpg" },
  { nom: "Sac aspirateur Vento 8", image: "https://actif-service.github.io/Commande-Produits/images/sac%20aspirateur%20Vento%208.jpg" },
];

document.addEventListener("DOMContentLoaded",()=>{

const chantierSelect=document.getElementById("chantier");
const produitsContainer=document.getElementById("produits");

chantiersBEClean.forEach(c=>{
const option=document.createElement("option");
option.value=c.adresse;
option.textContent=c.nom;
chantierSelect.appendChild(option);
});

produits.forEach(p=>{

const div=document.createElement("div");
div.className="produit";

div.innerHTML=`
<div class="img-container">
<img src="${p.image}">
</div>
<span>${p.nom}</span>
<div class="quantite-container">
<button type="button" class="moins">-</button>
<input type="number" min="0" value="0" class="quantite" data-nom="${p.nom}">
<button type="button" class="plus">+</button>
</div>
`;

produitsContainer.appendChild(div);

const input=div.querySelector(".quantite");

div.querySelector(".plus").addEventListener("click",()=>{
input.value=(parseInt(input.value)||0)+1;
});

div.querySelector(".moins").addEventListener("click",()=>{
input.value=Math.max(0,(parseInt(input.value)||0)-1);
});

});

document.getElementById("formCommande").addEventListener("submit",function(e){

e.preventDefault();

const societe="BE Clean";
const chantier=escapeHTML(document.getElementById("chantier").value.trim());
const nom=escapeHTML(document.getElementById("nom").value.trim());
const autre=escapeHTML(document.getElementById("autre").value.trim());

if(!chantier||!nom){
alert("Veuillez sélectionner un chantier et entrer votre nom.");
return;
}

let texteCommande=`Commande BE Clean\n\nChantier : ${chantier}\nNom : ${nom}\n\nProduits :\n`;

document.querySelectorAll(".quantite").forEach(input=>{
if(Number(input.value)>0){
texteCommande+=`${input.dataset.nom} : ${input.value}\n`;
}
});

if(autre){
texteCommande+=`\nAutre demande : ${autre}`;
}

emailjs.send("service_kt6gmbs","template_53rynh4",{
societe,
chantier,
nom,
commande:texteCommande
}).then(()=>{
alert("Commande envoyée !");
document.getElementById("formCommande").reset();
document.querySelectorAll(".quantite").forEach(i=>i.value=0);
}).catch(()=>{
alert("Erreur lors de l'envoi.");
});

});

});

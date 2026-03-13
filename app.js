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
{nom:"Ajax citron",image:"images/Ajax citron.jpg"},
{nom:"Glass 2000 1 litre",image:"images/Glass 2000 1 litre.jpg"},
{nom:"Sani-day 1 litre",image:"images/Sani-day 1 litre.jpg"},
{nom:"Detarsan 1 litre",image:"images/Detarsan_1litre.jpg"},
{nom:"Dreft 1 litre",image:"images/Dreft 1 litre.jpg"},
{nom:"WC Gel avec Javel",image:"images/WC Gel avec Javel.jpg"},
{nom:"Gant de ménage Taille S",image:"images/Gand de ménage Taille S.jpg"},
{nom:"Gant de ménage Taille M",image:"images/Gand de ménage Taille M.jpg"},
{nom:"Gant de ménage Taille L",image:"images/Gand de ménage Taille L.jpg"},
{nom:"Lavette micro fibre",image:"images/Lavette micro fibre.jpg"},
{nom:"Torchon Micro fibre 50 x 70cm",image:"images/Torchon Micro fibre 50 x 70cm.jpg"},
{nom:"Ballot - 48 rouleaux papier WC",image:"images/Ballot - 48 rouleaux papier WC.jpg"},
{nom:"Papier Zig Zag",image:"images/Papier Zig Zag.jpg"},
{nom:"Maxi Jumbo Papernet",image:"images/Maxi Jumbo Papernet.jpg"},
{nom:"Papier Toilette Mini Jumbo",image:"images/Papier Toilette Mini Jumbo.jpg"},
{nom:"Brosse coco 30 cm",image:"images/Brosse coco 30 cm.jpg"}
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

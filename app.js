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
{nom:"AKROPOLIS"},
{nom:"APOLLO 95-97"},
{nom:"ECTA"},
{nom:"EPHA"},
{nom:"ERS"},
{nom:"GROENDAL"},
{nom:"STONE"},
{nom:"BWT"}
];

const produits=[
{ nom:"Ajax citron", image:"https://actif-service.github.io/Commande-Produits/images/Ajax%20citron.jpg"},
{ nom:"Glass 2000 1 litre", image:"https://actif-service.github.io/Commande-Produits/images/Glass%202000%201%20litre.jpg"},
{ nom:"Sani-day 1 litre", image:"https://actif-service.github.io/Commande-Produits/images/Sani-day%201%20litre.jpg"},
{ nom:"Detarsan 1 litre", image:"https://actif-service.github.io/Commande-Produits/images/Detarsan_1litre.jpg"},
{ nom:"Dreft 1 litre", image:"https://actif-service.github.io/Commande-Produits/images/Dreft%201%20litre.jpg"},
{ nom:"WC Gel avec Javel", image:"https://actif-service.github.io/Commande-Produits/images/WC%20Gel%20avec%20Javel.jpg"},
{ nom:"Gant de ménage Taille S", image:"https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20S.jpg"},
{ nom:"Gant de ménage Taille M", image:"https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20M.jpg"},
{ nom:"Gant de ménage Taille L", image:"https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20L.jpg"}
];

document.addEventListener("DOMContentLoaded",()=>{

const chantierSelect=document.getElementById("chantier");
const produitsContainer=document.getElementById("produits");

chantiersBEClean.forEach(c=>{
const option=document.createElement("option");
option.value=c.nom;
option.textContent=c.nom;
chantierSelect.appendChild(option);
});

produits.forEach(p=>{

const div=document.createElement("div");
div.className="produit";

div.innerHTML=`
<div class="img-container">
<img src="${p.image}" alt="${p.nom}">
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

div.querySelector(".plus").addEventListener("click",()=>{input.value=(parseInt(input.value)||0)+1;});
div.querySelector(".moins").addEventListener("click",()=>{input.value=Math.max(0,(parseInt(input.value)||0)-1);});

});

document.getElementById("formCommande").addEventListener("submit",function(e){
e.preventDefault();

const societe="BE Clean";
const chantier=escapeHTML(document.getElementById("chantier").value);
const nom=escapeHTML(document.getElementById("nom").value);
const autre=escapeHTML(document.getElementById("autre").value);

const now=new Date();
const date=now.toLocaleDateString("fr-BE");
const heure=now.toLocaleTimeString("fr-BE",{hour:"2-digit",minute:"2-digit"});

let tableau=`<table style="border-collapse:collapse;font-family:Arial;font-size:14px;margin:auto;margin-top:20px;border:2px solid #555">
<thead>
<tr style="background:#1976d2;color:white">
<th style="border:1px solid #999;padding:8px 12px;text-align:left;">Produit</th>
<th style="border:1px solid #999;padding:8px;width:80px;text-align:center;">Quantité</th>
</tr>
</thead>
<tbody>`;

let ligne=0;

document.querySelectorAll(".quantite").forEach(input=>{
if(Number(input.value)>0){
ligne++;
const couleur=ligne%2===0?"#bbdefb":"#ffffff";
tableau+=`<tr style="background:${couleur}">
<td style="border:1px solid #ccc;padding:8px 12px;text-align:left;">${escapeHTML(input.dataset.nom)}</td>
<td style="border:1px solid #ccc;padding:8px;text-align:center;font-weight:bold;">${input.value}</td>
</tr>`;
}
});

tableau+="</tbody></table>";

const messageHTML=`
<div style="font-family:Arial;max-width:600px;margin:auto">

<div style="text-align:center;margin-bottom:15px">
<img src="https://actif-service.github.io/Commande-Produits/images/logo-actif-service.png" style="max-width:180px;">
</div>

<p style="text-align:right;font-size:13px">${date} - ${heure}</p>

<div style="border:2px solid #1976d2;padding:10px;text-align:center;font-weight:bold;font-size:16px;margin-bottom:15px">
Chantier : ${chantier}
</div>

<p><b>Nom :</b> ${nom}</p>

${tableau}

${autre ? `<div style="margin-top:15px"><b>Autre demande :</b><br>${autre}</div>` : ""}

</div>
`;

emailjs.send("service_kt6gmbs","template_53rynh4",{
societe,
chantier,
nom,
commande:messageHTML
}).then(()=>{
alert("Commande envoyée !");
document.getElementById("formCommande").reset();
document.querySelectorAll(".quantite").forEach(i=>i.value=0);
});

});

});

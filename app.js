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
const chantier=escapeHTML(document.getElementById("chantier").value);
const nom=escapeHTML(document.getElementById("nom").value);
const autre=escapeHTML(document.getElementById("autre").value);

const maintenant=new Date();
const date=maintenant.toLocaleDateString("fr-BE");
const heure=maintenant.toLocaleTimeString("fr-BE",{hour:"2-digit",minute:"2-digit"});

let tableau=`
<table style="width:100%;border-collapse:collapse;font-family:Arial;font-size:14px">

<thead>
<tr style="background:#1976d2;color:white">
<th style="border:1px solid #ccc;padding:10px;text-align:left">Produit</th>
<th style="border:1px solid #ccc;padding:10px;text-align:center;width:80px">Qté</th>
</tr>
</thead>

<tbody>
`;

let ligne=0;

document.querySelectorAll(".quantite").forEach(input=>{

if(Number(input.value)>0){

ligne++;
const couleur=ligne%2===0?"#bbdefb":"#ffffff";

tableau+=`
<tr style="background:${couleur}">
<td style="border:1px solid #ccc;padding:10px">${escapeHTML(input.dataset.nom)}</td>
<td style="border:1px solid #ccc;padding:10px;text-align:center;width:80px">${input.value}</td>
</tr>
`;

}

});

tableau+=`</tbody></table>`;

const messageHTML=`

<div style="font-family:Arial">

<table style="width:100%;border-collapse:collapse;margin-bottom:20px">

<tr>

<td style="width:33%;text-align:left">
<b>Société :</b> ${societe}<br>
<b>Technicien :</b> ${nom}
</td>

<td style="width:33%;text-align:center">

<div style="
border:2px solid #4CAF50;
border-radius:8px;
padding:12px;
background:#f7fff7;
">

<div style="font-size:14px;color:#666">CHANTIER</div>
<div style="font-size:18px;font-weight:bold;color:#000">
${chantier}
</div>
<div style="font-size:14px;color:#666;margin-top:4px">
${chantiersBEClean.find(c=>c.nom===chantier)?.adresse || ""}
</div>

</div>

</td>

<td style="width:33%;text-align:right">
${date}<br>${heure}
</td>

</tr>

</table>

${tableau}

${autre?`<p><b>Autre demande :</b><br>${autre}</p>`:""}

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

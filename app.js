(function(){
  emailjs.init("UIMYUuF1YijZh1DFI");
})();

function escapeHTML(str){
  if(!str) return "";
  return str.replace(/[&<>"']/g,function(m){
    return({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
  });
}

// 🔥 récupérer le client dans l'URL
const params = new URLSearchParams(window.location.search);
const client = params.get("client");

// ❌ si pas de client
if(!client){
  document.body.innerHTML = "<h2 style='text-align:center'>Lien invalide</h2>";
  throw new Error("Client manquant");
}

// 🔥 charger la config
fetch(`configs/${client}.json`)
  .then(res => {
    if (!res.ok) throw new Error("Config introuvable");
    return res.json();
  })
  .then(CONFIG => {
    initApp(CONFIG);
  })
  .catch(() => {
    document.body.innerHTML = "<h2 style='text-align:center'>Configuration introuvable</h2>";
  });

function initApp(CONFIG){
  const { societe, chantiers, produits } = CONFIG;

  // Mettre à jour dynamiquement le titre de la page avec le nom de la société
  document.title = `Commande de produits - ${societe}`;

  // Remplir le champ société avec la valeur dynamique
  document.getElementById("societe").value = societe;

  const chantierSelect = document.getElementById("chantier");
  const produitsContainer = document.getElementById("produits");

  // Remplir la liste des chantiers
  chantiers.forEach(c => {
    const option = document.createElement("option");
    option.value = c.nom;
    option.textContent = c.nom;
    chantierSelect.appendChild(option);
  });

  // Remplir la liste des produits
  produits.forEach(p => {
    const div = document.createElement("div");
    div.className = "produit";
    div.innerHTML = `
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

    const input = div.querySelector(".quantite");

    div.querySelector(".plus").addEventListener("click", () => {
      input.value = (parseInt(input.value) || 0) + 1;
    });

    div.querySelector(".moins").addEventListener("click", () => {
      input.value = Math.max(0, (parseInt(input.value) || 0) - 1);
    });
  });

  // Gestion du formulaire
  document.getElementById("formCommande").addEventListener("submit", function (e) {
    e.preventDefault();

    const chantier = escapeHTML(document.getElementById("chantier").value);
    const nom = escapeHTML(document.getElementById("nom").value);
    const autre = escapeHTML(document.getElementById("autre").value);

    const maintenant = new Date();
    const date = maintenant.toLocaleDateString("fr-BE");
    const heure = maintenant.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" });

    const messageHTML = `
      <div style="font-family:Arial, sans-serif; font-size:14px; color:#000;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr>
            <td style="width:33%;text-align:left;">
              <b>Société :</b> ${societe}<br>
              <b>Demandeur :</b> ${nom}
            </td>
            <td style="width:33%;text-align:center; border: 1px solid #a5d6a7; background:#f0fff0; border-radius:8px; padding:12px;">
              <div style="font-size:14px; color:#666;">CHANTIER</div>
              <div style="font-size:18px; font-weight:bold; color:#000;">${chantier}</div>
              <div style="font-size:14px; color:#666; margin-top:4px;">${chantiers.find(c => c.nom === chantier)?.adresse || ""}</div>
            </td>
            <td style="width:33%;text-align:right;">
              ${date}<br>${heure}
            </td>
          </tr>
        </table>

        <table style="width:100%;border-collapse:collapse; font-family:Arial, sans-serif; font-size:14px;">
          <thead>
            <tr style="background:#1976d2; color:white;">
              <th style="border:1px solid #ccc; padding:10px; text-align:left;">Produit</th>
              <th style="border:1px solid #ccc; padding:10px; text-align:center; width:80px;">Qté</th>
            </tr>
          </thead>
          <tbody>
            ${[...document.querySelectorAll(".quantite")]
            .filter(input => Number(input.value) > 0)
            .map((input, i) => `
              <tr style="background:${i % 2 === 0 ? '#ffffff' : '#cde6ff'};">
                <td style="border:1px solid #ccc; padding:10px;">${escapeHTML(input.dataset.nom)}</td>
                <td style="border:1px solid #ccc; padding:10px; text-align:center;">${input.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        ${autre ? `<p><b>Autre demande :</b><br>${autre}</p>` : ''}
      </div>
    `;

    emailjs.send("service_kt6gmbs", "template_53rynh4", {
      societe,
      chantier,
      nom,
      commande: messageHTML
    }).then(() => {
      alert("Commande envoyée !");
      document.getElementById("formCommande").reset();
      document.querySelectorAll(".quantite").forEach(i => i.value = 0);
    });
  });
}

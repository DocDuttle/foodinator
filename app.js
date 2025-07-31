// Zugriff auf die Lebensmitteldaten
const { hauptgang, beilage, gemuese, dessert } = lebensmittel;

// Hilfsfunktion: Dropdown mit Optionen befüllen
function fillSelect(selectId, options) {
  const select = document.getElementById(selectId);
  select.innerHTML = ""; // vorherige Optionen löschen
  options.forEach(opt => {
    const option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });
}

// Menüanzeige aktualisieren
function showMenu() {
  const auswahl = {
    hauptgang: document.getElementById("hauptgang").value,
    beilage: document.getElementById("beilage").value,
    gemuese: document.getElementById("gemuese").value,
    dessert: document.getElementById("dessert").value
  };

  const ausgabe = document.getElementById("menue");
  ausgabe.innerHTML = `
    <h2>Dein Menü:</h2>
    <ul>
      <li><strong>Hauptgang:</strong> ${auswahl.hauptgang}</li>
      <li><strong>Beilage:</strong> ${auswahl.beilage}</li>
      <li><strong>Gemüse:</strong> ${auswahl.gemuese}</li>
      <li><strong>Dessert:</strong> ${auswahl.dessert}</li>
    </ul>
  `;
}

// Dropdowns initial befüllen
window.onload = () => {
  fillSelect("hauptgang", hauptgang);
  fillSelect("beilage", beilage);
  fillSelect("gemuese", gemuese);
  fillSelect("dessert", dessert);

  // Menüanzeige bei Änderung der Auswahl
  document.getElementById("hauptgang").addEventListener("change", showMenu);
  document.getElementById("beilage").addEventListener("change", showMenu);
  document.getElementById("gemuese").addEventListener("change", showMenu);
  document.getElementById("dessert").addEventListener("change", showMenu);

  // Sofortige Anzeige des Standardmenüs
  showMenu();
};

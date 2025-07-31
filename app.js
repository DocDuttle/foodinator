const beilage = {
  Schnitzel: ["Pommes", "Kartoffelsalat"],
  Pasta: ["Tomatensauce", "Käsesauce"]
};

document.getElementById("hauptgang").addEventListener("change", function () {
  const selected = this.value;
  const beilageOptions = beilage[selected];
  const beilageSelect = document.getElementById("beilage");
  beilageSelect.innerHTML = "";
  beilageOptions.forEach(opt => {
    const option = document.createElement("option");
    option.textContent = opt;
    beilageSelect.appendChild(option);
  });
});

// Init bei Start
document.getElementById("hauptgang").dispatchEvent(new Event("change"));
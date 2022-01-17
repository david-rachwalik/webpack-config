import "./styles/index.css";

const elvenArmor = {
    resistance_physical: 12,
    potency: 4,
    spirit: 6,
};

const elvenBow = {
    potency: 28,
    potency_wind: 6,
    spirit: 3,
};

console.log(elvenArmor);
console.log(elvenBow);

// Display on page
const elvenArmorEl = document.getElementById("elvenArmor");
if (elvenArmorEl) elvenArmorEl.innerHTML = JSON.stringify(elvenArmor);
const elvenBowEl = document.getElementById("elvenBow");
if (elvenBowEl) elvenBowEl.innerHTML = JSON.stringify(elvenBow);

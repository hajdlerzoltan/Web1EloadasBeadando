// ALAP OSZTÁLY
class Character {

    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    render() {

        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.width = "200px";

        const title = document.createElement("h3");
        title.innerText = this.name;

        const hpText = document.createElement("p");
        hpText.innerText = "HP: " + this.hp;

        card.appendChild(title);
        card.appendChild(hpText);

        document.body.appendChild(card);
    }
}

// LESZÁRMAZOTT OSZTÁLY (extends + super)
class Warrior extends Character {

    constructor(name, hp, damage) {
        super(name, hp);
        this.damage = damage;
    }

    render() {

        const card = document.createElement("div");
        card.style.border = "2px solid red";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.width = "200px";
        card.style.background = "#1a6e00";

        const title = document.createElement("h3");
        title.innerText = this.name + " (Warrior)";

        const hpText = document.createElement("p");
        hpText.innerText = "HP: " + this.hp;

        const dmgText = document.createElement("p");
        dmgText.innerText = "Damage: " + this.damage;

        card.appendChild(title);
        card.appendChild(hpText);
        card.appendChild(dmgText);

        document.body.appendChild(card);
    }
}

// OBJEKTUMOK LÉTREHOZÁSA
const c1 = new Character("Mage", 80);
const c2 = new Warrior("Knight", 120, 25);
const c3 = new Warrior("Barbarian", 150, 40);

// MEGJELENÍTÉS
c1.render();
c2.render();
c3.render();
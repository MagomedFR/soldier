let soldier = {
  name: "Chuck Norris",
  health: 10,
  weapon: {
    weaponName: "Automatic rifle",
    bullets: 30,
  },
  supplies: 3,

  shoot: function () {
    this.weapon.bullets--;
    console.log("бах-бах");
    if (this.weapon.bullets == 0) {
      console.log("обойма пуста. Перезаредитесь");
    }
  },
  recharge: function () {
    if (this.weapon.bullets < 30) {
      this.weapon.bullets = 30;
      this.supplies--;
      console.log("перезарядка..");
    }
    if (this.supplies == 0) {
      console.log("не осталось припасов");
    }
  },
  hurt: function () {
    this.health--;
    if (this.health <= 0) {
      console.log("Ты проиграл");
    }
  },
};

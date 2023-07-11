class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
  
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
  
    vikingAttack() {
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = this.saxonArmy[saxonIndex];
      const viking = this.vikingArmy[vikingIndex];
  
      const result = saxon.receiveDamage(viking.strength);
      if (saxon.health <= 0) {
        this.saxonArmy.splice(saxonIndex, 1);
      }
  
      return result;
    }
  
    saxonAttack() {
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = this.saxonArmy[saxonIndex];
      const viking = this.vikingArmy[vikingIndex];
  
      const result = viking.receiveDamage(saxon.strength);
      if (viking.health <= 0) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
  
      return result;
    }
  
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }
  
  module.exports = War;
  

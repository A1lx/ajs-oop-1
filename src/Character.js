export default class Character {
  constructor(name, type, attack, defence) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === 'string' && name.length > 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 3 до 10 символов');
    }

    if (typeArr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неизвестный класс персонажа');
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('create class Character', () => {
  const expected = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Character('Robin', 'Bowman', 25, 25)).toEqual(expected);
});

test('testing name error', () => {
  expect(() => { new Character('Ro', 'Bowman', 25, 25); }).toThrow(new Error('Длина имени должна быть от 3 до 10 символов'));
});

test('testing type error', () => {
  expect(() => { new Character('Hero', 'Knight', 25, 25); }).toThrow(new Error('Неизвестный класс персонажа'));
});

test('create class Bowman', () => {
  const expected = {
    name: 'Hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Hero')).toEqual(expected);
});

test('create class Swordsman', () => {
  const expected = {
    name: 'Hero',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Hero')).toEqual(expected);
});

test('create class Magician', () => {
  const expected = {
    name: 'Hero',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Hero')).toEqual(expected);
});

test('create class Daemon', () => {
  const expected = {
    name: 'Hero',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Hero')).toEqual(expected);
});

test('create class Undead', () => {
  const expected = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Hero')).toEqual(expected);
});

test('create class Zombie', () => {
  const expected = {
    name: 'Hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Hero')).toEqual(expected);
});

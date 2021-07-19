import Team from '../Team';

test('Team iterate', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const char2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 20,
    defence: 40,
  };
  const char3 = {
    name: 'Маг',
    type: 'Magician',
    health: 30,
    level: 1,
    attack: 40,
    defence: 5,
  };
  team.addAll(char1, char2, char3);

  const result = [];
  for (const key of team) {
    result.push(key);
  }

  expect(result).toEqual([char1, char2, char3]);
});

test('add 1 teammate', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  team.add(char1);
  expect(team.members).toContain(char1);
  expect(team.members.size).toBe(1);
});

test('add non-inique', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  team.add(char1);
  expect(() => team.add(char1)).toThrowError();
});

test('add all 4 teammate', () => {
  const team = new Team();
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const char2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 20,
    defence: 40,
  };
  const char3 = {
    name: 'Маг',
    type: 'Magician',
    health: 30,
    level: 1,
    attack: 40,
    defence: 5,
  };
  team.addAll(char1, char2, char3);
  expect(team.members).toContain(char1, char2, char3);
  expect(team.members.size).toBe(3);
});

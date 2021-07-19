export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...all) {
    for (const key of all) {
      this.members.add(key);
    }
  }

  [Symbol.iterator]() {
    const membIt = Array.from(this.members.values());
    let i = 0;
    return {
      next() {
        i += 1;
        if (i <= membIt.length) {
          return {
            done: false,
            value: membIt[i - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

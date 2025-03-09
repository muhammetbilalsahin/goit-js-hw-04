let profile = {
  username: 'Jacob',
  playTime: 300,
  getInfo: function () {
    return `${this.username} has ${this.playTime} active hours!`;
  },
  changeUsername: function (newName) {
    this.username = newName;
  },
  updatePlayTime: function (hours) {
    this.playTime += hours;
  },
};

console.log(profile.getInfo());
profile.changeUsername('Marco');
console.log(profile.getInfo());
profile.updatePlayTime(20);
console.log(profile.getInfo());

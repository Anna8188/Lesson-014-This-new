"use strict";
function Playlist(...list) {
  this.list = list;
  this.songID = 0;
}
function Song(...arr) {
  this.songList = arr;
}
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
Playlist.prototype.add = function (obj) {
  this.list.push(...obj.songList);
};
Playlist.prototype.play = function () {
  return `${this.list[this.songID]} started to play.`;
};
Playlist.prototype.next = function () {
  this.songID++;
  if (this.songID === this.list.length - 1) {
    this.songID = 0;
    return `${this.list[this.list.length - 1]} stopped, ${
      this.list[0]
    } started.`;
  } else {
    return `${this.list[this.songID - 1]} stopped, ${
      this.list[this.songID]
    } started.`;
  }
};
Playlist.prototype.stop = function () {
  return `${this.list[this.songID]} stopped.`;
};
playlist.add(heyJude);
playlist.add(jaded);
// playlist.play(); // Hey Jude started to play
// playlist.next(); // Hey Jude stopped, Jaded started
// playlist.next(); // Jaded stopped, Hey Jude started
// // playlist.stop(); // Hey Jude stopped
// // playlist.play(); // Hey Jude started
// console.log(heyJude.songList);
// console.log(jaded.songList);
// console.log(playlist.list);
// console.log(playlist.play());
// console.log(playlist.next());
// console.log(playlist.next());
// console.log(playlist.stop());
// console.log(playlist.play());
// console.log(playlist.next());
// console.log(playlist.next());
// console.log(playlist.next());

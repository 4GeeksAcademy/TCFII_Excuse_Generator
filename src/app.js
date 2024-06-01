/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Excuse Generator Project");
  const whos = [
    "The teacher",
    "My brother",
    "The dog",
    "My boss",
    "Uncle Fred"
  ];
  const whats = ["pooped", "ate", "burned", "hit me with", "slapped"];
  const avoids = [
    "the floor",
    "a stick",
    "the cookies",
    "the work",
    "his face"
  ];
  const whens = [
    "last night.",
    "yesterday.",
    "last week.",
    "a month ago.",
    "a while back."
  ];

  const whosIndex = Math.floor(Math.random() * whos.length);
  const who = whos[whosIndex];
  const whatsIndex = Math.floor(Math.random() * whats.length);
  const what = whats[whatsIndex];
  const avoidsIndex = Math.floor(Math.random() * avoids.length);
  const avoid = avoids[avoidsIndex];
  const whensIndex = Math.floor(Math.random() * whens.length);
  const when = whens[whensIndex];

  // const randomExcuse = who + " " + what + " " + avoid + " " + when;
  const randomExcuse = `${who} ${what} ${avoid} ${when}`;
  // console.log(randomExcuse);
  document.querySelector("h2").innerText = randomExcuse;
};

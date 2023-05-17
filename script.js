const sounds = [
  "air-horn-djmix-1",
  "air-horn-hall-1",
  "beep-sound",
  "beep",
  "BOM",
  "bomb_and_horn",
  "cowbell",
  "dark-bass",
  "dark-cymbal",
  "dark-dist",
  "dark-fx",
  "dark-pannig",
  "dark-snake",
  "dark-vo",
  "dj-mix",
  "double-horn-1",
  "exploasion",
  "flexitone",
  "foll",
  "fx-sequal",
  "fx-rev",
  "fx-vo",
  "Gun_Cocked_Pumped",
  "Gun_shot",
  "jingle",
  "Kill_Bill_Siren_SFX",
  "Kill-Bill-Siren-1",
  "Laser_dancehall",
  "machinegun",
  "omg",
  "Orchestral-hit-rev",
  "Psycho",
  "Reggae_Horn",
  "rev-crash",
  "rise",
  "scream",
  "shock-drop",
  "shouting",
  "siren-hall",
  "siren-long",
  "Siren-Sound1",
  "Siren-Sound2",
  "Siren-Sound3",
  "syn-am",
  "turning",
  "two-horn",
  "voice-sound01",
  "waao",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("button").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

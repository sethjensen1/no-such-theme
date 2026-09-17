const audioElements = document.querySelectorAll("#songplayer audio");

audioElements.forEach((audioItem) => {
  audioItem.addEventListener("play", () => {
    audioElements.forEach((itemToPause) =>
      itemToPause !== audioItem && itemToPause.pause()
    );
  });
});

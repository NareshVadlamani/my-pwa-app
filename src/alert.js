import { Howl } from "howler";

const soundUrl =
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";

function initSound() {
  const sound = new Howl({
    src: [soundUrl],
    loop: true,
  });

  function play() {
    return sound.play();
  }

  function stop() {
    return sound.stop();
  }

  return {
    playAlarm: play,
    stopAlarm: stop,
  };
}

export default initSound();

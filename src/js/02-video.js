import Player from '@vimeo/player';
import { throttle } from 'lodash';

const vPlayerEl = document.querySelector('#vimeo-player');

const player = new Player(vPlayerEl);

let currentPlayTime = localStorage.getItem('videoplayer-current-time');

//console.log(currentPlayTime);

player.setCurrentTime(currentPlayTime);

const onPlay = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

player.on('timeupdate', throttle(onPlay, 1000));

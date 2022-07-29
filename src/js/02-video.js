import Player from '@vimeo/player';
import { throttle } from 'lodash';
// "use strict";
// I would use IIFE here
// I would add DOM ready event listener

const vPlayerEl = document.querySelector('#vimeo-player');

const player = new Player(vPlayerEl);

// Local storage stores only strings so here type is "string | number"
// Another thing you can not trust value from the localStorage, it has to be
// validated first
//
// It has to be `const`
let currentPlayTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;

//console.log(currentPlayTime);

player.setCurrentTime(currentPlayTime);

// I should be named after what it is doing, now where it used
const onPlay = data =>
  // Local storage key is used twice it has to be moved to a const
  // and in the real life rather a separate module
  localStorage.setItem('videoplayer-current-time', data.seconds);

// I would rather create throttled version separately
player.on('timeupdate', throttle(onPlay, 1000));

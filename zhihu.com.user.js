// ==UserScript==
// @name  Flat UI for ZhiHu
// @namespace     http://stylebot.me/styles/4894
// @description   Flat UI for ZhiHu
// @include   http://zhihu.com/*
// @include   https://zhihu.com/*
// @include   http://www.zhihu.com/*
// @include   https://www.zhihu.com/*
// @author        hzlzh
// ==/UserScript==
var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = 'a.shameimaru-link {    display: none;}* {    box-shadow: none;    text-shadow: none;}.zu-top {    background-image: none;}.zg-btn-blue,.zg-btn-white,.zg-btn-green, .zg-btn-follow {    background-image: none;}';
document.documentElement.appendChild(styleEl);
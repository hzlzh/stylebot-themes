// ==UserScript==
// @name  Flat UI for Google.com
// @namespace     http://stylebot.me/styles/4896
// @description   Flat UI for Google.com
// @include   http://google.com.hk/*
// @include   https://google.com.hk/*
// @include   http://google.com/*
// @include   https://google.com/*
// @include   http://www.google.com/*
// @include   https://www.google.com/*
// @include   http://www.google.com.hk/*
// @include   https://www.google.com.hk/*
// @author        hzlzh
// ==/UserScript==
var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = '#lga div {    display: none;}#addlang {    display: none;}#lga {    height: 30px;}#searchform {    margin-top: -130px;}* {    box-shadow: none;    text-shadow: none;}';
document.documentElement.appendChild(styleEl);
// ==UserScript==
// @name  Flat UI for V2EX
// @namespace     http://stylebot.me/styles/4892
// @description   Flat UI for V2EX
// @include   http://fast.v2ex.com/*
// @include   https://fast.v2ex.com/*
// @include   http://v2ex.com/*
// @include   https://v2ex.com/*
// @include   http://v2ex.appspot.com/*
// @include   https://v2ex.appspot.com/*
// @include   http://www.v2ex.com/*
// @include   https://www.v2ex.com/*
// @author        hzlzh
// ==/UserScript==
var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = '#Wrapper,.super.button {    background-image: none;}#Wrapper {    background: #E2E2E2;}.button,.item_node {    background-color: #f9f9f9;    background: -webkit-linear-gradient(top, #f9f9f9 0%,#f9f9f9 50%,#f9f9f9 51%,#f9f9f9 100%);}.button:hover,.item_node:hover,.balance_area:hover {    background-color: #e2e2e2;    background: -webkit-linear-gradient(top, #e2e2e2 0%,#e2e2e2 50%,#e2e2e2 51%,#e2e2e2 100%);}.topic_buttons{background-color: #ccc;    background: -webkit-linear-gradient(top, #ccc 0%,#ccc 50%,#ccc 51%,#ccc 100%);}.balance_area ,.topic_buttons{    background-color: #eee;    -webkit-linear-gradient(top, #eee 0%,#eee 50%,#eee 51%,#eee 100%);}* {    box-shadow: none;    text-shadow:none;}#Top {    background: none;}#Rightbar > div:nth-child(5) {    display: none;}#Bottom .inner > :not(strong):not(b) {    display: none;}#TopicsHot {    margin-top: -20px;}';
document.documentElement.appendChild(styleEl);
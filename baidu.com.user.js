// ==UserScript==
// @name  Flat UI for BaiDu
// @namespace     http://stylebot.me/styles/4895
// @description   Flat UI for BaiDu
// @include   http://baidu.com/*
// @include   https://baidu.com/*
// @include   http://www.baidu.com/*
// @include   https://www.baidu.com/*
// @author        hzlzh
// ==/UserScript==
var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = '#u {    display: none;}#lg {    display: none;}#ftCon {    display: none;}#content {    position: relative;    top: 200px;}* {    box-shadow: none;    text-shadow: none;    text-decoration: none;}.s_ipt_wr {    border-color: #cdcdcd;}.bg {    background: none;    ba1ckground-color: #fff;}.bg .bg {    border: 1px solid #cdcdcd;}';
document.documentElement.appendChild(styleEl);
var pm = require('./prose-mirror-state.js');

var Scribe = require('scribe-editor');

var el = document.getElementById("editor");

var scribe = new Scribe(el);
scribe.use(pm);

// var toolbarEl = document.getElementById("toolbar")
// var resultEl = document.getElementById("result")

var proseMirrorPlugin = require('./prose-mirror-state.js');

var Scribe = require('scribe-editor');

var el = document.getElementById("editor");
var resultEl = document.getElementById("result");

var scribe = new Scribe(el);
scribe.use(proseMirrorPlugin(resultEl));

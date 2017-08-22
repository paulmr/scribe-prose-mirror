function proseMirrorStatePlugin(scribe) {
  scribe.el.addEventListener('input', (ev) => console.log("Input"));
}

module.exports = proseMirrorStatePlugin;

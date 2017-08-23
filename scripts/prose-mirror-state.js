'use strict';

import { EditorState, AllSelection } from "prosemirror-state";
import { DOMParser, DOMSerializer } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";

function proseMirrorStatePlugin(resultEl) {
  var parser = DOMParser.fromSchema(schema);
  var serializer = DOMSerializer.fromSchema(schema);

  function update (state) {
    var res = serializer.serializeFragment(state.doc.content);
    if(resultEl.hasChildNodes()) {
      resultEl.replaceChild(res, resultEl.firstChild)
    } else {
      resultEl.appendChild(res)
    }
  }

  return function (scribe) {
    var state = EditorState.create({doc: parser.parse(scribe.el) });
    update(state);

    scribe.el.addEventListener('input', function () {
      var updatedContent = parser.parse(scribe.el);
      var sel = new AllSelection(state.doc);
      var tr = state.tr;
      tr.setSelection(sel);
      tr.replaceSelectionWith(updatedContent);
    });
  }
}

module.exports = proseMirrorStatePlugin;

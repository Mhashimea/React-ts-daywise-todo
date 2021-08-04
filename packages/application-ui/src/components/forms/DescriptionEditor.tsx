import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./form.css";

export default function DescriptionEditor({ onChange }) {
  const onEditEditor = (e) => {
    const html = draftToHtml(convertToRaw(e.getCurrentContent()));
    if (onChange) onChange(html);
  };
  return (
    <div className="description-editor">
      <Editor
        wrapperClassName="description-editor-wrapper"
        toolbarClassName="description-editor-toolbar"
        editorClassName="description-editor-editor"
        onEditorStateChange={onEditEditor}
      />
    </div>
  );
}

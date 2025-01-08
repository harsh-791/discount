"use client";

import ReactFroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js"; // Core plugins
import "froala-editor/css/froala_editor.pkgd.min.css"; // Froala CSS for editor
import "froala-editor/css/froala_style.min.css"; // Optional Froala styling
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/colors.min.js";


const modules = {
  toolbarButtons: [
    "bold",
    "italic",
    "underline",
    "strikeThrough",
    "formatOL",
    "formatUL",
    "link", // Link button
    "color", // Color button
    "clear",
  ],
  pluginsEnabled: [
    "charCounter", // Character count
    "codeBeautifier", // Code beautifier
    "link", // Link plugin
    "colors", // Color plugin
    "lists", // Lists plugin
    "paragraphFormat", // Paragraph formatting
    "paragraphStyle", // Paragraph styles
    "table", // Table plugin
    "url", // URL plugin
  ],
};

export default function Description({ data, handleData }) {
  const handleChange = (value) => {
    handleData("description", value); // Update description data
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <ReactFroalaEditor
        model={data?.description} // Initial content of the editor
        onModelChange={handleChange} // Handle changes in the content
        config={{
          placeholderText: "Enter your description here...", // Placeholder text
          charCounterCount: false, // Disable character counter
          heightMin: 150, // Minimum height
          heightMax: 300, // Maximum height
          toolbarButtons: modules.toolbarButtons,
          toolbarButtonsMD: modules.toolbarButtons,
          toolbarButtonsSM: modules.toolbarButtons,
          toolbarButtonsXS: modules.toolbarButtons,
          pluginsEnabled: modules.pluginsEnabled,
          linkInsertButtons: ["linkBack"], // Back button for links
          linkEditButtons: ["linkOpen", "linkEdit", "linkRemove"], // Link options
        }}
      />
    </section>
  );
}

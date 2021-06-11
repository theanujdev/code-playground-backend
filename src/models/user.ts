import mongoose, { Schema } from "mongoose";

const defaultEditorState = {
  files: ["index.html", "style.css", "app.js"],
  tabs: ["index.html"],
  activeTab: "index.html",
};
const defaultCode = {
  "style\\uff0ecss":
    "body {\r\n\tpadding: 10px;\r\n\tmargin: 0;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tline-height: 1.6;\r\n\tfont-size: 15px;\r\n    height: 100%;\r\n}",
  "index\\uff0ehtml":
    '<h2 align="center">Welcome to CODE Playground</h2>\r\n<p>Hey there! This is all-in-one coding playground!</p>\r\n\r\n<li>You can edit these files!</li>\r\n<li>You can play with HTML/CSS/JS files</li>\r\n<li>You can create files here</li>\r\n<li>Your files and code is saved realtime!</li>\r\n<li>Let\'s start.... 🔥</li>\r\n<br/>\r\n<div id="time">Time right now : <span></span></div>',
  "app\\uff0ejs":
    "const timer = document.querySelector('#time span')\r\n\r\nsetInterval(() => {\r\n\ttimer.innerText = new Date().toLocaleString()\r\n}, 1000)\r\n",
};

const editorState = new Schema(
  {
    files: { type: Array, default: [] },
    tabs: { type: Array, default: [] },
    activeTab: { type: String, default: "" },
  },
  {
    _id: false,
  }
);

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    editorState: { type: editorState, default: defaultEditorState },
    code: { type: Object, default: defaultCode },
  },
  { timestamps: true, minimize: false }
);

export default mongoose.model("User", userSchema, "users");

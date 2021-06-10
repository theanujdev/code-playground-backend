import mongoose, { Schema } from "mongoose";

const defaultEditorState = {
  files: ["Untitled"],
  tabs: ["Untitled"],
  activeTab: "Untitled",
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
    code: { type: Object, default: {} },
  },
  { timestamps: true, minimize: false }
);

export default mongoose.model("User", userSchema, "users");

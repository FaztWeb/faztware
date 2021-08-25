import { model, Schema } from "mongoose";

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});



export default model("Role", roleSchema);

import mongoose from "mongoose";

interface User extends mongoose.Document {
  id: string;
  username: string;
  name: string;
  image: string;
}

const userSchema = new mongoose.Schema<User>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

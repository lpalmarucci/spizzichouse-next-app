import mongoose from "mongoose";

interface User extends mongoose.Document {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  image: string;
}

const userSchema = new mongoose.Schema<User>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  image: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

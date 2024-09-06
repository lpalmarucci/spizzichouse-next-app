import { connectToDb } from "@/lib/mongoose";
import User from "@/lib/models/user.model";

interface CreateUserDto {
  id: string;
  name: string;
  username: string;
  image: string;
}

export async function createUser(user: CreateUserDto) {
  try {
    await connectToDb();

    await User.create(user);
  } catch (error: any) {
    throw new Error(`Error while saving user: ${error.message}`);
  }
}

export async function getUser(userId: string): Promise<User | null> {
  try {
    await connectToDb();

    return User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Error while getting user: ${error.message}`);
  }
}

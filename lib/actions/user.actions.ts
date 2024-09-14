import { connectToDb } from "@/lib/mongoose";
import UserSchema, { User } from "@/lib/models/user.model";

interface CreateUserDto {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  image: string;
}

export async function createUser(user: CreateUserDto) {
  try {
    await connectToDb();

    await UserSchema.create(user);
  } catch (error: any) {
    throw new Error(`Error while saving user: ${error.message}`);
  }
}

export async function getUser(userId: string): Promise<User | null> {
  try {
    await connectToDb();

    return UserSchema.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Error while getting user: ${error.message}`);
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    await connectToDb();

    return UserSchema.find();
  } catch (error: any) {
    throw new Error(`Error while getting users: ${error.message}`);
  }
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialLetters(firstname: string, lastname: string): string {
  return firstname.slice(0, 1) + lastname.slice(0, 1);
}

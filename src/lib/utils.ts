import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getObjKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

export const camelToTitleCase = (str: string) => {
  const result = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  return result.charAt(0).toUpperCase() + result.slice(1);
};

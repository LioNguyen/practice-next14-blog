import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(url: string) {
  try {
    const res = await axios.get(url);

    return { data: res.data };
  } catch (error) {
    return { error };
  }
}

export async function postData(url: string, body: any) {
  try {
    const res = await axios.post(url, body);

    return { data: res.data };
  } catch (error) {
    return { error };
  }
}

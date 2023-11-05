import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SIZE_VALUE_0, SIZE_VALUE_1, SIZE_VALUE_2, SIZE_VALUE_3, SIZE_VALUE_4, SIZE_VALUE_5, SIZE_VALUE_6 } from "../config/custom setting/sizes"; // Adjust the import path as needed


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case `${SIZE_VALUE_0}`:
      return `${SIZE_VALUE_0}`;
    case `${SIZE_VALUE_1}`:
      return `${SIZE_VALUE_1}`;
    case `${SIZE_VALUE_2}`:
      return `${SIZE_VALUE_2}`;
    case `${SIZE_VALUE_3}`:
      return `${SIZE_VALUE_3}`;
    case `${SIZE_VALUE_4}`:
      return `${SIZE_VALUE_4}`;
    case `${SIZE_VALUE_5}`:
      return `${SIZE_VALUE_5}`;
    case `${SIZE_VALUE_6}`:
      return `${SIZE_VALUE_6}`;
  }
}

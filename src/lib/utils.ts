import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import _delay from 'lodash-es/delay';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) =>
    _delay(() => {
      resolve(true);
    }, ms)
  );

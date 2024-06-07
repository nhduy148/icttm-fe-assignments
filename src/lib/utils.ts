import { clsx, type ClassValue } from 'clsx';
import _delay from 'lodash-es/delay';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) =>
    _delay(() => {
      resolve(true);
    }, ms),
  );

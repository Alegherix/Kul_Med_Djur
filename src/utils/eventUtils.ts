export type EventType = 'dog' | 'cat' | 'horse' | '';

export type EventPeriod = 'first' | 'second' | 'third' | 'fourth';

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

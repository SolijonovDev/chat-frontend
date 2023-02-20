import { ReactNode } from 'react';

export interface IText {
  children: ReactNode;
  variant: string;
  className?: string;
  Component?: string;
}

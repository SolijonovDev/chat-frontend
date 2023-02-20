import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: string;
}

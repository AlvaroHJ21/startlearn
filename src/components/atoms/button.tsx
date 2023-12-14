import React from 'react';
import { cn } from '@/lib/util';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

export default function Button(props: Props) {
  const { className, variant = 'filled', color = 'primary', ...restProps } = props;

  return (
    <button
      className={cn(
        'py-3 px-6 uppercase font-bold flex justify-center gap-1 items-center rounded-2xl active:scale-95 transition-transform',
        variant === 'filled' && 'bg-primary text-white',
        variant === 'outlined' && 'border-2 border-primary text-primary',

        color === 'secondary' && 'bg-secondary text-white',
        color === 'success' && 'bg-green-600 text-white',
        color === 'danger' && 'bg-red-600 text-white',

        className
      )}
      {...restProps}
    />
  );
}

interface ButtonLinkProps extends LinkProps {
  variant?: 'filled' | 'outlined';
}

function ButtonLink(props: ButtonLinkProps) {
  const { className, variant = 'filled', ...restProps } = props;

  return (
    <Link
      className={cn(
        'py-3 px-6 uppercase font-bold flex justify-center gap-1 items-center rounded-2xl active:scale-95 transition-transform text-center',
        variant === 'filled' && 'bg-primary text-white',
        variant === 'outlined' && 'border-2 border-primary text-primary',
        className
      )}
      {...restProps}
    />
  );
}

Button.Link = ButtonLink;

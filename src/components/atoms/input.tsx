import { cn } from '@/lib/util';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputText(props: Props) {
  const { className, ...restProps } = props;

  return <input className={cn('w-full py-2 px-4 border-primary border-b-2 outline-none', className)} {...restProps} />;
}

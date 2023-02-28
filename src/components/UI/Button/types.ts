export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  kind: "primary" | "secondary";
  size: "lg" | "sm";
  text: string;
}
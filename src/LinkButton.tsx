import { To, useNavigate } from "react-router-dom";

type LinkButtonProps = {
  to: To,
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function LinkButton({ to, children, ...rest }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} {...rest}>
      {children}
    </button>
  );
}


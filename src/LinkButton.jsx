import { useNavigate } from "react-router-dom";

export default function LinkButton({ to, children, ...rest }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} {...rest}>
      {children}
    </button>
  );
}

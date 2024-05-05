import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success" | "notice";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <>
      <div>
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;

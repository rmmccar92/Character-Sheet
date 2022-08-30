import { Button } from "@mantine/core";
import type { CSSProperties } from "react"; 


interface AnimatedBtnProps {
  type?: string;
  style?: CSSProperties;
  onClick: any;
  error?: string;
  children?: React.ReactNode;
  name?: string;
}

export default function AnimatedButton({type,style,onClick,error,children }: AnimatedBtnProps) {
  return (
    <Button
      className="loginBtn"
      onClick={()=>onClick()}
      style={style}
    >
      <svg viewBox="0 0 180 60" width="15em" height="5em">
        <polyline points="179,1 179,59 1,59 1,1 179,1" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" />
      </svg>
      {children}
    </Button>
  );
}

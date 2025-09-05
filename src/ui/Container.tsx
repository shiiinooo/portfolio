import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={`container ${className}`}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      {children}
    </div>
  );
};

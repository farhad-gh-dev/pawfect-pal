import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`
        text-md font-[450] transition-colors text-primary
        hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${className}
      `}
    >
      {children}
    </a>
  );
};

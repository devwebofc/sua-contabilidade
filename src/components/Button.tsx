import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-blue hover:bg-sky-500 text-white shadow-lg shadow-brand-blue/20",
    secondary: "bg-white text-brand-dark hover:bg-gray-100",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/20"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};
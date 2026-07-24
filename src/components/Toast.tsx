import React from 'react';
import { CheckCircle } from 'lucide-react';
import './Toast.css';

interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="toast-notification animate-toast">
      <CheckCircle size={16} />
      <span>{message}</span>
    </div>
  );
};

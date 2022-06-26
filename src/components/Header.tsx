import { List, X } from 'phosphor-react';
import { Logo } from './Logo';

interface HeaderProps {
  open: boolean;
  toggleOpen: () => void;
}

export function Header({ open = false, toggleOpen }: HeaderProps) {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:py-5 lg:justify-center">
      <Logo />
      <div className='lg:hidden cursor-pointer w-8 h-8 flex items-center justify-center' onClick={toggleOpen}>
        {open ? <X size={24} /> : <List size={24} />}
      </div>
    </header>
  );
}
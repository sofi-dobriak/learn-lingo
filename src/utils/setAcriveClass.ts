import clsx from 'clsx';

export const setActiveClass = (className: string, activeClassName: string) => {
  return ({ isActive }: { isActive: boolean }) => clsx(className, isActive && activeClassName);
};

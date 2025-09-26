import { useMediaQuery } from 'react-responsive';

export const useMediaQueryView = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });

  return { isMobile, isTablet, isDesktop, isLargeScreen };
};

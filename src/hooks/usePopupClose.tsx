import { useEffect } from 'react';

export const usePopupClose = (state: boolean, closePopup: () => void) => {
  useEffect(() => {
    if (!state) return;

    const handleOverlayClick = (e: MouseEvent) => {
      const popupContent = document.querySelector('.popup__wrapper');
      if (popupContent && !popupContent.contains(e.target as HTMLElement)) {
        closePopup();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [state, closePopup]);
};

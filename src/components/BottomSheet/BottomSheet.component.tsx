import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BottomSheetProps} from './BottomSheet.component.types';
import {styles} from './BottomSheet.component.styles';

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  title = '',
  children,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.sheet} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <span style={styles.title}>{title}</span>
          <button style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div style={styles.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default BottomSheet;

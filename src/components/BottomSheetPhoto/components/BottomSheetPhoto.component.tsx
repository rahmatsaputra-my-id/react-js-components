import React, {useRef, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BottomSheetPhotoProps} from '../types/BottomSheetPhoto.types';
import CameraModal from './CameraModal.component';
import {styles} from '../styles/BottomSheetPhoto.component.style';
import {TouchableOpacity} from '../../TouchableOpacity';
import {Text} from '../../Text';

const BottomSheetPhoto: React.FC<BottomSheetPhotoProps> = ({
  visible,
  onClose,
  title = '',
  onUploadBase64,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!visible && !cameraVisible) return null;

  const handleUploadDocument = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      onUploadBase64?.(base64String, file);
      onClose();
    };
    reader.readAsDataURL(file);
  };

  const bottomSheetData: {title: string; onPress: () => void}[] = [
    {
      title: 'Camera',
      onPress: () => {
        onClose();
        setTimeout(() => setCameraVisible(true), 300);
      },
    },
    {
      title: 'Document',
      onPress: handleUploadDocument,
    },
  ];

  return (
    <>
      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{display: 'none'}}
      />

      {cameraVisible && (
        <CameraModal
          onClose={() => setCameraVisible(false)}
          onCapture={base64 => {
            onUploadBase64?.(base64, null);
          }}
        />
      )}

      {visible &&
        ReactDOM.createPortal(
          <div style={styles.backdrop} onClick={onClose}>
            <div style={styles.sheet} onClick={e => e.stopPropagation()}>
              <div style={styles.header}>
                <span style={styles.title}>{title}</span>
                <button style={styles.closeButton} onClick={onClose}>
                  ×
                </button>
              </div>
              <div style={styles.content}>
                {bottomSheetData.map((val, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={val.onPress}
                    style={styles.contentBottomSheet}>
                    <Text>{val.title}</Text>
                  </TouchableOpacity>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default BottomSheetPhoto;

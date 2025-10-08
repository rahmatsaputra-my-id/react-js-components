import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {styles} from './PreviewPhoto.styles';
import {IPreviewPhotoProps} from './PreviewPhoto.types';
import {Image} from '../Image';
import {Text} from '../Text';

const PhotoPreviewModal = ({
  visible,
  onDismiss,
  imageUrl,
}: IPreviewPhotoProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    };
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onDismiss]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div onClick={onDismiss} style={styles.backdrop}>
      <div onClick={e => e.stopPropagation()} style={styles.modalContent}>
        {imageUrl ? (
          <Image src={imageUrl} style={styles.image} />
        ) : (
          <Text
            style={styles.noImageContainer}
            children={'No image provided'}
          />
        )}
      </div>
    </div>,
    document.body,
  );
};

export default PhotoPreviewModal;

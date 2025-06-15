import {useEffect, useRef, useState} from 'react';
import {LoadingSpinner} from '../LoadingSpinner';
import {IImageProps} from './Image.types';

const ImageCustom = ({
  bottom = 0,
  category = '',
  center = false,
  height = 16,
  isShowLoading = false,
  left = 0,
  resizeMode = 'contain',
  right = 0,
  src = '',
  style = {},
  textAlign = center ? 'center' : 'left',
  top = 0,
  width = 16,
  ...props
}: IImageProps) => {
  const image = {
    alter:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-not-available.png',
    alterBusiness:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-business.png',
    alterGeneral:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-general.png',
    alterSport:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-sport.png',
    alterTechnology:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-technology.png',
    alterEntertainment:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-entertainment.png',
    alterHealth:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-health.png',
    alterScience:
      'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-alt-science.png',
  };
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAlterImage = () => {
    let result = image.alter;
    switch (category) {
      case 'business':
        result = image.alterBusiness;
        break;
      case 'general':
        result = image.alterGeneral;
        break;
      case 'sport':
        result = image.alterSport;
        break;
      case 'technology':
        result = image.alterTechnology;
        break;
      case 'entertainment':
        result = image.alterEntertainment;
        break;
      case 'health':
        result = image.alterHealth;
        break;
      case 'science':
        result = image.alterScience;
        break;
      default:
        break;
    }

    return result;
  };

  return (
    <div
      ref={containerRef}
      style={{
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        width,
        height,
        resizeMode,
        textAlign,
        ...style,
        overflow: 'hidden',
        position: 'relative',
      }}>
      {isLoading && isShowLoading ? (
        <LoadingSpinner />
      ) : (
        <img
          src={src}
          alt={''}
          onLoad={handleImageLoad}
          onError={({currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = handleAlterImage();
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: `${containerHeight}px`,
            width: `${containerWidth}px`,
            objectFit: 'cover',
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageCustom;

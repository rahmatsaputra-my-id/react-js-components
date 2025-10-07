import {IImageProps} from './Image.types';

const Images = ({
  bottom = 0,
  center = false,
  height = 16,
  left = 0,
  resizeMode = 'contain',
  right = 0,
  style = {},
  top = 0,
  width = 16,
  ...props
}: IImageProps): JSX.Element => (
  <img
    style={{
      height,
      marginBottom: bottom,
      marginRight: right,
      marginLeft: left,
      marginTop: top,
      objectFit: resizeMode,
      textAlign: center ? 'center' : 'left',
      width,
      ...style,
    }}
    alt={''}
    onError={({currentTarget}) => {
      currentTarget.onerror = null;
      currentTarget.src =
        'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-not-available.png';
    }}
    {...props}
  />
);

export default Images;

import {ReactNode} from 'react';

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
}: IImageProps): ReactNode => (
  <img
    style={{
      height,
      marginBottom: bottom,
      marginRight: right,
      marginLeft: left,
      marginTop: top,
      resizeMode,
      textAlign: center ? 'center' : 'left',
      width,
      ...style,
    }}
    alt=""
    {...props}
  />
);

export default Images;

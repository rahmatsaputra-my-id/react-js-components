import {Colors} from '../../constants/Colors';
import {ITextProps} from './Text.types';

const Text = ({
  bottom = 0,
  center = false,
  children,
  color = Colors.black,
  left = 0,
  lineHeight,
  right = 0,
  size = 16,
  style = {},
  top = 0,
  ...props
}: ITextProps): JSX.Element => (
  <>
    <p
      style={{
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        color,
        fontSize: size,
        lineHeight,
        textAlign: center ? 'center' : 'left',
        ...style,
      }}
      {...props}>
      {children}
    </p>
  </>
);

export default Text;

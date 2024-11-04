import {ReactNode} from 'react';
import {Text} from '../Text';
import {View} from '../View';
import {Colors} from '../../constants/Colors';

import {ITextInputProps} from './TextInput.types';
import {styles} from './TextInput.component.styles';

const TextInput = ({
  borderColor = Colors.grey2,
  borderRadius = 4,
  bottom = 0,
  center = false,
  label = false,
  labelError = false,
  left = 0,
  multiline = false,
  padding = 0,
  right = 0,
  rows = 10,
  style = {},
  styleLabel = {},
  styleTextInput = {},
  top = 0,
  ...props
}: ITextInputProps): ReactNode => {
  const stylesTextInput = {
    ...styles.textArea,
    ...styleTextInput,
    borderColor,
    borderRadius,
    textAlign: center ? 'center' : 'left',
    paddingBottom: multiline ? 16 : 8,
  };

  return (
    <View
      style={{
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        padding,
        ...style,
      }}>
      {label && (
        <Text style={{...styles.label, ...styleLabel}} children={label} />
      )}

      {multiline ? (
        <textarea
          rows={rows}
          type={'text'}
          style={stylesTextInput}
          {...props}
        />
      ) : (
        <input type={'text'} style={stylesTextInput} {...props} />
      )}

      {labelError ? (
        <Text style={styles.labelError} children={labelError} />
      ) : null}
    </View>
  );
};

export default TextInput;

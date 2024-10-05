import { ReactNode } from "react";
import { Text } from "../Text";
import { View } from "../View";
import { Colors } from "../../constants/Colors";

import { ITextInputProps } from "./TextInput.types";
import { styles } from "./TextInput.component.styles";

const TextInput = ({
  bottom = 0,
  borderColor = Colors.grey2,
  borderRadius = 4,
  center = false,
  left = 0,
  label = false,
  labelError = false,
  multiline = false,
  padding = 0,
  right = 0,
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
    textAlign: center ? "center" : "left",
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
      }}
    >
      {label && (
        <Text style={{ ...styles.label, ...styleLabel }} children={label} />
      )}

      {multiline ? (
        <textarea type={"text"} style={stylesTextInput} {...props} />
      ) : (
        <input type={"text"} style={stylesTextInput} {...props} />
      )}

      {labelError ? (
        <Text style={styles.labelError} children={labelError} />
      ) : null}
    </View>
  );
};

export default TextInput;

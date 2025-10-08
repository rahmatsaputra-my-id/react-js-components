import {Text} from '../Text';
import {View} from '../View';
import {styles} from './NoRecord.styles';
import {INoRecordProps} from './NoRecord.types';

const NoRecord = ({
  children,
  style = {},
  ...props
}: INoRecordProps): JSX.Element => {
  return (
    <View style={{...styles.container, ...style}} {...props}>
      <Text children={'No Record Found'} />
    </View>
  );
};

export default NoRecord;

import {FC} from 'react';
import {View} from '../View';
import {Text} from '../Text';
import {Button} from '../Button';

import {IPopUpProps} from './PopUp.types';
import {styles} from './PopUp.component.styles';
import {Colors} from '../../constants/Colors';

const PopUp: FC<IPopUpProps> = ({
  backgroundButtonColor = Colors.black,
  isLoading = false,
  popUpData,
  visible = false,
  styleContainer = {},
}: IPopUpProps) =>
  visible ? (
    <View style={{...styles.container, ...styleContainer}}>
      <View style={styles.card}>
        <View>
          <Text style={styles.headerTitle} children={popUpData?.title} />

          {popUpData?.description ? (
            <Text
              style={styles.headerDescription}
              children={popUpData?.description}
            />
          ) : null}
        </View>

        <View>
          {popUpData?.labelDecline && popUpData?.onPressDecline ? (
            <Button
              style={styles.buttonNegative}
              backgroundColor={backgroundButtonColor}
              outlineColor={Colors.black}
              isLoading={isLoading}
              label={popUpData?.labelDecline}
              onPress={popUpData?.onPressDecline}
            />
          ) : null}

          <Button
            style={styles.buttonPositive}
            backgroundColor={backgroundButtonColor}
            isLoading={isLoading}
            label={popUpData?.labelAccept}
            onPress={popUpData?.onPressAccept}
          />
        </View>
      </View>
    </View>
  ) : null;

export default PopUp;

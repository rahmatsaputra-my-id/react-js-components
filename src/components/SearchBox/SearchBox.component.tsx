import React, {useState} from 'react';
import {Icons} from '../../constants/Images';
import {Image} from '../Image';
import {TouchableOpacity} from '../TouchableOpacity';
import {TextInput} from '../TextInput';
import {Text} from '../Text';
import {View} from '../View';
import {styles} from './SearchBox.styles';
import {ISearchBoxProps} from './SearchBox.types';
import {ScannerQR} from '../ScannerQR';

const SearchBox = ({
  handleOnSubmitSearch,
  handleOnClearSearch,
  placeholder = 'Type to search ...',
  value,
  onChange,
  handleOnScanQr,
  ...props
}: ISearchBoxProps): JSX.Element => {
  const [isScannerVisible, setIsScannerVisible] = useState(false);

  const renderScreen = () => (
    <>
      <View style={styles.searchContainer}>
        <Text style={styles.iconSearch}>🔍</Text>
        <TextInput
          style={styles.textInputContainer}
          styleTextInput={{
            ...styles.textInput,
            paddingRight: !!handleOnScanQr ? 72 : 40,
          }}
          placeholder={placeholder}
          onKeyPress={(event: any) => {
            if (event.key === 'Enter' && handleOnSubmitSearch) {
              handleOnSubmitSearch(value);
            }
          }}
          value={value}
          onChange={onChange}
          onBlur={() => {
            if (handleOnSubmitSearch && !handleOnScanQr) {
              handleOnSubmitSearch(value);
            }
          }}
          {...props}
        />

        {value && value?.length > 0 ? (
          <TouchableOpacity
            style={{...styles.closeSearchButton}}
            onPress={() => {
              if (handleOnClearSearch) {
                handleOnClearSearch();
              }
            }}>
            <Image
              style={{
                ...styles.closeSearchButtonImage,
                paddingRight: !!handleOnScanQr ? 45 : 16,
              }}
              src={Icons.close ?? ''}
            />
          </TouchableOpacity>
        ) : null}

        {handleOnScanQr ? (
          <TouchableOpacity
            style={styles.scanQrImageContainer}
            onPress={() => {
              if (handleOnScanQr) {
                handleOnScanQr();
                setIsScannerVisible(true);
              }
            }}>
            <Image style={styles.scanQrImage} src={Icons.scan_qr} />
          </TouchableOpacity>
        ) : null}
      </View>

      {isScannerVisible && (
        <ScannerQR
          onClose={() => setIsScannerVisible(false)}
          onCapture={data => handleOnScanQr(data)}
        />
      )}
    </>
  );

  return renderScreen();
};

export default SearchBox;

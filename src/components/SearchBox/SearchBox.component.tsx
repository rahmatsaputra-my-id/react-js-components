import React from 'react';
import {Icons} from '../../constants/Images';
import {Image} from '../Image';
import {TouchableOpacity} from '../TouchableOpacity';
import {TextInput} from '../TextInput';
import {Text} from '../Text';
import {View} from '../View';
import {styles} from './SearchBox.styles';
import {ISearchBoxProps} from './SearchBox.types';

const SearchBox = ({
  handleOnSubmitSearch,
  handleOnClearSearch,
  placeholder = 'Type to search ...',
  value,
  ...props
}: ISearchBoxProps): JSX.Element => {
  const renderScreen = () => (
    <View style={styles.searchContainer}>
      <Text style={styles.iconSearch}>🔍</Text>
      <TextInput
        style={styles.textInputContainer}
        styleTextInput={styles.textInput}
        placeholder={placeholder}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter' && handleOnSubmitSearch) {
            handleOnSubmitSearch(value);
          }
        }}
        onBlur={() => {
          if (handleOnSubmitSearch) {
            handleOnSubmitSearch(value);
          }
        }}
        {...props}
      />

      {value && value?.length > 0 ? (
        <TouchableOpacity
          style={styles.closeSearchButton}
          onPress={() => {
            if (handleOnClearSearch) {
              handleOnClearSearch();
            }
          }}>
          <Image style={styles.closeSearchButtonImage} src={Icons.close} />
        </TouchableOpacity>
      ) : null}
    </View>
  );

  return renderScreen();
};

export default SearchBox;

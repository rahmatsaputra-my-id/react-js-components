import React, {useCallback, useState} from 'react';
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
}: ISearchBoxProps): JSX.Element => {
  const [search, setSearch] = useState('');
  const handleOnChangeSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const renderScreen = () => (
    <View style={styles.searchContainer}>
      <Text style={styles.iconSearch}>🔍</Text>
      <TextInput
        style={styles.textInputContainer}
        styleTextInput={styles.textInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleOnChangeSearch(event?.target?.value);
        }}
        value={search}
        placeholder={placeholder}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter' && handleOnSubmitSearch) {
            handleOnSubmitSearch(search);
          }
        }}
      />

      {search && search?.length > 0 ? (
        <TouchableOpacity
          style={styles.closeSearchButton}
          onPress={() => {
            handleOnChangeSearch('');
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

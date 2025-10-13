/// <reference types="react" />
import { ISearchBoxProps } from './SearchBox.types';
declare const SearchBox: ({ handleOnSubmitSearch, handleOnClearSearch, placeholder, value, onChange, handleOnScanQr, ...props }: ISearchBoxProps) => JSX.Element;
export default SearchBox;

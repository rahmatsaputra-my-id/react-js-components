export interface ISearchBoxProps {
    handleOnSubmitSearch: (value?: string) => void;
    handleOnClearSearch: () => void;
    placeholder?: string;
    value: any;
}

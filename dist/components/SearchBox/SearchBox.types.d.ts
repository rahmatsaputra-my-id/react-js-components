export interface ISearchBoxProps {
    handleOnSubmitSearch: (value?: string) => void;
    handleOnClearSearch: () => void;
    handleOnScanQr: (data?: string | null) => void;
    placeholder?: string;
    value: any;
    onChange: any;
}

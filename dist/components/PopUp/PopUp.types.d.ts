<<<<<<< HEAD
export interface IPopUpProps {
    backgroundButtonColor?: string;
    isLoading?: boolean;
    popUpData?: TpopUpData;
    visible?: boolean;
}
export type TpopUpData = {
    description?: string;
    labelAccept?: string;
    onPressAccept?: any;
    title?: string;
};
=======
export interface IPopUpProps {
    backgroundButtonColor?: string;
    isLoading?: boolean;
    popUpData?: TpopUpData;
    visible?: boolean;
}
export type TpopUpData = {
    description?: string;
    labelAccept?: string;
    labelDecline?: string;
    onPressAccept?: any;
    onPressDecline?: any;
    title?: string;
};
>>>>>>> 83f6ecd (- update version v0.0.12)

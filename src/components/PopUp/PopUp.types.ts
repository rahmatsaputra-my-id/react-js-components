export interface IPopUpProps {
  backgroundButtonColor?: string;
  isLoading?: boolean;
  popUpData?: TpopUpData;
  visible?: boolean;
  styleContainer?: any;
}

export type TpopUpData = {
  description?: string;
  labelAccept?: string;
  labelDecline?: string;
  onPressAccept?: any;
  onPressDecline?: any;
  title?: string;
};

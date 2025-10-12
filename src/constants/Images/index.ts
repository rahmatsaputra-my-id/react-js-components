import {IIconOption} from './Images.types';

const IMAGE_URL_WEDDING =
  'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master/my-wedding';
const IMAGE_URL =
  'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master/image';
const IMAGE_PERSONAL_WEB =
  'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master/personal-web';

export const Icons: IIconOption = {
  close: `${IMAGE_URL_WEDDING}/icon-close.png`,
  camera: `${IMAGE_URL}/icon-camera.png`,
  edit: `${IMAGE_URL}/icon-edit.png`,
  rotate: `${IMAGE_URL}/icon-rotate.png`,
  send: `${IMAGE_URL}/icon-send.png`,
  image_not_available: `${IMAGE_PERSONAL_WEB}/image-not-available.png`,
}
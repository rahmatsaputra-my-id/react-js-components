import {IIconOption} from './Images.types';

const BASE_URL = 'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master'
const PATH = {
  WEDDING: `${BASE_URL}/my-wedding`,
  IMAGE: `${BASE_URL}/image`,
  PERSONAL_WEB: `${BASE_URL}/personal-web`
}

export const Icons: IIconOption = {
  camera: `${PATH.IMAGE}/icon-camera.png`,
  close: `${PATH.WEDDING}/icon-close.png`,
  edit: `${PATH.IMAGE}/icon-edit.png`,
  image_not_available: `${PATH.PERSONAL_WEB}/image-not-available.png`,
  rotate: `${PATH.IMAGE}/icon-rotate.png`,
  send: `${PATH.IMAGE}/icon-send.png`,
  scan_qr: `${PATH.IMAGE}/icon-scan-qr.png`,
}
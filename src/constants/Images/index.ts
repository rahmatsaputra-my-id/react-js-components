import {IIconOption} from './Images.types';

const BASE_URL = 'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master'
const PATH = {
  WEDDING: `${BASE_URL}/my-wedding`,
  IMAGE: `${BASE_URL}/image`,
  PERSONAL_WEB: `${BASE_URL}/personal-web`
}

export const Icons: IIconOption = {
  arrow_right_thin: `${PATH.IMAGE}/icon-arrow-right-thin.png`,
  arrow_right: `${PATH.IMAGE}/icon-arrow-right.png`,
  camera: `${PATH.IMAGE}/icon-camera.png`,
  close: `${PATH.WEDDING}/icon-close.png`,
  edit: `${PATH.IMAGE}/icon-edit.png`,
  exit: `${PATH.IMAGE}/icon-exit.png`,
  flash_off: `${PATH.IMAGE}/icon-flash-off.png`,
  flash_on: `${PATH.IMAGE}/icon-flash-on.png`,
  image_not_available: `${PATH.PERSONAL_WEB}/image-not-available.png`,
  information: `${PATH.IMAGE}/icon-information.png`,
  langugage: `${PATH.IMAGE}/icon-language.png`,
  more: `${PATH.IMAGE}/icon-more.png`,
  printer: `${PATH.IMAGE}/icon-printer.png`,
  question: `${PATH.IMAGE}/icon-question.png`,
  rotate: `${PATH.IMAGE}/icon-rotate.png`,
  scan_qr: `${PATH.IMAGE}/icon-scan-qr.png`,
  send: `${PATH.IMAGE}/icon-send.png`,
  support: `${PATH.IMAGE}/icon-support.png`,
  tax: `${PATH.IMAGE}/icon-tax.png`,
  terms_and_conditions: `${PATH.IMAGE}/icon-terms-and-conditions.png`,
}
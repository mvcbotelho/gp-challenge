import { Action } from './reducer';
import constants from './constants';

export type CarrouselItem = {
  title: string;
  image: string;
};

export const setBackground = (background: string): Action => ({
  type: constants.setBackground,
  payload: {
    background,
  },
});

export const setCarrouselItem = ({ title, image }: CarrouselItem): Action => ({
  type: constants.setCarrouselItem,
  payload: {
    title,
    image,
  },
});

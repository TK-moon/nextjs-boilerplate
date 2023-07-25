import { color } from '@/styles/variables';
import { css } from '@emotion/css';

export const container = css``;

export const category_list = css`
  padding: 20px;
  ol {
    list-style: none;
  }
`;

export const category_item = css`
  font-size: 38px;
  font-weight: 600;
  position: relative;
  &:before {
    position: absolute;
    height: 5px;
    background-color: ${color.black};
    left: 0;
    right: 0;
    bottom: 2px;
    content: '';
    transition: scale 100ms ease-in-out;
    transform-origin: left;
    scale: 0 1;
  }
  &:hover:before {
    scale: 1;
  }
`;

import { css } from 'styled-components';

/**
* Generates an object that can be injected into Styled Components for media queries. Eg:
*
* styled.img`
*   overflow: hidden;
*   ${media.desktop`width: 100%`}
*   ${media.tablet`max-width: 767px;`}
*   ${media.mobile`max-width: 320px;`};
* `
*
*/
const media = {
  mobile: (...args) => css`@media screen and (max-width: 767px) {${css(...args)};}`,
  tablet: (...args) => css`@media screen and (min-width: 768px) and (max-width: 1024px) {${css(...args)};}`,
  smallDesktop: (...args) => css`@media screen and (min-width: 1025px) and (max-width: 1350px) {${css(...args)};}`,
  desktop: (...args) => css`@media screen and (min-width: 1025px) {${css(...args)};}`,
  upToDesktop: (...args) => css`@media screen and (max-width: 1024px) {${css(...args)};}`,
  print: (...args) => css`@media print and (min-width: 0px) {${css(...args)};}`,
};

export default media;
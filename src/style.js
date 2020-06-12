import styled, { css } from 'styled-components';
import folder from './assets/images/icon-folder.svg';
import text from './assets/images/icon-document.svg';
import upload from './assets/images/icon-upload.svg';
import logo from './assets/images/logo.svg';

export const Main = styled.main`
  position: relative;
  width: 87vw;
  height: 28.5vh;
  max-height: 220px;
  max-width: 900px;
  margin: auto;
  @media (max-width: 833px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 358px;
    width: 90vw;
    max-height: unset;
    max-width: unset;
  }
`;
export const RoundedDiv = styled.div`
  position: absolute;
  left: 0;
  min-width: 261px;
  max-width: 337px;
  width: 36%;
  height: 100%;
  padding: 2.2rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: hsl(228, 56%, 26%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 833px) {
    height: 53%;
    width: 100%;
    max-height: unset;
    max-width: unset;
    min-width: unset;
  }
`;
export const ContainerFlex = styled.div`
  width: 70%;
  height: 46px;
  max-width: 237px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const UploadFigure = styled.div`
  background-color: hsl(229, 57%, 11%);
  border-radius: 6px;
  width: 26%;
  max-width:50px;
  min-width:40px;
  height: 100%;
  position:relative;
  cursor:pointer;
 @media (max-width: 833px) {

  }

    ${(props) =>
      props.folder &&
      css`
        background-image: url(${folder});

        background-repeat: no-repeat;
        background-position: center;
      `}
    ${(props) =>
      props.text &&
      css`
        background-image: url(${text});
        background-repeat: no-repeat;
        background-position: center;
      `}
    ${(props) =>
      props.cloud &&
      css`
        background-image: url(${upload});
        background-repeat: no-repeat;
        background-position: center;
      `};


`;
export const Fylo = styled.div`
  position: relative;
  width: 138px;
  height: 37px;
  background: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const RectangularBar = styled.div`
  position: relative;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60%;
  max-width: 544px;
  min-width: 295px;
  height: 80%;
  padding: 1.5rem 2.2rem 2.2rem;
  background-color: hsl(228, 56%, 26%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.9rem;
  color: #ffff;
  @media (max-width: 833px) {
    height: 42%;
    width: 100%;
    padding: 2rem 1.5rem 1.5rem;
    max-height: unset;
    min-width: unset;
    max-width: unset;
    justify-content: end;
  }
`;

export const Meter = styled.div`
  width: 99%;
  height: 18px;
  background-color: black;
  border-radius: 100vmax;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PhMeter = styled.span`
  background: linear-gradient(
    to right,
    hsl(6, 100%, 80%) 0%,
    hsl(335, 100%, 65%) 100%
  );
  border-radius: 100vmax;
  height: 80%;
  margin-left: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.value &&
    css`
      width: ${props.value}%;
    `}

  &:after {
    content: '';
    position: absolute;
    width: 11px;
    height: 70%;
    right: 2px;
    border-radius: 100vmax;
    background-color: #fff;
  }
`;
export const Vignette = styled.div`
  position: absolute;
  background-color: #fff;
  height: 73px;
  width: 156px;
  top: -28%;
  right: 7%;
  border-bottom-left-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  font-size: 2.5rem;
  font-weight: 700;

  &:after {
    content: '';
    position: absolute;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    bottom: -26px;
    right: -0px;
    width: 30px;
    height: 30px;
    background-color: #fff;
  }
  & p {
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-top: 0.3rem;
  }
  @media (max-width: 833px) {
    top: 82%;
    right: 20%;
    width: 60%;
    border-radius: 9px;
    &:after {
      display: none;
    }
  }
`;

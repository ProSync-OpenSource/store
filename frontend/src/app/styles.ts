import styled from 'styled-components'

export const Container = styled.div`
  background-color: red;
`;

export const FooterContainer = styled.footer`
    width: calc(100% - 80px);
    height: auto;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 40px;
    @media screen and (width <= 900px) {
        width: calc(100% - 80px);
    }
    @media screen and (width <= 750px) {
        width: calc(100% - 40px);
        grid-template-columns: auto auto;
        row-gap: 30px;
    }
    @media screen and (width <= 550px) {
        grid-template-columns: auto;
        row-gap: 40px;
    }
`;

export const HeaderNavBar = styled.div`
    width: 100%;
    background-color: #5D0C7B;
    z-index: 30;
    padding: 14px 40px 10px 40px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 48px;
    row-gap: 4px;
    
    @media screen and (width <= 980px) {
        column-gap: 38px;
    }
    @media screen and (width <= 900px) {
        padding: 24px 40px;
    }
    @media screen and (width <= 800px) {
        column-gap: 38px;
    }
    @media screen and (width <= 750px) {
        padding: 24px 20px;
    }
    @media screen and (width <= 550px) {
        column-gap: 30px;
    }
`;

export const MobileMenu = styled.label`
    position: relative;
    width: 25px;
    height: 18px;
    background: transparent;
    display: none;
    cursor: pointer;
    z-index: 300;
    & input {
        display: none;
    }
    & span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #F7F0F6;
        border-radius: 5px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    & span:nth-of-type(1) {
        top: 0px;
        transform-origin: left center;
    }
    & span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
    }
    & span:nth-of-type(3) {
        top: 100%;
        transform-origin: left center;
        transform: translateY(-100%);
    }
    & input:checked ~ span:nth-of-type(1) {
        transform: rotate(45deg);
        top: 0px;
        left: 6px;
    }
    & input:checked ~ span:nth-of-type(2) {
        width: 0%;
        opacity: 0;
    }
    & input:checked ~ span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 18px;
        left: 6px;
    }

    @media screen and (width <= 800) {
        display: block;
    };
`;


export const CategoryList = styled.ul`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: flex-start;
    @media screen and (width <= 1280px) {
        & :nth-child(6) {
            display: none;
        }
    }
    @media screen and (width <= 1024px) {
        & :nth-child(5) {
            display: none;
        }
    }
    @media screen and (width <= 900px) {
        display: none;
    }
`;

interface OverlayProps {
    zIndex?: number | undefined;
    opacity?: number;
};

export const OverlayElement = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: black;
  opacity: ${props => props.opacity};
  transition: opacity .1s linear;
  z-index: ${props => props.zIndex};
`;
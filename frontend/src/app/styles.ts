import styled from 'styled-components'

export const Container = styled.div`
  background-color: red;
`;

export const FooterContainer = styled.footer`
    width: calc(100% - 80px);
    height: auto;
    max-width: 1400px;
    margin: auto;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 40px;
    @media screen and (width <= 900px) {
        width: calc(100% - 80px);
    }
    @media screen and (width <= 750px) {
        width: calc(100% - 30px);
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
    max-width: 1400px;
    margin: auto;
    z-index: 30;
    padding: 14px 40px 10px 40px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 48px;
    row-gap: 4px;
    
    @media screen and (width <= 1000px) {
        column-gap: 38px;
    }
    @media screen and (width <= 900px) {
        padding: 24px 40px 10px 40px;
    }
    @media screen and (width <= 800px) {
        column-gap: 38px;
    }
    @media screen and (width <= 750px) {
        padding: 24px 15px 10px 15px;
    }
    @media screen and (width <= 550px) {
        column-gap: 30px;
    }
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
    zindex?: number | undefined;
    opacity?: number | undefined;
};

export const OverlayElement = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: black;
  opacity: ${props => props.opacity || 0};
  transition: opacity .1s linear;
  z-index: ${props => props.zindex || -10};
`;

export const WrapperForm = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  padding: 30px 20px;
  border-radius: 5px;
  color: #101010;
  @media screen and (width >= 1024px) {
    padding: 20px 30px;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  height: auto;
  @media screen and (width >= 1024px) {
    display: flex;
    max-width: 1280px;
    min-height: 650px;
    margin: auto 0px;
    overflow-x: hidden;
    background-color: white;
    box-sizing: border-box;
    overflow-y: visible;
  }
  @media screen and (width >= 1280px) {
    border-radius: 8px;
  }
`;
import styled from "styled-components";

export const ProductsSlideElement = styled.div`
    width: 230px;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    padding: 0px 8px;
    background-color: #E5E7EB;
    box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25),
    -4px 0px 10px -5px rgba(0, 0, 0, 0.3);
    @media screen and (width <= 900px) {
        width: 215px;
    }
    @media screen and (width <= 550px) {
        width: 200px;
    }
`;

export const HeaderSlidesContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #5D0C7B;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: white;
    @media screen and (width >= 1400px) {
        column-gap: 100px;
    }
    @media screen and (width <= 750px) {
        flex-direction: column-reverse;
        padding: 30px 0px 50px 0px;
    }
    @media screen and (width <= 500px) {
    }
`;

export const FeaturesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 250px;
    overflow: hidden;
    column-gap: 25px;
    row-gap: 12px;
    width: calc(100% - 112px);
    margin: auto;
    & .features-overlay {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        row-gap: 10px;
        padding-bottom: 5%;
        background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent);
        height: 100%;
    }
    @media screen and (width <= 900px) {
        grid-template-rows: 200px 200px;
        width: calc(100% - 80px);
    }
    @media screen and (width <= 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 150px 150px 150px;
        width: calc(100% - 40px);
    }
`;

interface SectionTitleProps {
    afterElementWidth?: number;
}

export const ProductsSectionTitleBox = styled.div<SectionTitleProps>`
    width: calc(100% - 112px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
    position: relative;
    & ::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2pt;
        border-radius: 8px;
        background-color: #d1d5db;
    }
    & ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${(props) => props.afterElementWidth}px;
        height: 2pt;
        border-radius: 8px;
        background-color: #5D0C7B;
        transition: width .5s ease-out;
    }
    @media screen and (width <= 900px) {
        width: calc(100% - 80px);
    }
    @media screen and (width <= 700px) {
        width: calc(100% - 40px);
    }
`;

export const HomeContainer = styled.section`
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #F7F0F6;
    & .swiper-pagination-bullet {
        --swiper-pagination-bullet-inactive-color: white;
        --swiper-pagination-bullet-size: 8px;
    }
    & .swiper-pagination-bullet-active {
        --swiper-pagination-color: white;
    }
`;

export const SwiperContainer = styled.section`
    position: relative;
    margin: auto;
    width: calc(100% - 112px);
    @media screen and (width <= 900px) {
        width: calc(100% - 80px);
    }
    @media screen and (width <= 750px) {
        width: calc(100% - 40px);
    }
`;

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
    background-color: white;
    box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25),
    -4px 0px 10px -5px rgba(0, 0, 0, 0.3);

    @media screen and (width <= 900px) {
        width: 215px;
        box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25),
    -4px 0px 10px -5px rgba(0, 0, 0, 0.3);
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
`;

export const FeaturesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 250px;
    overflow: hidden;
    column-gap: 25px;
    row-gap: 12px;
    width: 100%;
    margin: 25px auto 0px auto;

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
    }

    @media screen and (width <= 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 150px 150px 150px;
    }
`;

interface SectionTitleProps {
    afterElementWidth?: number;
}

export const ProductsSectionTitleBox = styled.div<SectionTitleProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2pt;
        border-radius: 8px;
        background-color: #d1d5db;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${(props) => props.afterElementWidth}px;
        height: 2pt;
        border-radius: 8px;
        background-color: #5D0C7B;
        transition: width .5s ease-out;
    };

    @media screen and (width <= 550px) {
        &::after {
            height: 1.5pt;
        }

        &::before {
            height: 1.5pt;
        }
    }
`;

export const HomeContainer = styled.section`
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #F7F0F6;

`;

export const SwiperContainer = styled.section`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

    & .swiper-controllers {
        display: none;
    }

    &:hover .swiper-controllers {
        display: block;
    }

    & .overlay {
        background-image: linear-gradient(to top, #F7F0F6, transparent);
    }

    & .custom-swiper-pagination {
        display: none;
        z-index: 10;
        bottom: 8%;
        position: absolute;
        justify-content: center;
    }

    & .second-products-swiper {
        background-color: white;
        box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25),-4px 0px 10px -5px rgba(0, 0, 0, 0.3);
    }

    & .second-custom-pagination {
        display: flex;
    }

    & .second-custom-pagination .swiper-pagination-bullet-active {
        background: red !important;
        color: red !important;
    }

    & .swiper-pagination-bullet, .swiper-pagination-bullet-active {
        --swiper-pagination-bullet-size: 8px;
        --swiper-pagination-color: white;
        --swiper-pagination-bullet-inactive-color: white;
    }

    & .second-products-swiper .swiper-pagination-bullet, .second-products-swiper .swiper-pagination-bullet-active {
        --swiper-pagination-bullet-size: 8px;
        --swiper-pagination-color: #5D0C7B;
        --swiper-pagination-bullet-inactive-color: #D4AAEF;
    }

    @media screen and (width <= 940px) {
        & .second-products-swiper {
            box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25),-4px 0px 10px -5px rgba(0, 0, 0, 0.3);
        }
    }

    @media screen and (width <= 750px) {
        & .products-swiper {
            padding: 25px 15px !important;
        }

        .custom-swiper-pagination {
            display: flex;
        }

        & .swiper-pagination {
            display: block !important;
        };
    }    

    @media screen and (width <= 800px) {
        .swiper-controllers {
            display: none !important;
        }
    }    
`;

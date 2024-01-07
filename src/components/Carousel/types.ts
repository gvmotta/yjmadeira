export interface Slide {
    img: string;
    textsFadeInLeft: string;
    textsFadeInRightTop: string;
    textsFadeInRightBottom: string;
    textsFadeInBottom: string;
    textButton: string;
}
export interface SimpleSliderProps {
    slides: Slide[];
}
  
export interface SimpleSliderState {
    activeSlide: number;
}

export interface ICarouselStyled {
    variant: string;
}
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles.ts"
import './../../styles/slider.css'

type SlidePropsType = {
    text: string,
    userName: string,
}


const Slide = (props: SlidePropsType) => {
    return (

        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>

    )
}

const items = [
    <Slide
        text={"I think, therefore I am."}
        userName={"René Descartes"}
    />,
    <Slide
        text={"Hello, World!"}
        userName={"Brian Kernighan"}
    />,
    <Slide
        text={"Bad, few, not enough."}
        userName={"John Doe"}
    />
];

export const Slider = () => (

    <S.StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />

    </S.StyledSlider>


);

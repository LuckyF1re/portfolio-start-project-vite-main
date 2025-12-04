import photoGuy from "./../../../assets/images/smileGay.png"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from "./Main_Styles.ts"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>

                    <S.TextBox>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Andrey Sadovich</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer. A Frontend Developer. A React Developer. Frontend Engineer. Frontend-разработчик</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200
                                }}
                            />

                        </S.MainTitle>


                    </S.TextBox>

                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photoGuy} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>



                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};


import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import * as React from "react";


export const Slogan: React.FC = () => {

    const handleClick = () => {
        window.open("https://linkedin.com/in/andrey-sadovich-5450503a0", '_blank');
    };



    return (
        <StyledSlogan >
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button
                        onClick={handleClick}
                    >Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
`


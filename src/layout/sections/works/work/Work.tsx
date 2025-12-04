import {Link} from "../../../../components/Link.ts";

import {Button} from "../../../../components/Button.ts";
import * as React from "react";
import {S} from "./../Works_Styles.ts"

type WorkPropsType = {
    title: string
    text: string
    scr: string
    linkDemo: string
    linkCode: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.StyledWork>

            <S.ImageWrapper>
                <S.Image src={props.scr} alt=""/>
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={props.linkDemo}>demo</Link>
                <Link href={props.linkCode}>code</Link>
            </S.Description>

        </S.StyledWork>
    );
};


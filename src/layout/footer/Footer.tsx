import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_Styles.ts"
import * as React from "react";


const socialItemsData = [
    {
        iconId: "insta",
        link: "https://instagram.com/andreysadovich",
    },
    {
        iconId: "telega",
        link: "https://t.me/LuckyF1re",
    },
    {
        iconId: "vk",
        link: "https://vk.com/b.l.monty",
    },
    {
        iconId: "linkedIn",
        link: "https://linkedin.com/in/andrey-sadovich-5450503a0",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>

            <FlexWrapper direction="column" align={"center"}>

            <S.Name>Andrey</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        height={"21"}
                                        width={"21"}
                                        viewBox={"0 0 21 21"}
                                        iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2025 Andrey Sadovich, in the same yesterday, today, and forever.</S.Copyright>

            </FlexWrapper>

        </S.StyledFooter>
    );
};


import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from ".//Skills_Styles.ts"
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "css",
        title:"CSS3",
        description:"Advanced styling with Flexbox, Grid, animations, and responsive design. Creating pixel-perfect, cross-browser compatible interfaces.",
    },

    {
        iconId: "react",
        title:"REACT",
        description:"Building scalable applications with hooks, context, and modern ecosystem tools. Component architecture and state management mastery.",
    },

    {
        iconId: "code",
        title:"HTML5",
        description:"Semantic markup, accessibility (a11y), and modern APIs. Building SEO-friendly, cross-browser compatible foundations.",
    },

    {
        iconId: "typescript",
        title:"TYPESCRIPT",
        description:"Strongly-typed JavaScript development. Interfaces, generics, type safety, and modern TS features for scalable applications.",
    },

    {
        iconId: "styledComponents",
        title:"STYLED COMPONENTS",
        description:"CSS-in-JS with dynamic styling, theming, and component-based design system. Creating maintainable, scalable UI libraries.",
    },

    {
        iconId: "webDesign",
        title:"FIGMA",
        description:"UI/UX design, prototyping, design systems, and developer handoff. Creating pixel-perfect designs with component libraries.",
    },

    {
        iconId: "git",
        title:"GIT",
        description:"Version control, branching strategies, code review workflows, and team collaboration. Maintaining clean project history.",
    },

    {
        iconId: "redux",
        title:"REDUX",
        description:"State management, predictable state containers, and middleware integration. Managing complex application state at scale.",
    },

    {
        iconId: "nextJS",
        title:"NEXT.JS",
        description:"Full-stack React framework with SSR, SSG, ISR, and API routes. Building performant, SEO-friendly applications.",
    },

]

export const Skills = () => {
    return (
        <S.StyledSkills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    <Fade cascade={true} damping={0.2}>

                        {skillData.map((s, item) => {
                            return (
                                <Skill
                                    key={item}
                                    iconId={s.iconId}
                                    title={s.title}
                                    description={s.description}
                                />
                            )
                        })}

                    </Fade>

                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};


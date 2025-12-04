import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

// Skills

const StyledSkills = styled.section`
    position: relative;
`

// Skill

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
   padding: 42px 20px 52px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
    
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;

`

const SkillText = styled.p`
    text-align: center;
`

const IconWrapper = styled.div`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        height: 80px;
        width: 80px;
        
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

export const S = {
    StyledSkills,
    StyledSkill,
    SkillTitle,
    SkillText,
    IconWrapper,
}
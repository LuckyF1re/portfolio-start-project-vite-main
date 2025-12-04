import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {S} from "./../HeaderMenu_Styles.ts"
import {useState} from "react";



export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>


            <S.MobileMenuPopUp isOpen={menuIsOpen}  onClick={()=>setMenuIsOpen(false)}>
                <Menu/>
            </S.MobileMenuPopUp>


        </S.MobileMenu>
    );
};




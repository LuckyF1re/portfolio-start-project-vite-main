

import {Menu} from "../menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"
import * as React from "react";



export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
                <Menu />
        </S.DesktopMenu>
    );
};




import styled from "styled-components";
import {Link} from "../../../../components/Link.ts";
import {TabsStatusType} from "../Works.tsx";

type MenuItemPropsType = {
    title: string;
    status: TabsStatusType;
}

type MenuPropsType = {
    tabsItems: MenuItemPropsType[]
    changeFilterStatus:(value: TabsStatusType) => void
    currentFilterStatus: TabsStatusType
}


export const TabMenu = (props: MenuPropsType ) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link
                            active={props.currentFilterStatus === item.status}
                            as={"button"}
                            onClick={()=>{props.changeFilterStatus(item.status)}}
                        >
                            {item.title}
                        </Link>
                    </ListItem>
                })}


            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    
    ul {
        display: flex;
        //gap: 20px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
 `

const ListItem = styled.li`
    
`



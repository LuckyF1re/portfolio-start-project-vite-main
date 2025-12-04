
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {S} from "./Works_Styles.ts"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import todolist from "../../../assets/images/Todo.jpg";
import counter from "../../../assets/images/Counter.jpg";
import weatherApp from "../../../assets/images/WeatherApp.jpg";
import landing from "../../../assets/images/landing.jpg";
import {Container} from "../../../components/Container.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type MenuItemPropsType = {
    title: string;
    status: TabsStatusType;
}

const tabsItems: MenuItemPropsType[]  = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]


const worksData = [

    {
        title: "To-Do List",
        scr: todolist,
        text: "This is a classic to-do list. Nothing superfluous. React project, working with the server with authorization.",
        type: "spa",
        id: 1,
        linkDemo: "https://luckyf1re.github.io/TodolistFII/login",
        linkCode: "https://github.com/LuckyF1re/TodolistFII"
    },

    {
        title: "Counter",
        scr: counter,
        text: "A simple counter with the ability to configure and save data in localstorage.",
        type: "react",
        id: 2,
        linkDemo: "https://luckyf1re.github.io/counter/",
        linkCode: "https://github.com/LuckyF1re/counter"
    },
    {
        title: "Weather App",
        scr: weatherApp,
        text: "Modern weather application with real-time forecasts, location detection, and beautiful UI. Built with React, TypeScript, and OpenWeather API.",
        type: "spa",
        id: 3,
        linkDemo: "https://luckyf1re.github.io/weather-app/",
        linkCode: "https://github.com/LuckyF1re/weather-app"
    },
    {
        title: "Landing",
        scr: landing,
        text: "Modern, responsive landing page showcasing React expertise and projects. Built with cutting-edge frontend technologies for optimal performance and user experience.",
        type: "landing",
        id: 4,
        linkDemo: "#",
        linkCode: "#"
    },
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus ] = useState<TabsStatusType>("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
      filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    const changeFilterStatus = (value: TabsStatusType ) => {
        setCurrentFilterStatus(value)
    }


    return (
        <S.StyledWorks id={"works"}>
            <Container>

                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    currentFilterStatus={currentFilterStatus}
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                    {filteredWorks.map((w) => {
                        return (
                            <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px", }}
                                layout
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key={w.id}

                            >
                                <Work
                                    key={w.id}
                                    title={w.title}
                                    text={w.text}
                                    scr={w.scr}
                                    linkDemo={w.linkDemo}
                                    linkCode={w.linkCode}
                                />
                            </motion.div>

                        )
                    })}
                    </AnimatePresence>

                </FlexWrapper>

            </Container>
        </S.StyledWorks>
    );
};



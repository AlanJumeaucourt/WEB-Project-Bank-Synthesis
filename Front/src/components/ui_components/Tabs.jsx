import React, { useState } from "react";
import { Card } from "./Containers"
import "./css/Tabs.css"

export function Tabs({ tabs }) {

    const [currentTab, setCurrentTab] = useState('1');

    const handleClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <Card>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div className="d-flex flex-column align-items-center"><p className='mt-3 h4'>{tab.title}</p><div>{tab.content}</div></div>}
                    </div>
                )}
            </Card>
        </div>
    )
}
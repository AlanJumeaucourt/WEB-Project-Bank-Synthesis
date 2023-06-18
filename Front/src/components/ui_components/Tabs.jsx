import React, { useState } from "react";
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
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><div>{tab.content}</div></div>}
                    </div>
                )}
            </div>
        </div>
    )
}
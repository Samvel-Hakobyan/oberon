import React from 'react';
import {box1, box2, box5, box3, box4, box6,} from "../repeatingJson/List3";
import List from "../repeatingElements/repeatingList3";

function List3(props) {
    return (
        <div>
            <div className="collection-list-wrapper w-dyn-list">
                <div role="list" className="collection-list---3a w-dyn-items">

                    <List data={box1}/>
                    <List data={box2}/>
                    <List data={box3}/>
                    <List data={box4}/>
                    <List data={box5}/>
                    <List data={box6}/>

                </div>
            </div>
        </div>
    );
}

export default List3;
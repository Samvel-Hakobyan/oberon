import React from 'react';
import Wrapper from "../components/Wrapper";
import Posts from "../repeatingElements/repeatingSingleList";
import {list1} from "../repeatingJson/SingleList";
import {Helmet} from "react-helmet";

function Post(props) {
    return (
        <div>

                <Posts data={list1} />
        </div>
    );
}

export default Post;
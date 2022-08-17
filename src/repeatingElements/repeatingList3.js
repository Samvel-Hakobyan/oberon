import React from 'react';
function RepeatingList3(props) {
    return (
        <div>

            <div role="listitem" className="collection-item w-dyn-item" style={{width: "380px"}}><a
            data-w-id="7028edd1-1020-e63f-9e75-66854ff179e0"
            style={{backgroundImage: props.data.img}}
            href="/post/best-blog-hosting-services-detailed-comparison"
            className="link-post _230px-margin w-inline-block">

            </a>
                <div className="post-info"><a href="/category/technology"
                                              className="link-category">{props.data.category}</a>
                    <div className="date">{props.data.date}</div>
                </div>
                <a href="/post/best-blog-hosting-services-detailed-comparison"
                   className="link-post-heading w-inline-block"><h5 className="post-heading">{props.data.heading}</h5></a></div>
       </div>
    );
}

export default RepeatingList3;
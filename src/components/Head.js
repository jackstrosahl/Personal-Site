import React from "react";
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jack Strosahl</title>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+HK|Source+Code+Pro&display=swap" rel="stylesheet"></link>
                <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

                <script src="https://kit.fontawesome.com/0322e445d9.js"></script>
            </Helmet>
        </div>
    );
  }
};

export default Head;
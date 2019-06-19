import React from "react"
import { Link } from "gatsby"
import * as contentful from 'contentful'
import Header from '../components/Header.js'


class IndexPage extends React.Component
{
  client = contentful.createClient({
    space: "rr1q828c6t3j",
    accessToken: "3vdbeP6c08cgcRxyR7tscyvMm-DnOJ4Wzmz-IYwWMPg"
  });
  state ={posts:[]}
  componentDidMount()
  {
    this.client.getEntries()
    .then((response) => this.setState({posts:response.items}))
    .catch();
  }
  render()
  {
    return(
    <div>
      <Header/>
      <div className="hc" style={{flexWrap:"wrap",width:"100%"}}>
      {this.state.posts.map(post =>
        <div style={{width:"50%",flexBasis:"100%"}}>
        <a href={"/post?id="+post.sys.id}>{post.fields.title}</a>
        </div>)}
      </div>
    </div>);
  }
}

export default IndexPage

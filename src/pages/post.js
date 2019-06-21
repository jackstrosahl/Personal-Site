import React from "react"
import { Link } from "gatsby"
import * as contentful from 'contentful'
import Blog from "../components/Blog.js"
import Global from '../components/Global.js'

class BlogPage extends React.Component
{
  params = new URLSearchParams(this.props.location.search);
  client = contentful.createClient({
    space: "rr1q828c6t3j",
    accessToken: "3vdbeP6c08cgcRxyR7tscyvMm-DnOJ4Wzmz-IYwWMPg"
  });

  render()
  {
    return(
    <div>
      <Global/>
      <Blog id={this.params.get("id")}/>
    </div>);
  }
}

export default BlogPage
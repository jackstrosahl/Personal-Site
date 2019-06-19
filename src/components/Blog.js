import React from "react";
import * as contentful from 'contentful'
import ReactMarkdown from 'react-markdown'

class Blog extends React.Component
{
    state = {content:"",title:""}
    client = contentful.createClient({
        space: "rr1q828c6t3j",
        accessToken: "3vdbeP6c08cgcRxyR7tscyvMm-DnOJ4Wzmz-IYwWMPg"
    });
    componentDidMount()
    {
        this.client
        .getEntry(this.props.id)
        .then(entry =>
                {this.setState({content:entry.fields.content,title:entry.fields.title})})
        .catch(err => {this.setState({content:"",title:"Error"})});
    }
    render()
    {

        return(
        <div>
            <h1>{this.state.title}</h1>
            <ReactMarkdown source={this.state.content}/>
        </div>);
    }
}

export default Blog;
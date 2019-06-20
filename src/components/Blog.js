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
        <div className="hc" style={{width:"100%",flexWrap:"wrap"}}>
            <div style={{maxWidth:"50vmax"}}>
            <h1 style={{fontSize:"5vh",fontWeight:"bold"}}>{this.state.title}</h1>
            <div style={{flexBasis:"100%"}}/>
            <div style={{fontSize:"3vh",lineHeight:"5vh"}}> 
            <ReactMarkdown source={this.state.content}/>
            </div>
            </div>
        </div>);
    }
}

export default Blog;
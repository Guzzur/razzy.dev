import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import CodeBlock from "./CodeBlock";
import Buzzwords from './Buzzwords';
import prepareUrls from 'local-ip-url/prepareUrls';

class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state ={
      postId: props.match && 
        props.match.params &&
        props.match.params.postId,
      post: ''
    }
  }

  async componentDidMount() {
    const file = await import('../posts/' + this.state.postId + '.md');
    const response = await fetch(file.default);
    const post = await response.text();
    this.setState({ post })
  }

  render() {
    const transform = uri => {
      const prep = prepareUrls(
        process.env.DEVELOPMENT ?
        {
          protocol: 'http',
          host: '0.0.0.0',
          port: 3001
        } :
        {
          protocol: 'https',
          host: 'razzy.dev'
        }
      );
      const replace = uri.replace('../../public/resources', prep.localUrl + '/resources');
      return replace;
    }
    const { post } = this.state;
    return (
      <div id="post">
        <ReactMarkdown
          source={ post }
          renderers={{
            code: CodeBlock,
            image: Image
          }}
          transformImageUri={ transform }
        />
      </div>
    );
  }
}

function Image(props) {
  return <div className="text-center py-4"><img className="post-img" alt="" {...props}/></div>
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

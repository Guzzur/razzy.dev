import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, CardColumns } from "react-bootstrap";
import Buzzwords from '../components/Buzzwords';
import posts from '../posts';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      posts
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        { posts
            .filter(a => a.publish)
            .sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))
            .map((post, i) => (
              <Link to={"/posts/" + post.file.slice(2, post.file.length - 3)}>
                <Card className='col-12 my-4 p-0' key={ post.title + '_' + i }>
                  {
                    post.thumbnail &&
                    <Card.Img
                      variant="top"
                      src={ require(`../posts/${post.thumbnail.substring(2)}`) }
                    />
                  }
                  <Card.Body className='p-0'>
                    <Card.Title className='m-4'>
                      { post.title }
                    </Card.Title>
                    <Card.Body className='px-4 pb-4 pt-0'>
                      <Buzzwords
                        projectName="gigstart"
                        words={ post.tags || [] }
                      />
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        { post.date }
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Link>
        )) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

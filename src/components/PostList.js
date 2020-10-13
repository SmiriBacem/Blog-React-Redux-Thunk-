import Axios from 'axios';
import React, { Component } from 'react'
import axios from 'axios'
import { fetchPostsAndUsers } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends Component {
     componentDidMount = async() => {
        this.props.fetchPostsAndUsers()
    }
    renderList(){
        return this.props.posts.map(post=>{
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="ui relaced divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToPros=(state)=>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToPros, {fetchPostsAndUsers})(PostList);
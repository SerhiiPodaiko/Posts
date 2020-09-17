import React, { Component } from 'react';

import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

export default class App extends Component {
    render() {
        return (
            <div className="container pt-3">
                <div className="row">
                    <div className="col">
                        <PostForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Синхронні Пости</h2>
                        <Posts />
                    </div>
                    <div className="col">
                        <h2>Асинхронні Пости</h2>
                       <FetchedPosts />
                    </div>
                </div>
            </div>
        );
    }
}

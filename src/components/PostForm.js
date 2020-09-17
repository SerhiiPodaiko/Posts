import React, { Component } from "react";
import { connect } from "react-redux";
import {createPost} from "../redux/actions";
import {Alert} from "./Alert";
import {showAlert} from "../redux/actions";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const { title } = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Назва поста не може бути пустим')
        }

        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost)
        this.setState({ title: '' });
    }

    changeInputHandler = (event) => {
        event.persist();
        this.setState(prevState => ({...prevState, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
          <form onSubmit={this.submitHandler}>

              {this.props.alert && <Alert text={this.props.alert} />}

              <div className="form-group">
                  <label htmlFor="title">Заголовок Поста</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={this.state.title}
                      name="title"
                      onChange={this.changeInputHandler}/>
              </div>
              <button type="submit" className="btn btn-success">Створити</button>
          </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
};

const mapStateToProps = (state) => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
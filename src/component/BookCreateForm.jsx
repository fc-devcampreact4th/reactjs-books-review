import React from "react";
import styled from "styled-components";
import { Button, Input, Col, message } from "antd";
import * as axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { async } from "q";

const { TextArea } = Input;

class CreateBookForm extends React.Component {
    _titleInput = React.createRef();
    _descriptionInput = React.createRef();
    _authorInput = React.createRef();
    _urlInput = React.createRef();

    render() {
        return (
            <Col>
                <div>도서 등록</div>
                <div>
                    <label htmlFor="">책제목</label>
                    <Input id="title" ref={this._titleInput} />
                </div>
                <div>
                    <label htmlFor="description">감상평</label>
                    <TextArea
                        id="description"
                        cols="30"
                        rows="10"
                        ref={this._descriptionInput}
                    />
                </div>
                <div>
                    <label htmlFor="author">지은이</label>
                    <Input type="text" id="author" ref={this._authorInput} />
                </div>
                <div>
                    <label htmlFor="url">구매링크</label>
                    <Input type="text" id="url" ref={this._urlInput} />
                </div>
                <div>
                    <button onClick={this._submit}>등록</button>
                    <Link to="/">
                        <button>취소</button>
                    </Link>
                </div>
            </Col>
        );
    }

    _submit = async () => {
        const { history } = this.props;
        const title = this._titleInput.current.state.value;
        const description = this._descriptionInput.current.textAreaRef.value;
        const author = this._authorInput.current.state.value;
        const url = this._urlInput.current.state.value;

        try {
            const token = localStorage.getItem("token");

            const config = {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                title: title,
                message: description,
                author: author,
                url: url
            };

            const param = {
                title: title,
                message: description,
                author: author,
                url: url
            };

            console.log(config);
            console.log(param);
            await axios.post("https://api.marktube.tv/v1/book", config);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
}

export default withRouter(CreateBookForm);

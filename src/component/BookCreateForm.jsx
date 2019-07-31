import React from "react";
import styled from "styled-components";
import { Button, Input, Col, message } from "antd";
import * as axios from "axios";
import { Link, withRouter } from "react-router-dom";

class CreateBookForm extends React.Component {
    render() {
        return (
            <Col>
                <div>도서 등록</div>
                <div>
                    <label htmlFor="">책제목</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">감상평</label>
                    <textarea name="" id="" cols="30" rows="10" />
                </div>
                <div>
                    <label htmlFor="">지은이</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">구매링크</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <button>등록</button>
                    <Link to="/">
                        <button>취소</button>
                    </Link>
                </div>
            </Col>
        );
    }
}

export default withRouter(CreateBookForm);

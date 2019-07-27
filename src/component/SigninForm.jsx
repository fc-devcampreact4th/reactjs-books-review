import React from "react";
import styled from "styled-components";
import { Button, Input, Col, message } from "antd";
import * as axios from "axios";
import { Link, withRouter } from "react-router-dom";

const SigninTitle = styled.div`
    height: 60px;
    line-height: 60px;
    color: #434445;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 40px;
`;

const InputArea = styled.div`
    margin-bottom: 25px;
`;

const SignInBtn = styled(Button)`
    color: #fff;
    background-color: #254156;
    font-size: 9pt;
    width: 90px;
    height: 30px;
`;

const BottomRow = styled.div`
    width: 300px;
    height: 40px;
    margin-top: 10px;
`;

const BottomRowDesc = styled.div`
    float: left;
`;

const BottomRowText = styled.span`
    color: #595b5c;
    display: inline-block;
    height: 40px;
    line-height: 40px;
`;

const BottomRowBtn = styled.div`
    float: right;
`;

const AccountBtn = styled.button`
    color: #2a455b;
    background-color: #f1f5f6;
    border: #254156 solid 2px;
    font-size: 9pt;
    width: 90px;
    height: 30px;
    margin-top: 5px;
`;

class SigninForm extends React.Component {
    _emailInput = React.createRef();
    _passwordInput = React.createRef();

    state = {
        loading: false
    };
    render() {
        return (
            <Col
                span={12}
                style={{
                    position: "relative",
                    backgroundColor: "#F1F5F6",
                    height: "534px",
                    padding: "50px"
                }}
            >
                <SigninTitle>LOG IN. START SEARCHING</SigninTitle>
                <InputArea>
                    <label htmlFor="email">
                        email
                        <Input
                            id="email"
                            placeholder="Email"
                            ref={this._emailInput}
                        />
                    </label>
                </InputArea>
                <InputArea>
                    <label htmlFor="password">
                        password
                        <Input
                            id="password"
                            type="password"
                            ref={this._passwordInput}
                        />
                    </label>
                </InputArea>
                <div>
                    <SignInBtn
                        loading={this.state.loading}
                        onClick={this._click}
                    >
                        SIGN IN
                    </SignInBtn>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "50px",
                        bottom: "50px"
                    }}
                >
                    <BottomRow>
                        <BottomRowDesc>
                            <BottomRowText>
                                Need to create an account?
                            </BottomRowText>
                        </BottomRowDesc>
                        <BottomRowBtn>
                            <Link to="/signup">
                                <AccountBtn>SIGN UP</AccountBtn>
                            </Link>
                        </BottomRowBtn>
                    </BottomRow>
                    <BottomRow>
                        <BottomRowDesc>
                            <BottomRowText>Forgot your password?</BottomRowText>
                        </BottomRowDesc>
                        <BottomRowBtn>
                            <Link to="/forgot">
                                <AccountBtn>RECOVERY</AccountBtn>
                            </Link>
                        </BottomRowBtn>
                    </BottomRow>
                </div>
            </Col>
        );
    }

    _click = async () => {
        const { history } = this.props;
        const email = this._emailInput.current.state.value;
        const password = this._passwordInput.current.state.value;

        if (email === "" || password === "") {
            message.error("입력하세요.");
            return;
        }

        this.setState({
            loading: true
        });

        // promise 방식
        // axios
        //     .post("https://api.marktube.tv/v1/me", {
        //         email,
        //         password
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });

        // async 방식
        try {
            const response = await axios.post("https://api.marktube.tv/v1/me", {
                email,
                password
            });
            const token = response.data.token;
            localStorage.setItem("token", token);
            history.push("/");
        } catch (error) {
            console.log(error);
            message.error(error.response.data.error);
            this.setState({
                loading: false
            });
        }
    };
}

export default withRouter(SigninForm);

import React from "react";
import styled from "styled-components";
import { Button, Input, Col } from "antd";

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

const SignInBtn = styled.button`
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

export default function SigninForm() {
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
                    <Input id="email" placeholder="Basic usage" />
                </label>
            </InputArea>
            <InputArea>
                <label htmlFor="password">
                    password
                    <Input.Password
                        id="password"
                        placeholder="input password"
                    />
                </label>
            </InputArea>
            <div>
                <SignInBtn>SIGN IN</SignInBtn>
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
                        <AccountBtn>SIGN UP</AccountBtn>
                    </BottomRowBtn>
                </BottomRow>
                <BottomRow>
                    <BottomRowDesc>
                        <BottomRowText>Forgot your password?</BottomRowText>
                    </BottomRowDesc>
                    <BottomRowBtn>
                        <AccountBtn>RECOVERY</AccountBtn>
                    </BottomRowBtn>
                </BottomRow>
            </div>
        </Col>
    );
}

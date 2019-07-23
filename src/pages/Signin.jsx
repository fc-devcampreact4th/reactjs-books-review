import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import SigninBg from "../component/SigninBg";
import SigninForm from "../component/SigninForm";

const Page = styled(Row).attrs(() => ({
    type: "flex",
    align: "middle"
}))`
    height: 100vh;
`; // <Row type={"flex"} align="middle" style={{height: '100vh'}}

const Content = styled.div`
    width: 800px;
    height: 700px;
    margin-right: auto;
    margin-left: auto;
`;

const Title = styled.div`
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    color: #642828;
    text-transform: uppercase;
`;

const Subtitle = styled.div`
    text-align: center;
    font-family: Roboto;
    font-size: 27px;
    font-weight: bold;
    text-transform: uppercase;
`;

const Underline = styled.div`
    width: 200px;
    height: 8px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    background: linear-gradient(to right, #803b32, #ddb49b);
`;

const SigninArea = styled(Row)``;

export default function Signin() {
    return (
        <Page>
            <Col span={24} style={{ height: "100px" }}>
                <Content>
                    <Title>MARKTUBE REVIEW SERVICE FOR BOOKS</Title>
                    <Subtitle>
                        PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.
                    </Subtitle>
                    <Underline />
                    <SigninArea>
                        <SigninBg />
                        <SigninForm />
                    </SigninArea>
                </Content>
            </Col>
        </Page>
    );
}

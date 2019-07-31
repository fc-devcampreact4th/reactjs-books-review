import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import CreateBookForm from "../component/BookCreateForm";

export default function MakeBook() {
    return (
        <Row>
            <Col span={24}>
                <CreateBookForm />
            </Col>
        </Row>
    );
}

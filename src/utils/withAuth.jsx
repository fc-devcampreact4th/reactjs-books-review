import React from "react";
import { Redirect } from "react-router-dom";
// HOC 커스텀 예
// 컴포넌트에서 체크 할 항목을 재활용을 위해
/* <Route
    path="/"
    exact
    render={props => {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token === null) {
            return <Redirect path={"/signin"} />;
        }
        return <Home {...props} />;
    }}
/> */
// 아래와 같이 함수화 하여 재사용 가능 하다.
export default function withAuth(Component) {
    return props => {
        const token = localStorage.getItem("token");

        if (token === null) {
            return <Redirect path={"/signin"} />;
        }
        return <Component {...props} token={token} />;
    };
}

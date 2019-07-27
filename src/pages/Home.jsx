import React from "react";
import * as axios from "axios";

function Book(props) {
    return <div>{props.title}</div>;
}

export default class Home extends React.Component {
    state = {
        books: []
    };

    async componentDidMount() {
        const { token } = this.props;
        try {
            const response = await axios.get(
                "https://api.marktube.tv/v1/book",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            this.setState({
                books: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { books } = this.state;
        return (
            <div>
                <h1>Home</h1>
                {books.map(book => (
                    <Book {...book} key={book.bookId} />
                ))}
            </div>
        );
    }
}

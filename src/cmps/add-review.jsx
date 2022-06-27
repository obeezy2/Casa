import { Component } from "react";
import Avatar from "@mui/material/Avatar";

export class AddReview extends Component {
    state = {
        review: {
            txt: "",
        },
    };

    handleChange = ({ target }) => {
        const { value } = target;
        this.setState({ review: { ...this.state.review, txt: value } });
    };
    sendReview = () => {
        let { review } = this.state;
        let { loggedinUser } = this.props;
        review.by = {
            _id: loggedinUser._id,
            fullname: loggedinUser.fullname,
            imgUrl: loggedinUser.imgUrl,
        };
        this.props.addGuestReview(review);
    };

    render() {
        const { review } = this.state;
        const { loggedinUser } = this.props;
        const imgUrl = loggedinUser ? loggedinUser.imgUrl : "";
        const fullname = loggedinUser ? loggedinUser.fullname : "Guest";

        return (
            <section className="add-review">
                <h2>Add Review</h2>
                <div className="loggedin-user">
                    <Avatar src={imgUrl} />

                    <h3>{fullname}</h3>
                </div>

                <textarea
                    type="text"
                    name="txt"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={review.txt}
                    placeholder="Add your review..."
                />

                <button onClick={this.sendReview}> Send </button>
            </section>
        );
    }
}

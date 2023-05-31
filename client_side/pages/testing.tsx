import axios from "axios";
import React from "react";

export default class MyComponent extends React.Component {
    state = {
        image: "",
        mimeType: "",
    };

    componentDidMount() {
        this.fetchImage();
    }

    fetchImage = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/image/SfLXUmOGKmhmJ3xz2jlI.jpg"
            );
            const { image, mime_type: mimeType } = response.data;
            this.setState({ image, mimeType });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { image, mimeType } = this.state;

        if (!image) {
            return <div>Loading image...</div>;
        }

        return (
            <div>
                <img src={`data:${mimeType};base64,${image}`} alt="Image" />
            </div>
        );
    }
}

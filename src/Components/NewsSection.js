import React from "react";

const NewsSection = () => {

    return (
        <div className="News">
            <h1>News Section</h1>
            <div className="NewsContainer">
                <div className="NewsItem">
                    <div className="NewsImage">
                        {/*Image of a car*/}
                        <img src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="flower" />
                    </div>
                    <div className="NewsText">
                        <h3>News Title</h3>
                        <p>News description</p>
                    </div>
                </div>
                <div className="NewsItem">
                    <div className="NewsImage">
                        {/*Image of a car*/}
                        <img src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="flower" />
                    </div>
                    <div className="NewsText">
                        <h3>News Title</h3>
                        <p>News description</p>
                    </div>
                </div>
                <div className="NewsItem">
                    <div className="NewsImage">
                        {/*Image of a car*/}
                        <img src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="flower" />
                    </div>
                    <div className="NewsText">
                        <h3>News Title</h3>
                        <p>News description</p>
                    </div>
                </div>
            </div>
        </div>
        

    );
}

export default NewsSection;
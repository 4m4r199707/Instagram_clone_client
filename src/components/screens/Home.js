import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Amar</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vdW50YWluc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>This is amazing post!</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    );
};

export default Home;
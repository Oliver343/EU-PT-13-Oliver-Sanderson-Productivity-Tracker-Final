import React from "react";


const Portfolio = () => {
  return (
    <div id="Portfolio" className="container bg-transparent border-end-0 border-start-0 border-top border-bottom border mx-auto py-5">
      <h1>Set & Track your Goals for Success</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
      </p>
      <div className="container">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card h-100">
                <img src= "https://picsum.photos/700/400" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Set Screen Productivity Goals</h5>
                  <p className="card-text">
                  Be on top of thing by setting screen time goals! Stop wasting your time on unknown scrolling or watching useless videos.
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://picsum.photos/700/400" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Track your screen time</h5>
                  <p className="card-text">
                  Improve your efficency by tracking your screen time and learning about your habits
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://picsum.photos/700/400" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Connect with friends</h5>
                  <p className="card-text">
                  Don’t work in silence share your progress with friends and family!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
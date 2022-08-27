import React from 'react';
import "./style/gallery.css";
import image2 from './images/image3.jpg';
import image from './images/image2.jpg';
import image3 from './images/image4.jpg';
import im from './images/image5.jpg';
import im1 from './images/image7.jpg';
import im2 from './images/image8.jpg'
import im3 from './images/image9.jpg';

function Gallery() {
  return (
    <div>
      <div style={{ marginTop: 150 }}>
        {/* <div className="containerGallery" >

<div>
   <img className="imgGallery" src="https://images.unsplash.com/photo-1534131270927-b0704a572b6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
   <img className="imgGallery"  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" alt="" />
   <img  className="imgGallery" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
</div> 

</div>*/}

        {/* images gallery */}

        <div className="container">
          <div className="row text-center text-lg-start">
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={image}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail proff"
                  src="https://www.sunshinetips.com/wp-content/uploads/2022/03/Spring-Pastel-nail-designs.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={image3}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={im}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src="https://static.onecms.io/wp-content/uploads/sites/24/2018/05/gilded-cocoa.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={im2}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={im3}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  style={{ width: 250, height: 200 }}
                  className="img-fluid img-thumbnail"
                  src={im1}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
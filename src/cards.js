import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div>
      
    
    <section className="hero-section">
    
            <Link className='link' to={"/fetchBooks"}>GO TO TABLE</Link>
          
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />

        <div className="card-grid">
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://e1.pxfuel.com/desktop-wallpaper/984/31/desktop-wallpaper-harry-potter-and-the-goblet-of-fire-ebook-rowling-harry-potter-and-the-goblet-of-fire-book-covers-thumbnail.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://m.media-amazon.com/images/I/81Uj7+K+r4L._AC_UF1000,1000_QL80_.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://qph.cf2.quoracdn.net/main-qimg-9aca1758fc775290ac282d5102b391b3-lq)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3rzvIGux9o_ZDRnt_IYQw8Ce82QPeRtjQg&usqp=CAU)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://barbarah.files.wordpress.com/2018/04/helen-keller.jpg?w=584)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzb7KkxxroBnp2YrmL14S5mqHKjSDdfKc6g&usqp=CAU)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9r6PG7wN3psKF_4PSDFj52RT-YRAbRRHdejrUxhS075pVHS2ryZqgW-o9L22ahNDBCo&usqp=CAU)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGUHnub_3bFWDeMMtREehXjr7JhxqjoiEYw&usqp=CAU)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading"></h3>
            </div>
          
          </a>

          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
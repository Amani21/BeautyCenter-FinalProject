import React from 'react'; 
import './style/home.css';

function Home() {
  return (
    <div className="hh">
      <div id="proparallax">
        <img
          className="one"
          src="https://img.freepik.com/photos-premium/soins-peau-du-corps-gros-plan-jeune-femme-obtenir-traitement-spa-salon-beaute-massage-du-visage-au-spa-traitement-beaute-du-visage-salon-spa_118454-7049.jpg?w=2000"
          alt=""
        />

        <img
          className="two"
          src="https://media.istockphoto.com/photos/woman-in-mask-on-face-in-spa-beauty-salon-picture-id921797424?k=20&m=921797424&s=170667a&w=0&h=O7SqRFed39Ra5jaRqeyYYXtwWx9MXaie6oR8ett1_hk="
          alt=""
        />

        <img
          className="two"
          src="https://media.istockphoto.com/photos/woman-in-mask-on-face-in-spa-beauty-salon-picture-id921797424?k=20&m=921797424&s=170667a&w=0&h=O7SqRFed39Ra5jaRqeyYYXtwWx9MXaie6oR8ett1_hk="
          alt=""
        />
        <img
          className="three"
          src="https://www.thatchamnailsandbeautyspa.co.uk/assets/img/Home/1.jpg"
          alt=""
        />
      </div>
      <div
        className="counter"
        style={{
          backgroundColor: "rgb(215 191 205)",
          marginTop: "20px",
          fontFamily: "Square Peg , cursive",
          borderRadius: "10px",
        }}
      >
        <div
          className="row"
          style={{ marginLeft: "30px", justifyContent: "space-around" }}
        >
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <img
                src="https://icon-library.com/images/hours-icon-png/hours-icon-png-17.jpg"
                style={{ width: "40px", heigth: "40px" }}
              />
              <h3 className="m-0px font-w-600">Opening Time</h3>
              <h6 className="count h2">10h to 18h</h6>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <img
                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                style={{ width: "40px", heigth: "40px" }}
              />
              <h3 className="m-0px font-w-600">Location </h3>
              <h6 className="count h2">Beb Bhar Gabes</h6>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <img
                src="https://www.svgrepo.com/show/91335/phone-call.svg"
                style={{ width: "40px", heigth: "40px" }}
              />
              <h3 className="m-0px font-w-600">Contact</h3>
              <h6 className="count h2">+216 52 985 290</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="togther">
          <h1>Beauty center</h1>
        </div>
        <hr noshade="" />
        <h3>We care for your skin</h3>
      </div>
      <div className="para">
        <p>
          Plongé dans une expérience immersive au cœur de la tradition
          marocaine,
          <span>Beauty Center</span> vous fera voyager dans un conte des mille
          et une nuits.
        </p>
      </div>
      <div className="cwarats">
        <div className="cartaLawla defaultCarta">
          <svg
            id="Capa_1"
            enableBackground="new 0 0 510.671 510.671"
            height={512}
            viewBox="0 0 510.671 510.671"
            width={512}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m505.388 301.212c-3.366-3.227-7.964-4.972-12.631-4.769-25.596 1.077-48.96 8.168-69.472 21.055-2.709-4.998-5.68-9.857-8.934-14.53-2.367-3.4-7.043-4.235-10.44-1.869-3.399 2.367-4.236 7.042-1.869 10.44 13.209 18.969 21.548 41.179 24.115 64.227 2.588 23.232-.749 46.908-9.68 68.545l-18.286 45.741c-.432.006-.862.017-1.295.017h-71.699c-.539 0-1.075-.012-1.612-.021l-17.953-45.696c-.016-.04-.032-.08-.048-.119-22.979-55.665-7.703-119.464 38.012-158.755l17.451-14.999 17.45 14.998c1.133.974 2.309 2.022 3.593 3.206 3.048 2.807 7.792 2.61 10.598-.437s2.61-7.792-.437-10.598c-1.412-1.3-2.712-2.46-3.977-3.547l-22.339-19.2c-2.812-2.416-6.966-2.416-9.777 0l-5.757 4.948c-10.456-15.994-30.562-29.676-57.527-39.187 15.074-9.964 23.991-22.662 23.991-36.656 0-32.803-48.969-58.499-111.482-58.499-11.998 0-23.8.965-35.08 2.867-4.084.689-6.837 4.559-6.148 8.643s4.56 6.836 8.643 6.148c10.458-1.764 21.42-2.658 32.584-2.658 26.652 0 51.592 5.033 70.224 14.171 16.688 8.185 26.258 18.874 26.258 29.328s-9.571 21.143-26.258 29.328c-18.632 9.138-43.571 14.171-70.224 14.171s-51.592-5.033-70.224-14.171c-16.688-8.185-26.258-18.874-26.258-29.328 0-12.098 12.752-24.353 34.112-32.78 3.853-1.52 5.745-5.876 4.224-9.729-1.52-3.854-5.876-5.746-9.729-4.224-27.713 10.934-43.607 27.967-43.607 46.733 0 14 8.926 26.704 24.012 36.67-40.95 14.478-65.694 38.554-65.694 65.07 0 13.025 5.763 25.378 16.544 36.326-43.869 19.672-68.762 47.855-68.762 78.447 0 28.938 22.074 55.702 62.156 75.36 38.382 18.825 89.248 29.192 143.226 29.192 27.202 0 53.609-2.615 78.488-7.771 12.817 5.014 26.755 7.771 41.327 7.771h71.699c62.736 0 113.775-51.04 113.775-113.775v-77.702c0-4.719-1.876-9.116-5.283-12.382zm-198.59 187.133c-45.702-8.646-80.377-48.872-80.377-97.05v-77.702c0-.758.361-1.263.664-1.554.252-.242.794-.626 1.619-.609 23.267.979 44.42 7.449 62.873 19.23.206.131.416.249.629.358-15.718 37.105-16.628 79.797-.512 118.88zm-101.416 1.725c-51.734 0-100.253-9.823-136.621-27.66-34.668-17.002-53.761-38.983-53.761-61.891 0-13.027 6.131-25.705 18.222-37.68 11.493-11.382 28.187-21.704 48.447-29.985 9.496 6.634 21.127 12.526 34.697 17.443.843.306 1.706.451 2.554.451 3.067 0 5.946-1.896 7.052-4.947 1.411-3.894-.602-8.195-4.497-9.606-33.975-12.31-54.258-31.168-54.258-50.445 0-22.202 27.257-43.757 69.645-55.282 18.782 7.577 42.473 12.041 68.52 12.041 26.049 0 49.742-4.465 68.525-12.043 31.776 8.639 55.442 23.012 64.99 39.275l-5.078 4.365c-14.541 12.498-26.296 27.238-35.071 43.358-20.498-12.864-43.841-19.942-69.412-21.019-4.666-.203-9.266 1.542-12.631 4.769-3.407 3.266-5.283 7.663-5.283 12.381v36.03c-2.013.041-4.03.068-6.039.068-18.337 0-36.183-1.692-53.042-5.03-4.062-.809-8.009 1.836-8.813 5.9-.805 4.063 1.837 8.009 5.9 8.813 17.815 3.528 36.641 5.316 55.955 5.316 2.009 0 4.025-.028 6.039-.068v26.673c0 39.411 20.146 74.202 50.677 94.628-18.277 2.738-37.271 4.145-56.717 4.145zm290.289-98.775c0 48.28-34.82 88.574-80.665 97.105l15.367-38.442c9.861-23.888 13.558-50.117 10.691-75.852-1.653-14.839-5.481-29.358-11.26-43.049.241-.119.478-.251.71-.399 18.453-11.781 39.606-18.25 62.873-19.23.802-.025 1.366.367 1.619.609.303.291.664.796.664 1.554v77.704z" />
              <path d="m359.331 167.76v5.361c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-5.361c0-12.559 10.218-22.777 22.777-22.777h37.553c38.222 0 69.318-31.096 69.318-69.317v-62.565c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v62.565c0 29.951-24.367 54.317-54.318 54.317h-37.553c-20.83 0-37.777 16.947-37.777 37.777z" />
              <path d="m340.506 150.554c4.142 0 7.5-3.358 7.5-7.5v-21.384c0-20.531 16.703-37.233 37.234-37.233h5.375c21.065 0 38.203-17.137 38.203-38.202v-33.134c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v33.134c0 12.794-10.409 23.202-23.203 23.202h-5.375c-28.802 0-52.234 23.432-52.234 52.233v21.383c0 4.143 3.358 7.501 7.5 7.501z" />
            </g>
          </svg>
          <h6>Thérapeutes qualifiés</h6>
          <p>Notre équipe est composée de thérapeutes formés et certifiés.</p>
        </div>
        <div className="cartaThaniya defaultCarta">
          <svg
            id="Capa_1"
            enableBackground="new 0 0 480.176 480.176"
            height={512}
            viewBox="0 0 480.176 480.176"
            width={512}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m480.093 312.176c.123-22.696-15.805-42.319-38.041-46.866l-24.529-39.361c-12.961-20.835-36.594-33.773-61.672-33.773h-39.649c.3-13.413-1.282-26.802-4.7-39.776 14.424-6.849 20.602-24.066 13.825-38.524l-5.984-12.687c-6.07-12.854-20.576-19.397-34.229-15.44-7.067-16.477-18.989-30.408-34.177-39.935-10.229-6.516-21.72-10.798-33.719-12.563-1.173-.2-2.54-.225-3.782-.363-8.286-25.11-35.359-38.749-60.47-30.463s-38.749 35.359-30.463 60.47c1.37 4.151 3.302 8.096 5.742 11.723-6.568 10.553-10.819 22.381-12.472 34.7-.539 3.888-.807 7.809-.8 11.735-.028 13.95 3.29 27.703 9.675 40.106-10.318 7.117-14.913 20.047-11.4 32.079-21.02 3.439-39.728 15.759-50.427 33.963l-25.589 43.023c-2.081.627-4.179 1.2-6.241 1.891-23.646 7.85-36.45 33.383-28.6 57.028 2.54 7.65 7.083 14.48 13.158 19.78-9.566 5.754-15.428 16.091-15.456 27.254v32c.002 9.113 3.883 17.795 10.672 23.875l10.656-11.937c-3.392-3.041-5.329-7.382-5.328-11.938v-32c.012-8.832 7.168-15.988 16-16h416c8.832.012 15.988 7.168 16 16v32c-.012 8.832-7.168 15.988-16 16h-288v16h288c17.666-.018 31.982-14.334 32-32v-32c-.039-11.525-6.293-22.133-16.359-27.746 10.418-9.168 16.379-22.379 16.359-36.255zm-76.148-77.766 19.075 30.615-84.081 7.289-30.046-22.538c-1.384-1.04-3.069-1.602-4.8-1.6h-3.625c6.738-9.772 11.357-20.846 13.563-32.509.459-2.414.844-4.926 1.164-7.492h40.656c19.594.001 38.023 10.048 48.094 26.235zm-99.086-126.422 6 12.727c2.664 5.716.827 12.519-4.351 16.118-.564-1.454-1-3-1.61-4.407l-13.416-31.75c5.575-.731 10.983 2.225 13.377 7.312zm-34.125-15.32 19.453 46.047c1.648 3.814 3.075 7.721 4.273 11.7 5.006 15.888 6.871 32.599 5.492 49.2-.288 4.401-.839 8.781-1.648 13.117-2.029 10.959-6.663 21.269-13.511 30.061-1.551 1.927-3.25 3.731-5.082 5.394l-71.095.7c-16.123-10.015-29.825-23.478-40.123-39.422-2.273-3.43-4.359-6.979-6.25-10.633l-23.062-44.289c-5.345-10.187-8.15-21.513-8.176-33.017l5.793 2.088 5.422-15.047-9.381-3.382c1.098-4.94 2.714-9.75 4.822-14.35l18 12 8.876-13.312-18.719-12.478c5.443-7.223 12.199-13.356 19.913-18.077l11.284 24 14.484-6.813-11.289-24.011c8.228-2.826 16.906-4.115 25.6-3.8l-5.474 21.894 15.516 3.876 5.911-23.647c5.225 1.331 10.28 3.258 15.065 5.743l-3.414 9.482 15.047 5.422 2.073-5.757c8.809 7.369 15.733 16.731 20.2 27.311zm-138.635 82.908 15.963 30.659c.77 1.457 1.5 2.782 2.205 4.046-6.074 1.664-12.46-1.315-15.088-7.038l-5.992-12.6c-2.367-5.126-1.195-11.192 2.912-15.067zm35.994-159.4c11.582.026 22.244 6.314 27.871 16.437-21.911 1.831-42.343 11.8-57.271 27.943-6.959-16.113.461-34.817 16.574-41.776 4.049-1.749 8.417-2.635 12.826-2.604zm-91.5 219.172c8.985-15.3 25.314-25.214 43.371-26.836l.731 1.539c6.706 14.46 23.864 20.747 38.325 14.041.074-.034.148-.069.221-.104l.051-.023c7.271 10.161 15.826 19.339 25.452 27.305l-105.776 10.578c-6.679.666-13.321 1.718-19.922 2.994zm-40.539 51.937c14.439-4.807 29.366-7.999 44.508-9.515l135.531-13.594h85.336l14.414 10.812-92.883 13.258c-.557.08-1.105.219-1.633.414l-150.664 55.508h-25.382c-16.121 0-29.19-13.07-29.189-29.191.001-12.565 8.042-23.72 19.962-27.692zm396.839 56.891h-16.449l-183.651-16.289c-1.11-.11-2.23.027-3.281.4l-46.739 15.889h-65.847l109.136-40.211 103.596-14.789 101.635-9h1.516c1.125-.004 2.25.061 3.367.195 15.917 1.75 27.917 15.422 27.917 31.805 0 17.648-14 32-31.2 32z" />
            <path d="m165.398 179.395 10.031 12.469c8.668-6.956 18.865-11.752 29.75-13.993l-3.2-15.672c-13.384 2.751-25.922 8.646-36.581 17.196z" />
            <path d="m244.64 204.809c-5.688 2.68-11.87 4.151-18.156 4.32l-1.313.031.375 16 1.305-.031c13.886-.369 27.24-5.414 37.9-14.32l-10.265-12.266c-2.998 2.504-6.308 4.61-9.846 6.266z" />
            <path d="m199.124 156.59 4.531-15.344c-22.609-6.664-45.343 4.063-54.054 25.532l14.828 6.015c5.641-13.906 19.891-20.555 34.695-16.203z" />
            <path d="m219.393 133.848 14.7 6.3c6.07-14.164 20.281-20.883 34.617-16.383l4.813-15.25c-22.086-6.995-44.852 3.669-54.13 25.333z" />
            <path
              d="m219.474 146.97h16.006v49.026h-16.006z"
              transform="matrix(.905 -.426 .426 .905 -51.345 113.083)"
            />
            <path d="m247.038 159.27c8.67-6.955 18.869-11.751 29.755-13.994l-3.219-15.672c-13.38 2.753-25.914 8.647-36.57 17.195z" />
            <path d="m140.482 408.952c-3.614-5.81-9.412-9.922-16.09-11.412-3.925-.909-7.974-1.163-11.982-.753-.09-.516-.192-1.031-.318-1.546-1.627-6.577-5.888-12.194-11.784-15.532-11.861-6.869-27.328-3.321-34.469 7.913-1.98 3.109-3.416 6.533-4.246 10.124-7.251-1.223-14.678.728-20.392 5.357l-.252.2c-5.116 4.079-8.302 10.105-8.792 16.63-.48 6.452 1.748 12.812 6.151 17.553l.85.932c2.416 2.635 5.233 4.873 8.347 6.63-3.163 6.35-3.288 13.788-.341 20.241 5.865 12.298 20.205 18.013 32.922 13.121 3.628-1.402 6.995-3.401 9.962-5.915 4.895 4.916 11.546 7.68 18.483 7.681.608 0 1.219-.021 1.834-.064 6.781-.421 13.098-3.586 17.494-8.767 4.172-4.891 6.17-11.272 5.534-17.669-.364-3.716-1.354-7.345-2.928-10.731 6.519-3.087 11.291-8.957 12.982-15.969 1.472-6.163.403-12.658-2.965-18.024zm-19.689 4.179c2.516.54 4.71 2.069 6.087 4.243 1.112 1.744 1.476 3.862 1.009 5.877-.866 3.62-4.411 6.127-8.472 6.233-5.872-4.328-12.911-6.789-20.2-7.063 3.699-7.299 12.603-11.366 21.576-9.29zm-41.45-16.927c2.556-4.02 8.485-5.232 12.946-2.649 2.113 1.167 3.654 3.151 4.261 5.487.263 1.075.284 2.195.061 3.279-6.012 3.847-10.62 9.533-13.14 16.211-3.074-2.451-5.257-5.843-6.214-9.656-1.076-4.331-.321-8.914 2.086-12.672zm-31.23 24.916c.181-2.129 1.241-4.085 2.925-5.4l.253-.2c3.164-2.504 7.544-2.8 11.017-.747 2.127 6.731 6.301 12.631 11.941 16.877-7.795 3.961-17.267 2.324-23.282-4.022l-.851-.931c-1.414-1.5-2.14-3.52-2.003-5.577zm26.173 42.383c-4.784 1.859-10.526-.339-12.543-4.8-1.447-3.13-.596-6.842 2.069-9.03.505.021 1.009.037 1.514.037 7.047.025 13.943-2.037 19.82-5.924.822 3.329.565 6.833-.733 10.007-1.883 4.5-5.551 8.017-10.127 9.71zm41.355-2.488c-1.618 1.872-3.929 3.004-6.4 3.136-4.005.303-7.795-1.85-9.586-5.446 2.383-6.476 2.611-13.549.65-20.166 8.962 1.074 16.312 7.924 17.161 16.681.206 2.099-.453 4.192-1.825 5.795z" />
          </svg>
          <h6>Environnement tranquille</h6>
          <p>Un massage apaisant exceptionnel hyper relaxant.</p>
        </div>
        <div className="cartaThaltha defaultCarta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_2"
            data-name="Layer 2"
            viewBox="0 0 512 512"
            width={512}
            height={512}
          >
            <path d="M495.946,150.531a30.773,30.773,0,0,0-31.619.83l-25.258,15.787c-25.314-9.181-50.807-19.414-75.837-30.466-20.636-9.112-35.69-16.441-47.786-22.33C288.841,101.4,276.691,95.474,255.8,96c-20.4.5-32.248,6.849-51.877,17.36-11.567,6.194-25.963,13.9-47.173,23.326a667.341,667.341,0,0,1-83.566,30.617L47.673,151.361a30.773,30.773,0,0,0-31.619-.83A30.771,30.771,0,0,0,0,177.784V272a30.982,30.982,0,0,0,14.645,26.423L64,329.271v8.247a39.848,39.848,0,0,0,14.335,30.689C163.4,439.179,255.084,440,256,440c80.638,0,141.627-39.234,178.592-72.148A40.045,40.045,0,0,0,448,337.97v-5.536l49.354-30.847A30.98,30.98,0,0,0,512,275.164v-97.38A30.771,30.771,0,0,0,495.946,150.531ZM23.125,284.854A15.072,15.072,0,0,1,16,272V177.784A15.159,15.159,0,0,1,39.193,164.93L64,180.434V310.4ZM432,337.97a24.033,24.033,0,0,1-8.048,17.933C389.063,386.968,331.6,424,256,424c-23.87,0-100.476-12.23-167.415-68.078A23.891,23.891,0,0,1,80,337.518V182a683.716,683.716,0,0,0,83.248-30.692c21.747-9.661,36.431-17.524,48.23-23.842C230.789,117.128,239.6,112.408,256.2,112c16.982-.407,26.6,4.253,52.244,16.739,12.216,5.947,27.418,13.35,48.327,22.582,24.827,10.962,50.11,21.144,75.231,30.3Zm64-62.806a15.07,15.07,0,0,1-7.125,12.854L448,313.565V180.434l24.807-15.5A15.159,15.159,0,0,1,496,177.784Z" />
            <path d="M122.738,224.483l-5.477,15.033A404.149,404.149,0,0,0,256,264a404.123,404.123,0,0,0,138.738-24.483l-5.477-15.033A388.177,388.177,0,0,1,256,248,388.2,388.2,0,0,1,122.738,224.483Z" />
            <path d="M256,320a388.2,388.2,0,0,1-133.262-23.517l-5.477,15.033A404.149,404.149,0,0,0,256,336a404.123,404.123,0,0,0,138.738-24.483l-5.477-15.033A388.177,388.177,0,0,1,256,320Z" />
          </svg>
          <h6>MESURES COVID-19 STRICTES</h6>
          <p>Toutes les mesures sanitaires de protection sont respectées.</p>
        </div>
      </div>
      {/* parti thaniya */}
      <div className="foot">
        <p>CONTACT</p>
        <h5>pour toute information complémentaire</h5>
        <button>
          <img src="./phone-call.png" alt="" />
          CONTACTER-NOUS
        </button>
      </div>
    </div>
  );
}

export default Home
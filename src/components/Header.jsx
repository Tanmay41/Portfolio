import React from "react";

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4 font-weight-bold">
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            id="coding"
          >
            <g
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <path d="M46.855 36.667H5.145V9.876c0-1.074.871-1.945 1.945-1.945h37.82c1.074 0 1.945.87 1.945 1.945v26.791zM48.459 44.069H3.54a1.539 1.539 0 0 1-1.333-2.308l2.937-5.094h41.71l2.937 5.094a1.539 1.539 0 0 1-1.333 2.308z"></path>
            </g>
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M26.667 40.368h-1.334"
            ></path>
            <g
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <path d="m22.427 30.478-7.534-7.534 7.534-7.534M29.573 30.478l7.534-7.534-7.534-7.534"></path>
            </g>
            <g
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <path d="M46.855 36.667H5.145V9.876c0-1.074.871-1.945 1.945-1.945h37.82c1.074 0 1.945.87 1.945 1.945v26.791zM48.459 44.069H3.54a1.539 1.539 0 0 1-1.333-2.308l2.937-5.094h41.71l2.937 5.094a1.539 1.539 0 0 1-1.333 2.308zM26.667 40.368h-1.334"></path>
              <path d="m22.427 30.478-7.534-7.534 7.534-7.534M29.573 30.478l7.534-7.534-7.534-7.534"></path>
            </g>
          </svg>
          Tanmay
        </span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#home" className="nav-link" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#Me" className="nav-link">
            Who am I?
          </a>
        </li>
        <li className="nav-item">
          <a href="#tc" className="nav-link">
            Tech Stack
          </a>
        </li>
        <li className="nav-item">
          <a href="#project" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

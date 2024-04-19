import React from "react";

function teams({
  teamImage,
  name,
  position,
  description,
  twitter,
  facebook,
  instagram,
  linkedin,
}) {
  return (
    <div>
      <div className="item-inner">
        <div className="card">
          <div className="card-body">
            <img className="rounded-circle w-15 mb-4" src={teamImage} alt="" />
            <h4 className="mb-1">{name}</h4>
            <div className="meta mb-2">{position}</div>
            <p className="mb-2">{description}</p>
            <nav className="nav social mb-0">
              <a href={twitter}>
                <i className="uil uil-twitter"></i>
              </a>
              <a href={linkedin}>
                <i className="uil uil-linkedin"></i>
              </a>
              <a href={facebook}>
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href={instagram}>
                <i className="uil uil-instagram"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default teams;

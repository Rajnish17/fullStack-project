import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <>
   <section className="ban_sec">
  <div className="container-sec">
    <div className="ban_img">
      <img src="https://shorturl.at/iEHQR" alt="banner" border={0} />
      <div className="ban_text">
        <strong>
          <span>Meeting current</span>
          <br /> needs now
        </strong>
        <p>
          You can prioritize a child’s mental, emotional, <br />
          behavioral, and physical health{" "}
        </p>
        <a href="#">Lend a hand</a>
      </div>
    </div>
  </div>
</section>




    </>
  )
}

export default Header
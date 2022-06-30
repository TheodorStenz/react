import React from 'react'

export default function Footer() {

    //Get dates
    var date = new Date();
    var currYear = date.getFullYear();

  return (
    <>
        <br/>
        <br/>
        <span className='space'>
        </span>
        <footer className='space'>
        <div className="footer">
        <h2 id="copyright-footer">Copyright © {currYear} Theodor Stenz - All Rights Reserved.</h2>
        <a href="https://theodorstenz.dk" target="_Blank">Website</a>
        </div>
        </footer>   
    </>
  )
}

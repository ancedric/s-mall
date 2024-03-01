import React from 'react'

const Header = () => {
    const headerStyle = {
        "display": "flex",
        "background-color":"#fff",
        "justify-content":"space-around",
        "align-items":"center",
        "margin":"0",
        "color":"#1a56a1",
        "box-shadow":"0 0 10px rgba(0, 0, 0, 0.5)",
        "font-family":"sans-serif"
    }
    const linkStyle = {
      "width":"150px",
      "height":"50px",
      "margin":"10px",
      "background-color":"#fff",
      "border-radius":"8px",
      "border":"1px solid #321aa1",
    }

  return (
    <div style={headerStyle} >
        <div>
            <h2>S-MALL</h2>
        </div>
        <div> <button style={linkStyle}>Get Started</button></div>
    </div>
  )
}

export default Header
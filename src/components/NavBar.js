import React from "react";

function Link(props){
  return <a href="#" key={props.index}>{props.link}</a>
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => 
      <Link link = {link} index = {index} />
      )}
    </nav>
  )
}

export default NavBar;

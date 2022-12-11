import React from "react";
export default function Root() {
    return (
      <>
          <h1>Welcome to Recipe Master</h1>
          <h2>Here you will find my favorite recipes I go back to again and again.</h2>
          <nav>
            <ul>
              <li>
                <a href={`contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
   
        <div id="detail"></div>
      </>
    );
  }
import React from "react";
import errorImage from "./images/error_404.jpg";

function Page404(props) {
  return (
    <div className="Page404">
      <img src={errorImage} alt="Error 404! Page not found!" />
    </div>
  );
}

export default Page404;

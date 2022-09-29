import React from "react";

function Header({ occupation, region }) {
  return (
    <div className="mt-6">
      <h1 className="is-size-3 has-text-left has-text-weight-medium ml-6 mt-5">
        Occupation Overview
      </h1>
      <div className="is-size-5 has-text-left ml-6">
        {occupation?.title} in {region?.title}
      </div>
    </div>
  );
}

export default Header;

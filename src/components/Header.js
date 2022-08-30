import React from "react";

const Header = ({ title, avatar_url }) => {
  return (
    <div class="flex align-center justify-center gap-5 mb-9 mt-5">
      <img class="h-20 w-20 rounded-full" src={avatar_url} alt="profile" />
      <h1 class="text-7xl font-bold text-gray-90">{title}</h1>
    </div>
  );
};

export default Header;

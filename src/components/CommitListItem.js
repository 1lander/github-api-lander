import React from "react";
import moment from "moment";

const CommitListItem = ({ name }) => {
  return (
    <div class="block p-5 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
      <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>

      {/* <p class="font-normal text-gray-700 dark:text-gray-500 absolute bottom-1 right-2">
        {moment(created_at).format("DD/MM/YY")}
      </p> */}
    </div>
  );
};

export default CommitListItem;

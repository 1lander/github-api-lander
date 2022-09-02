import React from "react";
import moment from "moment";

const CommitListItem = ({ message, committerName, date }) => {
  return (
    <div class="block p-2 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
      <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {message}
      </h5>
      <div class="font-normal text-gray-300 dark:text-white">
        {committerName}
      </div>
      <p class="font-normal text-gray-700 dark:text-gray-500 absolute bottom-1 right-2">
        {moment(date).format("DD/MM/YY")}
      </p>
    </div>
  );
};

export default CommitListItem;

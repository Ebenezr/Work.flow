import React from "react";

const StatusCards = () => {
  return (
    <div className="flex gap-6">
      <div className="flex h-28  w-1/4  min-w-min items-center gap-3 rounded-md border-[1px] border-gray-200 bg-white p-6">
        {/* icon wrapper */}
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        {/* text wrapper */}
        <div className="flex flex-col">
          <p className="font-medium text-neutral-400 ">Total Employee</p>

          <p className="text-lg font-bold">212</p>
        </div>
      </div>
      <div className="flex h-28 w-1/4 min-w-min items-center gap-3 rounded-md border-[1px] border-gray-200 bg-white p-6 ">
        {/* icon wrapper */}
        <div className="grid h-10 w-10  shrink-0 place-items-center rounded-full bg-yellow-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-yellow-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
            />
          </svg>
        </div>
        {/* text wrapper*/}
        <div className="flex flex-col">
          <p className="font-medium text-neutral-400">Gross Salary</p>
          <p className="text-lg font-bold">
            <small className="text-neutral-400">$</small>782
          </p>
        </div>
      </div>
      <div className="flex h-28 w-1/4 min-w-min items-center gap-3 rounded-md border-[1px] border-gray-200 bg-white p-6 ">
        {/* icon wrapper */}
        <div className="grid h-10  w-10 shrink-0 place-items-center rounded-full bg-purple-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-purple-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
        </div>
        {/* text wrapper */}
        <div className="flex flex-col">
          <p className="font-medium text-neutral-400">Net Payable</p>

          <p className="text-lg font-bold">
            <small className="text-neutral-400">$</small>720
          </p>
        </div>
      </div>
      <div className="flex h-28 w-1/4 min-w-min items-center gap-3 rounded-md border-[1px] border-gray-200 bg-white p-6 ">
        {/* icon wrapper */}
        <div className="grid  h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
            />
          </svg>
        </div>
        {/* text wrapper */}
        <div className="flex flex-col">
          <p className="font-medium text-neutral-400">Job Applied</p>

          <p className="text-lg font-bold">196</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCards;

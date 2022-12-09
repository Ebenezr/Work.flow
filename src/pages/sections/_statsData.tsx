import React from "react";

const StatsData = () => {
  return (
    <article className="flex gap-6">
      <div className="flex h-60  w-1/2 flex-col gap-6 rounded-md border-[1px] border-gray-200 bg-white p-6">
        {/* article header */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-neutral-600">Job Applied</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-[3px]  font-semibold">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-neutral-400 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </>
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-[3px] font-semibold">
              Last Year
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-neutral-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            </button>
          </div>
        </div>
        {/* graph */}
        <div className="h-full w-full bg-neutral-100"></div>
      </div>
      {/* card */}
      <div className="flex h-60 w-1/2 flex-col gap-6 rounded-md border-[1px] border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-neutral-600">Project Overview</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-[3px] font-semibold">
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-neutral-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </>
              Send Reminder
            </button>
          </div>
        </div>
        {/* content */}
        <div className="flex h-full w-full flex-col">
          <div className="flex items-center gap-3">
            <p className="text-xl font-semibold text-neutral-700">48</p>
            <p className="m-0 p-0 text-sm font-semibold text-neutral-700 ">
              Project
            </p>
          </div>
          {/* content */}
          <div className="flex-1"></div>
          {/* button wrapper */}
          <div className="px-4">
            <button className="mx-auto flex w-full items-center justify-center gap-3 rounded-md border-2 px-6 py-3 font-semibold text-neutral-700">
              View all projects
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-neutral-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StatsData;

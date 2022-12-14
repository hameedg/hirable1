import React, { useState } from 'react';

function UpcomingInterviews() {
  const [interviews, setInterviews] = useState({});
  setTimeout(() => {
    setInterviews({
      date: 'Aug 24, 2022',
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXN8ZW58MHx8MHx8&w=1000&q=80',
      name: 'Alexa Russei',
      role: 'HR at Digital Ocean',
      time: '10:00 - 11:00',
    });
  }, 5000);
  return (
    <div className="px-6 pt-4 w-full h-[250px] bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-start items-start shadow-lg ">
      <div className="font-bold text-xl text-gray-800 pb-3">
        Upcoming Interviews
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex font-bold text-lg text-gray-800 pb-3">
          <span>Today</span>{' '}
          {interviews.date ? (
            <span className="ml-2 text-gray-700 text-base font-semibold">
              {interviews.date}
            </span>
          ) : (
            <span className="h-[24px]  ml-2  rounded-full w-[120px] animate-pulse bg-gray-200" />
          )}
        </div>
        <div className="flex gap-2 justify-center items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
              />
            </svg>
          </span>
          <span>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
              />
            </svg>
          </span>
        </div>
      </div>
      <section className="bg-gray-50 w-full border-2 border-blue-500 flex justify-between rounded-xl hover:bg-gray-100 my-4">
        <div className="flex items-center p-4 text-gray-900 whitespace-nowrap">
          {interviews.img ? (
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXN8ZW58MHx8MHx8&w=1000&q=80"
              alt="Jese image"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
          )}
          {interviews.name ? (
            <div className="pl-3">
              <div className="text-base font-semibold">Alexa Russei</div>
              <div className="font-normal text-gray-500">
                HR at Digital Ocean
              </div>
            </div>
          ) : (
            <div className="pl-3 animate-pulse flex flex-col w-[150px]">
              <div className="w-[50%] rounded-full h-[18px] bg-gray-200" />
              <div className="w-[100%] rounded-full h-[16px] mt-1 bg-gray-200" />
            </div>
          )}
        </div>
        <div className="p-4 flex items-center justify-center">
          {interviews.time ? (
            <span className="font-medium text-gray-600 ">10:00 - 11:00</span>
          ) : (
            <div className="w-[100px] rounded-full h-[20px] mt-1 bg-gray-200 animate-pulse" />
          )}
        </div>
      </section>
      <div className=" text-sm flex items-center justify-center text-blue-600 font-semibold cursor-pointer hover:underline">
        View Schedule{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-600 rotate-90"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
          />
        </svg>
      </div>
    </div>
  );
}

export default UpcomingInterviews;

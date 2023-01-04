import React from "react";

const ReportTable = (props) => {
  const { formData } = props;

  const times = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const columnTotals = times.map(() => 0);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-10 py-5">
              Location
            </th>
            {times.map((time) => (
              <th scope="col" classNameName="px-10 py-5">
                {time}
              </th>
            ))}
            <th scope="col" className="px-10 py-5">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item) => (
            <tr
              key={item.loc}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.loc}
              </th>
              {times.map((time, index) => {
                const value = getRandomInt(item.min, item.max);
                columnTotals[index] += value;
                return (
                  <td classNameName="px-10 py-5 text-xs text-gray-900">
                    {value}
                  </td>
                );
              })}
              <td classNameName="px-10 py-5 text-xl text-gray-900">
                {columnTotals.reduce((total, current) => total + current)}
              </td>
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Total
            </th>
            {columnTotals.map((total, index) => (
              <td classNameName="px-10 py-5 text-xl text-gray-900">{total}</td>
            ))}
            <td classNameName="px-10 py-5 text-xl text-gray-900">
              {columnTotals.reduce((total, current) => total + current)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ReportTable;

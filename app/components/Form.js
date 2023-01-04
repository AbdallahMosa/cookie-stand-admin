import { useState, useEffect } from "react";
import ReportTable from "./ReportTable";
const Form = () => {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [avgCookies, setAvgCookies] = useState("");
  const [formData, setFormData] = useState([]);
  const [flag, setFlag] = useState(false);

  
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "location") {
      setLocation(value);
    } else if (name === "min-customers") {
      setMinCustomers(value);
    } else if (name === "max-customers") {
      setMaxCustomers(value);
    } else if (name === "avg-cookies") {
      setAvgCookies(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newD = {
      loc: location,
      min: minCustomers,
      max: maxCustomers,
      avg: avgCookies,
    };
    setFormData([...formData, newD]);
    setFlag(true);
  };

  return (
    <div>
    <div className=" max-w-lg mx-auto ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-900 text-xl font-bold mb-2"
              for="location"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="location"
              type="text"
              name="location"
              onChange={handleChange}
              value={location}
              placeholder="Enter your location"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-900 text-xl font-bold mb-2"
              for="min-customers"
            >
              Minimum Customers per Hour
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border rounded py-3 "
              placeholder="Enter the minimum number of customers per hour"
              name="min-customers"
              type="number"
              onChange={handleChange}
              value={minCustomers}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-900 text-xl font-bold mb-2"
              for="max-customers"
            >
              Maximum Customers per Hour
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="max-customers"
              name="max-customers"
              type="number"
              onChange={handleChange}
              value={maxCustomers}
              placeholder="Enter the maximum number of customers per hour"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-900 text-xl font-bold mb-2"
              for="avg-cookies"
            >
              Average Cookies per Sale
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="avg-cookies"
              type="number"
              name="avg-cookies"
              onChange={handleChange}
              value={avgCookies}
              placeholder="Enter the average number of cookies sold per sale"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

    </div>
    {flag ? (
        <ReportTable
        formData = {formData}
        ></ReportTable>
      ) : (
        <h1 className="flex flex-row items-center justify-center text-4xl font-bold mx-auto text-gray-800">No Cookie Stands Available</h1>
      )}
    </div>
  );
};
export default Form;

      {/* {formData.length > 0 &&
        formData.map((item) => {
          return (
            <div className="w-full mt-6 bg-gray-800 rounded-lg p-4">
              <h1>Location : {item.loc}</h1>
              <h1>Minimum Customers per Hour : {item.min}</h1>
              <h1> Maximum Customers per Hour : {item.max}</h1>
              <h1> Average Cookies per Sale : {item.avg}</h1>
            </div>
          );
        })} */}
     
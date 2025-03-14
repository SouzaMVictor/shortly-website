import { useState } from "react";

export function Shorten() {
  const [query, setQuery] = useState(""); //query for the input
  const [errorMsg, setErrorMsg] = useState(""); //error message state
  const [successMsg, setSuccessMsg] = useState(""); //success message state

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") {
      setErrorMsg("Please add a link to be shortened"); //set error message
      setSuccessMsg(""); //does not show success message
    } else if (!validURL(query)) {
      setErrorMsg("Please enter a valid link to be shortened"); //set error message of a valid url
      setSuccessMsg(""); //does not show success message
    } else {
      setErrorMsg(""); //does not show error message
      setSuccessMsg("Sucessfully shortened the link"); //set success message
    }
  }

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none bg-gray-50 
              ${errorMsg ? "border-red" : ""}
             ${successMsg ? "border-green-500" : ""}
            `}
            placeholder="Shorten a link here..."
            id="link-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
            onClick={handleSubmit}
          >
            Shorten it!
          </button>
          {/* error/success message */}
          <div
            className="absolute left-7 bottom-3 text-red text-sm italic"
            id="error-message"
          >
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            {successMsg && <p className="text-green-500">{successMsg}</p>}
          </div>
        </form>
        {/* link 1 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://www.google.com
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.link/j9e9q5</div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        {/* link 2 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://www.google.com
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.link/j9e9q5</div>
            <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        {/* link 3 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://www.google.com
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.link/j9e9q5</div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

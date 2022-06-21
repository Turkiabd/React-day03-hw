import React from "react";

export const Result = (result) => {
  return (
    <div>
      <input
        type="text"
        className="form-control m-2"
        readOnly={true}
        value={result}
      />
    </div>
  );
};

export default Result;

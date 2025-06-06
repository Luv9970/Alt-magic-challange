import React from "react";

const Table = ({ images }) => {
  // console.log(images);

  return (
    <div className="mt-4 h-[70vh] overflow-y-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Image</th>
            <th className="p-3">Created At</th>
            <th className="p-3">Alt Text</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {images.map((item,index) => (
            <tr key={index} className="border-b">
              <td className="p-3">
                <img
                  src={item.src}
                  alt=""
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="p-3">{item.createdAt}</td>
              <td className="p-3">{item.alt || "—"}</td>
              <td className="p-3">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
                  // onClick={() => generateAlt(img.id)}
                  // disabled={!!img.alt}
                >
                  Generate Alt
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );  
  };

export default Table;

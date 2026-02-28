import React from "react";

const documentPrinting = {
  blackWhite: [
    { type: "Short/A4", price: "5.00" },
    { type: "Long", price: "7.00" },
    { type: "Back to Back", price: "Add 2.00" },
  ],
  partialColored: [
    { type: "Short/A4", price: "6.00" },
    { type: "Long", price: "8.00" },
    { type: "Back to Back", price: "Add 5.00" },
  ],
  fullColored: [
    { type: "Short/A4", price: "10.00" },
    { type: "Long", price: "15.00" },
    { type: "Back to Back", price: "Add 5.00" },
  ],
  scan: [
    { type: "Any Size", price: "15.00" },
    { type: "15 pages up", price: "10.00" },
  ],
};

const photocopyXerox = {
  blackWhite: [
    { type: "Short/A4", price: "3.00" },
    { type: "Long", price: "5.00" },
    { type: "Back to Back", price: "Add 2.00" },
  ],
  partialColored: [
    { type: "Short/A4", price: "5.00" },
    { type: "Long", price: "7.00" },
    { type: "Back to Back", price: "Add 2.00" },
  ],
  fullColored: [
    { type: "Short/A4", price: "8.00" },
    { type: "Long", price: "10.00" },
    { type: "Back to Back", price: "Add 5.00" },
  ],
};

const XeroxAndDocuPrinting = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Document Printing Card */}
          <div
            className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-lg"
          >
            <h3 className="text-2xl font-black text-blue-950 mb-6 border-b-4 border-blue-600 pb-2 inline-block uppercase">
              Document Printing
            </h3>

            <div className="space-y-8">
              {/* Black & White */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● BLACK & WHITE
                </h4>
                {documentPrinting.blackWhite.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              {/* Partial Colored */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● PARTIAL COLORED
                </h4>
                {documentPrinting.partialColored.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              {/* Full Colored */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● FULL COLORED
                </h4>
                {documentPrinting.fullColored.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Scan Section */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-bold text-blue-950 mb-2 flex items-center gap-2">
                  ● SCAN (softcopy)
                </h4>
                {documentPrinting.scan.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-blue-700">
                      ₱{item.price} /page
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photocopy / Xerox Card */}
          <div
            className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-lg"
          >
            <h3 className="text-2xl font-black text-blue-950 mb-6 border-b-4 border-blue-600 pb-2 inline-block uppercase">
              Photocopy / Xerox
            </h3>

            <div className="space-y-8">
              {/* Black & White */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● BLACK & WHITE
                </h4>
                {photocopyXerox.blackWhite.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Partial Colored */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● PARTIAL COLORED
                </h4>
                {photocopyXerox.partialColored.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Full Colored */}
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  ● FULL COLORED
                </h4>
                {photocopyXerox.fullColored.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-dashed border-slate-200"
                  >
                    <span className="text-slate-700">{item.type}</span>
                    <span className="font-bold text-slate-900">
                      ₱{item.price}{" "}
                      <span className="text-slate-500">
                        /page
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Business Tip Box */}
              <div className="mt-10 p-4 border-2 border-blue-100 rounded-2xl bg-white italic text-slate-500 text-center">
                "High-speed xerox and clear document scanning for all your
                school and office requirements."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XeroxAndDocuPrinting;

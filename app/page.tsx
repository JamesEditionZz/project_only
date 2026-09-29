"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function page() {
  const [home1, setHome1] = React.useState(0);
  const [home2, setHome2] = React.useState(0);
  const [home3, setHome3] = React.useState(0);
  const [home4, setHome4] = React.useState(0);
  const [home5, setHome5] = React.useState(0);
  const [home6, setHome6] = React.useState(0);
  const [home7, setHome7] = React.useState(0);
  const [home8, setHome8] = React.useState(0);
  const [home9, setHome9] = React.useState(0);
  const [bedMaster1, setBedMaster1] = React.useState(0);
  const [bedMaster2, setBedMaster2] = React.useState(0);
  const [bedMaster3, setBedMaster3] = React.useState(0);

  return (
    <>
      <div className="text-center h3 mt-2">Light Switch</div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 border border-dark rounded p-3">
            <div className="text-center h5 mb-2">ชั้น 1</div>
            <div className="row mx-2">
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">หน้าบ้าน</div>
                  {home1 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome1(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome1(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">โรงรถ</div>
                  {home2 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome2(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome2(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">ห้องรับรอง 1</div>
                  {home3 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome3(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome3(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">ห้องรับรอง 2</div>
                  {home4 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome4(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome4(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">ห้องครัว</div>
                  {home5 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome5(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome5(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row">
                  <div className="col-6">ห้องทำงาน</div>
                  {home6 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome6(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome6(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 border border-dark rounded p-3">
            <div className="text-center h5">ชั้น 2</div>
            <div className="row">
              <div className="col-12  mb-2">
                <div className="row">
                  <div className="col-6">ไฟบันได</div>
                  {home7 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome7(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome7(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12  mb-2">
                <div className="row">
                  <div className="col-6">Bed Master</div>
                  {bedMaster1 === 1 ? (
                    <button
                      className="col-2 btn btn-danger"
                      onClick={() => setBedMaster1(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-2 btn btn-secondary"
                      onClick={() => setBedMaster1(1)}
                    >
                      เปิด
                    </button>
                  )}
                  {bedMaster2 === 1 ? (
                    <button
                      className="col-2 btn btn-danger"
                      onClick={() => setBedMaster2(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-2 btn btn-secondary"
                      onClick={() => setBedMaster2(1)}
                    >
                      เปิด
                    </button>
                  )}
                  {bedMaster3 === 1 ? (
                    <button
                      className="col-2 btn btn-danger"
                      onClick={() => setBedMaster3(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-2 btn btn-secondary"
                      onClick={() => setBedMaster3(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12  mb-2">
                <div className="row">
                  <div className="col-6">Bed 1</div>
                  {home8 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome8(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome8(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12  mb-2">
                <div className="row">
                  <div className="col-6">Bed 2</div>
                  {home9 === 1 ? (
                    <button
                      className="col-6 btn btn-danger"
                      onClick={() => setHome9(0)}
                    >
                      ปิด
                    </button>
                  ) : (
                    <button
                      className="col-6 btn btn-secondary"
                      onClick={() => setHome9(1)}
                    >
                      เปิด
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

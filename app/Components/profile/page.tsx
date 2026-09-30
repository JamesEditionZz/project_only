import React from "react";
import "./profile.css";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-resume">
      <div className="mt-3 mx-3">
        <h4 className="text-white text-end">KANPONG THITIMONGKOLWAT</h4>
        <h4 className="text-white text-end">กันต์พงษ์ ธิติมงคลวัฒน์</h4>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="text-center mb-4 text-white">Skill</h3>
            <div className="row">
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/html.png"
                    width="80"
                    height="100"
                    alt="html"
                  />
                  <div className="mb-2 h5 text-white">HTML 5</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/php.png"
                    width="100"
                    height="100"
                    alt="php"
                  />
                  <div className="mb-2 h5 text-white">PHP</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/CSS.png"
                    width="100"
                    height="100"
                    alt="react"
                  />
                  <div className="mb-2 h5 text-white">CSS</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/JS.jpg"
                    width="100"
                    height="100"
                    alt="react"
                  />
                  <div className="mb-2 h5 text-white">JavaScript</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 text-center border-1 border-start">
            <h3 className="text-center mb-4 text-white">FrameWork</h3>
            <div className="row">
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <div className="lv-stage">
                    <div className="lv-logo">
                      <div className="lv-mk">
                        <span className="lv-m0"></span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 h5 text-white">Laravel</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="hover-spin-360 mb-2 mt-3"
                    src="icon/react.png"
                    width="110"
                    height="100"
                    alt="html"
                  />
                  <div className="mb-2 h5 text-white">React</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <div className="node-stage">
                    <div className="node-logo">
                      <span className="nl nl-n"></span>
                      <span className="nl nl-o"></span>
                      <span className="nl nl-d"></span>
                      <span className="nl nl-e"></span>
                      <span className="nl nl-dot"></span>
                      <span className="nl nl-js">
                        <b>JS</b>
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 h5 text-white">Node.js</div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <div className="stage">
                    <div className="logo" id="logo">
                      <div className="float">
                        <div className="layer l3">
                          <div className="shape"></div>
                        </div>
                        <div className="layer l2">
                          <div className="shape"></div>
                        </div>
                        <div className="layer l1">
                          <div className="shape">
                            <span className="b">B</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 h5 text-white">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row"></div>
    </div>
  );
}

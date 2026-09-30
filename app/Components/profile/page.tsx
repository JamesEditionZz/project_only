import React, { useState } from "react";
import "./profile.css";
import Image from "next/image";

export default function page() {
  const [focusMenu, setFocusMenu] = useState<number>(0);

  return (
    <div className="bg-resume">
      <div className="mt-3 mx-3">
        <div className="d-flex justify-content-around fixed-top pt-3 pb-3 border-1 border-bottom">
          <span
            className={`Menu-bar mx-2 text-secondary menu-cursor ${focusMenu === 0 && "text-white"}`}
          >
            Profile
          </span>
          <span
            className={`Menu-bar mx-2 text-secondary menu-cursor ${focusMenu === 1 && "text-white"}`}
          >
            Education
          </span>
          <span
            className={`Menu-bar mx-2 text-secondary menu-cursor ${focusMenu === 2 && "text-white"}`}
          >
            Experience
          </span>
          <span
            className={`Menu-bar mx-2 text-secondary menu-cursor ${focusMenu === 3 && "text-white"}`}
          >
            Skill
          </span>
          <span
            className={`Menu-bar mx-2 text-secondary menu-cursor ${focusMenu === 4 && "text-white"}`}
          >
            Contact
          </span>
        </div>
        <hr />
        <hr />
        <div className="row mt-5">
          <div className="col-6">
            <div className="text-end">
              <Image
                className="rounded-toyou"
                src={"/icon/JS.jpg"}
                width={300}
                height={300}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-6 align-content-center">
            <h4 className="text-white">กันต์พงษ์ ธิติมงคลวัฒน์</h4>
            <h4 className="text-white">KANPONG THITIMONGKOLWAT</h4>
            <button className="btn-CV">Download CV</button>
          </div>
        </div>
        <hr />
        <div className="row text-center text-white">
          <div className="col-6">
            <h3>ประวัติการศึกษา {`(Education)`}</h3>
          </div>
          <div className="col-6 border-1 border-start">
            <h3>ประสบการณ์ทำงาน {`(Experience)`}</h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="text-center mb-4 text-white">Skill</h3>
            <div className="row">
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/html.png"
                    width="60"
                    height="80"
                    alt="html"
                  />
                  <div className="mb-2 h5 text-white">HTML 5</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/php.png"
                    width="80"
                    height="80"
                    alt="php"
                  />
                  <div className="mb-2 h5 text-white">PHP</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/CSS.png"
                    width="80"
                    height="80"
                    alt="CSS"
                  />
                  <div className="mb-2 h5 text-white">CSS</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/JS.jpg"
                    width="80"
                    height="80"
                    alt="JS"
                  />
                  <div className="mb-2 h5 text-white">JavaScript</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 text-center border-1 border-start">
            <h3 className="text-center mb-4 text-white">FrameWork</h3>
            <div className="row">
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/Laravel.png"
                    width="80"
                    height="80"
                    alt="Laravel"
                  />
                  <div className="mb-2 h5 text-white">Laravel</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="hover-spin-360 mb-2 mt-3"
                    src="icon/react.png"
                    width="90"
                    height="80"
                    alt="react"
                  />
                  <div className="mb-2 h5 text-white">React</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/nodejs.png"
                    width="100"
                    height="80"
                    alt="Nodejs"
                  />
                  <div className="mb-2 h5 text-white">NodeJS</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/Bootstrap.png"
                    width="120"
                    height="80"
                    alt="Bootstrap"
                  />
                  <div className="mb-2 h5 text-white">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="text-center text-white">
              Database{" "}
              <span>
                <Image src="/icon/DB.png" width={25} height={30} alt="DB" />
              </span>
            </h3>
            <div className="row">
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/mysql.png"
                    width="130"
                    height="80"
                    alt="mysql"
                  />
                  <div className="mb-2 h5 text-white">Mysql</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/SQLServer.png"
                    width="80"
                    height="80"
                    alt="SQLServer"
                  />
                  <div className="mb-2 h5 text-white">SQL Server</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/Oracle.png"
                    width="80"
                    height="80"
                    alt="Oracle"
                  />
                  <div className="mb-2 h5 text-white">Oracle DB</div>
                </div>
              </div>
              <div className="col-2 text-center"></div>
            </div>
          </div>
          <div className="col-6 border-1 border-start">
            <h3 className="text-center text-white">Tool</h3>
            <div className="row">
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/vscode.png"
                    width="80"
                    height="80"
                    alt="vscode"
                  />
                  <div className="mb-2 h5 text-white">VSCode</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/Postman.png"
                    width="80"
                    height="80"
                    alt="Postman"
                  />
                  <div className="mb-2 h5 text-white">Postman</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/dbeaver.png"
                    width="80"
                    height="80"
                    alt="DBeaver"
                  />
                  <div className="mb-2 h5 text-white">DBeaver</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/claude.png"
                    width="80"
                    height="80"
                    alt="claude"
                  />
                  <div className="mb-2 h5 text-white">Claude</div>
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="border-1 border rounded-4 border-radius-up">
                  <Image
                    className="mb-2 mt-3"
                    src="icon/Google_Apps_Script.svg"
                    width="80"
                    height="80"
                    alt="Google_Apps_Script"
                  />
                  <div className="mb-2 h5 text-white">AppScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

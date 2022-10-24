import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/future/image";

import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

import { LinkCustom } from "../../common/LinkCustom";

import { IProps } from "./types";
import { data } from "./data";  
import { List, X } from "phosphor-react";

export const Navbar = ({logo}: IProps) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter({wrapperRef, setOpenNav});

  const css = { width: "95%", height: "95%" };

  return (
    <div className="h-28 flex flex-row items-center justify-between">
        <Link href="/">
          <a className="pl-7 logo lg:ml-10">
            <Image src={logo} alt="logo" style={css} />
          </a>
        </Link>

        {/* Mobile Nav */}

        <button onClick={() => setOpenNav(true)} className="sm:absolute sm:right-14 List lg:invisible mt-2">
          <List size={45} color="#ff7300" />
        </button>

        { 
            openNav &&
            (
              <nav ref={wrapperRef} className="absolute z-50 top-0 w-full h-96 bg-orange-50">
                <button onClick={()=>setOpenNav(false)} className="absolute right-12 top-9">
                  <X size={45} color="#ff7300" />
                </button>
                <ul className="flex flex-col items-center  h-full gap-12 mt-20">
                  {
                    data.listLinkPaths.map((item) => {
                      return (
                        <li key={item.path}>
                          <LinkCustom
                            path={item.path}
                            text={item.text}
                            setOpenNav={setOpenNav}
                          />
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>
            )
        }

        {/* Desktop Nav */}

        <nav className="w-2/5 mr-12 lg:visible sm:invisible">
          <ul className="flex justify-around">
            {
              data.listLinkPaths.map((item) => {
                  return (
                    <li key={item.path}>
                      <LinkCustom
                        path={item.path}
                        text={item.text}
                        setOpenNav={setOpenNav}
                      />
                    </li>
                  )
                })
            }
          </ul>
        </nav>
    </div>
  );
};
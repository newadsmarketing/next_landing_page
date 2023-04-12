import Link from "next/link";
import Image from "next/future/image";

import { Data, IProps } from "./types";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export const Footer = ({ logo }: IProps) => {

  

  return (
    <footer id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <Link href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <a>
          <Image src={logo} alt="logo" width="50%"/>
        </a>
      </Link>
      
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
          Copyright 2022 치트마켓
      </div>
    </footer>
  );
};
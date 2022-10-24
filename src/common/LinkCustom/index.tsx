import Link from "next/link";

interface IProps {
  path: string;
  text: string;
  setOpenNav: (input: boolean) => void;
}

export const LinkCustom = ({path, text, setOpenNav}: IProps) => {
  return (
    <Link href={path}>
      <a 
        onClick={() => setOpenNav(false)} 
        className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">
        {text}
      </a>
    </Link>
  )
}
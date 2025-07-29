import ThemeSwitcher from "@/core/components/theme_switcher";
import { headers } from "next/headers";
import HamburgIcon from "@/core/components/hamburg-icon";
import Link from "../design-systems/_components/link";

export default async function NavBar() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  return (
    <div
      className="p-300 flex tablet:items-center justify-between tablet:justify-start
            tablet:p-800 mobile:p-400 border-1 border-border-default-default
            tablet:gap-x-600 "
    >
      <img
        src="/logo-full.png"
        alt="Logo"
        className="hidden tablet:block w-auto h-auto max-w-none max-h-none"
      />
      <div>
        <img
          src="/mobile-logo.png"
          alt="Logo"
          className="tablet:hidden w-auto h-auto max-w-none max-h-none"
        />
      </div>
      <div className="hidden tablet:flex w-full items-center justify-end gap-x-200">
        <Link text="Home" enabled={pathname == "/"}></Link>
        <Link text="Opening" enabled={pathname == "/Opening"}></Link>
        <Link text="Language" enabled={pathname == "/Language"}></Link>
        <Link text="Service" enabled={pathname == "/Service"}></Link>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <HamburgIcon></HamburgIcon>
    </div>
  );
}

import MainButton from "@/components/MainButton";
import NavMenu from "@/components/menu/NavMenu";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";

export default function Header() {
  return (
    <MainLayout>
      <div>
        {/* <Image></Image> */}
        <NavMenu />
      </div>

      <div>
        icon
        <MainButton name="Become a Partner" />
      </div>
    </MainLayout>
  );
}

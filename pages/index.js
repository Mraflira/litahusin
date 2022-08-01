import Link from "next/link";
import Image from "next/image";
import HeaderPage from "../components/head-page";
import Sidebar from "../components/sidebar-menu";

export default function Home() {
    
  return (
    <>
    <div className="header">
        <div className="heading">
            <div className="heading-logo">
              <Image src="/image/heading.png" layout="fill" objectFit="fit" />
            </div>
            <h1>DIGITAL GALLERY</h1>
            <div className="heading-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. , consectetur adipiscing elit.</p>
                <Link href="/digital-gallery"><button>Visit Gallery</button></Link>
            </div>
        </div>
        <Sidebar/>
        <HeaderPage/>
    </div>
    </>
  )
}

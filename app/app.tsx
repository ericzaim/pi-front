
import {Image} from "@nextui-org/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";


export default function App() {
  return (
      <>
      <div className="py-10 relative flex flex-col h-screen items-center text-3xl font-bold">
      <p>Projeto PI</p>
      <div className="py-10">
      <Button color="secondary"
      as={Link} href={siteConfig.links.começar}>
        Começar
      </Button>
      </div>
      </div>
      </>
  );
}
function iniciarJogo(){

}
export function Logo(){
  return (
    <div className="relative flex flex-col items-center justify-center">
    <Image
    width={500}
    height={500}
    alt="Luffy"
    src="/luffy.png"/>
    </div>
  )
}

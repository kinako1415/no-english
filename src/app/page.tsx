import Link from "next/link";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { zenMaruGothic } from "./fonts/zenFont";
export default function Home() {
  return (
    <main className={zenMaruGothic.className}>
      <Link href="/pages/speech">
        <Button>/pages/speech ページへ移動</Button>
      </Link>
      <Link href="/pages/auth">
        <Button>/pages/auth ページへ移動</Button>
      </Link>
    </main>
  );
}

import Link from "next/link";
import "@radix-ui/themes/styles.css";
import { Button, Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <main>
        <Link href="/pages/speech">
          <Button>fadsf</Button>
        </Link>
      </main>
    </Theme>
  );
}

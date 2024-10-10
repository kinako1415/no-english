import Link from "next/link";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { zenMaruGothic } from "./fonts/zenFont";
import TodoList from "./components/base/comments";

export default function Home() {
  return (
    <main className={zenMaruGothic.className}>
      <Link href="/pages/speech">
        <Button>あいうえお隣の客はよく柿食う客だ</Button>
      </Link>
      <div>隣の客はよく柿食う客だ 開始 入力</div>
      <div>隣の客はよく柿食う客だ 開始 入力</div>
      <div>隣の客はよく柿食う客だ 開始 入力</div>
      <TodoList />
    </main>
  );
}

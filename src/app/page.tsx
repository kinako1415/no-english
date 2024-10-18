import "@radix-ui/themes/styles.css";
import { Flex, Text } from "@radix-ui/themes";
import { zenMaruGothic } from "./fonts/zenFont";
export default function Home() {
  return (
    <main className={zenMaruGothic.className}>
      <Flex justify="center" align="center" height="100vh" width="100vw">
        <Text>なんか良さげのトップページ</Text>
      </Flex>
    </main>
  );
}

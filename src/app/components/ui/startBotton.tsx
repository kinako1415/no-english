import { Button } from "@radix-ui/themes";

export default function StartButton({ children }: { children: string }) {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
}

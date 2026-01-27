import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function scrollByViewport(direction: "up" | "down") {
  const delta = Math.round(window.innerHeight * 0.88);
  window.scrollBy({ top: direction === "down" ? delta : -delta, behavior: "smooth" });
}

export function ScrollArrows() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <Button
        variant="premium"
        size="icon"
        aria-label="سهم للأعلى"
        title="⬆️"
        onClick={() => scrollByViewport("up")}
        className="surface-glass"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      <Button
        variant="premium"
        size="icon"
        aria-label="سهم للأسفل"
        title="⬇️"
        onClick={() => scrollByViewport("down")}
        className="surface-glass"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </div>
  );
}

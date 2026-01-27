import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
function scrollByViewport(direction: "up" | "down") {
  const delta = Math.round(window.innerHeight * 0.88);
  window.scrollBy({
    top: direction === "down" ? delta : -delta,
    behavior: "smooth"
  });
}
export function ScrollArrows() {
  return;
}
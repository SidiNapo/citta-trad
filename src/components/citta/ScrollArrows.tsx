import * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function scrollByViewport(direction: "up" | "down") {
  const delta = Math.round(window.innerHeight * 0.88);
  window.scrollBy({
    top: direction === "down" ? delta : -delta,
    behavior: "smooth"
  });
}

export function ScrollArrows() {
  const [showUp, setShowUp] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > Math.round(window.innerHeight * 0.35));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2 md:bottom-6 md:left-6">
      <AnimatePresence>
        {showUp && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="surface-glass h-11 w-11 rounded-full"
              onClick={() => scrollByViewport("up")}
              aria-label="الرجوع للأعلى"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="surface-glass h-11 w-11 rounded-full"
          onClick={() => scrollByViewport("down")}
          aria-label="النزول للأسفل"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
}
import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  phoneE164: string; // +212...
  message: string;
};

function buildWhatsAppLink(phoneE164: string, message: string) {
  const digits = phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

export function WhatsappFloat({ phoneE164, message }: Props) {
  const href = React.useMemo(() => buildWhatsAppLink(phoneE164, message), [message, phoneE164]);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <Button asChild variant="whatsapp" size="pill" className="gap-2">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label="تواصل معنا عبر واتساب"
          title="واتساب"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">واتساب</span>
        </a>
      </Button>
    </div>
  );
}

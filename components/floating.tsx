"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Info, Microscope, Rocket, Users, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const navigationItems = [
  { icon: Rocket, href: "/" },
  { icon: Microscope, href: "#research" },
  { icon: Workflow, href: "#work" },
  { icon: Users, href: "#team" },
  { icon: Info, href: "#about" },
];

export default function Float() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      setVisible(false);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed left-5 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8 pointer-events-none"
      }`}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="Navigation shortcuts"
        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-border rounded-xl shadow-lg dark:shadow-none p-1 gap-1"
      >
        {navigationItems.map(({ icon: Icon, href }, idx) => (
          <Link key={idx} href={href}>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-lg text-zinc-500 dark:text-muted-foreground hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <Icon className="w-5 h-5" />
            </Button>
          </Link>
        ))}
      </ButtonGroup>
    </div>
  );
}
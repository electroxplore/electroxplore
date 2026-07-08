import Link from "next/link";
import { Info, Microscope, Rocket, Users, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
export default function Float() {
  return (
    <div className="fixed bottom-[50%] left-5 z-50 group w-24 h-24">
      <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        className="h-fit"
      >
        <Button variant="outline" size="icon">
          <Link href="/">
            <Rocket className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="#research">
            <Microscope className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="#work">
            <Workflow className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="#team">
            <Users className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="#about">
            <Info className="w-5 h-5" />
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}

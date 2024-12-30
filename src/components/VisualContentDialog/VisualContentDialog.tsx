import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VisualContentCarousel from "../VisualContentCarousel/VisualContentCarousel";

interface VisualContentDialogProps {
  open: boolean;
  onOpenChange: () => void;
}
type Visuals = {
  path: string;
};

const images: Visuals[] = [
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/visual_01.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sampleone.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
  {
    path: "/sample.png",
  },
];
const VisualContentDialog = ({
  open,
  onOpenChange,
}: VisualContentDialogProps) => {
  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          style={{
            width: "70%",
          }}
        >
          <VisualContentCarousel visuals={images} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisualContentDialog;

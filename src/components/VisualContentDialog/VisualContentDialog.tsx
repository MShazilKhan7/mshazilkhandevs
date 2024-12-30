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
  slides: string[];
}

const VisualContentDialog = ({
  open,
  onOpenChange,
  slides,
}: VisualContentDialogProps) => {
  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          style={{
            width: "70%",
          }}
        >
          <VisualContentCarousel visuals={slides} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisualContentDialog;

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
  post: any;
}

const VisualContentDialog = ({
  open,
  onOpenChange,
  post,
}: VisualContentDialogProps) => {
  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          style={{
            backgroundColor: "white",
          }}
          className="w-[90%] md:w-[70%]"
        >
          <DialogHeader>
            <DialogTitle className="text-center text-base text-black md:text-2xl font-semibold">
              {post?.title}
            </DialogTitle>
            {/* <DialogDescription></DialogDescription> */}
          </DialogHeader>
          <VisualContentCarousel visuals={post?.images} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisualContentDialog;

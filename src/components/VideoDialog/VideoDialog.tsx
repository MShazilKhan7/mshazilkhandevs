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
import ProfileTag from "../ProfileTag/ProfileTag";
interface VideoDialogProps {
  open: boolean;
  onOpenChange: () => void;
}
const VideoDialog = ({ open, onOpenChange }: VideoDialogProps) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent style={{ width: "60%" }}>
          <video width={"100%"} autoPlay={true} controls>
            <source src="/lecture.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoDialog;

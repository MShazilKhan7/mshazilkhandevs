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
import YouTube from "react-youtube";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: () => void;
  videoId: string;
}
const VideoDialog = ({ open, onOpenChange, videoId }: VideoDialogProps) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play the video on load
    },
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="w-[90%] md:w-[70%]"
          style={{ backgroundColor: "white" }}
        >
          {/* <DialogTitle /> */}
          <YouTube
            className="h-[40vh] md:h-[70vh] w-full"
            videoId={videoId}
            opts={opts}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoDialog;

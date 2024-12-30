"use client";
import React, { useState, useEffect } from "react";
import VisualContentDialog from "@/components/VisualContentDialog/VisualContentDialog";
const VisualContent = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const onOpenChange = () => {
    setDialogOpen(!dialogOpen);
  };
  return (
    <div>
      <button onClick={onOpenChange}>open</button>
      <VisualContentDialog open={dialogOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default VisualContent;

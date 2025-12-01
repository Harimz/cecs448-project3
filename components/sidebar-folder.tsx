import { File, Folder, FolderClosed, FolderOpen } from "lucide-react";
import React, { useState } from "react";

export const SidebarFolder = ({ title }: { title: string }) => {
  const [folderOpen, setFolderOpen] = useState(false);

  return (
    <div
      onClick={() => setFolderOpen((state) => !state)}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {folderOpen ? (
          <FolderOpen className="size-4" />
        ) : (
          <FolderClosed className="size-4" />
        )}

        <p>{title}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 px-6 flex flex-col gap-2 mt-2 ${
          folderOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <File className="size-4" />

          <p>Project 3</p>
        </div>
        <div className="flex items-center gap-2">
          <File className="size-4" />

          <p>HW 5</p>
        </div>
      </div>
    </div>
  );
};

"use client";

import BottomBar from "@/components/bottom-bar";
import Header from "@/components/header";
import RightPanel from "@/components/right-panel";
import VideoPreview from "@/components/video-preview";
import {
  VideoProjectStoreContext,
  createVideoProjectStore,
} from "@/data/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
import { useStore } from "zustand";
import { GenerateDialog } from "./generate-dialog";
import { ProjectDialog } from "./project-dialog";
import { MediaGallerySheet } from "./media-gallery";
import { ToastProvider } from "./ui/toast";
import { Toaster } from "./ui/toaster";
import { ExportDialog } from "./export-dialog";
import LeftPanel from "./left-panel";

type AppProps = {
  projectId: string;
};

export function App({ projectId }: AppProps) {
  const queryClient = useRef(new QueryClient()).current;
  const projectStore = useRef(
    createVideoProjectStore({
      projectId,
    }),
  ).current;
  const projectDialogOpen = useStore(projectStore, (s) => s.projectDialogOpen);
  const generateDialogOpen = useStore(
    projectStore,
    (s) => s.generateDialogOpen,
  );
  const selectedMediaId = useStore(projectStore, (s) => s.selectedMediaId);
  const setSelectedMediaId = useStore(
    projectStore,
    (s) => s.setSelectedMediaId,
  );
  const handleOnSheetOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedMediaId(null);
    }
  };
  const isExportDialogOpen = useStore(projectStore, (s) => s.exportDialogOpen);
  const setExportDialogOpen = useStore(
    projectStore,
    (s) => s.setExportDialogOpen,
  );
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <VideoProjectStoreContext.Provider value={projectStore}>
          <div className="flex flex-col h-screen bg-background">
            <Header />
            <main className="flex overflow-hidden h-full">
              <LeftPanel />
              <div className="flex flex-col flex-1">
                <VideoPreview />
                <BottomBar />
              </div>
              <RightPanel />
            </main>
          </div>
          <Toaster />
          <ProjectDialog open={projectDialogOpen} />
          <GenerateDialog open={generateDialogOpen} />
          <ExportDialog
            open={isExportDialogOpen}
            onOpenChange={setExportDialogOpen}
          />
          <MediaGallerySheet
            open={selectedMediaId !== null}
            onOpenChange={handleOnSheetOpenChange}
            selectedMediaId={selectedMediaId ?? ""}
          />
        </VideoProjectStoreContext.Provider>
      </QueryClientProvider>
    </ToastProvider>
  );
}

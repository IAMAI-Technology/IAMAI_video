import { openDB } from "idb";
import type {
  GenerationJob,
  VideoKeyFrame,
  VideoProject,
  VideoTrack,
} from "./schema";

function open() {
  return openDB("ai-vstudio-db", 1, {
    upgrade(db) {
      db.createObjectStore("projects", { keyPath: "id" });

      const trackStore = db.createObjectStore("tracks", { keyPath: "id" });
      trackStore.createIndex("by_projectId", "projectId");

      const keyFrameStore = db.createObjectStore("keyFrames", {
        keyPath: "id",
      });
      keyFrameStore.createIndex("by_trackId", "trackId");

      const jobStore = db.createObjectStore("jobs", { keyPath: "id" });
      jobStore.createIndex("by_projectId", ["projectId", "createdAt"]);
    },
  });
}

export const db = {
  projects: {
    async find(id: string): Promise<VideoProject | null> {
      const db = await open();
      return db.get("projects", id);
    },
    async list(): Promise<VideoProject[]> {
      const db = await open();
      return db.getAll("projects");
    },
    async create(project: Omit<VideoProject, "id">) {
      const db = await open();
      const tx = db.transaction("projects", "readwrite");
      const result = await tx.store.put({
        ...project,
        id: crypto.randomUUID(),
      });
      await tx.done;
      return result;
    },
    async update(id: string, project: Partial<VideoProject>) {
      const db = await open();
      const existing = await db.get("projects", id);
      if (!existing) return;
      return db.put("projects", {
        ...existing,
        ...project,
        id,
      });
    },
  },

  tracks: {
    async find(id: string): Promise<VideoTrack | null> {
      const db = await open();
      return db.get("tracks", id);
    },
    async tracksByProject(projectId: string): Promise<VideoTrack[]> {
      const db = await open();
      return db.getAllFromIndex("tracks", "by_projectId", projectId);
    },
    async create(track: Omit<VideoTrack, "id">) {
      const db = await open();
      return db.put("tracks", {
        ...track,
        id: crypto.randomUUID(),
      });
    },
  },

  keyFrames: {
    async find(id: string): Promise<VideoKeyFrame | null> {
      const db = await open();
      return db.get("keyFrames", id);
    },
    async keyFramesByTrack(trackId: string): Promise<VideoKeyFrame[]> {
      const db = await open();
      const result = await db.getAllFromIndex(
        "keyFrames",
        "by_trackId",
        trackId,
      );
      return result.toSorted((a, b) => a.timestamp - b.timestamp);
    },
    async create(keyFrame: Omit<VideoKeyFrame, "id">) {
      const db = await open();
      return db.put("keyFrames", {
        ...keyFrame,
        id: crypto.randomUUID(),
      });
    },
    async delete(id: string) {
      const db = await open();
      return db.delete("keyFrames", id);
    },
  },

  jobs: {
    async find(id: string): Promise<GenerationJob | null> {
      const db = await open();
      return db.get("jobs", id);
    },
    async jobsByProject(projectId: string): Promise<GenerationJob[]> {
      const db = await open();
      const results = await db.getAllFromIndex(
        "jobs",
        "by_projectId",
        projectId,
      );
      return results.toSorted((a, b) => b.createdAt - a.createdAt);
    },
    async create(job: Omit<GenerationJob, "id">) {
      const db = await open();
      const tx = db.transaction("jobs", "readwrite");
      const id = crypto.randomUUID().toString();
      const result = await tx.store.put({
        ...job,
        id,
      });
      await tx.done;
      return result;
    },
    async update(id: string, job: Partial<GenerationJob>) {
      const db = await open();
      const existing = await db.get("jobs", id);
      if (!existing) return;
      const tx = db.transaction("jobs", "readwrite");
      const result = await tx.store.put({
        ...existing,
        ...job,
        id,
      });
      await tx.done;
      return result;
    },
    async delete(id: string) {
      const db = await open();
      const job: GenerationJob | null = await db.get("jobs", id);
      if (!job) return;
      // Delete associated keyframes
      const tracks = await db.getAllFromIndex(
        "tracks",
        "by_projectId",
        job.projectId,
      );
      const trackIds = tracks.map((track) => track.id);
      const frames = (
        await Promise.all(
          trackIds.map(
            (trackId) =>
              db.getAllFromIndex("keyFrames", "by_trackId", trackId) as Promise<
                VideoKeyFrame[]
              >,
          ),
        )
      )
        .flatMap((f) => f)
        .filter((f) => f.data.jobId === id)
        .map((f) => f.id);
      const tx = db.transaction(["jobs", "keyFrames"], "readwrite");
      await Promise.all(
        frames.map((id) => tx.objectStore("keyFrames").delete(id)),
      );
      await tx.objectStore("jobs").delete(id);
      await tx.done;
    },
  },
} as const;

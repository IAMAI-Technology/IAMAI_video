# IAMAI Video - Product Requirements Document

## Overview
IAMAI Video is a powerful video production application within the IAMAI family, designed to provide AI-powered video creation and editing capabilities directly in the browser. Built on Next.js, Remotion, and fal.ai, it offers professional-grade video manipulation with an intuitive interface.

## Current Features

### Core Video Capabilities
- Browser-based video processing and composition
- Multi-clip video composition support
- Audio track integration and voiceover support
- Extended video duration handling
- Metadata encoding

### AI Integration 
- Direct integration with fal.ai video models:
  - Minimax for video generation
  - Hunyuan for visual synthesis 
  - LTX for video manipulation

### Developer Tools
- Video processing pipeline
- Ready-to-use UI components
- Full TypeScript support
- Browser storage via IndexedDB

## Rebranding Requirements

### Design System Implementation
The application follows IAMAI's design system:

#### Color Palette
Light Mode:
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(0 0% 3.9%)` - Near black text
- Primary: `hsl(0 0% 9%)` - Dark gray
- Secondary: `hsl(0 0% 96.1%)` - Light gray
- Border: `hsl(0 0% 89.8%)` - Medium light gray

Dark Mode:
- Background: `hsl(0 0% 3.9%)` - Near black
- Foreground: `hsl(0 0% 98%)` - Near white text
- Primary: `hsl(0 0% 98%)` - Near white
- Secondary: `hsl(0 0% 14.9%)` - Very dark gray
- Border: `hsl(0 0% 14.9%)` - Very dark gray

#### Typography
- Primary Sans: Geist Sans (`--font-geist-sans`)
- Serif: Instrument Serif (`--font-serif`)
- Monospace: Geist Mono (`--font-geist-mono`)

Headings:
- H1: 3.5rem/1.1 Instrument Serif, bold
- H2: 2.25rem/1.2 Instrument Serif, bold
- H3: 1.875rem/1.3 Geist Sans, semibold
- H4: 1.5rem/1.4 Geist Sans, semibold

Body Text:
- Regular: 1rem/1.6 Geist Sans
- Large: 1.125rem/1.5 Geist Sans
- Small: 0.875rem/1.5 Geist Sans
- Tiny: 0.75rem/1.5 Geist Sans

#### Components
- Buttons:
  - Primary: Solid cyan background
  - Secondary: Teal outline
  - Ghost: Transparent with hover effect
- Cards: White background with subtle shadow
- Input fields: Consistent styling with IAMAI main app
- Icons: Lucide icon set with IAMAI colors

### Layout Updates
- Header: Consistent with IAMAI main app
- Left panel: Tool organization matching IAMAI patterns
- Main workspace: Clean, minimal interface
- Media gallery: Grid layout with IAMAI styling

## System Architecture

### Frontend Architecture

#### Core Technologies
- Next.js 14 for the React framework
- TypeScript for type safety
- Tailwind CSS with shadcn/ui components
- Zustand for state management
- React Query for data fetching
- Remotion for video processing
- IndexedDB for browser storage

#### Key Components

1. **Video Processing Pipeline**
- Browser-based video composition using Remotion
- Multi-track support for video, music, and voiceover
- Frame-based timeline management
- Real-time preview rendering

2. **Data Layer**
- IndexedDB for persistent storage
  - Projects store
  - Tracks store
  - KeyFrames store
  - Media items store
- Zustand stores for runtime state
  - Project settings
  - Player controls
  - UI state

3. **Media Management**
- UploadThing integration for file uploads
- Support for multiple media types:
  - Video (up to 512MB)
  - Images (up to 16MB)
  - Audio (up to 64MB)
- Automatic metadata extraction
- Media gallery with filtering

4. **AI Integration**
- Direct fal.ai model access
- Supported models:
  - Minimax for video generation
  - Hunyuan for visual synthesis
  - LTX for video manipulation
- Prompt enhancement system
- Real-time model status tracking

### Data Flow

1. **Project Management**
typescript:src/data/db.ts
startLine: 9
endLine: 28

2. **Media Management**
typescript:src/data/db.ts
startLine: 30
endLine: 100

3. **AI Integration**
typescript:src/data/db.ts
startLine: 102
endLine: 120

2. **Media Processing**
typescript:src/components/left-panel.tsx
startLine: 72
endLine: 115
3. **Video Composition**
typescript:src/components/video-preview.tsx
startLine: 44
endLine: 99


### Security & Performance

1. **Upload Security**
- File type validation
- Size limits enforcement
- Secure URL generation

2. **Performance Optimizations**
- Asset preloading
- Throttled timeline updates
- Efficient IndexedDB queries
- Lazy-loaded components

### Development Workflow

1. **Code Quality**
- Biome for formatting
- TypeScript for type checking
- Husky for pre-commit hooks

2. **Deployment**
- Vercel-optimized
- Environment configuration
- Automatic branch deployments

### Integration Points

1. **External Services**
- fal.ai for AI models
- UploadThing for file storage
- Vercel for hosting

2. **Browser APIs**
- IndexedDB for storage
- Web Audio API
- Canvas for rendering
- File System Access API

This architecture ensures a scalable, maintainable, and performant video production application that leverages modern web technologies and AI capabilities.
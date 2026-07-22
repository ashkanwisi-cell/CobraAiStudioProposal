export const en = {
  metaTitle: "COBRA AI Studio — Local AI Creative Studio",
  brandSub: "Local AI Studio",
  status: "Windows Desktop",
  language: "FA",
  menu: "Open navigation",
  close: "Close",
  nav: [
    ["directory", "Directory"], ["overview", "Overview"], ["benefits", "Benefits"], ["capabilities", "Capabilities"], ["apps", "COBRA Apps"],
    ["screenshots", "Screenshots"], ["gallery", "Gallery"], ["workflow", "Workflow"], ["technology", "Technology"], ["use-cases", "Use Cases"]
  ],
  hero: {
    eyebrow: "Local-first Windows AI Studio",
    title: "Your local AI creative studio.",
    lead: "COBRA unifies image and video generation, local chat, model readiness, recoverable jobs, projects, portrait editing, product composition, and reusable character workflows in one premium Windows workspace.",
    primary: "Explore COBRA", secondary: "View Gallery",
    chips: ["Local processing", "Validated model readiness", "Recoverable queue", "Private project library"]
  },
  overview: {
    eyebrow: "Executive overview", title: "From fragmented tools to one connected studio.",
    body: "Local AI often means juggling model folders, runtimes, downloads, prompts, queues, output directories, and editing tools. COBRA connects them inside one consistent desktop environment. Required components are installed and validated through the app; after setup, compatible workloads run on the user’s computer.",
    note: "Internet access is still required to download components. Video and local chat remain readiness-gated until their exact runtime and model checks pass.",
    split: [
      { title: "Without COBRA", items: ["Scattered model folders", "Separate runtime installers", "Disconnected queues and outputs", "Manual path and dependency management"] },
      { title: "Inside COBRA", items: ["Canonical model registry", "App-managed runtimes", "Shared queue, history, and projects", "Actionable setup and repair paths"] }
    ]
  },
  benefits: {
    eyebrow: "Product benefits", title: "Control that stays understandable.",
    items: [
      ["Local-first creative control", "Models and creative workloads run through app-managed local runtimes after their required components are installed."],
      ["Privacy-oriented workflow", "Creative files, history, projects, and local conversations stay in the application’s local workspace."],
      ["Unified creative environment", "Image, video, chat, projects, models, downloads, queue, history, and specialist apps share one product."],
      ["Honest readiness system", "Ready to Use, Downloading, Needs Setup, Missing Runtime, and Repair Needed reflect real validation—not folder existence."],
      ["Recoverable operations", "Persisted queue and download state provide restart recovery, retry, cancellation, progress, and safe partial downloads."],
      ["Beginner and Advanced modes", "A simplified starting point and deeper professional controls coexist without splitting the workflow."]
    ]
  },
  capabilities: {
    eyebrow: "Complete capabilities", title: "A studio, not a collection of tabs.", intro: "Every module connects creation, readiness, operational state, and outputs.",
    items: [
      ["Home Dashboard", "Recent generations, queue status, storage, project access, generation shortcuts, models, history, and settings."],
      ["Generate Image", "Text-to-image, model choice, presets, aspect ratios, references where supported, advanced parameters, prompt library, recommendations, and central queue."],
      ["Generate Video", "Local Diffusers-compatible video generation, available only after managed runtime, snapshot, adapter, and smoke-check readiness."],
      ["Model Hub", "Browse Image, Video, and Chat models with search, status, files, runtime requirements, size, VRAM guidance, installation, validation, and repair."],
      ["Download Center", "Pause, resume, retry, cancel, progress, speed, ETA, safe .part handling, restart recovery, and open-folder actions."],
      ["Projects", "Organize work by client, campaign, channel, or creative objective and attach outputs from connected workflows."],
      ["Local Chat", "GGUF chat with selectable CPU or CUDA backend where available, context and generation controls, attachments, and local conversation storage."],
      ["Queue", "Active, waiting, completed, and failed jobs with persisted progress, prior-session recovery, cancellation, retry, and shared orchestration."],
      ["History & Outputs", "Gallery or list views, search, filters, sorting, favorites, reusable settings, project grouping, file access, regeneration, and prompt copy."],
      ["Settings", "Dark and light appearance, Local AI folder, model/download folders, CPU/GPU mode, engine validation, storage, maintenance, diagnostics, and support bundle."]
    ],
    presets: "Built-in starting points", presetList: ["Realistic Portrait", "Product Photography", "Cinematic Scene", "Anime Character", "Architecture", "YouTube Thumbnail", "Instagram Post", "Reels Cover"]
  },
  apps: {
    eyebrow: "COBRA Apps", title: "Specialized Creative Apps", intro: "Focused workspaces inherit COBRA’s models, queue, readiness, local files, and visual system.",
    items: [
      { id: "dcu", title: "Digital Character Universe", image: "./assets/app-cards/digital-character-universe.png", label: "Reusable character systems", body: "Create a hero character in one-prompt Auto Mode or section-by-section Pro Mode, extract Character DNA, generate controlled multi-angle and variation sets, score consistency, retry weak frames, and export a reusable character pack.", features: ["Identity, face, body, hair, and style controls", "Reference, seed, outfit, and location locks", "Strict, balanced, and creative modes", "Outfit, location, pose, and expression variations", "Character DNA, bible, prompts, seeds, and model metadata"], note: "Current consistency scoring is a typed local heuristic fallback—not biometric identity recognition. The architecture reserves future identity-adapter support." },
      { id: "product", title: "Product Box", image: "./assets/app-cards/product-box.png", label: "Mask-first campaign composition", body: "Import a product, extract and refine a protected foreground mask, transform it non-destructively, generate or select backgrounds, integrate shadows and reflections, keep versioned history, and export campaign-ready assets.", features: ["Position, scale, rotation, contact shadow, softness, offsets, reflection, and blur", "Common aspect ratios plus 1024, 1536, 2048, and custom output", "PNG, JPEG, WebP, cutout PNG, mask PNG, and project export", "Generated backgrounds, selected images, reuse, and regeneration", "Original source and grayscale mask stored separately"], note: "Product protection checks preserve opaque foreground RGB pixels in the implemented composition path; edge cleanup is limited to partially transparent mask pixels." },
      { id: "beauty", title: "Beauty Studio", image: "./assets/app-cards/beauty-studio.png", label: "Non-destructive portrait editing", body: "Import creates an immutable Original. Every edit becomes a managed version processed through a worker queue, with full-resolution output, preview, compare, undo/redo, branching, and export.", features: ["Quick Edit, looks, enhance, color, restore, and relight", "Retouch, makeup, symmetry, sculpt, teeth, eyes, and hair", "Body, hand, clothing, and background workflows", "Batch and synchronized preset plans", "Schema-driven controls and readiness actions"], note: "Every visible tool runs through the bundled local CPU runtime. The build deliberately does not claim unverified third-party model weights are installed." }
    ],
    anglesTitle: "Default 10-view character set", angles: ["Front Portrait", "3/4 Left", "3/4 Right", "Left Profile", "Right Profile", "Full Body Front", "Full Body Back", "Full Body Side", "Face Close-up", "Detail / Beauty Close-up"]
  },
  screenshots: { eyebrow: "Real interface", title: "Application Screenshots", intro: "Explore the actual COBRA desktop experience. Use tabs, arrows, swipe, or keyboard controls; open any frame full-screen." },
  gallery: { eyebrow: "Generated with COBRA", title: "Gallery", intro: "A selection of real outputs supplied with the project, shown without filters or distortion." },
  workflow: {
    eyebrow: "How COBRA works", title: "A readiness-aware path from setup to reusable output.",
    steps: ["Install COBRA on Windows", "Choose the Local AI storage folder", "Scan hardware and select CPU/GPU-compatible options", "Download the required runtime and model", "Wait for exact readiness validation", "Create in Generate or a COBRA App", "Monitor the shared Queue", "Review History and Projects", "Reuse, edit, organize, or export"]
  },
  technology: {
    eyebrow: "Local-first foundation", title: "Simple for creators. Defensible for technical teams.",
    productTitle: "Product-level explanation", productBody: "COBRA keeps creative work connected on the desktop. It manages the components a workflow needs, reports what is actually ready, recovers interrupted work, and keeps outputs accessible for the next step.",
    technicalTitle: "Technical confidence", technical: ["Windows Electron application with renderer/main separation", "Context isolation enabled; Node integration disabled", "Canonical validated model registry and versioned readiness receipts", "SQLite-backed jobs, history, downloads, models, activity, gallery, and ownership data", "App-managed image, video, and GGUF chat runtimes", "Persisted downloads, HTTP range recovery, .part files, and atomic finalization", "Hardware profile, sanitized support bundle, and rotating logs", "Shared dependency ownership and safe model-uninstall planning"],
    caveat: "Beta note: projects and prompt-library entries currently remain in versioned renderer localStorage. Clean-machine, large-download, and varied CPU/NVIDIA integration QA remain release requirements."
  },
  audiences: {
    eyebrow: "Who COBRA is for", title: "One studio, many real creative jobs.",
    items: [["Content creators", "Produce social formats, thumbnails, images, and clips without losing prompts or outputs."], ["Product & e-commerce teams", "Build protected product compositions, angles, and campaign assets from one project."], ["Character designers", "Maintain reusable DNA, controlled views, outfits, locations, poses, and export metadata."], ["Portrait professionals", "Create non-destructive retouch versions, compare edits, batch presets, and export full-resolution work."], ["Filmmakers & campaign teams", "Develop cinematic frames, video concepts, consistent characters, and organized project outputs."], ["Local-AI enthusiasts & studios", "Control models, storage, runtimes, diagnostics, and files inside a desktop workflow."]]
  },
  differences: {
    eyebrow: "Product differentiators", title: "Designed around the whole operation.",
    items: ["Unified desktop workflow", "Local execution after setup", "Honest readiness states", "Integrated dependencies and downloads", "Recoverable shared queue", "Connected history and outputs", "Three specialist creative apps", "Non-destructive versioned workflows", "Reusable project organization", "Beginner and Advanced modes", "One consistent visual system", "No folder-only ‘ready’ status"]
  },
  cta: { title: "Bring local AI into one coherent creative system.", body: "COBRA connects models, runtimes, jobs, projects, outputs, editing, and reuse—while showing clearly what is ready and what still needs setup.", primary: "Explore the Workflow", secondary: "View Generated Gallery", badge: "Windows desktop · COBRA 0.2.7", note: "Some capabilities require a compatible local runtime and downloaded model before use." },
  footer: "COBRA AI Studio product proposal · Based on inspected project version 0.2.7"
};

export type Translation = Record<string, any>;

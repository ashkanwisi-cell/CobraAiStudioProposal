import type { Language } from "../i18n";

export type Localized = { en: string; fa: string };
export type DirectoryItem = { name: Localized; description: Localized; target: string; status?: Localized };
export type DirectoryGroup = { title: Localized; items: DirectoryItem[] };
export type DirectoryCategory = { id: string; icon: string; title: Localized; intro: Localized; groups: DirectoryGroup[] };

const l = (en: string, fa: string): Localized => ({ en, fa });
const item = (en: string, fa: string, enDescription: string, faDescription: string, target: string, status?: Localized): DirectoryItem => ({
  name: l(en, fa), description: l(enDescription, faDescription), target, status
});

export const projectDirectory: DirectoryCategory[] = [
  {
    id: "proposal", icon: "map", title: l("Product proposal tour", "مسیر معرفی محصول"),
    intro: l("The complete presentation layer: what COBRA is, why it matters, how it works, and the real evidence behind the product.", "لایه کامل معرفی محصول؛ از ماهیت و ارزش کبرا تا روند کار و شواهد واقعی محصول."),
    groups: [
      { title: l("Story and value", "روایت و ارزش محصول"), items: [
        item("Executive Overview", "معرفی اجرایی", "Explains how COBRA replaces a fragmented local-AI toolchain with one connected desktop studio.", "نشان می‌دهد کبرا چگونه ابزارهای پراکنده Local AI را به یک استودیوی دسکتاپ پیوسته تبدیل می‌کند.", "overview"),
        item("Product Benefits", "مزایای محصول", "Presents local control, privacy, unified workflows, honest readiness, recovery, and beginner/advanced modes.", "کنترل محلی، حریم خصوصی، گردش کار یکپارچه، آمادگی واقعی، بازیابی و حالت‌های مبتدی و پیشرفته را معرفی می‌کند.", "benefits"),
        item("Complete Capabilities", "قابلیت‌های کامل", "Provides a concise map of the desktop modules and the jobs each module handles.", "نقشه‌ای فشرده از ماژول‌های دسکتاپ و مسئولیت هرکدام ارائه می‌دهد.", "capabilities"),
        item("Specialized Creative Apps", "ابزارهای تخصصی", "Introduces DCU, Product Box, and Beauty Studio with their grounded workflows and limitations.", "DCU، Product Box و Beauty Studio را همراه گردش کار واقعی و محدودیت‌هایشان معرفی می‌کند.", "apps")
      ]},
      { title: l("Evidence and operation", "شواهد و عملکرد"), items: [
        item("Application Screenshots", "تصاویر محیط نرم‌افزار", "Interactive carousel containing all six supplied desktop screenshots.", "کاروسل تعاملی شامل هر شش تصویر واقعی محیط دسکتاپ.", "screenshots"),
        item("Generated Gallery", "گالری خروجی‌ها", "Editorial gallery containing every supplied generated image with an accessible lightbox.", "گالری تصویری شامل تمام خروجی‌های ارائه‌شده با نمایش تمام‌صفحه دسترس‌پذیر.", "gallery"),
        item("Workflow", "روند کار", "A readiness-aware sequence from Windows installation through setup, generation, review, reuse, and export.", "مسیر مبتنی بر آمادگی از نصب ویندوز تا راه‌اندازی، تولید، بررسی، استفاده مجدد و خروجی.", "workflow"),
        item("Technical Foundation", "زیرساخت فنی", "Separates the creator-friendly product explanation from technical architecture and beta caveats.", "توضیح ساده محصول را از معماری فنی و ملاحظات نسخه بتا جدا می‌کند.", "technology"),
        item("Use Cases", "کاربردها", "Maps COBRA to creators, commerce teams, character artists, portrait professionals, filmmakers, and local-AI studios.", "کبرا را به نیاز تولیدکنندگان محتوا، تجارت الکترونیک، طراحان کاراکتر، پرتره، فیلم و استودیوهای Local AI مرتبط می‌کند.", "use-cases"),
        item("Product Differentiators", "تمایزهای محصول", "Summarizes the operational differences created by one connected, readiness-aware desktop workflow.", "تمایزهای یک گردش کار دسکتاپ یکپارچه و مبتنی بر آمادگی را جمع‌بندی می‌کند.", "use-cases"),
        item("Closing Proposal", "جمع‌بندی نهایی", "Restates the product value, version, Windows scope, and setup-dependent capability note.", "ارزش محصول، نسخه، دامنه ویندوز و نیاز برخی قابلیت‌ها به راه‌اندازی را دوباره بیان می‌کند.", "use-cases")
      ]}
    ]
  },
  {
    id: "core", icon: "layout", title: l("Core desktop experience", "تجربه اصلی دسکتاپ"),
    intro: l("The surfaces that open, orient, navigate, and continuously report the state of the COBRA application.", "بخش‌هایی که برنامه را باز می‌کنند، مسیر را نشان می‌دهند، ناوبری را انجام می‌دهند و وضعیت کبرا را گزارش می‌کنند."),
    groups: [
      { title: l("Entry and orientation", "ورود و راهنمایی"), items: [
        item("License Gate", "درگاه فعال‌سازی", "Checks the existing activation state before the main workspace is loaded.", "پیش از بارگذاری محیط اصلی، وضعیت فعال‌سازی موجود را بررسی می‌کند.", "overview"),
        item("Splash Screen", "صفحه آغازین", "Covers license checks, durable-data hydration, preference loading, and startup readiness.", "بررسی مجوز، بازیابی داده‌های پایدار، تنظیمات و آمادگی شروع را پوشش می‌دهد.", "overview"),
        item("Onboarding Wizard", "راهنمای شروع", "Guides first-run storage selection, hardware awareness, engine setup, and completion state.", "انتخاب فضای ذخیره‌سازی، شناخت سخت‌افزار، راه‌اندازی Engine و تکمیل شروع اولیه را هدایت می‌کند.", "workflow"),
        item("Home Dashboard", "داشبورد خانه", "Shows shortcuts, recent generations, queue metrics, storage, system health, and recently used models.", "میان‌برها، تولیدهای اخیر، شاخص‌های صف، ذخیره‌سازی، سلامت سیستم و مدل‌های اخیر را نمایش می‌دهد.", "capabilities")
      ]},
      { title: l("Navigation and feedback", "ناوبری و بازخورد"), items: [
        item("Sidebar Navigation", "نوار کناری", "Primary access to Home, Generate, Apps, Models, Projects, Chat, Downloads, Queue, History, and Settings.", "دسترسی اصلی به خانه، تولید، ابزارها، مدل‌ها، پروژه‌ها، چت، دانلود، صف، تاریخچه و تنظیمات.", "capabilities"),
        item("Global Search", "جست‌وجوی سراسری", "Keyboard-accessible search opened from the sidebar or with Ctrl/Cmd + K.", "جست‌وجوی قابل‌دسترسی از نوار کناری یا میان‌بر Ctrl/Cmd + K.", "capabilities"),
        item("Beginner / Advanced Mode", "حالت مبتدی / پیشرفته", "Switches between a simplified interface and deeper generation and system controls.", "میان رابط ساده و کنترل‌های عمیق‌تر تولید و سیستم جابه‌جا می‌شود.", "benefits"),
        item("App Header and Engine Status", "هدر و وضعیت Engine", "Names the active page and continuously reports whether the local image engine is ready.", "نام صفحه فعال و آمادگی Engine محلی تصویر را به‌صورت پیوسته نمایش می‌دهد.", "technology"),
        item("Status Bar", "نوار وضعیت", "Summarizes queue totals and the application’s current operational state.", "مجموع صف و وضعیت عملیاتی جاری برنامه را خلاصه می‌کند.", "workflow"),
        item("Toasts and Notifications", "پیام‌ها و اعلان‌ها", "Delivers success, information, recovery, and error feedback across workflows.", "بازخورد موفقیت، اطلاعات، بازیابی و خطا را در سراسر گردش کار ارائه می‌دهد.", "workflow"),
        item("Dialogs and Media Viewer", "دیالوگ‌ها و نمایشگر رسانه", "Provides confirmations, full media preview, save actions, prompt copy, and metadata inspection.", "تأییدها، پیش‌نمایش کامل رسانه، ذخیره، کپی Prompt و بررسی فراداده را فراهم می‌کند.", "screenshots")
      ]}
    ]
  },
  {
    id: "creation", icon: "sparkles", title: l("Creation workspace", "فضای تولید محتوا"),
    intro: l("The reusable prompt, preset, reference, image, and video paths that hand real work to COBRA’s shared queue.", "مسیرهای Prompt، Preset، مرجع، تصویر و ویدئو که کار واقعی را به صف مشترک کبرا تحویل می‌دهند."),
    groups: [
      { title: l("Generate", "تولید"), items: [
        item("Generate Image", "تولید تصویر", "Runs text-to-image and supported image-to-image requests with model-aware normalization.", "درخواست‌های متن‌به‌تصویر و تصویر‌به‌تصویر پشتیبانی‌شده را با تنظیمات متناسب با مدل اجرا می‌کند.", "capabilities"),
        item("Generate Video", "تولید ویدئو", "Runs text-to-video or supported image-to-video through validated Diffusers models and runtime setup.", "تولید متن‌به‌ویدئو یا تصویر‌به‌ویدئو را با مدل و Runtime اعتبارسنجی‌شده Diffusers اجرا می‌کند.", "capabilities", l("Experimental / readiness-gated", "آزمایشی / وابسته به آمادگی")),
        item("Prompt Editor", "ویرایشگر Prompt", "Captures the main prompt and optional negative prompt before normalization and queueing.", "Prompt اصلی و Negative Prompt اختیاری را پیش از نرمال‌سازی و ورود به صف دریافت می‌کند.", "capabilities"),
        item("Model and Mode Controls", "کنترل مدل و حالت", "Selects image/video model, text/reference mode, aspect ratio, and model-specific defaults.", "مدل تصویر/ویدئو، حالت متن/مرجع، نسبت تصویر و پیش‌فرض‌های مدل را انتخاب می‌کند.", "capabilities"),
        item("Reference Image", "تصویر مرجع", "Adds a selected or previous output as a reference only when the active model supports it.", "تنها در صورت پشتیبانی مدل، تصویر انتخابی یا خروجی قبلی را به‌عنوان مرجع اضافه می‌کند.", "capabilities"),
        item("Advanced Controls", "کنترل‌های پیشرفته", "Exposes resolution, steps, CFG, sampler, seed, batch, and other profile-dependent settings.", "رزولوشن، Steps، CFG، Sampler، Seed، Batch و تنظیمات وابسته به Profile را ارائه می‌دهد.", "capabilities"),
        item("Queue Panel and Recovery", "پنل صف و بازیابی", "Shows live jobs, recovered previous sessions, progress, references, and corrective actions beside creation controls.", "کارهای زنده، نشست بازیابی‌شده، پیشرفت، مرجعها و اقدامات اصلاحی را کنار کنترل‌های تولید نمایش می‌دهد.", "workflow")
      ]},
      { title: l("Reusable creative inputs", "ورودی‌های خلاقانه قابل‌استفاده مجدد"), items: [
        item("Built-in Presets", "Presetهای داخلی", "Includes Portrait, Product, Cinematic, Anime, Architecture, YouTube, Instagram, and Reels starting points.", "نقطه‌های شروع پرتره، محصول، سینمایی، انیمه، معماری، YouTube، Instagram و Reels را شامل می‌شود.", "capabilities"),
        item("Presets Page", "صفحه Presetها", "Combines built-in and custom presets with favorite, edit, export, share, apply, and delete actions.", "Presetهای داخلی و سفارشی را با علاقه‌مندی، ویرایش، خروجی JSON، اشتراک، اعمال و حذف مدیریت می‌کند.", "capabilities"),
        item("Prompt Library", "کتابخانه Prompt", "Stores categorized prompt templates and user prompts for editing, copying, reuse, and deletion.", "قالب‌های دسته‌بندی‌شده و Promptهای کاربر را برای ویرایش، کپی، استفاده مجدد و حذف نگه می‌دارد.", "capabilities"),
        item("Recent Prompts", "Promptهای اخیر", "Surfaces recently used prompt text for quick return to an active creative direction.", "Promptهای اخیراً استفاده‌شده را برای بازگشت سریع به مسیر خلاقانه نشان می‌دهد.", "capabilities"),
        item("Smart Model Recommendations", "پیشنهاد هوشمند مدل", "Uses prompt keywords and installed-model state to recommend suitable local image models.", "با استفاده از کلیدواژه‌های Prompt و وضعیت مدل‌های نصب‌شده، مدل مناسب محلی پیشنهاد می‌کند.", "capabilities")
      ]}
    ]
  },
  {
    id: "models", icon: "boxes", title: l("Models, downloads, and local chat", "مدل‌ها، دانلودها و گفت‌وگوی محلی"),
    intro: l("Discovery, installation, validation, runtime control, and conversational use of locally managed AI components.", "کشف، نصب، اعتبارسنجی، کنترل Runtime و استفاده گفت‌وگویی از اجزای هوش مصنوعی محلی."),
    groups: [
      { title: l("Model Hub", "Model Hub"), items: [
        item("Image Models", "مدل‌های تصویر", "Browses compatible image models, requirements, sizes, VRAM guidance, and readiness actions.", "مدل‌های سازگار تصویر، نیازمندی‌ها، حجم، راهنمای VRAM و اقدامات آمادگی را نمایش می‌دهد.", "capabilities"),
        item("Video Models", "مدل‌های ویدئو", "Lists managed Diffusers-compatible video snapshots and blocks use until validation succeeds.", "Snapshotهای ویدئویی سازگار با Diffusers را فهرست کرده و تا تکمیل اعتبارسنجی استفاده را مسدود می‌کند.", "capabilities"),
        item("Chat Models", "مدل‌های چت", "Lists GGUF models with exact local runtime and model-load readiness requirements.", "مدل‌های GGUF را همراه نیازمندی دقیق Runtime محلی و آزمون بارگذاری مدل فهرست می‌کند.", "capabilities"),
        item("Search, Goals, and Filters", "جست‌وجو، هدف و فیلتر", "Filters the canonical registry by category, creative goal, recommendation, download, and runtime state.", "رجیستری مرجع را براساس دسته، هدف خلاقانه، پیشنهاد، دانلود و وضعیت Runtime فیلتر می‌کند.", "capabilities"),
        item("Readiness and Repair", "آمادگی و تعمیر", "Validates declared files, formats, adapters, command plans, smoke checks, and actionable repair paths.", "فایل‌ها، فرمت، Adapter، برنامه فرمان، Smoke Check و مسیرهای تعمیر را اعتبارسنجی می‌کند.", "technology")
      ]},
      { title: l("Download Center", "مرکز دانلود"), items: [
        item("Active Downloads", "دانلودهای فعال", "Shows queued/downloading files with bytes, percentage, speed, ETA, remaining size, pause, and cancel.", "فایل‌های در صف یا در حال دانلود را همراه حجم، درصد، سرعت، زمان، توقف و لغو نمایش می‌دهد.", "capabilities"),
        item("Paused Downloads", "دانلودهای متوقف", "Keeps resumable records and exposes explicit resume actions.", "رکوردهای قابل‌ادامه را حفظ کرده و ادامه دانلود را ارائه می‌دهد.", "capabilities"),
        item("Completed Downloads", "دانلودهای کامل", "Provides folder access and verification feedback for finalized files.", "دسترسی به پوشه و بازخورد اعتبارسنجی فایل نهایی را فراهم می‌کند.", "capabilities"),
        item("Failed and Interrupted Downloads", "دانلودهای ناموفق و قطع‌شده", "Supports retry, restart recovery, safe partial files, and model/runtime-specific restart logic.", "تلاش دوباره، بازیابی پس از اجرا، فایل موقت امن و راه‌اندازی مجدد متناسب با مدل/Runtime را پشتیبانی می‌کند.", "capabilities")
      ]},
      { title: l("Local Chat", "گفت‌وگوی محلی"), items: [
        item("Chat Workspace", "فضای گفت‌وگو", "Runs local prompts through a selected GGUF model after readiness checks.", "پس از بررسی آمادگی، Promptها را با مدل GGUF انتخاب‌شده به‌صورت محلی اجرا می‌کند.", "capabilities", l("Experimental / readiness-gated", "آزمایشی / وابسته به آمادگی")),
        item("Conversation Library", "کتابخانه مکالمات", "Creates, searches, opens, renames, and deletes locally stored conversations.", "مکالمات ذخیره‌شده محلی را ایجاد، جست‌وجو، باز، تغییرنام و حذف می‌کند.", "capabilities"),
        item("Image Attachments", "پیوست تصویر", "Adds an image to a chat request where the selected model/runtime path supports it.", "در مسیرهای پشتیبانی‌شده مدل/Runtime تصویر را به درخواست چت اضافه می‌کند.", "capabilities"),
        item("Generation Controls", "کنترل‌های تولید متن", "Controls maximum tokens, temperature, top-p, and context size.", "Maximum Tokens، Temperature، Top-p و اندازه Context را کنترل می‌کند.", "capabilities"),
        item("CPU / CUDA Runtime", "Runtime پردازنده / CUDA", "Selects and installs local llama.cpp CPU or GPU/CUDA backends and reports their state.", "Backend محلی llama.cpp برای CPU یا GPU/CUDA را انتخاب، نصب و وضعیت آن را گزارش می‌کند.", "technology")
      ]}
    ]
  },
  {
    id: "work", icon: "folder", title: l("Work management and operations", "مدیریت کار و عملیات"),
    intro: l("The durable operational layer that connects jobs, outputs, projects, events, and technical evidence.", "لایه عملیاتی پایدار که Jobها، خروجی‌ها، پروژه‌ها، رویدادها و شواهد فنی را به هم متصل می‌کند."),
    groups: [
      { title: l("Jobs and projects", "Jobها و پروژه‌ها"), items: [
        item("Queue", "صف", "Displays waiting, preparing, generating, completed, failed, and cancelled jobs with persisted progress.", "Jobهای در انتظار، آماده‌سازی، تولید، کامل، ناموفق و لغوشده را با پیشرفت پایدار نمایش می‌دهد.", "capabilities"),
        item("Queue Controls", "کنترل‌های صف", "Pauses/resumes the queue, cancels all, retries failures, duplicates jobs, refreshes state, and links to health tools.", "صف را متوقف/ادامه می‌کند، همه را لغو، خطاها را تکرار، Jobها را تکثیر و وضعیت را تازه می‌کند.", "capabilities"),
        item("Projects", "پروژه‌ها", "Creates named, described, labeled, color-coded creative folders for clients, campaigns, or channels.", "پوشه‌های خلاقانه نام‌دار، توضیح‌دار، برچسب‌دار و رنگی برای مشتری، کمپین یا کانال می‌سازد.", "capabilities"),
        item("Project Board", "برد پروژه", "Groups image/video outputs and prompt snippets with preview, folder, copy, save, and removal actions.", "خروجی‌های تصویر/ویدئو و Promptها را با پیش‌نمایش، پوشه، کپی، ذخیره و حذف گروه‌بندی می‌کند.", "capabilities")
      ]},
      { title: l("Results and reuse", "نتیجه و استفاده مجدد"), items: [
        item("History and Outputs", "تاریخچه و خروجی‌ها", "Searches, filters, sorts, previews, saves, and reuses generated images and videos.", "تصاویر و ویدئوهای تولیدشده را جست‌وجو، فیلتر، مرتب، پیش‌نمایش، ذخیره و بازاستفاده می‌کند.", "capabilities"),
        item("Gallery View", "نمای گالری", "Presents visual cards with prompt, model, metadata, and contextual actions.", "کارت‌های تصویری را همراه Prompt، مدل، فراداده و اقدامات مرتبط نمایش می‌دهد.", "capabilities"),
        item("List View", "نمای فهرست", "Provides a denser row-based view for scanning larger output histories.", "نمای ردیفی فشرده‌تری برای مرور تاریخچه‌های بزرگ فراهم می‌کند.", "capabilities"),
        item("Favorites and Regeneration", "علاقه‌مندی و تولید دوباره", "Favorites outputs, copies prompts, compares before/after, adds to projects, and rebuilds from stored settings.", "خروجی را محبوب می‌کند، Prompt را کپی، قبل/بعد را مقایسه، به پروژه اضافه و با تنظیمات ذخیره‌شده دوباره تولید می‌کند.", "capabilities")
      ]},
      { title: l("Operational evidence", "شواهد عملیاتی"), items: [
        item("Activity Center", "مرکز فعالیت", "Chronological feed of generation, download, and queue events with timestamps and details.", "روند زمانی تولید، دانلود و رویدادهای صف را همراه زمان و جزئیات نشان می‌دهد.", "technology"),
        item("Logs", "Logها", "Filters readable info, success, warning, and error records; copies logs or opens the rotating log file.", "رکوردهای اطلاعات، موفقیت، هشدار و خطا را فیلتر کرده و امکان کپی یا بازکردن فایل Log را می‌دهد.", "technology"),
        item("Advanced Log Details", "جزئیات پیشرفته Log", "Expands technical details for individual records without overwhelming the default view.", "جزئیات فنی هر رکورد را بدون شلوغ‌کردن نمای اصلی باز می‌کند.", "technology")
      ]}
    ]
  },
  {
    id: "apps", icon: "apps", title: l("Specialized COBRA Apps", "ابزارهای تخصصی COBRA"),
    intro: l("Three focused workspaces built on COBRA’s shared models, files, readiness, projects, and queue architecture.", "سه فضای کاری تخصصی بر پایه مدل‌ها، فایل‌ها، آمادگی، پروژه‌ها و صف مشترک کبرا."),
    groups: [
      { title: l("App Hub", "مرکز ابزارها"), items: [
        item("App Search", "جست‌وجوی ابزارها", "Filters the three specialized applications by title and description.", "سه ابزار تخصصی را براساس عنوان و توضیح فیلتر می‌کند.", "apps"),
        item("App Health", "سلامت ابزارها", "Reports Ready, Needs Setup, Missing Model, Missing Runtime, or Repair Needed with a real action path.", "وضعیت آماده، نیازمند راه‌اندازی، مدل/Runtime مفقود یا نیازمند تعمیر را با مسیر اقدام واقعی نشان می‌دهد.", "apps")
      ]},
      { title: l("Digital Character Universe", "Digital Character Universe"), items: [
        item("Auto Mode", "Auto Mode", "Turns one prompt into a hero, Character DNA, controlled sets, consistency checks, and export planning.", "یک Prompt را به Hero، Character DNA، مجموعه‌های کنترل‌شده، بررسی ثبات و برنامه خروجی تبدیل می‌کند.", "apps"),
        item("Pro Mode", "Pro Mode", "Exposes section-by-section model, identity, lock, variation, quality, and generation controls.", "کنترل‌های مرحله‌ای مدل، هویت، قفل، تنوع، کیفیت و تولید را ارائه می‌دهد.", "apps"),
        item("Character", "کاراکتر", "Owns prompt, negative prompt, hero generation, Character DNA, seed, identity locks, and reference image.", "Prompt، Negative Prompt، تولید Hero، Character DNA، Seed، قفل هویت و تصویر مرجع را مدیریت می‌کند.", "apps"),
        item("Angles", "نماها", "Plans and generates the multi-angle character sheet, including the default ten-view set.", "شیت چندنمای کاراکتر، از جمله مجموعه پیش‌فرض ده‌نما را برنامه‌ریزی و تولید می‌کند.", "apps"),
        item("Outfit", "لباس", "Generates Casual, Formal, Luxury, Streetwear, Cinematic, and custom wardrobe variants with breakdown controls.", "لباس‌های Casual، Formal، Luxury، Streetwear، Cinematic و سفارشی را با کنترل جزئیات تولید می‌کند.", "apps"),
        item("Location", "موقعیت", "Creates controlled studio, interior, street, rooftop, nature, futuristic, cinematic, and custom environments.", "محیط‌های استودیو، داخلی، خیابان، پشت‌بام، طبیعت، آینده‌نگر، سینمایی و سفارشی را کنترل‌شده می‌سازد.", "apps"),
        item("Pose", "ژست", "Varies pose, gaze, hands, body orientation, and expression while retaining the planned character.", "ژست، نگاه، دست‌ها، جهت بدن و حالت چهره را با حفظ کاراکتر برنامه‌ریزی‌شده تغییر می‌دهد.", "apps"),
        item("Consistency", "ثبات", "Scores face, body, outfit, style, and location, marks weak frames, and offers typed retry strategies.", "چهره، بدن، لباس، سبک و موقعیت را امتیازدهی کرده و برای فریم ضعیف پیشنهاد Retry می‌دهد.", "apps", l("Heuristic fallback", "Fallback اکتشافی")),
        item("Models", "مدل‌ها", "Reuses existing Generic / Model X image models and reports companion-asset availability.", "مدل‌های موجود Generic / Model X را بازاستفاده و وضعیت دارایی همراه را گزارش می‌کند.", "apps"),
        item("Export", "خروجی", "Creates the universe data, DNA card, character bible, prompt pack, and seed/model metadata.", "داده Universe، کارت DNA، Character Bible، Prompt Pack و فراداده Seed/مدل را می‌سازد.", "apps"),
        item("Saved Universes", "Universeهای ذخیره‌شده", "Loads reusable local character profiles and their generated frame state.", "پروفایل‌های محلی قابل‌استفاده مجدد و وضعیت فریم‌های تولیدشده را بارگذاری می‌کند.", "apps")
      ]},
      { title: l("Product Box", "Product Box"), items: [
        item("Reference Image", "تصویر مرجع", "Imports PNG, JPEG, or WebP product imagery and starts automatic subject extraction.", "تصویر محصول PNG، JPEG یا WebP را وارد کرده و استخراج خودکار سوژه را شروع می‌کند.", "apps"),
        item("Extract Subject", "استخراج سوژه", "Creates, cleans, and stores the product mask and transparent cutout with safe alpha cropping.", "Mask و Cutout شفاف محصول را همراه پاک‌سازی و Alpha Crop امن ایجاد و ذخیره می‌کند.", "apps"),
        item("Mask Refinement", "اصلاح Mask", "Offers feather, expand/contract, spill removal, and edge decontamination for advanced correction.", "Feather، گسترش/انقباض، حذف Spill و پاک‌سازی لبه را برای اصلاح پیشرفته ارائه می‌دهد.", "apps"),
        item("Background", "پس‌زمینه", "Uses a generated scene, uploaded background, or existing COBRA history image.", "از صحنه تولیدشده، پس‌زمینه آپلودشده یا تصویر موجود در تاریخچه کبرا استفاده می‌کند.", "apps"),
        item("Combine", "ترکیب", "Generates only the empty environment, then composites and checks the protected original product.", "فقط محیط خالی را تولید و سپس محصول اصلی محافظت‌شده را ترکیب و بررسی می‌کند.", "apps"),
        item("Product Position", "موقعیت محصول", "Controls horizontal/vertical position, scale, rotation, and transform reset.", "موقعیت افقی/عمودی، مقیاس، چرخش و بازنشانی Transform را کنترل می‌کند.", "apps"),
        item("Non-destructive Integration", "یکپارچه‌سازی غیرمخرب", "Controls contact shadow, softness, offsets, reflection, and background blur.", "سایه تماس، نرمی، Offsetها، بازتاب و Blur پس‌زمینه را کنترل می‌کند.", "apps"),
        item("Output Setup", "تنظیم خروجی", "Selects aspect ratio, standard/custom resolution, base model, and readiness action.", "نسبت تصویر، رزولوشن استاندارد/سفارشی، مدل پایه و اقدام آمادگی را انتخاب می‌کند.", "apps"),
        item("Final Output and Assets", "خروجی نهایی و دارایی‌ها", "Exports PNG/JPEG/WebP composites, cutout PNG, mask PNG, project file, and output folder.", "ترکیب PNG/JPEG/WebP، Cutout PNG، Mask PNG، فایل پروژه و پوشه خروجی را ارائه می‌دهد.", "apps"),
        item("Generative Story and Projects", "تاریخچه تولید و پروژه‌ها", "Keeps versioned results, recent projects, reuse settings, regeneration, deletion, and next-angle continuation.", "نتایج نسخه‌دار، پروژه‌های اخیر، استفاده مجدد از تنظیمات، تولید دوباره، حذف و ادامه نمای بعدی را نگه می‌دارد.", "apps")
      ]},
      { title: l("Beauty Studio — workspace", "Beauty Studio — فضای کاری"), items: [
        item("Project Starters", "شروع پروژه", "Offers New Portrait Edit, Wedding Batch, Modeling Session, ID/Passport, Old Photo Restore, and Existing Project entry points.", "ورودی‌های پرتره جدید، Wedding Batch، Modeling Session، عکس شناسایی، بازسازی عکس قدیمی و پروژه موجود را ارائه می‌دهد.", "apps"),
        item("Recent Projects, Photos, Presets, and Recipes", "پروژه، عکس، Preset و Recipe اخیر", "Returns quickly to saved Beauty work and reusable multi-step plans.", "بازگشت سریع به کارهای ذخیره‌شده Beauty و برنامه‌های چندمرحله‌ای قابل‌استفاده مجدد.", "apps"),
        item("Immutable Original and Versions", "Original تغییرناپذیر و نسخه‌ها", "Protects the import and creates managed PNG versions for every applied edit.", "فایل ورودی را محافظت کرده و برای هر ویرایش نسخه PNG مدیریت‌شده می‌سازد.", "apps"),
        item("Version Timeline", "Timeline نسخه‌ها", "Selects, compares, duplicates, branches, favorites, renames, exports, and deletes derived versions.", "نسخه‌ها را انتخاب، مقایسه، تکثیر، شاخه‌بندی، محبوب، تغییرنام، خروجی و حذف می‌کند.", "apps"),
        item("Quick Edit Plan", "برنامه Quick Edit", "Runs enabled preset steps through readiness checks and the same non-destructive worker queue.", "مراحل فعال Preset را با بررسی آمادگی و صف Worker غیرمخرب اجرا می‌کند.", "apps"),
        item("Tool Settings and Readiness", "تنظیم و آمادگی ابزار", "Builds controls from schemas and exposes install, repair, retry, and validation actions when needed.", "کنترل‌ها را از Schema می‌سازد و در صورت نیاز نصب، تعمیر، Retry و اعتبارسنجی را ارائه می‌دهد.", "apps")
      ]},
      { title: l("Beauty Studio — registered tools", "Beauty Studio — ابزارهای ثبت‌شده"), items: [
        item("Auto enhance", "بهبود خودکار", "Balances global tone, contrast, shadows, highlights, and detail on the full-resolution working image.", "تون، کنتراست، سایه، روشنایی و جزئیات تصویر تمام‌رزولوشن را متعادل می‌کند.", "apps", l("Working", "فعال")),
        item("Natural skin retouch", "رتوش طبیعی پوست", "Plans localized skin cleanup using face, skin, and identity-safe masks.", "پاک‌سازی موضعی پوست را با Mask چهره، پوست و حفاظت هویت برنامه‌ریزی می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Remove blemishes", "حذف لک", "Targets localized blemishes inside a validated skin region.", "لک‌های موضعی را در محدوده معتبر پوست هدف می‌گیرد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Orange-peel skin", "اصلاح بافت پوست", "Uses a frequency-aware skin workflow for orange-peel texture correction.", "برای اصلاح بافت Orange-peel از روند Frequency-aware پوست استفاده می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Skin tone even", "یکدست‌سازی رنگ پوست", "Balances mapped face, neck, and hand skin regions.", "ناحیه‌های پوست چهره، گردن و دست را متعادل می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Smart dodge and burn", "Dodge & Burn هوشمند", "Adjusts local light and shadow while protecting facial structure.", "نور و سایه موضعی را با حفظ ساختار چهره تنظیم می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Face symmetry", "تقارن چهره", "Uses facial landmarks and identity validation for controlled symmetry correction.", "با Landmark و اعتبارسنجی هویت، تقارن چهره را کنترل‌شده اصلاح می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Face sculpt", "فرم‌دهی چهره", "Provides local warp/sculpt planning with identity protection.", "فرم‌دهی موضعی چهره را همراه حفاظت هویت برنامه‌ریزی می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Reduce eye bags", "کاهش تیرگی زیر چشم", "Targets eye and under-eye masks for localized correction.", "Mask چشم و زیر چشم را برای اصلاح موضعی هدف می‌گیرد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Eye enhancement", "بهبود چشم", "Enhances segmented eyes while protecting gaze and identity.", "چشم‌های Segmented را با حفظ نگاه و هویت بهبود می‌دهد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Remove red eye", "حذف قرمزی چشم", "Detects and corrects red-eye regions instead of applying a global effect.", "ناحیه Red-eye را تشخیص و بدون افکت سراسری اصلاح می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Teeth whitening", "سفیدکردن دندان", "Limits whitening to a validated teeth mask.", "سفیدکردن را به Mask معتبر دندان محدود می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Lipstick", "رژ لب", "Applies editable lip color within a segmented lip region.", "رنگ لب قابل‌ویرایش را در محدوده Segmented لب اعمال می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Makeup layers", "لایه‌های آرایش", "Plans editable foundation, concealer, contour, blush, eye, and lip makeup layers.", "لایه‌های قابل‌ویرایش کرم‌پودر، کانسیلر، کانتور، رژگونه، چشم و لب را برنامه‌ریزی می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Hair cleanup", "پاک‌سازی مو", "Uses hair segmentation for local cleanup with edge protection.", "با Segmentation مو و حفاظت لبه، پاک‌سازی موضعی انجام می‌دهد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Hair color", "رنگ مو", "Changes color inside an edge-protected hair mask.", "رنگ را در Mask محافظت‌شده مو تغییر می‌دهد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Fix hands", "اصلاح دست", "Routes detected hand regions to a local restoration plan.", "ناحیه دست تشخیص‌داده‌شده را به روند بازسازی محلی می‌فرستد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Body balance", "تعادل بدن", "Uses pose and human parsing to protect anatomy during local adjustment.", "با Pose و Human Parsing از آناتومی هنگام اصلاح موضعی محافظت می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Clothing cleanup", "پاک‌سازی لباس", "Targets clothing masks for localized cleanup.", "Mask لباس را برای پاک‌سازی موضعی هدف می‌گیرد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Change clothes", "تغییر لباس", "Combines clothing masks, inpainting, reference conditioning, and identity validation.", "Mask لباس، Inpainting، Reference Conditioning و اعتبارسنجی هویت را ترکیب می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Inpaint", "Inpaint", "Uses a saved user mask and local masked-generation runtime.", "از Mask ذخیره‌شده کاربر و Runtime تولید موضعی استفاده می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Outpaint", "Outpaint", "Extends canvas edges through the local outpainting path.", "لبه‌های Canvas را از مسیر Outpainting محلی گسترش می‌دهد.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Relight", "نورپردازی مجدد", "Uses subject segmentation and depth estimates for controlled portrait lighting.", "برای نورپردازی کنترل‌شده پرتره از Segmentation سوژه و Depth استفاده می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Color correction", "اصلاح رنگ", "Adjusts exposure, contrast, saturation, and temperature on the full-resolution image.", "Exposure، Contrast، Saturation و Temperature تصویر تمام‌رزولوشن را تنظیم می‌کند.", "apps", l("Working", "فعال")),
        item("Apply LUT", "اعمال LUT", "Defines the .cube import and color-managed LUT path without pretending it is ready.", "مسیر Import فایل .cube و LUT مدیریت‌شده رنگ را بدون ادعای آمادگی تعریف می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Remove background", "حذف پس‌زمینه", "Plans subject segmentation with protected hair edges.", "Segmentation سوژه را با حفاظت لبه مو برنامه‌ریزی می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Replace background", "جایگزینی پس‌زمینه", "Combines subject masks with local background generation/compositing.", "Mask سوژه را با تولید یا ترکیب پس‌زمینه محلی یکپارچه می‌کند.", "apps", l("Setup required", "نیازمند راه‌اندازی")),
        item("Restore photo", "بازسازی عکس", "Performs local contrast recovery, denoise, and detail restoration.", "بازیابی کنتراست، کاهش نویز و بازگردانی جزئیات را محلی انجام می‌دهد.", "apps", l("Working", "فعال")),
        item("Upscale", "افزایش رزولوشن", "Runs deterministic local 2× or 4× resizing with detail sharpening.", "تغییر اندازه محلی قطعی ۲× یا ۴× را همراه Sharpening اجرا می‌کند.", "apps", l("Working", "فعال")),
        item("Built-in Beauty Recipes", "Recipeهای داخلی Beauty", "Includes Natural Portrait, Clean Studio, Wedding Soft, Modeling Editorial, Corporate Headshot, ID/Passport, Old Photo Restoration, and One-click Finish.", "Natural Portrait، Clean Studio، Wedding Soft، Modeling Editorial، Corporate Headshot، ID/Passport، Old Photo Restoration و One-click Finish را شامل می‌شود.", "apps")
      ]}
    ]
  },
  {
    id: "support", icon: "settings", title: l("Settings, diagnostics, and guides", "تنظیمات، عیب‌یابی و راهنماها"),
    intro: l("Configuration, maintenance, technical confidence, packaging, licensing, and release-readiness resources.", "منابع پیکربندی، نگهداری، اطمینان فنی، بسته‌بندی، مجوز و آمادگی انتشار."),
    groups: [
      { title: l("Settings page", "صفحه تنظیمات"), items: [
        item("Appearance", "ظاهر", "Switches between COBRA’s dark and light themes.", "میان تم تیره و روشن کبرا جابه‌جا می‌شود.", "technology"),
        item("Local AI Folder", "پوشه Local AI", "Chooses and opens app-managed engine, model, download, temporary, and output locations.", "مسیر مدیریت‌شده Engine، مدل، دانلود، فایل موقت و خروجی را انتخاب و باز می‌کند.", "technology"),
        item("Local Engine", "Engine محلی", "Selects Auto/CPU/GPU mode and installs, tests, repairs, imports, or diagnoses stable-diffusion.cpp.", "حالت Auto/CPU/GPU را انتخاب و stable-diffusion.cpp را نصب، آزمایش، تعمیر، Import یا عیب‌یابی می‌کند.", "technology"),
        item("Runtime Checks", "بررسی Runtime", "Reports required binaries, DLLs, exit codes, diagnoses, and component checks.", "Binaryها، DLLها، Exit Code، تشخیص و بررسی اجزای لازم را گزارش می‌کند.", "technology"),
        item("System Health and Cleanup", "سلامت و پاک‌سازی سیستم", "Finds broken downloads, stuck jobs, temporary files, and model issues; then offers safe maintenance.", "دانلود خراب، Job گیرکرده، فایل موقت و مشکل مدل را یافته و نگهداری امن ارائه می‌دهد.", "technology"),
        item("Support Bundle and Diagnostics", "بسته پشتیبانی و عیب‌یابی", "Exports sanitized diagnostics, safe settings, hardware state, database health, registry evidence, and logs.", "عیب‌یابی پاک‌سازی‌شده، تنظیمات امن، سخت‌افزار، سلامت دیتابیس، رجیستری و Log را خروجی می‌دهد.", "technology"),
        item("About, Theme, and Development", "درباره، تم و توسعه", "Displays product identity, version context, visual theme, ownership, and engineering information.", "هویت محصول، نسخه، تم بصری، مالکیت و اطلاعات مهندسی را نمایش می‌دهد.", "technology")
      ]},
      { title: l("Project guides and references", "راهنماها و منابع پروژه"), items: [
        item("README", "README", "Summarizes supported generation paths, development, packaging, icon cache, and installer branding.", "مسیرهای تولید، توسعه، بسته‌بندی، Cache آیکون و برندینگ Installer را خلاصه می‌کند.", "technology"),
        item("Technical Audit", "ممیزی فنی", "Documents runtime architecture, registry, persistence, downloads, readiness, queue recovery, security, and test coverage.", "معماری Runtime، رجیستری، ماندگاری، دانلود، آمادگی، بازیابی صف، امنیت و تست را مستند می‌کند.", "technology"),
        item("Release Readiness", "آمادگی انتشار", "Separates stable beta paths, experimental capabilities, known limits, validation steps, and blockers.", "مسیر پایدار بتا، قابلیت آزمایشی، محدودیت، مراحل اعتبارسنجی و Blockerها را جدا می‌کند.", "technology"),
        item("Release Stabilization Audit", "ممیزی پایدارسازی انتشار", "Records the baseline, feature matrix, root causes, and minimal stabilization plan.", "Baseline، ماتریس قابلیت، علت‌های اصلی و برنامه حداقلی پایدارسازی را ثبت می‌کند.", "technology"),
        item("Model License Presentation", "نمایش مجوز مدل", "Defines how model licenses and provider terms are shown without inventing permissions.", "نحوه نمایش مجوز مدل و شرایط Provider را بدون ساختن مجوز تعریف می‌کند.", "technology"),
        item("Windows Code Signing", "امضای کد ویندوز", "Documents the signing path and the current absence of a committed production certificate.", "مسیر Code Signing و نبود Certificate تولیدی در پروژه را مستند می‌کند.", "technology"),
        item("Beauty Studio Architecture", "معماری Beauty Studio", "Explains schema-driven tools, worker execution, versions, queue guarantees, and model strategy.", "ابزارهای Schema-driven، Worker، نسخه‌ها، تضمین صف و راهبرد مدل را توضیح می‌دهد.", "apps"),
        item("Beauty Studio Models and Assets", "مدل‌ها و دارایی‌های Beauty Studio", "Documents the bundled CPU runtime, manifest verification, and why unverified weights are not marked installed.", "Runtime همراه CPU، اعتبارسنجی Manifest و دلیل نصب‌نشده‌بودن Weightهای تأییدنشده را مستند می‌کند.", "apps"),
        item("DCU Workflow", "گردش کار DCU", "Documents Auto/Pro modes, retries, default sets, and the professional export pack.", "حالت Auto/Pro، Retry، مجموعه‌های پیش‌فرض و بسته خروجی حرفه‌ای را مستند می‌کند.", "apps"),
        item("DCU Architecture", "معماری DCU", "Maps typed modules, main-process execution, shared queue use, storage, and heuristic limitations.", "ماژول‌های Type-safe، اجرای Main Process، صف مشترک، ذخیره‌سازی و محدودیت روش اکتشافی را ترسیم می‌کند.", "apps"),
        item("DCU Assets", "دارایی‌های DCU", "Defines the asset manifest, bundled files, optional future identity asset, and installer packaging.", "Manifest دارایی، فایل‌های همراه، دارایی اختیاری هویت آینده و بسته‌بندی Installer را تعریف می‌کند.", "apps"),
        item("DCU Model Reuse", "بازاستفاده مدل در DCU", "Documents base-model resolution and the rule that DCU does not create a duplicate downloader or model path.", "حل مدل پایه و قانون عدم ساخت Downloader یا مسیر مدل تکراری در DCU را مستند می‌کند.", "apps"),
        item("Build Info and Changelog", "اطلاعات Build و تغییرات", "Records product version, installer artifact metadata, and beta-stabilization changes.", "نسخه محصول، فراداده Installer و تغییرات پایدارسازی بتا را ثبت می‌کند.", "technology")
      ]}
    ]
  }
];

export function localize(value: Localized, language: Language) { return value[language]; }

export function directoryStats() {
  const groups = projectDirectory.reduce((total, category) => total + category.groups.length, 0);
  const sections = projectDirectory.reduce((total, category) => total + category.groups.reduce((sum, group) => sum + group.items.length, 0), 0);
  return { categories: projectDirectory.length, groups, sections };
}

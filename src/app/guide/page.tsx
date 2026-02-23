"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardClass =
  "bg-white rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]";

/* ── Table of Contents Data ─────────────────────────────────────────── */
const chapters = [
  { id: "what-is-openclaw", num: 1, title: "What Is OpenClaw" },
  { id: "setting-up", num: 2, title: "Setting Up Your OpenClaw" },
  { id: "skills-system", num: 3, title: "Skills: How Your Agent Gets Smarter" },
  { id: "how-to-prompt", num: 4, title: "How to Prompt: Think Before You Execute" },
  { id: "planning", num: 5, title: "Planning: Most Work Is Done Before Building" },
  { id: "optimization", num: 6, title: "Optimization: Make It 10x Smarter" },
  { id: "proactive-ai", num: 7, title: "Proactive AI: Your 24/7 Employee" },
  { id: "sub-agents", num: 8, title: "Sub-Agents: Build Your AI Team" },
  { id: "use-cases", num: 9, title: "Real-World Use Cases" },
  { id: "security", num: 10, title: "Security: Lock It Down" },
];

/* ── CTA Button Component ───────────────────────────────────────────── */
function CTAButton({ text }: { text: string }) {
  return (
    <div className="my-12 text-center">
      <a
        href="https://cal.com/openclawconsulting/intro"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#42838E] text-white rounded-full text-base font-semibold font-[family-name:var(--font-display)] hover:bg-[#5a9da8] hover:shadow-[0_4px_16px_rgba(58,127,138,0.3)] transition-all duration-200"
      >
        {text}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}

/* ── Code Block Component ───────────────────────────────────────────── */
function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border-light)]">
      {title && (
        <div className="bg-[#1a2332] px-4 py-2 text-xs text-[#8899aa] font-[family-name:var(--font-mono)]">
          {title}
        </div>
      )}
      <pre className="bg-[#0d1520] p-4 overflow-x-auto text-sm leading-relaxed text-[#c8d6e5] font-[family-name:var(--font-mono)]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

/* ── Sticky TOC Component ───────────────────────────────────────────── */
function TableOfContents({ activeId }: { activeId: string }) {
  return (
    <nav className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Chapters
      </p>
      {chapters.map((ch) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors duration-200 ${
            activeId === ch.id
              ? "border-[#42838E] text-[#42838E] font-medium"
              : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-light)]"
          }`}
        >
          {ch.num}. {ch.title}
        </a>
      ))}
    </nav>
  );
}

/* ── Main Guide Page ────────────────────────────────────────────────── */
export default function OpenClawBookGuide() {
  const [activeId, setActiveId] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <header className="pt-32 sm:pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                The Complete Guide
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">10 Chapters &middot; 21,000+ Words</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            >
              The OpenClaw Book: The Complete Guide to Mastering Your AI Agent
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
            >
              Everything you need to know about building, running, and scaling your OpenClaw agent. From first setup to multi-agent teams, proactive automation, and bulletproof security. This is the definitive resource.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* ── Mobile TOC Toggle ──────────────────────────────────────────── */}
      <div className="lg:hidden px-6 mb-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className={`${cardClass} w-full px-5 py-3 text-left text-sm font-medium flex items-center justify-between`}
          >
            <span>Table of Contents</span>
            <svg
              className={`w-4 h-4 transition-transform ${tocOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {tocOpen && (
            <div className={`${cardClass} mt-2 p-5`}>
              <TableOfContents activeId={activeId} />
            </div>
          )}
        </div>
      </div>

      {/* ── Content + Sidebar ──────────────────────────────────────────── */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto flex gap-12">
          {/* Sidebar TOC (desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <TableOfContents activeId={activeId} />
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0 max-w-3xl">
            <div className="space-y-16 text-[var(--color-text-secondary)] leading-relaxed">

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 1: WHAT IS OPENCLAW
                   ═══════════════════════════════════════════════════════════ */}
              <section id="what-is-openclaw">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 1: What Is OpenClaw
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  1.1 The Architecture
                </h3>
                <p className="mb-4">
                  OpenClaw is not a chatbot. It is not a plugin for something else. It is a full AI agent that runs on your own server, connected to your own tools, and controlled entirely by you. To understand what makes it different, you need to understand how it works under the hood.
                </p>
                <p className="mb-4">
                  The core loop is simple. You send a message, whether that is through Telegram, Discord, or any other connected channel. That message hits the Gateway, which is the always-running daemon process on your server. The Gateway takes your message, loads all of your agent&apos;s context files (more on those in a moment), and sends everything to the language model. The model reads your message, reads the context, and decides what to do.
                </p>
                <p className="mb-4">
                  Sometimes the model responds with text. Sometimes it decides it needs to take an action first. It might need to read a file, run a shell command, search the web, check your calendar, or open a browser. These are tool calls. The Gateway executes the tool call, sends the result back to the model, and the model decides what to do next. This loop continues until the model has everything it needs to give you a final answer.
                </p>
                <p className="mb-4">
                  Here is the critical part: the Gateway runs 24/7 on YOUR server. Not on someone else&apos;s cloud. Not on a platform you are renting access to. Your server, your data, your rules. The AI model itself runs remotely (through Anthropic&apos;s API), but every piece of context, every file, every tool, every integration lives on hardware you control.
                </p>
                <p className="mb-4">
                  Tools are what give your agent hands. Without tools, an AI can only talk. With tools, it can act. OpenClaw&apos;s tool set includes file reading and writing, shell command execution, browser automation, message sending across platforms, scheduling via cron jobs, and more. Every tool call is logged, so you always know exactly what your agent did and why.
                </p>
                <p className="mb-4">
                  Think of it like this: the language model is the brain. The tools are the hands. The context files are the memory. And the Gateway is the nervous system connecting everything together. That is OpenClaw.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  1.2 The Brain Files
                </h3>
                <p className="mb-4">
                  Every OpenClaw agent has a set of core files that define who it is, what it knows, and how it operates. These files are loaded into the context window every single time the agent processes a message. They are the agent&apos;s personality, memory, and operating instructions all rolled into a handful of markdown files.
                </p>
                <p className="mb-4">
                  <strong>SOUL.md</strong> defines your agent&apos;s personality, tone, and boundaries. This is where you tell your agent how to communicate. Should it be formal or casual? Sarcastic or straight? Should it use emoji? Should it push back when you are procrastinating? The SOUL file shapes how your agent sounds and behaves in every interaction.
                </p>
                <p className="mb-4">
                  <strong>USER.md</strong> is all about you. Your name, your business, your goals, your preferences, your schedule, your communication style. The more your agent knows about you, the better it can anticipate your needs and tailor its responses. Think of USER.md as the briefing document you would give a new executive assistant on their first day.
                </p>
                <p className="mb-4">
                  <strong>MEMORY.md</strong> is your agent&apos;s long-term memory. Unlike conversation history that gets wiped between sessions, MEMORY.md persists. It stores key facts, decisions, lessons learned, and important context that the agent should always have access to. This is how your agent remembers things across days, weeks, and months.
                </p>
                <p className="mb-4">
                  <strong>AGENTS.md</strong> contains the operating instructions. Rules of engagement, workflow preferences, how to handle different types of requests, when to ask permission versus when to act independently. This is the employee handbook for your AI.
                </p>
                <p className="mb-4">
                  <strong>TOOLS.md</strong> holds local configuration details: account names, IP addresses, API endpoints, device nicknames. This is NOT a how-to manual. It is a reference sheet of specific values your agent needs to access your services. Keep it lean.
                </p>
                <p className="mb-4">
                  <strong>HEARTBEAT.md</strong> is the periodic checklist. When your agent wakes up on its regular heartbeat cycle, it reads this file and follows the instructions inside. More on heartbeats in Chapter 7.
                </p>
                <p className="mb-4">
                  Here is the powerful part: change the files, change the AI. Want a different personality? Edit SOUL.md. Want your agent to know about a new project? Update MEMORY.md. Want different operating rules? Rewrite AGENTS.md. Every change takes effect immediately, on the very next message. No retraining, no waiting, no complex configuration. Just edit a text file.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  1.3 Why This Is Different
                </h3>
                <p className="mb-4">
                  There are hundreds of AI tools and chatbots available today. Most of them are services you rent access to. You type into their interface, they respond, and when you close the tab, everything resets. You have no control over the underlying system, no ability to customize the behavior deeply, and no ownership of the infrastructure.
                </p>
                <p className="mb-4">
                  OpenClaw is fundamentally different. It is infrastructure you own. Your agent runs on your server, stores its memory in your files, and connects to your accounts. It does not disappear when a startup shuts down or changes its pricing. It does not share your data with anyone. It does not have artificial limits imposed by a platform trying to manage costs.
                </p>
                <p className="mb-4">
                  The second major difference is infinite memory via files. Most chatbots have a context window and that is it. Once the conversation gets too long, older messages fall off. Your agent forgets. With OpenClaw, everything important gets written to files. MEMORY.md, daily logs, project notes, build logs. The agent can always read those files back when it needs context. There is no limit to how much your agent can remember, because files have no context window.
                </p>
                <p className="mb-4">
                  The third difference is accumulating capability. When your agent figures out how to do something well, it can save that knowledge as a skill. The next time a similar task comes up, it loads the skill and executes at the same level immediately. Over time, your agent gets genuinely smarter and more capable. Every task it completes, every piece of feedback you give, every skill it builds adds to a growing library of capabilities that compound over months and years.
                </p>
                <p className="mb-4">
                  This is not a chatbot you rent. It is a digital employee you train, and it gets better every single day.
                </p>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 2: SETTING UP YOUR OPENCLAW
                   ═══════════════════════════════════════════════════════════ */}
              <section id="setting-up">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 2: Setting Up Your OpenClaw
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  2.1 Choose Your Hardware
                </h3>
                <p className="mb-4">
                  Your OpenClaw agent needs a computer to live on. It needs to be running 24/7, connected to the internet, and powerful enough to handle the Gateway process and any tools your agent uses. You have two main options.
                </p>
                <p className="mb-4">
                  <strong>Option 1: A VPS (Virtual Private Server).</strong> This is the recommended option for most people. A VPS is a virtual computer in a data center that you rent by the month. The recommended setup is a Hetzner CX43, which gives you 8 vCPUs, 16GB of RAM, and costs roughly $15 per month. It is always on, has a fast internet connection, and is located in a professional data center with redundant power and networking. You do not need to worry about your home internet going down or your machine going to sleep.
                </p>
                <p className="mb-4">
                  <strong>Option 2: A Mac Mini.</strong> If you prefer to run everything locally with no monthly costs, a Mac Mini works well. It is small, quiet, energy-efficient, and powerful enough for OpenClaw. The trade-off is that you are responsible for keeping it running, keeping your home internet stable, and handling a different security profile (more on Mac-specific security in Chapter 10). This option makes sense if you want to keep everything on your local network and do not mind the extra responsibility.
                </p>
                <p className="mb-4">
                  For most people starting out, go with the VPS. Fifteen dollars a month is nothing compared to the value you will get, and it eliminates an entire category of problems related to uptime, networking, and maintenance.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  2.2 The &ldquo;AI Installs AI&rdquo; Setup
                </h3>
                <p className="mb-4">
                  Here is the part that surprises most people. You do not need to know anything about servers, Linux, SSH, Docker, or DevOps to set up OpenClaw. The setup process is literally having one AI install another.
                </p>
                <p className="mb-4">
                  First, install Claude Code on your local machine. This is Anthropic&apos;s command-line tool for working with Claude directly:
                </p>
                <CodeBlock title="Terminal">
{`npm install -g @anthropic-ai/claude-code`}
                </CodeBlock>
                <p className="mb-4">
                  Next, create a Telegram bot through BotFather. This is the interface you will use to talk to your agent. Open Telegram, search for @BotFather, and follow the prompts to create a new bot. Save the bot token it gives you.
                </p>
                <p className="mb-4">
                  Now comes the magic. Open Claude Code on your local machine and give it one prompt with everything it needs: your server&apos;s IP address, your SSH key, your Anthropic API key, and your Telegram bot token. Claude Code will SSH into your server, install all dependencies, configure the Gateway, set up the Telegram connection, and bring your bot online. The entire process takes a few minutes, and you do not type a single server command yourself.
                </p>
                <p className="mb-4">
                  This is what we call &ldquo;AI installs AI.&rdquo; You are using one AI agent (Claude Code) to install and configure another AI agent (your OpenClaw bot). Zero DevOps knowledge required. If you can copy and paste a prompt, you can set up OpenClaw.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  2.3 Essential First Connections
                </h3>
                <p className="mb-4">
                  Once your agent is running, the next step is connecting it to the tools and services you actually use. Here are the essential connections to set up first.
                </p>
                <p className="mb-4">
                  <strong>Groq Whisper for Voice Messages.</strong> This is the number one quality-of-life improvement. Groq offers free voice transcription through their Whisper implementation. Once connected, you can send voice messages to your agent through Telegram and it will transcribe and understand them instantly. The setup takes about 30 seconds: grab a free API key from Groq, add it to your config, and you are done.
                </p>
                <p className="mb-4">
                  <strong>SearXNG for Web Search.</strong> Your agent needs to be able to search the web. SearXNG is a privacy-respecting meta search engine that your agent can query. Set it up as a service on your server and your agent gains the ability to research anything, any time.
                </p>
                <p className="mb-4">
                  <strong>Google Workspace.</strong> If you use Gmail, Google Calendar, or Google Drive, this connection is essential. Setting up a Google Cloud project with the right API scopes lets your agent read and send emails, check and create calendar events, and manage files in Drive. This is where your agent goes from being a chatbot to being a real assistant. Have your agent help you set up the cloud project together. It can walk you through every step.
                </p>
                <p className="mb-4">
                  <strong>GitHub and Vercel.</strong> If you want your agent to build and deploy websites, tools, or dashboards, connect it to GitHub (for code repositories) and Vercel (for instant deployments). Your agent can create a site, push the code, and hand you a live URL in minutes.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  2.4 Subscription Tiers
                </h3>
                <p className="mb-4">
                  OpenClaw uses Anthropic&apos;s API under the hood, and the Claude subscription tiers determine how much you can use your agent each day.
                </p>
                <p className="mb-4">
                  The <strong>$20 per month tier</strong> is essentially a trial. It gives you enough to test things out and see how the system works, but you will hit rate limits quickly if you try to use your agent for real work throughout the day. Good for exploration, not for production.
                </p>
                <p className="mb-4">
                  The <strong>$100 per month tier</strong> is the sweet spot for most people. It provides enough capacity for regular daily use: asking questions, running tasks, building things, and having your agent handle proactive work. If you are a solo operator or small team, this tier covers your needs.
                </p>
                <p className="mb-4">
                  The <strong>$200 per month tier</strong> is for heavy daily use. If you are running multiple sub-agents, doing extensive overnight builds, or using your agent as a primary tool for your business operations, you will want this tier. The extra headroom prevents rate limits from interrupting complex multi-step workflows.
                </p>
                <p className="mb-4">
                  Upgrades are prorated, so you can start at $100 and bump up if you find yourself hitting limits. Start where it makes sense and adjust from there.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  2.5 Onboarding Your Agent
                </h3>
                <p className="mb-4">
                  Your agent is running, your connections are set up, and you are ready to go. But right now, your agent does not know anything about you. It has a blank USER.md, an empty MEMORY.md, and no context about your life, business, or goals. Onboarding is how you fix that.
                </p>
                <p className="mb-4">
                  <strong>The Deep-Dive Interview.</strong> Start by asking your agent to interview you. Tell it to ask you detailed questions about your business, your daily workflow, your goals for the next 90 days, your communication preferences, and anything else that would help it serve you better. The agent will ask targeted questions, and as you answer, it will build out your USER.md and MEMORY.md with all of the context it needs. This single conversation makes every future interaction dramatically better.
                </p>
                <p className="mb-4">
                  <strong>ChatGPT History Import.</strong> If you have been using ChatGPT, you have months or years of conversation history that contains valuable context about you. Export your ChatGPT data (Settings, then Data Controls, then Export Data), and feed it to your OpenClaw agent. It will extract the important patterns: what you care about, how you think, what projects you have worked on, what questions you ask repeatedly. All of that becomes permanent context in your agent&apos;s memory.
                </p>
                <p className="mb-4">
                  <strong>Brainstorm Use Cases.</strong> Once your agent knows who you are, ask it to brainstorm how it can help you. With knowledge of your business, your tools, your goals, and your daily workflow, it will suggest use cases you probably have not thought of. Many of the most powerful OpenClaw setups started with the agent itself suggesting the idea.
                </p>
                <p className="mb-4">
                  The onboarding workflow follows a pattern you will use for everything: Explain the context, let the agent flesh out the best approach, agree on what to do, then execute. Explain, flesh out, agree, execute. This pattern produces dramatically better results than just typing commands.
                </p>
              </section>

              <CTAButton text="Book a Free Consultation" />

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 3: SKILLS SYSTEM
                   ═══════════════════════════════════════════════════════════ */}
              <section id="skills-system">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 3: Skills - How Your Agent Gets Smarter
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  3.1 What Skills Are
                </h3>
                <p className="mb-4">
                  Skills are reusable instruction sets that your agent loads only when it needs them. They live in a <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">skills/</code> folder, and each skill has a <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">SKILL.md</code> file that describes what it does and how to use it.
                </p>
                <p className="mb-4">
                  The key insight behind skills is the difference between always-loaded and on-demand instructions. Your brain files (SOUL.md, USER.md, AGENTS.md, and so on) load into context on every single message. If you put detailed instructions for every possible task in those files, they become bloated and your agent gets slower, dumber, and more expensive. Skills solve this by keeping specialized instructions out of the always-loaded context and only pulling them in when relevant.
                </p>
                <p className="mb-4">
                  For example, say your agent knows how to write YouTube scripts in a very specific way: your tone, your format, your hook structure, your CTA placement. Instead of stuffing all of those instructions into SOUL.md (where they load every time you ask about the weather), you create a YouTube Script skill. When you say &ldquo;write me a video script,&rdquo; the agent loads the skill. When you ask about something else, the skill stays on disk, out of the way.
                </p>
                <p className="mb-4">
                  This is how you scale your agent&apos;s capabilities without scaling its context window. A well-organized agent might have 30 or 40 skills but only load two or three per conversation.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  3.2 Three Ways to Create Skills
                </h3>
                <p className="mb-4">
                  There are three methods for creating skills, and each works best in different situations.
                </p>
                <p className="mb-4">
                  <strong>Method 1: From Scratch.</strong> Describe what you want the skill to do, and your agent builds it. This works well when you have a clear vision of the end result. You might say: &ldquo;Create a skill for writing cold outreach emails. The tone should be direct but not pushy, under 100 words, with a specific value hint based on the recipient&apos;s business.&rdquo; The agent will create the SKILL.md file with all the instructions, and the skill is ready to use.
                </p>
                <CodeBlock title="Prompt: Create a Skill from Scratch">
{`Create a skill for writing cold outreach emails.
Requirements:
- Direct but not pushy tone
- Under 100 words
- Include a specific value hint based on the recipient's business
- End with a soft CTA (question, not demand)
- Save as skills/cold-outreach/SKILL.md`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Method 2: From a Completed Task.</strong> This is the easiest and most common method. After your agent does something well, you simply say: &ldquo;Turn what you just did into a skill.&rdquo; The agent will analyze its own output, extract the patterns and instructions that made it work, and save them as a reusable skill. Next time a similar task comes up, it loads the skill and performs at that same level immediately.
                </p>
                <CodeBlock title="Prompt: Create a Skill from Completed Work">
{`That blog post was perfect. Turn what you just did into a skill so
you can write them like that every time. Include the structure,
tone, formatting rules, and CTA placement.`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Method 3: Explain and Refine.</strong> This is for processes that live in your head but are hard to describe all at once. You explain the general idea, the agent creates a first draft of the skill, you test it, you give feedback, and it refines. After two or three rounds, the skill captures your process accurately. This method is especially good for complex workflows that have a lot of nuance.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  3.3 The Feedback Loop
                </h3>
                <p className="mb-4">
                  Skills are not static. They get better over time through feedback, and this is where the real compounding magic happens.
                </p>
                <p className="mb-4">
                  The cycle works like this: you use a skill, you evaluate the output, you give specific feedback, the agent updates the skill, and the next time you use it, the output is better. Every round of feedback permanently improves the skill. This is not a temporary adjustment for one conversation. The skill file itself changes, so the improvement persists forever.
                </p>
                <p className="mb-4">
                  The key to effective feedback is specificity. Bad feedback: &ldquo;The email was too long.&rdquo; That is vague, and the agent might interpret it differently next time. Good feedback: &ldquo;Under 100 words. The second paragraph felt salesy. The value hint should be one sentence maximum.&rdquo; That is specific, measurable, and leaves no room for interpretation.
                </p>
                <p className="mb-4">
                  There is one important habit to build: always say &ldquo;update the skill with this feedback.&rdquo; The agent will sometimes take your feedback and apply it to the current output without updating the underlying skill. If you do not explicitly tell it to update the skill, your feedback improves today&apos;s output but tomorrow&apos;s output will have the same problems. Make skill updates explicit.
                </p>
                <CodeBlock title="Prompt: Update a Skill with Feedback">
{`The outreach email was good but needs adjustments. Update the
cold-outreach skill with this feedback:
- Keep subject lines under 6 words
- Never use the word "synergy" or "leverage"
- First sentence must reference something specific about their company
- Total email should be 60-80 words, not 100`}
                </CodeBlock>
                <p className="mb-4">
                  Over weeks and months, a skill that started as a rough first draft becomes a finely tuned machine. Quality compounds. Every edit makes it permanently smarter. This is the single biggest advantage of an agent you own versus a chatbot you rent.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  3.4 Notable Community Skills
                </h3>
                <p className="mb-4">
                  The OpenClaw community has built a library of skills you can install. Some of the most useful ones include:
                </p>
                <p className="mb-4">
                  <strong>QMD (Quantized Memory Documents).</strong> This skill reduces token usage by up to 95% using BM25 search and GGUF embeddings. Instead of loading entire large files into context, QMD lets your agent search through them intelligently and only pull in the relevant sections. Essential for anyone working with large codebases or document collections.
                </p>
                <p className="mb-4">
                  <strong>SuperMemory.</strong> A persistent, searchable memory system that goes beyond what MEMORY.md offers out of the box. It lets your agent store and retrieve information across a much larger knowledge base with proper search capabilities.
                </p>
                <p className="mb-4">
                  <strong>Agent Browser.</strong> Gives your agent the ability to automate web browsing tasks: filling forms, scraping data, navigating complex web applications, and interacting with sites that do not have APIs.
                </p>
                <p className="mb-4">
                  <strong>Frontend Design.</strong> A skill specifically tuned for building professional-looking websites. It understands modern design patterns, responsive layouts, and current CSS frameworks, producing much better visual results than a generic prompt would.
                </p>
                <p className="mb-4">
                  <strong>Prompt Injection Defense.</strong> If your agent participates in group chats, this skill protects it from prompt injection attacks where other users try to manipulate your agent into doing something it should not.
                </p>
                <p className="mb-4">
                  <strong>A critical warning about community skills:</strong> Cisco&apos;s security team found malware in popular ClawdHub skills. They identified 37 malicious skills that looked legitimate but contained hidden instructions to exfiltrate data or execute harmful commands. Always read the SKILL.md file yourself before installing any community skill. Never trust a skill blindly just because it has downloads or stars. More on this in Chapter 10.
                </p>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 4: HOW TO PROMPT
                   ═══════════════════════════════════════════════════════════ */}
              <section id="how-to-prompt">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 4: How to Prompt - Think Before You Execute
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  4.1 The Golden Rule: Flesh Out Before Executing
                </h3>
                <p className="mb-4">
                  The single biggest mistake people make with AI agents is typing &ldquo;build me X&rdquo; and expecting great results. It does not work that way. Not because the AI is incapable, but because you have not given it enough to work with. The output quality is directly proportional to the input quality, but the trick is being strategic about it, not just verbose.
                </p>
                <p className="mb-4">
                  The correct workflow is: explain your idea, let the agent ask clarifying questions, align on the approach, then execute. This is not about writing a 500-word prompt. It is about having a conversation where you and your agent get on the same page before any work begins.
                </p>
                <p className="mb-4">
                  When you explain an idea, your agent will naturally identify ambiguities and gaps. It might ask: &ldquo;Who is the target audience?&rdquo; or &ldquo;Should this be a single-page site or multi-page?&rdquo; or &ldquo;What should happen when someone clicks the CTA?&rdquo; Each question you answer eliminates a wrong turn the agent would have taken on its own.
                </p>
                <p className="mb-4">
                  For simple tasks, this conversation might be one or two back-and-forth messages. For complex projects, it might be ten. The investment always pays off. A five-minute planning conversation saves an hour of revisions.
                </p>
                <CodeBlock title="Prompt: The Right Way to Start a Project">
{`I want to build a landing page for my consulting business. Before
you start building anything, let's flesh out the approach:

- What information do you need from me?
- What questions do you have about the design and content?
- What's your recommended approach?

Let's align on the plan first, then execute.`}
                </CodeBlock>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  4.2 Meta Prompting
                </h3>
                <p className="mb-4">
                  Meta prompting is one of the most underused techniques in the OpenClaw toolkit. The concept is simple: instead of telling your agent what to do, you ask your agent to tell YOU what it should be doing. Your agent has full visibility into its own configuration, your context, your tools, and your goals. It has ideas you would not think of. All you have to do is ask.
                </p>
                <p className="mb-4">
                  <strong>The Self-Audit.</strong> Ask your agent: &ldquo;What are you bad at? What context are you missing? What tasks do I give you that you consistently struggle with?&rdquo; The agent will honestly assess its own gaps and suggest specific improvements. Maybe it needs a skill for a task you keep asking about. Maybe its SOUL.md has conflicting instructions. Maybe it is missing context about a project. The agent sees things you do not.
                </p>
                <CodeBlock title="Prompt: Business Boost Audit">
{`Look at everything you know about my business, my setup, my tools,
and my goals. What are the top 10 proactive things you could be
doing right now that would directly impact my revenue? Be specific
and actionable. Include things I haven't asked you for.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Automation Opportunities">
{`Audit everything I do manually or repeatedly. Look at my calendar,
my workflows, my daily patterns. What should be automated? What
could you handle that I'm currently doing myself? Prioritize by
time saved and impact.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Self-Improvement">
{`What skills should you have that you don't? What are you bad at
right now? What context are you missing? What changes to your
brain files would make you significantly more useful? Be honest
and specific.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Revenue Roadmap">
{`Design a 90-day plan to increase my monthly revenue by 30%.
Use everything you know about my business, my strengths, my
current client base, and the tools I have available. Be specific
about what actions to take each week and what you can handle
autonomously.`}
                </CodeBlock>
                <p className="mb-4">
                  Meta prompting works because your agent has a broader view of your entire setup than you do in any given moment. You are thinking about the task in front of you. Your agent is thinking about all of your tasks, your tools, your patterns, and your goals simultaneously. Let it use that perspective.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  4.3 The Feedback Prompt
                </h3>
                <p className="mb-4">
                  Giving feedback is a skill in itself, and most people do it wrong. They say things like &ldquo;that was too long&rdquo; or &ldquo;make it better&rdquo; or &ldquo;that&apos;s not what I wanted.&rdquo; This kind of vague feedback produces vague improvements. Your agent tries to interpret what you mean, and sometimes it gets it right and sometimes it does not.
                </p>
                <p className="mb-4">
                  Effective feedback has three qualities: it is specific, it is measurable, and it references the underlying skill.
                </p>
                <p className="mb-4">
                  <strong>Bad feedback:</strong> &ldquo;The email was too long.&rdquo; This tells the agent the email was too long this time, but does not set a permanent rule.
                </p>
                <p className="mb-4">
                  <strong>Good feedback:</strong> &ldquo;Under 100 words. The second paragraph felt salesy. The value hint should be one sentence maximum. Update the skill with this feedback.&rdquo; This tells the agent exactly what to change, how to measure it, and where to save the improvement.
                </p>
                <p className="mb-4">
                  That last part, &ldquo;update the skill with this feedback,&rdquo; is the most important sentence you can add. Without it, your feedback only affects the current conversation. With it, your feedback permanently improves every future output from that skill.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  4.4 Copy-Paste Prompt Toolkit
                </h3>
                <p className="mb-4">
                  Here is a collection of high-value prompts you can use immediately. Each one has been refined through real use and produces consistently good results.
                </p>
                <CodeBlock title="Prompt: Full Context Audit">
{`Audit all of your context files (SOUL.md, USER.md, AGENTS.md,
TOOLS.md, MEMORY.md, HEARTBEAT.md). For each file:
1. What's the current size?
2. What content is outdated or no longer relevant?
3. What instructions should be moved to skills?
4. What's missing that would make you more effective?
Give me a specific action plan to optimize each file.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Skill Creation from Task">
{`Turn what you just did into a reusable skill. Include:
- When to use this skill
- Step-by-step process you followed
- Quality standards and constraints
- Example inputs and expected outputs
Save it to the skills/ folder with a clear name.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Use Case Generator">
{`Based on everything you know about my business, generate 20
specific use cases where you could save me time or make me money.
For each one, include:
- The task
- How much time it would save per week
- Whether you can do it autonomously or need my input
- What you would need to get started
Rank by impact.`}
                </CodeBlock>
                <CodeBlock title="Prompt: Content Machine Design">
{`Design a content system that runs mostly on autopilot. I want
to publish [frequency] across [platforms]. Design the pipeline:
idea generation, drafting, review process, scheduling, and
performance tracking. What can you automate completely? What
needs my approval? Build the system.`}
                </CodeBlock>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 5: PLANNING
                   ═══════════════════════════════════════════════════════════ */}
              <section id="planning">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 5: Planning - Most Work Is Done Before Building
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  5.1 Why Planning Matters
                </h3>
                <p className="mb-4">
                  Most failed AI projects do not fail because the AI was not smart enough. They fail because the project started building too fast. The human gave a vague prompt, the agent started executing immediately, and twenty minutes later the output was wrong in a way that would have been obvious if anyone had thought about it first.
                </p>
                <p className="mb-4">
                  Any project that involves more than three steps or will take more than two hours needs a written plan before any code is written or any content is produced. The plan is not overhead. The plan IS the work. Once you have a good plan, execution is almost mechanical.
                </p>
                <p className="mb-4">
                  Think about it from the agent&apos;s perspective. When you say &ldquo;build me a website,&rdquo; the agent has to make hundreds of micro-decisions: what framework, what structure, what pages, what content, what design, what CTA, what hosting. Each decision is a fork in the road, and without a plan, the agent picks the fork that seems most likely based on its training data. Sometimes that matches what you wanted. Often it does not.
                </p>
                <p className="mb-4">
                  A plan resolves all of those forks up front, while changes are free. Changing the plan costs nothing. Changing the implementation costs time, tokens, and frustration.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  5.2 The Planning Workflow
                </h3>
                <p className="mb-4">
                  The planning workflow follows the same pattern as everything else in this OpenClaw book: explain, flesh out, agree, execute. But for planning specifically, there is an additional step at the end: save the plan to a file.
                </p>
                <p className="mb-4">
                  Start by explaining the project at a high level. What problem are you solving? Who is it for? What does success look like? You do not need to have all the answers. The point is to give your agent enough context to start asking smart questions.
                </p>
                <p className="mb-4">
                  The agent will then flesh out the approach. It will ask clarifying questions, propose a solution structure, identify potential risks, and suggest a sequence of steps. You discuss, push back where needed, add constraints, and eventually agree on the approach.
                </p>
                <p className="mb-4">
                  Then you create the plan document. This document covers: the problem statement, the scope (what is in and what is out), the solution approach, known risks, success criteria, and a step-by-step task list. Every task should be specific enough that someone (or some agent) could pick it up and execute it without additional context.
                </p>
                <CodeBlock title="Prompt: Create a Project Plan">
{`I want to build [PROJECT DESCRIPTION]. Before we build anything:

1. Ask me any clarifying questions
2. Propose the best approach
3. Identify risks and edge cases
4. Create a detailed plan document

Save the plan to memory/build-[project-name].md so we can
reference it throughout the build. Include problem statement,
scope, solution approach, risks, success criteria, and a
step-by-step task list.`}
                </CodeBlock>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  5.3 Build Logs - Never Lose Context
                </h3>
                <p className="mb-4">
                  Build logs are one of the most important operational patterns in OpenClaw. Before building anything complex, create a build log file at <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">memory/build-[project-name].md</code>.
                </p>
                <p className="mb-4">
                  The build log serves as a living document that tracks every step of the project. What was done, what worked, what broke, what is next. It is updated after every significant action, not just at the end.
                </p>
                <p className="mb-4">
                  Why does this matter? Because AI sessions can crash. They can time out. You might close Telegram and come back three hours later. Without a build log, the next session starts from scratch with no idea what happened. With a build log, the agent reads it, sees exactly where things left off, and picks up seamlessly.
                </p>
                <p className="mb-4">
                  Build logs also make sub-agent handoffs possible. When you spawn a sub-agent to work on a specific part of a project, it reads the build log to understand the context and updates the log when it is done. The next sub-agent reads the updated log and continues. The build log becomes the single source of truth, not any individual conversation history.
                </p>
                <p className="mb-4">
                  The rule is simple: text beats brain. If it is not written down, it did not happen. Your memory file is more reliable than your memory, and your agent&apos;s build log is more reliable than its conversation history. Write everything down.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  5.4 Managing Sub-Agent Projects
                </h3>
                <p className="mb-4">
                  When a project is complex enough to involve sub-agents (more on those in Chapter 8), the planning layer becomes even more critical.
                </p>
                <p className="mb-4">
                  The golden rule for sub-agent projects: one feature per spawn. Never ask a sub-agent to &ldquo;build the whole thing.&rdquo; Break the project into discrete, well-defined tasks and assign each one to a separate sub-agent spawn. Each task should be completable in a single session and should have clear success criteria.
                </p>
                <p className="mb-4">
                  Every sub-agent task should include the instruction: &ldquo;Read the build log first. Update it after every step.&rdquo; This ensures continuity across spawns and prevents duplicate work.
                </p>
                <p className="mb-4">
                  Your main agent acts as the project manager. It checks progress, reviews output, intervenes if a sub-agent gets stuck for more than ten minutes, and decides when to spawn the next task. The build log is the communication layer between all of them.
                </p>
                <p className="mb-4">
                  This pattern scales to surprisingly large projects. We have used it to build complete websites, SEO campaigns, content libraries, and multi-agent systems, all coordinated through build logs and careful task decomposition. The planning is what makes it work.
                </p>
              </section>

              <CTAButton text="Get Expert Help Setting Up" />

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 6: OPTIMIZATION
                   ═══════════════════════════════════════════════════════════ */}
              <section id="optimization">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 6: Optimization - Make It 10x Smarter
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  6.1 The Token Problem
                </h3>
                <p className="mb-4">
                  Every time you send a message to your agent, ALL of its brain files load into the context window. SOUL.md, USER.md, AGENTS.md, TOOLS.md, MEMORY.md, HEARTBEAT.md. Every single one. On every single message. This is not a bug. It is how OpenClaw works. The agent needs its full context to be useful.
                </p>
                <p className="mb-4">
                  The problem is that context has a cost. Every token in the context window costs money (API usage), takes processing time (slower responses), and competes with the actual task for the model&apos;s attention (lower quality output on complex tasks). A bloated context is literally making your agent slower, dumber, and more expensive.
                </p>
                <p className="mb-4">
                  Most new OpenClaw setups have 50 to 70 percent unnecessary content in their context files. Instructions that should be skills. Outdated notes in MEMORY.md. Verbose explanations in AGENTS.md that could be three lines. Entire how-to guides pasted into TOOLS.md. All of it loading on every single message, burning tokens and diluting the signal.
                </p>
                <p className="mb-4">
                  Optimization is not about being stingy. It is about being focused. A lean context means your agent processes faster, follows instructions more accurately, and costs less per interaction. The goal is not fewer words for the sake of fewer words. The goal is the right words, and nothing else.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  6.2 The Audit Prompt
                </h3>
                <p className="mb-4">
                  The fastest way to optimize your agent is a single prompt that makes it audit its own context files. Your agent can see everything that loads into its context, and it can identify what should be cut, moved, compressed, or deleted.
                </p>
                <CodeBlock title="Prompt: The Audit">
{`Audit all of your context files. For each file (SOUL.md, USER.md,
AGENTS.md, TOOLS.md, MEMORY.md, HEARTBEAT.md):

1. Report the file size (lines and approximate tokens)
2. Identify content that's outdated or no longer relevant
3. Identify instructions that should be moved to skills
4. Identify verbose sections that can be compressed
5. Identify duplicate information across files

Then execute the changes:
- Move instruction sets to skills/
- Delete outdated content
- Compress verbose sections
- Remove duplicates

Report the before and after file sizes.`}
                </CodeBlock>
                <p className="mb-4">
                  Real results from running this audit: one setup went from 73KB of context files down to 31KB. That is a 57% reduction. The agent did not lose any capabilities. It actually became more accurate because the remaining instructions were cleaner and less contradictory.
                </p>
                <p className="mb-4">
                  Run this audit monthly. Files bloat back over time as you add notes, try new things, and accumulate instructions. A monthly audit keeps your context lean and your agent sharp. Think of it like clearing your desk. The work gets better when the surface is clean.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  6.3 Context File Best Practices
                </h3>
                <p className="mb-4">
                  Here are specific guidelines for each context file that will keep them lean and effective.
                </p>
                <p className="mb-4">
                  <strong>TOOLS.md: Addresses and Account Names Only.</strong> This file should contain API endpoints, IP addresses, usernames, and configuration values. It should NOT contain instructions on how to use those tools. Instructions belong in skills. TOOLS.md is a phone book, not a manual.
                </p>
                <p className="mb-4">
                  <strong>MEMORY.md: Keep it Compact.</strong> The most common bloat problem is MEMORY.md turning into a diary. Every conversation, every note, every thought gets appended until the file is thousands of lines long. Fix this by archiving old notes to separate dated files (<code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">memory/2024-01-15.md</code>) and keeping MEMORY.md as a curated index of the most important, currently relevant information. Build an index structure so the agent knows where to find archived details when needed.
                </p>
                <p className="mb-4">
                  <strong>HEARTBEAT.md: Short Checklist, Not a Manifesto.</strong> Heartbeat files should be a concise list of things to check, not detailed explanations of how to check them. If a heartbeat task is complex, the instructions should live in a skill that the heartbeat references. Also, remove expired one-shot tasks. If you added &ldquo;remind me about the meeting on Thursday&rdquo; and Thursday has passed, delete it.
                </p>
                <p className="mb-4">
                  <strong>The 100-Line Rule.</strong> Any brain file over 100 lines is almost certainly bloated. That is not a hard limit, but it is a useful heuristic. If a file crosses 100 lines, audit it. Something in there probably does not need to be there.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  6.4 Smart Model Routing
                </h3>
                <p className="mb-4">
                  Not every task needs the most powerful model. OpenClaw supports routing different types of tasks to different models, and using this strategically can dramatically reduce costs without sacrificing quality.
                </p>
                <p className="mb-4">
                  Use cheaper, faster models like Haiku for simple tasks: quick questions, file lookups, status checks, formatting, and routine operations. These tasks do not require deep reasoning and the cheaper model handles them perfectly well at a fraction of the cost.
                </p>
                <p className="mb-4">
                  Reserve powerful models like Opus for complex tasks: multi-step reasoning, code architecture decisions, security-sensitive operations, and anything requiring nuanced judgment. Opus also has significantly better resistance to prompt injection attacks, which matters if your agent interacts with external inputs or group chats.
                </p>
                <p className="mb-4">
                  With smart routing, it is possible to run a fully functional agent on a budget of around $10 per month for API costs. That is on top of whatever subscription tier you are on. The key is not using the most expensive model for every &ldquo;what time is my meeting&rdquo; question.
                </p>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 7: PROACTIVE AI
                   ═══════════════════════════════════════════════════════════ */}
              <section id="proactive-ai">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 7: Proactive AI - Your 24/7 Employee
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  7.1 The Proactive Mindset
                </h3>
                <p className="mb-4">
                  There is a fundamental difference between reactive AI and proactive AI. Reactive AI waits for you to ask a question, then answers it. That is a chatbot. Proactive AI monitors your world, spots opportunities, flags issues, builds things, and messages YOU first when something matters.
                </p>
                <p className="mb-4">
                  The difference between having a chatbot and having an employee is proactivity. An employee does not wait for you to ask &ldquo;do I have any meetings today?&rdquo; They check your calendar, see the meeting, prepare the agenda, and brief you before you even think to ask. That is what proactive AI does.
                </p>
                <p className="mb-4">
                  Most OpenClaw users start in reactive mode. They message their agent when they need something, get the answer, and move on. That is fine for the first week while you are learning the system. But if that is still how you are using it after a month, you are leaving 80% of the value on the table. The real power of OpenClaw is in the work it does without being asked.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.2 Heartbeats
                </h3>
                <p className="mb-4">
                  Heartbeats are periodic check-ins where your agent wakes up, reads its HEARTBEAT.md file, and follows the checklist inside. By default, heartbeats fire every 30 minutes, though you can adjust the frequency.
                </p>
                <p className="mb-4">
                  When a heartbeat fires, the agent reads HEARTBEAT.md and goes through its tasks. These might include checking for new emails, reviewing upcoming calendar events, monitoring a specific metric, or checking on a running process. If something needs your attention, the agent messages you. If nothing is happening, it stays quiet and does not bother you.
                </p>
                <p className="mb-4">
                  The beauty of heartbeats is their simplicity. HEARTBEAT.md is just a text file with a checklist. You can edit it any time to add, remove, or modify tasks. The cost is pennies per day since most heartbeat cycles are quick context checks that resolve in a few seconds.
                </p>
                <p className="mb-4">
                  Heartbeat tasks fall into three frequency tiers:
                </p>
                <p className="mb-4">
                  <strong>Every heartbeat (critical):</strong> Things that need constant monitoring. New booking alerts, urgent email detection, running process health checks. These run on every 30-minute cycle.
                </p>
                <p className="mb-4">
                  <strong>Once or twice daily (important):</strong> Morning briefings, content schedule checks, weekly goal progress. These run on specific heartbeat cycles, not every one.
                </p>
                <p className="mb-4">
                  <strong>Weekly (strategic):</strong> Performance reviews, competitive analysis updates, long-term goal tracking. These run once a week on a designated heartbeat.
                </p>
                <CodeBlock title="Prompt: Set Up Heartbeats">
{`Set up my HEARTBEAT.md with the following structure:

Every heartbeat (30 min):
- Check for new booking/calendar events in next 2 hours
- Check for urgent emails (flagged or from VIP contacts)

Morning (first heartbeat after 8 AM):
- Daily briefing: calendar, leads, email highlights, content due

Weekly (Monday morning):
- Weekly performance summary
- Pipeline status
- Content published vs planned

Keep the file concise. Instructions for HOW to do each check
should be in skills, not in the heartbeat file itself.`}
                </CodeBlock>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.3 Cron Jobs
                </h3>
                <p className="mb-4">
                  While heartbeats are periodic and awareness-based, cron jobs are scheduled and action-based. A cron job fires at an exact time and executes a specific task. No checking a list, no decision-making about what to do. The task is defined, the time is set, and it runs.
                </p>
                <p className="mb-4">
                  The decision framework for heartbeat versus cron is straightforward. Use heartbeats when multiple checks can batch together, when you need conversational context from recent messages, and when the timing can drift slightly. Use cron jobs when exact timing matters, when the task needs isolation from the main session, when you want a different model for the task, and for one-shot reminders.
                </p>
                <p className="mb-4">
                  Key cron jobs to consider setting up:
                </p>
                <p className="mb-4">
                  <strong>Morning report</strong> at 8:00 AM: Generate and send a daily briefing with calendar, leads, email highlights, content status, and overnight activity.
                </p>
                <p className="mb-4">
                  <strong>Content reminders</strong> at strategic times: &ldquo;Have you written your LinkedIn post today?&rdquo; or &ldquo;Your blog draft is due tomorrow.&rdquo;
                </p>
                <p className="mb-4">
                  <strong>Overnight builder</strong> at 11:00 PM: Pick a small project from the ideas backlog and build it while you sleep. You wake up to a finished deliverable.
                </p>
                <p className="mb-4">
                  <strong>Weekly analytics</strong> every Monday at 9:00 AM: Pull GA4 data, Search Console rankings, social metrics, and compile a performance report.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.4 Morning Reports
                </h3>
                <p className="mb-4">
                  The morning report is one of the highest-impact proactive features you can set up. It is a daily briefing that lands in your Telegram at a set time every morning, giving you everything you need to know to start the day.
                </p>
                <p className="mb-4">
                  A good morning report covers:
                </p>
                <p className="mb-4">
                  <strong>Calendar:</strong> What meetings do you have today? Any prep needed? Conflicts or back-to-backs?
                </p>
                <p className="mb-4">
                  <strong>Leads:</strong> Any new bookings overnight? Stale leads that need follow-up? Pipeline status.
                </p>
                <p className="mb-4">
                  <strong>Email highlights:</strong> Important unread messages. Not every email, just the ones that matter.
                </p>
                <p className="mb-4">
                  <strong>Content status:</strong> What is due today? What went live yesterday? Any engagement spikes?
                </p>
                <p className="mb-4">
                  <strong>Quick wins:</strong> Small tasks that could be knocked out in 5 minutes.
                </p>
                <p className="mb-4">
                  <strong>Overnight activity:</strong> If your agent worked on anything overnight, here is the summary.
                </p>
                <p className="mb-4">
                  The key to a good morning report is brevity. You should be able to read it in 60 seconds and know exactly what your day looks like. If your morning report is a wall of text, it is too long. Compress it, prioritize ruthlessly, and put detail behind links or follow-up prompts.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.5 Accountability Mode
                </h3>
                <p className="mb-4">
                  This is one of the more creative uses of proactive AI. Accountability mode turns your agent into a coach that holds you to your commitments with escalating pressure.
                </p>
                <p className="mb-4">
                  Set up cron jobs at four points throughout the day. The first check-in is gentle: &ldquo;Hey, just a reminder that you planned to write your LinkedIn post today. Have you started?&rdquo; The second is direct: &ldquo;It is 2 PM and the post is not done yet. What is blocking you?&rdquo; The third is firm: &ldquo;It is 5 PM. You committed to daily posting. Is that a reason or an excuse?&rdquo; The fourth is the final call: &ldquo;End of day. The post did not go out. Streak broken. Reset to day 0.&rdquo;
                </p>
                <p className="mb-4">
                  The agent tracks your streak in a file. How many consecutive days have you hit your target? The streak count becomes a motivator on its own. Nobody wants to see &ldquo;Streak: 0&rdquo; after building up 30 days.
                </p>
                <p className="mb-4">
                  This pattern works for any recurring commitment: posting content, prospecting calls, workout logs, learning goals. The AI does not judge you. It just shows up, on time, every time, and holds you to what you said you would do.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.6 Overnight Autonomous Work
                </h3>
                <p className="mb-4">
                  One of the most powerful aspects of a 24/7 AI agent is its ability to work while you sleep. There are two primary patterns for overnight work.
                </p>
                <p className="mb-4">
                  <strong>The Nightly Builder.</strong> Set up a cron job at 11 PM (or whenever you go to bed). The agent picks a small project from a running ideas list you maintain, builds it overnight, and has a finished deliverable waiting for you in the morning. This might be a landing page, a blog post draft, a research report, an SEO audit, or a tool. The key is keeping each nightly project small enough to finish in one session. Over 30 days, that is 30 small projects completed with zero daytime hours spent.
                </p>
                <CodeBlock title="Prompt: Nightly Builder Setup">
{`Set up a nightly builder cron job at 11 PM. Here's how it works:

1. Check memory/ideas-backlog.md for the next uncompleted idea
2. Pick the top priority item
3. Build it completely
4. Save the output and update the backlog
5. Write a summary of what was built

I'll maintain the ideas backlog. You build one per night.
Keep each project scoped to something completable in a single session.`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Overnight Research Runs.</strong> Queue up multiple research topics, spawn sub-agents to handle each one (staggered 20 to 30 minutes apart to avoid rate limits), and have finished research reports waiting in the morning. Each sub-agent works independently on its topic, writes a structured report, and saves it to a designated folder. Your morning report summarizes what was completed.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  7.7 Lead and Opportunity Monitoring
                </h3>
                <p className="mb-4">
                  If you run any kind of business with a sales pipeline, lead monitoring is where proactive AI becomes directly profitable.
                </p>
                <p className="mb-4">
                  <strong>Instant booking alerts with auto-research.</strong> When someone books a call on your calendar, your agent immediately detects the booking, researches the person (LinkedIn, company website, recent news), and sends you a pre-call brief. By the time you sit down for the call, you already know who they are, what their company does, and what they probably need.
                </p>
                <p className="mb-4">
                  <strong>CRM tracking with stale lead flagging.</strong> Your agent monitors your lead pipeline and flags anyone who has gone cold. It might say: &ldquo;Three leads have not been contacted in over a week. Sarah from Acme Corp showed high interest on the last call. Want me to draft a follow-up?&rdquo;
                </p>
                <p className="mb-4">
                  <strong>Opportunity scouting.</strong> Set up your agent to monitor Reddit threads, Twitter conversations, competitor websites, and job boards for signals that indicate someone needs what you sell. A post like &ldquo;Looking for an AI consultant&rdquo; or &ldquo;Anyone used OpenClaw for real estate?&rdquo; gets flagged immediately with context and a suggested response.
                </p>
                <p className="mb-4">
                  <strong>Weekly pipeline report.</strong> Every Monday, get a summary of your entire pipeline: new leads, active conversations, stale contacts, estimated deal values, and suggested next actions for each.
                </p>
              </section>

              <CTAButton text="Need Help? Book a Call" />

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 8: SUB-AGENTS
                   ═══════════════════════════════════════════════════════════ */}
              <section id="sub-agents">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 8: Sub-Agents - Build Your AI Team
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  8.1 The Concept
                </h3>
                <p className="mb-4">
                  Think of your main OpenClaw agent as a CEO, and sub-agents as specialist employees. You talk to the CEO. The CEO delegates work to specialists. You do not need to manage the specialists directly, though you can if you want to.
                </p>
                <p className="mb-4">
                  Each sub-agent has its own workspace, its own SOUL.md (personality), and its own AGENTS.md (job instructions). A writing sub-agent has a SOUL tuned for your voice and content style. An SEO sub-agent has instructions focused on technical audits and keyword research. A coding sub-agent has parameters for your preferred frameworks and deployment targets. Each one is a specialist that does one thing really well.
                </p>
                <p className="mb-4">
                  The main agent creates sub-agents, assigns them tasks, monitors their progress, and integrates their output. This is not a theoretical architecture. It is a practical pattern that runs on a single $15-per-month VPS. The agents share the same server but operate in isolated contexts, each with just enough information to do their job.
                </p>
                <p className="mb-4">
                  The benefits are significant. Information isolation means a sub-agent only sees what it needs, which is both a security benefit and a performance benefit. Leaner context means cheaper per call and better output. Focused agents produce better results than one agent trying to do everything. And parallel execution means multiple agents can work on different tasks simultaneously.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  8.2 Types to Build
                </h3>
                <p className="mb-4">
                  Here are the six most common sub-agent types and what each one handles.
                </p>
                <p className="mb-4">
                  <strong>Website Builder.</strong> This agent specializes in creating and deploying websites. It uses the frontend-design skill, deploys to Vercel, and can go from a brief to a live URL in minutes. Give it a design direction, content requirements, and target audience, and it builds. Use it for landing pages, client sites, internal tools, and SEO microsites.
                </p>
                <p className="mb-4">
                  <strong>SEO Agent.</strong> Dedicated to search engine optimization. It runs site audits, identifies technical issues, finds keyword opportunities, builds programmatic SEO pages at scale, and tracks rankings over time. This agent lives and breathes search data.
                </p>
                <p className="mb-4">
                  <strong>Competitor Research Agent.</strong> Monitors your competitors continuously. Pricing changes, new features, new content, new hires, social media activity. It compiles regular reports on what your competition is doing and identifies opportunities they are missing that you could capture.
                </p>
                <p className="mb-4">
                  <strong>Content Writer.</strong> Trained on your voice and style through repeated feedback and skills. It writes blog posts, social media content, email sequences, video scripts, and any other written content. It learns from every piece of feedback and gets better with each use.
                </p>
                <p className="mb-4">
                  <strong>Outreach Agent.</strong> Handles prospect research and personalized outreach. It finds potential clients, researches their businesses, and drafts personalized cold emails that reference specific details about their situation. You review and send.
                </p>
                <p className="mb-4">
                  <strong>Research Agent.</strong> The deep-dive specialist. Give it a topic and it produces comprehensive reports with sources, analysis, and actionable recommendations. Use it for market research, competitive analysis, technology evaluations, and strategy development.
                </p>
                <p className="mb-4">
                  Start with two or three sub-agents. Add more as you identify bottlenecks or new needs. There is no benefit to creating agents that do not have regular work.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  8.3 Creating a Sub-Agent
                </h3>
                <p className="mb-4">
                  Creating a sub-agent is as simple as asking your main agent to do it. One prompt, and the agent handles all of the technical setup: creating the workspace, writing the configuration files, setting up the SOUL.md and AGENTS.md.
                </p>
                <CodeBlock title="Prompt: Create a Sub-Agent">
{`Help me create a sub-agent called [NAME] that specializes in
[SPECIALTY]. Here's what I need it to do:

- [TASK 1]
- [TASK 2]
- [TASK 3]

Its personality should be [DESCRIPTION]. It should have access
to [TOOLS/SERVICES]. Set up its workspace, SOUL.md, and AGENTS.md.

After setup, tell me: what else can you think of to improve
this sub-agent?`}
                </CodeBlock>
                <p className="mb-4">
                  That last line is important. After the initial setup, your main agent often has suggestions for additional skills, configuration tweaks, or workflow improvements that you would not have thought of. Let it share those ideas before you start using the new sub-agent.
                </p>
                <p className="mb-4">
                  Each sub-agent gets its own personality via SOUL.md. A content writer might be creative and expressive. A research agent might be methodical and precise. A coding agent might be terse and efficient. The personality affects output quality for that specific type of work.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  8.4 Management Rules
                </h3>
                <p className="mb-4">
                  Managing sub-agents well requires a few rules that prevent common problems.
                </p>
                <p className="mb-4">
                  <strong>Stagger spawns 20 to 30 minutes apart.</strong> If you spawn five sub-agents simultaneously, they will all hit the API at once, causing rate limits and degraded performance. Stagger them so each one gets clean, uncontested access to the model.
                </p>
                <p className="mb-4">
                  <strong>Never give sub-agents their own heartbeats.</strong> Heartbeats are for your main agent only. Sub-agents are ephemeral workers: they spin up, do their job, and shut down. If a sub-agent needs monitoring, your main agent does the monitoring through its own heartbeat cycle.
                </p>
                <p className="mb-4">
                  <strong>Sub-agents are ephemeral.</strong> Do not treat sub-agents like permanent team members that need ongoing care. They are task-oriented workers. Spawn one, give it a job, collect the output, shut it down. If you need the same type of work again, spawn a new one. The skills and configuration persist, but the running instance does not need to.
                </p>
                <p className="mb-4">
                  <strong>Monitor through your main agent.</strong> Your main agent should check on sub-agent progress during its heartbeat cycle. If a sub-agent has been stuck on a task for more than ten minutes, your main agent should intervene: check the output, redirect if needed, or kill the sub-agent and retry.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  8.5 Practical Workflows
                </h3>
                <p className="mb-4">
                  Here are four battle-tested sub-agent workflows that deliver consistent results.
                </p>
                <p className="mb-4">
                  <strong>Overnight Research Batch.</strong> Before bed, queue three or four research topics. Your main agent spawns sub-agents, staggered 20 minutes apart. Each one researches its topic independently, writes a structured report, and saves it. In the morning, your main agent summarizes all reports in your morning briefing. Eight hours of parallel research completed while you slept.
                </p>
                <p className="mb-4">
                  <strong>Website in 10 Minutes.</strong> Brief your main agent on what you need. It spawns a WebBuilder sub-agent, hands off the requirements, and the sub-agent builds and deploys the site. You get a live URL within minutes. Review, give feedback, and iterate. This workflow has been used to build landing pages, portfolio sites, internal dashboards, and SEO microsites.
                </p>
                <p className="mb-4">
                  <strong>Content Pipeline.</strong> A content writer sub-agent produces drafts. If graphics are needed, another sub-agent generates them. If scheduling is involved, the main agent handles publication timing. You approve the final output. The pipeline runs weekly, producing a steady stream of content with minimal input from you.
                </p>
                <p className="mb-4">
                  <strong>Lead Machine.</strong> A research sub-agent finds prospects matching your criteria. An outreach sub-agent drafts personalized emails for each prospect. The main agent compiles everything into a review queue. You scan the list, approve the ones you like, and the agent sends them. Prospecting that would take hours per day reduced to minutes of review.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  8.6 Advanced: Information Isolation and Token Savings
                </h3>
                <p className="mb-4">
                  There is a less obvious but important benefit to sub-agents: information isolation. Your main agent has your full context, including personal details, financial information, client data, and credentials. Sub-agents do not see any of that unless you explicitly share it.
                </p>
                <p className="mb-4">
                  A content writer sub-agent does not need to know your bank account details. An SEO agent does not need access to your private messages. By isolating each sub-agent to only the information it needs, you reduce the blast radius of any potential security issue and you keep each agent&apos;s context lean.
                </p>
                <p className="mb-4">
                  Lean context means lower cost per API call and better output quality. A focused agent with 10KB of relevant context outperforms a distracted agent with 70KB of context that is mostly irrelevant to the current task. Sub-agents are not just about parallel execution. They are about focus.
                </p>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 9: REAL-WORLD USE CASES
                   ═══════════════════════════════════════════════════════════ */}
              <section id="use-cases">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 9: Real-World Use Cases
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  9.1 SEO Domination
                </h3>
                <p className="mb-4">
                  SEO is one of the highest-value use cases for OpenClaw because search optimization is inherently repetitive, data-heavy, and rewards consistency. These are exactly the things an AI agent excels at. Here is how to use OpenClaw to dominate search results.
                </p>
                <p className="mb-4">
                  <strong>The Site Audit.</strong> Start with a comprehensive technical SEO crawl. Your agent examines every page of your site, checking meta tags, schema markup, page speed, alt text for images, broken links, thin content, canonical tags, mobile rendering, and indexing status. The output is a prioritized list of issues ranked by impact, with specific fix instructions for each one.
                </p>
                <CodeBlock title="Prompt: SEO Site Audit">
{`Run a comprehensive technical SEO audit of [WEBSITE URL].
Check every page for:
- Meta titles and descriptions (length, uniqueness, keyword usage)
- Schema markup (present, valid, complete)
- Page speed issues
- Image alt text
- Broken links (internal and external)
- Thin content (pages under 300 words)
- Canonical tags
- Mobile rendering
- Indexing status

Prioritize issues by impact. For each issue, give me the
specific fix. Save the full report to memory/seo-audit.md`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Keyword Research.</strong> Connect your agent to Google Search Console and unlock data-driven keyword research. Your agent can pull your actual ranking data, identify &ldquo;striking distance&rdquo; keywords (positions 5 through 20 where a small improvement means a big traffic jump), run competitor gap analysis to find keywords they rank for that you do not, and cluster keywords into topic groups for content planning.
                </p>
                <p className="mb-4">
                  <strong>Programmatic SEO (pSEO).</strong> This is where OpenClaw truly shines. Programmatic SEO means creating hundreds or thousands of pages following a template, each targeting a specific keyword variation. Comparison pages (&ldquo;Tool A vs Tool B&rdquo;), use case pages (&ldquo;AI for [industry]&rdquo;), location pages (&ldquo;Service in [city]&rdquo;), and tool pages (&ldquo;Free [tool type]&rdquo;). Your agent generates all of them with proper meta tags, schema markup, internal links, and unique content. What would take a human team weeks to produce, your agent produces in hours.
                </p>
                <p className="mb-4">
                  <strong>Content Optimization.</strong> Take existing pages and improve them. Your agent rewrites titles and meta descriptions for better click-through rates, adds FAQ sections based on &ldquo;People Also Ask&rdquo; data, fills content gaps where competitors cover topics you do not, builds internal linking structures between related pages, and adds schema markup for rich search results.
                </p>
                <p className="mb-4">
                  <strong>Weekly Monitoring.</strong> Set up automated weekly reports that track keyword movements, traffic anomalies, indexing health, and competitor ranking changes. Your agent spots trends early: a keyword climbing that deserves a push, a page losing traffic that needs attention, or a competitor making moves in your space. This is the consistency factor that separates sites that grow from sites that stagnate.
                </p>
                <p className="mb-4">
                  <strong>Backlink Building.</strong> Your agent identifies link-building opportunities by finding relevant sites that link to your competitors but not to you, finding broken links on authoritative sites where your content could be a replacement, and drafting personalized outreach emails at scale. You review and send. The research and drafting that would take hours per day becomes a review queue that takes minutes.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  9.2 YouTube Content Machine
                </h3>
                <p className="mb-4">
                  Building a YouTube channel is one of the most labor-intensive content strategies. Between research, scripting, filming, editing, thumbnail creation, title optimization, and description writing, a single video can take 10 to 20 hours. OpenClaw automates everything except the filming.
                </p>
                <p className="mb-4">
                  <strong>The Full Pipeline.</strong> The YouTube content machine works as a multi-stage pipeline where each stage feeds into the next.
                </p>
                <p className="mb-4">
                  <strong>Stage 1: Idea Generation.</strong> A research sub-agent scrapes trending topics in your niche, analyzes competitor videos, checks search volume data, and identifies content gaps. It produces a ranked list of video ideas with estimated demand and competition level.
                </p>
                <p className="mb-4">
                  <strong>Stage 2: Script Writing.</strong> A writing sub-agent takes the approved idea and produces a full video script. This sub-agent is trained on your speaking style through a skill built from your past content. It knows your hook structure, your pacing, your CTA placement, and your tone. The script includes speaker notes, visual cues, and b-roll suggestions.
                </p>
                <p className="mb-4">
                  <strong>Stage 3: B-Roll and Thumbnails.</strong> An asset creation sub-agent generates b-roll suggestions, creates thumbnail concepts, and prepares any visual assets needed for the video. For thumbnails specifically, it follows proven click-through rate patterns: high contrast, readable text, expressive faces, and clear subject matter.
                </p>
                <p className="mb-4">
                  <strong>Stage 4: Title and Description Optimization.</strong> Your agent writes multiple title variations and A/B tests them against YouTube SEO best practices. Descriptions are optimized with relevant keywords, timestamps, links, and calls to action.
                </p>
                <p className="mb-4">
                  <strong>Stage 5: Asset Organization.</strong> Everything gets organized in Google Drive: script, thumbnail options, b-roll list, title variations, description, and tags. Each video has its own folder, and the approval flow is structured so you review one folder and approve or request changes.
                </p>
                <CodeBlock title="Prompt: YouTube Pipeline Setup">
{`Set up a complete YouTube content pipeline for my channel about
[TOPIC]. I need:

1. A weekly idea research cron (every Monday)
2. A script writing sub-agent trained on my style
3. A thumbnail generation process
4. Title/description optimization
5. Everything organized in Drive

Create skills for each stage. Set up the cron jobs. Create the
sub-agent configurations. I want to go from "approved idea" to
"ready to film" with minimal manual work.`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>The Feedback Loop.</strong> After each video publishes, your agent tracks performance: views, click-through rate, watch time, engagement. It identifies what worked (strong hook, specific thumbnail style, certain topic) and saves those patterns as skill updates. Over time, the pipeline produces better content because it learns from every video&apos;s performance.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  9.3 Business Operations
                </h3>
                <p className="mb-4">
                  For solo operators and small teams, OpenClaw can function as a full business operations manager. Here is what that looks like in practice.
                </p>
                <p className="mb-4">
                  <strong>Booking alerts with auto pre-call research.</strong> When someone books a consultation on your calendar, your agent detects the booking within minutes. It immediately researches the person: their LinkedIn profile, their company website, recent news about their business, and any prior interactions you have had. By the time the call starts, you have a briefing document with everything you need to know.
                </p>
                <p className="mb-4">
                  <strong>Gmail scanning and response drafting.</strong> Your agent monitors your inbox, categorizes emails by priority, and drafts responses for routine messages. You review and send with a click. For emails that require your personal attention, it flags them and provides context. The agent is not sending emails on your behalf (unless you explicitly set that up). It is doing the reading and drafting work so you only spend time on the sending and personal touches.
                </p>
                <p className="mb-4">
                  <strong>CRM tracking.</strong> Whether you use a formal CRM or a Notion database, your agent keeps it updated. Call notes get logged automatically. Follow-up tasks get created. Lead scores get updated based on engagement. One setup managed 81 active leads in Notion with automated status tracking and follow-up reminders.
                </p>
                <p className="mb-4">
                  <strong>Proactive business updates.</strong> Two to four times daily, your agent checks in with relevant business information. Not just responses to your questions, but unsolicited useful updates: &ldquo;Your 3 PM call is with someone who just posted about needing exactly what you offer. Here is the post.&rdquo; Or: &ldquo;Three proposals have been open for over a week with no response. Want me to draft follow-ups?&rdquo;
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  9.4 Content Accountability and LinkedIn
                </h3>
                <p className="mb-4">
                  Content consistency is the number one challenge for most creators and businesses. Not ideas, not quality, just showing up every day. OpenClaw solves this with accountability automation.
                </p>
                <p className="mb-4">
                  Set up four daily check-ins with escalating pressure (see the Accountability Mode section in Chapter 7). Your agent tracks your posting streak and adjusts its tone based on your track record. Fourteen days in a row? Light touch. Missed yesterday? More direct.
                </p>
                <p className="mb-4">
                  For LinkedIn specifically, your agent can maintain a post bank in Notion: pre-written posts organized by topic, structured and formatted, ready to publish. During slow weeks, you draw from the bank instead of trying to write something from scratch under time pressure. During productive weeks, you add new posts to the bank, building a buffer that prevents gaps.
                </p>
                <p className="mb-4">
                  The agent handles the entire lifecycle: generating post ideas based on trending topics in your industry, drafting posts in your voice, organizing them in the bank, reminding you to publish, and tracking engagement after publishing.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  9.5 Tools and Integrations
                </h3>
                <p className="mb-4">
                  Your agent becomes more powerful with every service you connect. Here are the most impactful integrations and what they enable.
                </p>
                <p className="mb-4">
                  <strong>Google Drive.</strong> File organization, content system storage, client deliverable management, and automated backups. Your agent can create folder structures, organize files by project, and maintain a systematic archive. One real-world example: a YouTube pipeline where every video gets its own Drive folder with script, thumbnail options, b-roll list, and asset files, all organized automatically.
                </p>
                <p className="mb-4">
                  <strong>GA4 (Google Analytics).</strong> Daily traffic reports, lead source tracking, content performance analysis, anomaly detection, weekly dashboards, and SEO impact tracking. Your agent can spot a traffic spike or drop before you even open Analytics, then investigate the cause and suggest next steps.
                </p>
                <p className="mb-4">
                  <strong>Google Search Console.</strong> Keyword ranking tracking, content opportunity finding, click-through rate optimization, new keyword discovery, indexing health monitoring, competitor gap analysis, and post-publish performance tracking. This is the engine behind the SEO workflows described in section 9.1.
                </p>
                <p className="mb-4">
                  <strong>Connection methods, in order of preference:</strong> API integration is always best when available. It is fast, reliable, and gives the agent direct programmatic access. Browser automation is the fallback for services that do not have APIs. It is slower and more fragile, but it works. Skills and plugins are the third option, useful for complex integrations that have been packaged by the community.
                </p>
                <CodeBlock title="Prompt: Set Up Google Drive Integration">
{`Help me connect to Google Drive. I need:
1. Set up the Google Cloud project with Drive API scopes
2. Configure authentication
3. Test with a simple file list
4. Create a skill for common Drive operations (create folder,
   upload file, organize by project, search files)

Walk me through each step. I'll handle the Google Console parts
while you handle the code.`}
                </CodeBlock>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  9.6 Industry Examples
                </h3>
                <p className="mb-4">
                  OpenClaw is not limited to tech companies or content creators. Here are real examples from different industries.
                </p>
                <p className="mb-4">
                  <strong>Real Estate.</strong> A real estate brokerage automated transaction paperwork using OpenClaw. The agent auto-fills TREC contracts with buyer and seller information, tracks transactions from offer to close with deadline monitoring, and sends daily briefings to agents about upcoming deadlines, required signatures, and status updates. The agent uses browser automation to work with existing tools like DocuSign and SkySlope, so the brokerage did not need to change their existing tech stack. The key concern, handled through human-in-the-loop review, is that every document gets human approval before sending.
                </p>
                <p className="mb-4">
                  <strong>AI Consultancy.</strong> A consulting firm used OpenClaw to automate their own operations. The agent manages their Webflow site&apos;s SEO, runs Google Ads campaign optimizations, handles social media content scheduling, and manages Google Workspace tasks. Skills were built specifically for Webflow&apos;s API, Google Ads optimization rules, and social media posting patterns. The agent went from setup to autonomously managing these four areas within a few weeks of training and feedback.
                </p>
                <p className="mb-4">
                  <strong>The Meatspace Layer.</strong> One of the more creative use cases is RentAHuman.ai, a concept where AI agents hire humans for physical tasks through API and MCP integrations. Tasks like pickups, in-person meetings, signature collection, physical verification, and photography. Payment in stablecoins. This is the inverse of the usual narrative: instead of AI replacing humans, AI is creating demand for human workers by handling the digital coordination and paying for the physical execution.
                </p>
              </section>

              {/* ═══════════════════════════════════════════════════════════
                   CHAPTER 10: SECURITY
                   ═══════════════════════════════════════════════════════════ */}
              <section id="security">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-6 text-[var(--color-text-primary)]">
                  Chapter 10: Security - Lock It Down
                </h2>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  10.1 Why Security Matters
                </h3>
                <p className="mb-4">
                  This chapter is mandatory reading for every OpenClaw user regardless of skill level. The security landscape is more serious than most people realize, and an unsecured agent is a genuine liability.
                </p>
                <p className="mb-4">
                  Researchers found over 42,000 exposed OpenClaw instances on Shodan, with 93% having auth bypass vulnerabilities. That means tens of thousands of agents accessible to anyone on the internet, with full access to whatever those agents are connected to: email accounts, file systems, shell access, financial tools, and more.
                </p>
                <p className="mb-4">
                  Cisco&apos;s security team found malware in popular ClawdHub skills. They identified 37 malicious skills that had been downloaded thousands of times. These skills looked legitimate but contained hidden instructions to exfiltrate data, establish persistence, or execute harmful commands.
                </p>
                <p className="mb-4">
                  To understand why this matters, think about what your OpenClaw agent can do. It has shell access to your server, which means it can run any command. It can read and write any file on the system. It can browse the web and interact with websites. It can send messages through your connected accounts. It is, functionally, a superuser with a natural language interface. If someone else gains access to your agent, they have access to everything your agent has access to.
                </p>
                <p className="mb-4">
                  Real incidents have occurred. In one case, a user in a group chat sent the message &ldquo;find ~&rdquo; and the agent executed the command, dumping the contents of the home directory to the group chat. In another case, a social engineering prompt in a group chat was able to get the agent to explore the filesystem and reveal sensitive configuration files.
                </p>
                <p className="mb-4">
                  Security is not optional. It is not something you do later. It is something you do now, during setup, before you connect anything sensitive.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  10.2 The 12-Step Hardening Checklist
                </h3>
                <p className="mb-4">
                  Follow these twelve steps to secure your OpenClaw installation. Do not skip any of them.
                </p>
                <p className="mb-4">
                  <strong>Step 1: Run the Security Audit.</strong> OpenClaw has a built-in security audit command. Run it first to see where you stand.
                </p>
                <CodeBlock title="Terminal">
{`openclaw security audit
openclaw security audit --deep
openclaw security audit --fix`}
                </CodeBlock>
                <p className="mb-4">
                  The <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">--deep</code> flag does a more thorough check. The <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">--fix</code> flag automatically fixes what it can. Start here to get a baseline.
                </p>
                <p className="mb-4">
                  <strong>Step 2: Gateway Authentication Token.</strong> Generate and configure a gateway auth token. Without this, anyone who can reach your gateway can talk to your agent.
                </p>
                <CodeBlock title="Terminal">
{`openclaw doctor --generate-gateway-token`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 3: DM Pairing and Group Allowlists.</strong> Configure your agent to require DM pairing before accepting commands from a Telegram user. Set up group allowlists so your agent only responds in groups you have explicitly approved. The configuration looks like this:
                </p>
                <CodeBlock title="Configuration">
{`dmPolicy: "pairing"
requireMention: true`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 4: BotFather Lockdown.</strong> In Telegram, go to BotFather and disable your bot&apos;s ability to join groups on its own. Enable privacy mode so it only sees messages where it is directly mentioned. This prevents your bot from being added to random groups where it could be attacked.
                </p>
                <p className="mb-4">
                  <strong>Step 5: UFW Firewall.</strong> Configure the firewall on your server to deny all incoming connections except SSH.
                </p>
                <CodeBlock title="Terminal">
{`sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 6: File Permissions.</strong> Lock down your configuration files and state directories.
                </p>
                <CodeBlock title="Terminal">
{`chmod 600 /path/to/config/files
chmod 700 /path/to/state/directory`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 7: Log Redaction.</strong> Enable log redaction to prevent sensitive data from appearing in log files.
                </p>
                <CodeBlock title="Configuration">
{`logging:
  redactSensitive: "tools"`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 8: Sub-Agent Sandboxing.</strong> Restrict what tools sub-agents have access to. A content writing sub-agent does not need shell access. A research agent does not need file write permissions. Use the denyTools configuration to remove dangerous tools from sub-agents that do not need them.
                </p>
                <CodeBlock title="Sub-Agent Configuration">
{`denyTools:
  - exec
  - browser
  - process
  - write`}
                </CodeBlock>
                <p className="mb-4">
                  <strong>Step 9: Tailscale.</strong> Set up a private mesh network using Tailscale (detailed steps in the next section). Once configured, bind your gateway to the loopback interface so it is only accessible through the Tailscale network. Your server becomes invisible to the public internet.
                </p>
                <p className="mb-4">
                  <strong>Step 10: Vet Skills Before Installing.</strong> Never install a community skill without reading the SKILL.md file yourself. Look for suspicious instructions, hidden prompts, or file access patterns that do not match the skill&apos;s stated purpose. Cisco released a Skill Scanner tool that can help automate this, but manual review is still essential.
                </p>
                <p className="mb-4">
                  <strong>Step 11: Use Strong Models.</strong> For security-sensitive operations and group chat participation, use Opus-class models. They have significantly better resistance to prompt injection attacks compared to smaller models. Haiku is fine for simple tasks, but anything involving external inputs should use the strongest available model.
                </p>
                <p className="mb-4">
                  <strong>Step 12: Review and Monitor.</strong> Security is not a one-time setup. Review your agent&apos;s activity regularly. Check logs for unexpected tool calls. Monitor for file access patterns that do not match normal operations. Set up alerts for suspicious behavior.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  10.3 Tailscale Setup (Step-by-Step)
                </h3>
                <p className="mb-4">
                  Tailscale creates a private mesh VPN using WireGuard. It is free for up to 100 devices, dead simple to set up, and eliminates the need for any public-facing ports on your server. Here is how to set it up.
                </p>
                <p className="mb-4">
                  <strong>Step 1: Sign Up and Install Locally.</strong> Go to tailscale.com, create an account, and install Tailscale on your local machine (the computer you use day-to-day). Once installed, sign in. Your machine gets a Tailscale IP address (100.x.x.x).
                </p>
                <p className="mb-4">
                  <strong>Step 2: Install on Your VPS.</strong> SSH into your server and install Tailscale:
                </p>
                <CodeBlock title="Terminal (on your VPS)">
{`curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up`}
                </CodeBlock>
                <p className="mb-4">
                  Follow the authentication link it provides. Your server now has its own Tailscale IP address.
                </p>
                <p className="mb-4">
                  <strong>Step 3: Test SSH Through Tailscale.</strong> Open a NEW terminal window (keep your old SSH session open as a safety net) and SSH into your server using its Tailscale IP address instead of the public IP:
                </p>
                <CodeBlock title="Terminal (on your local machine)">
{`ssh user@100.x.x.x`}
                </CodeBlock>
                <p className="mb-4">
                  If this works, you are connected through the private Tailscale network. If something goes wrong, you still have your old session on the public IP as a fallback. Never close your existing SSH session until you have confirmed Tailscale works.
                </p>
                <p className="mb-4">
                  <strong>Step 4: Close All Public Ports.</strong> Once you have confirmed Tailscale SSH works, close the public SSH port:
                </p>
                <CodeBlock title="Terminal">
{`sudo ufw delete allow 22/tcp`}
                </CodeBlock>
                <p className="mb-4">
                  Your server is now invisible to the public internet. The only way to reach it is through the Tailscale network, which requires authentication. Port scans, brute force attacks, and drive-by exploits no longer apply because there are no public ports to target.
                </p>
                <p className="mb-4">
                  <strong>Bonus: Tailscale SSH.</strong> You can optionally enable Tailscale SSH, which lets you SSH into your server using Tailscale&apos;s authentication instead of SSH keys. This adds another layer of access control on top of the encrypted mesh network.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  10.4 Mac-Specific Security
                </h3>
                <p className="mb-4">
                  If you are running OpenClaw on a Mac Mini instead of a VPS, there are additional security measures specific to macOS.
                </p>
                <p className="mb-4">
                  <strong>FileVault.</strong> Enable full disk encryption. This is in System Settings, then Privacy and Security, then FileVault. If someone physically steals your Mac Mini, they cannot read the disk without your login credentials.
                </p>
                <p className="mb-4">
                  <strong>macOS Firewall and Stealth Mode.</strong> Enable the built-in firewall and turn on Stealth Mode. Stealth Mode prevents your Mac from responding to ping requests and port scans, making it less visible on the network.
                </p>
                <p className="mb-4">
                  <strong>Disable Auto Login.</strong> Make sure your Mac requires a password after sleep and restart. If it logs in automatically, anyone with physical access can interact with your agent.
                </p>
                <p className="mb-4">
                  <strong>Disable Sharing Services.</strong> Turn off AirDrop, File Sharing, Screen Sharing, Remote Management, and any other sharing services you are not actively using. Each enabled sharing service is a potential attack surface.
                </p>
                <p className="mb-4">
                  <strong>Homebrew Service Binding Audit.</strong> If you installed services through Homebrew (like SearXNG, databases, or web servers), check that they are bound to 127.0.0.1 (localhost only) and not 0.0.0.0 (all interfaces). A service bound to 0.0.0.0 is accessible from the network, which means anyone on your local network can reach it.
                </p>
                <p className="mb-4">
                  <strong>SIP Status Check.</strong> Verify that System Integrity Protection (SIP) is enabled. Never disable SIP. It protects core system files from modification, including by your own agent. Check with <code className="px-1.5 py-0.5 bg-[var(--color-surface-muted)] rounded text-sm font-[family-name:var(--font-mono)]">csrutil status</code> in Terminal.
                </p>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-4 mt-8 text-[var(--color-text-primary)]">
                  10.5 Golden Rules
                </h3>
                <p className="mb-4">
                  Two rules that override everything else:
                </p>
                <p className="mb-4">
                  <strong>Rule 1: Never let the agent verify its own security.</strong> When you ask your agent &ldquo;is my setup secure?&rdquo; the agent will check its own configuration and tell you everything looks fine. The problem is that a compromised agent will also tell you everything looks fine. Always verify security from a separate terminal session, not through the agent. SSH in directly, check the firewall rules yourself, review the config files yourself. Your agent is the thing being secured. It cannot objectively evaluate its own security.
                </p>
                <p className="mb-4">
                  <strong>Rule 2: Always read SKILL.md yourself before installing any community skill.</strong> Not the description. Not the reviews. The actual file. Open it, read every line, and understand what it tells the agent to do. If anything looks suspicious, if it accesses files it should not need, if it sends data to external URLs, if it has obfuscated instructions, do not install it. This is the single most effective defense against malicious skills.
                </p>
                <p className="mb-4">
                  Here is a secure baseline configuration template you can use as a starting point:
                </p>
                <CodeBlock title="Secure Baseline Configuration">
{`# Gateway
gateway:
  auth:
    token: "<generated-token>"
  bind: "127.0.0.1"

# Telegram
telegram:
  dmPolicy: "pairing"
  requireMention: true

# Logging
logging:
  redactSensitive: "tools"

# Sub-Agent Defaults
subAgentDefaults:
  denyTools:
    - exec
    - browser
    - process`}
                </CodeBlock>
                <p className="mb-4">
                  Copy this, customize it for your setup, and apply it. Then verify from a separate terminal that the settings are active. Do not trust the agent to confirm its own security configuration.
                </p>
              </section>

              <CTAButton text="Get Started With a Consultation" />

              {/* ── Closing ────────────────────────────────────────────── */}
              <section className="pt-8 border-t border-[var(--color-border-light)]">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4 text-[var(--color-text-primary)]">
                  What Comes Next
                </h2>
                <p className="mb-4">
                  You have just read the complete OpenClaw book. Ten chapters covering everything from first setup to multi-agent architectures, proactive automation, and production-grade security. This is not theoretical knowledge. Every pattern, every prompt, every workflow in this guide comes from real-world use.
                </p>
                <p className="mb-4">
                  If you are just starting out, go back to Chapter 2 and set up your server. Get the basics running. Connect your essential tools. Onboard your agent with a deep-dive interview. Then start with one proactive feature from Chapter 7, one skill from Chapter 3, and one optimization from Chapter 6. Build from there.
                </p>
                <p className="mb-4">
                  If you are already running OpenClaw and want to level up, focus on the chapters that match your current bottleneck. Struggling with output quality? Chapter 4 on prompting and Chapter 6 on optimization. Want more autonomy? Chapter 7 on proactive AI. Ready to scale? Chapter 8 on sub-agents.
                </p>
                <p className="mb-4">
                  And regardless of where you are, read Chapter 10 on security. Then read it again. Then actually do every step.
                </p>
                <p className="mb-4">
                  This guide will be updated as OpenClaw evolves, new patterns emerge, and the community discovers better ways to work. Bookmark it. Come back to it. And if you want hands-on help getting your agent set up and optimized, reach out.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

export default function Home() {
    const [isDevMode, setIsDevMode] = useState(false);
    const [timeTheme, setTimeTheme] = useState("theme-day"); // Default to day to prevent flash

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 11) {
            setTimeTheme("theme-morning");
        } else if (hour >= 11 && hour < 17) {
            setTimeTheme("theme-day");
        } else {
            setTimeTheme("theme-night");
        }
    }, []);

    const buildingApps = [
        {
            name: "Vestæ",
            icon: "/images/vestae_app_logo.png",
            href: "https://vestae.vercel.app",
        },
        {
            name: "Macro",
            icon: "/images/macro_icon.png",
            href: "https://apps.apple.com/us/app/macro-health-fitness/id6753906481",
            badge: "Live",
        },
        {
            name: "Micro",
            icon: "/images/micro_icon.png",
            href: "https://lumoralabs.io/micro",
        },
    ];

    const socialLinks = [
        {
            href: "https://www.youtube.com/@LukeFornieri",
            icon: "/youtube-svgrepo-com.svg",
            label: "YouTube (Real Estate)",
            type: "YouTube",
        },
        {
            href: "https://linkedin.com/in/lukefornieri",
            icon: "/linkedin-161-svgrepo-com.svg",
            label: "LinkedIn",
        },
        {
            href: "https://instagram.com/lukefornieri",
            icon: "/instagram-svgrepo-com.svg",
            label: "Instagram",
        },
        {
            href: "https://www.tiktok.com/@lukefornieri",
            icon: "/tiktok-svgrepo-com.svg",
            label: "TikTok",
        },
        {
            href: "https://www.youtube.com/@imlukefdev",
            icon: "/youtube-svgrepo-com.svg",
            label: "YouTube (App Dev)",
            type: "YouTube",
            badge: "Dev",
        },
    ];

    const techStack = {
        IDE: ["VS Code", "Antigravity (Trial)"],
        AI_Models: ["Claude Code", "Codex"],
        Frameworks: ["Next.js", "Flutter"],
        Languages: ["Swift", "Kotlin", "TypeScript"],
        Infrastructure: ["Supabase", "Vercel", "Posthog"],
        Workflow: ["Context 7 (Must Have)", "Notion", "Craft"]
    };

    const personalApps = [
        { name: "Notion", icon: "/images/notion_logo.svg", href: "https://www.notion.so" },
        { name: "Craft", icon: "/images/craft_icon.png", href: "https://www.craft.do" },
        { name: "Wispr Flow", icon: "/images/wispr_flow_icon.png", href: "https://wisprflow.ai" },
        { name: "Macro", icon: "/images/macro_icon.png", href: "https://apps.apple.com/us/app/macro-health-fitness/id6753906481" },
        { name: "Micro", icon: "/images/micro_icon.png", href: "https://lumoralabs.io/micro" },
        { name: "Echo Notes", icon: "/images/echo_notes_icon.png", href: "https://echonotes.ai" },
        { name: "ChatGPT", icon: "/images/chatgpt_icon_user.png", href: "https://chatgpt.com" },
        { name: "Gemini", icon: "/images/gemini_icon_user.png", href: "https://gemini.google.com" },
    ];

    return (
        <main className={`page ${isDevMode ? 'developer-mode' : ''} ${timeTheme}`}>
            {/* Mode Toggle */}
            <div className="toggle-container">
                <span className={`toggle-label ${!isDevMode ? 'active' : ''}`}>Normal</span>
                <button
                    className={`toggle-switch ${isDevMode ? 'on' : 'off'}`}
                    onClick={() => setIsDevMode(!isDevMode)}
                    aria-label="Toggle Developer Mode"
                >
                    <div className="toggle-thumb" />
                </button>
                <span className={`toggle-label ${isDevMode ? 'active' : ''}`}>Developer</span>
            </div>

            {isDevMode ? (
                <TerminalLayout
                    buildingApps={buildingApps}
                    socialLinks={socialLinks}
                    techStack={techStack}
                    onExit={() => setIsDevMode(false)}
                />
            ) : (
                <StandardLayout
                    buildingApps={buildingApps}
                    socialLinks={socialLinks}
                    personalApps={personalApps}
                />
            )}
        </main>
    );
}

function StandardLayout({ buildingApps, socialLinks, personalApps }: { buildingApps: any[], socialLinks: any[], personalApps: any[] }) {
    return (
        <div className="standard-layout-wrapper">
            {/* Profile */}
            <header className="flex w-full justify-center">
                <Image
                    src="/images/Gemini_Generated_Image_bqrw9jbqrw9jbqrw.png"
                    alt="Luke Fornieri"
                    width={128}
                    height={128}
                    className="avatar"
                    priority
                />
            </header>

            {/* Intro */}
            <section className="section text-center">
                <p className="intro-text">// hi, my name is</p>
                <h1 className="name">Luke Fornieri</h1>
            </section>

            {/* Building */}
            <section className="section">
                <p className="section-text"><span className="text-gray-400 mr-2 text-lg">&gt;</span>I am developing</p>
                <div className="icon-row">
                    {buildingApps.map((app) => (
                        <Link
                            key={app.name}
                            href={app.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                        >
                            <div className="icon-wrap">
                                <Image
                                    src={app.icon}
                                    alt={app.name}
                                    width={56}
                                    height={56}
                                    className="app-icon"
                                />
                                {"badge" in app && <span className="badge">{app.badge}</span>}
                            </div>
                            <span className="icon-name">{app.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Founder */}
            <section className="section">
                <p className="section-text"><span className="text-gray-400 mr-2 text-lg">&gt;</span>I am the Founder & OIEC of</p>
                <div className="icon-row">
                    <Link
                        href="https://fornieriazar.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <div className="fna-wrapper">
                            <Image
                                src="/images/FNA.png"
                                alt="FNA"
                                width={100}
                                height={100}
                                className="fna-icon"
                            />
                        </div>
                        <span className="icon-name">Fornieri & Azar</span>
                    </Link>
                </div>
            </section>

            {/* Running */}
            <section className="section">
                <p className="section-text"><span className="text-gray-400 mr-2 text-lg">&gt;</span>I founded</p>
                <div className="icon-row">
                    <Link
                        href="https://lumoralabs.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <Image
                            src="/images/Lumora_logo_new.svg"
                            alt="Lumora Labs"
                            width={54}
                            height={54}
                            className="app-icon"
                        />
                        <span className="icon-name">Lumora Labs</span>
                    </Link>
                </div>
            </section>

            {/* Social */}
            <section className="section">
                <p className="section-text"><span className="text-gray-400 mr-2 text-lg">&gt;</span>I post on</p>
                <div className="social-row">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-link social-link--${(social.type || social.label).toLowerCase()}`}
                            aria-label={social.label}
                        >
                            <Image
                                src={social.icon}
                                alt={social.label}
                                width={22}
                                height={22}
                            />
                            {social.badge && <span className="badge">{social.badge}</span>}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Apps I Use */}
            <section className="section">
                <p className="section-text"><span className="text-gray-400 mr-2 text-lg">&gt;</span>I use</p>
                <div className="icon-grid">
                    {personalApps.map((app) => (
                        <Link
                            key={app.name}
                            href={app.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                        >
                            <div className="icon-wrap">
                                <Image
                                    src={app.icon}
                                    alt={app.name}
                                    width={46}
                                    height={46}
                                    className="app-icon-personal"
                                />
                            </div>
                            <span className="icon-name">{app.name}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

function TerminalLayout({ buildingApps, socialLinks, techStack, onExit }: { buildingApps: any[], socialLinks: any[], techStack: any, onExit: () => void }) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<any[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Boot Sequence
    useEffect(() => {
        let mounted = true;

        const runBootSequence = async () => {
            // 1. Initial Loader
            if (mounted) setHistory([{ type: 'output-text', content: 'Initializing environment...' }]);
            await new Promise(r => setTimeout(r, 800));
            if (!mounted) return;

            setHistory(prev => [...prev, { type: 'output-text', content: 'Loading modules...' }]);
            await new Promise(r => setTimeout(r, 800));
            if (!mounted) return;

            setHistory(prev => [...prev, { type: 'output-text', content: 'System ready.' }]);
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;

            setHistory([]); // Clear loading text

            // Helper to simulate typing
            const typeCommand = async (cmd: string) => {
                if (!mounted) return;
                // Add empty command prompt
                setHistory(prev => [...prev, { type: 'command', content: '' }]);

                for (let i = 1; i <= cmd.length; i++) {
                    if (!mounted) return;
                    await new Promise(r => setTimeout(r, 50)); // Typing speed
                    setHistory(prev => {
                        const newH = [...prev];
                        // Ensure the command block exists before trying to update it
                        if (newH.length > 0 && newH[newH.length - 1].type === 'command') {
                            newH[newH.length - 1].content = cmd.substring(0, i);
                        }
                        return newH;
                    });
                }
                await new Promise(r => setTimeout(r, 200)); // Pause after typing
            };

            // 2. whoami
            await typeCommand('whoami');
            if (mounted) setHistory(prev => [...prev, { type: 'output-whoami' }]);
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;

            // 3. ls projects
            await typeCommand('ls ./projects');
            if (mounted) setHistory(prev => [...prev, { type: 'output-projects' }]);
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;

            // 4. tech stack
            await typeCommand('cat tech_stack.json');
            if (mounted) setHistory(prev => [...prev, { type: 'output-techstack' }]);
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;

            // 5. Done
            setIsBooting(false);
        };

        runBootSequence();

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (isBooting) return;

        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        const newHistory = [...history, { type: 'command', content: input }];

        switch (cmd) {
            case 'help':
                newHistory.push({ type: 'output-text', content: 'Available commands: whoami, ls, cat social.txt, cat tech_stack.json, clear, exit' });
                break;
            case 'whoami':
                newHistory.push({ type: 'output-whoami' });
                break;
            case 'ls':
            case 'ls projects':
            case 'ls ./projects':
                newHistory.push({ type: 'output-projects' });
                break;
            case 'cat social.txt':
            case 'cat social_links.txt':
                newHistory.push({ type: 'output-social' });
                break;
            case 'cat tech_stack.json':
                newHistory.push({ type: 'output-techstack' });
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'exit':
                onExit();
                return;
            default:
                newHistory.push({ type: 'output-text', content: `Command not found: ${cmd}` });
        }

        setHistory(newHistory);
        setInput("");
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const renderOutput = (item: any) => {
        switch (item.type) {
            case 'output-text':
                return <p className="output-text">{item.content}</p>;
            case 'output-whoami':
                return (
                    <div>
                        <p className="output-text">Luke Fornieri</p>
                        <p className="output-text text-gray-400">Founder, Developer</p>
                    </div>
                );
            case 'output-projects':
                return (
                    <div className="output-grid">
                        {buildingApps.map(app => (
                            <Link key={app.name} href={app.href} target="_blank" className="terminal-link">
                                {app.name}
                                {"badge" in app && <span className="terminal-badge">LIVE</span>}
                            </Link>
                        ))}
                        <Link href="https://lumoralabs.io" target="_blank" className="terminal-link">Lumora_Labs</Link>
                    </div>
                );
            case 'output-social':
                return (
                    <div className="output-list">
                        {socialLinks.map(social => (
                            <Link key={social.label} href={social.href} target="_blank" className="terminal-list-item">
                                {social.label}
                            </Link>
                        ))}
                    </div>
                );
            case 'output-techstack':
                return (
                    <pre className="output-text text-blue-300" style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                        {JSON.stringify(techStack, null, 2)}
                    </pre>
                );
            default:
                return null;
        }
    };

    return (
        <div className="terminal-window" onClick={focusInput}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-btn close" onClick={onExit}></div>
                    <div className="terminal-btn minimize"></div>
                    <div className="terminal-btn maximize"></div>
                </div>
                <div className="terminal-title">luke@portfolio: ~</div>
            </div>
            <div className="terminal-content">
                {history.map((item, index) => (
                    <div key={index} className="command-block" style={{ marginBottom: item.type === 'command' ? 8 : 24 }}>
                        {item.type === 'command' ? (
                            <p className="prompt"><span className="user">luke@portfolio</span>:<span className="path">~</span>$ {item.content}</p>
                        ) : (
                            renderOutput(item)
                        )}
                    </div>
                ))}

                {!isBooting && (
                    <form onSubmit={handleCommand} className="command-block flex items-center">
                        <p className="prompt" style={{ marginBottom: 0 }}>
                            <span className="user">luke@portfolio</span>:<span className="path">~</span>$
                        </p>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="terminal-input"
                            autoFocus
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </form>
                )}
                <div ref={bottomRef} />
            </div>
        </div>
    );
}

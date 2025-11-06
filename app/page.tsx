"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Lexend, Lexend_Tera } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

const lexendTera = Lexend_Tera({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function Home() {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const macroImages = [
        { src: "/images/Macro 1 .png", alt: "Macro 1" },
        { src: "/images/Macro 4 copy.png", alt: "Macro 4" },
        { src: "/images/Macro 3 copy.png", alt: "Macro 3" },
    ];

    const socialLinks = [
        {
            href: "https://linkedin.com/in/lukefornieri",
            iconSrc: "/linkedin-161-svgrepo-com.svg",
            label: "LinkedIn"
        },
        {
            href: "https://instagram.com/lukefornieri",
            iconSrc: "/instagram-svgrepo-com.svg",
            label: "Instagram"
        },
        {
            href: "https://www.youtube.com/@LukeFornieri",
            iconSrc: "/youtube-svgrepo-com.svg",
            label: "YouTube"
        },
        {
            href: "https://www.facebook.com/LukeFornieriRealEstate/",
            iconSrc: "/facebook-svgrepo-com.svg",
            label: "Facebook"
        }
    ];

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        const delay = target.dataset.delay ?? "0";
                        target.style.setProperty("--animate-delay", `${delay}ms`);
                        target.classList.add("in-view");
                    } else {
                        target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="snap-container">
            {/* Section 1: Hero */}
            <section className="snap-section hero-section">
                <div className="hero-shell">
                    <Image
                        src="/images/Gemini_Generated_Image_bqrw9jbqrw9jbqrw.png"
                        alt="Luke Fornieri"
                        width={190}
                        height={190}
                        className="hero-avatar"
                        priority
                    />

                    <div
                        role="heading"
                        aria-level={1}
                        className={`${lexendTera.className} hero-title`}
                    >
                        LUKE FORNIERI
                    </div>

                    <p className={`${lexend.className} hero-subtitle`}>
                        Founder of FORNIERI &amp; Lumora Labs
                    </p>

                    <div className="hero-cta" data-animate="rise" data-delay="100">
                        <span className={`badge badge--macro ${lexend.className}`} data-animate="slide" data-delay="150">
                            <Image
                                src="/images/macrologoNB.png"
                                alt="Macro logo"
                                width={30}
                                height={30}
                                priority
                            />
                            Macro · Now on iOS
                        </span>
                        <Link
                            href="https://apps.apple.com/us/app/macro/id6753906481"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Macro on the App Store"
                        >
                            <Image
                                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                alt="Download Macro on the App Store"
                                width={140}
                                height={48}
                                className="store-badge"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="social-strip" data-animate="slide" data-delay="250">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                            >
                                <Image
                                    src={social.iconSrc}
                                    alt={social.label}
                                    width={28}
                                    height={28}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`hero-indicator ${lexend.className}`}>
                    <span>Scroll to explore</span>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ animation: "bounce 2s infinite" }}
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* Section 2: Fornieri Real Estate */}
            <section className="snap-section surface-section">
                <div className="section-divider" data-animate="rise" />
                <Link
                    href="https://fornieri.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Fornieri Real Estate"
                    className="fornieri-logo"
                    data-animate="rise"
                >
                    <Image
                        src="/images/fornieri.svg"
                        alt="Fornieri Real Estate"
                        width={220}
                        height={220}
                        priority
                    />
                </Link>

                <div className="fornieri-copy" data-animate="slide" data-direction="left">
                    <h2 className={`${lexend.className} feature-heading`}>People. Purpose. Property.</h2>
                    <p className={`${lexend.className} feature-body`}>
                        We believe trust is the cornerstone of a great result. We provide a sophisticated, personal service and an intelligent strategy tailored for you, acting as dedicated advisors to ensure your property journey is seamless and successful.
                    </p>
                </div>

                <div className="fornieri-actions" data-animate="slide" data-direction="right" data-delay="150">
                    <Link
                        href="https://medium.com/@lukeforn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${lexend.className} button button--ghost fornieri-button`}
                        aria-label="Read my articles on Medium"
                    >
                        Read My Articles
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <span className={`${lexend.className} pill-note pill-note--muted`} aria-disabled="true">
                        Coming soon
                    </span>
                </div>
            </section>

            {/* Section 3: Lumora Labs */}
            <section className="snap-section surface-section--alt">
                <div className="section-divider" data-animate="rise" />

                <div className="labs-header" data-animate="rise" data-delay="100">
                        <Image
                            src="/images/Lumora_logo_new.svg"
                            alt="Lumora Labs"
                            width={104}
                            height={104}
                            className="labs-header__logo"
                            priority
                        />
                        <span className={`${lexend.className} eyebrow`}>Lumora Labs</span>
                        <h2 className={`${lexend.className} feature-heading`}>Building calm, considered software.</h2>
                        <p className={`${lexend.className} feature-body`}>
                            A creative studio crafting experiences that feel minimal, powerful, and effortlessly human.
                        </p>
                        <Link
                            href="https://lumoralabs.io"
                            className={`${lexend.className} labs-header__link`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                </div>

                <div className="apps-grid" data-animate>
                        <div className="app-panel" data-animate="slide" data-direction="left">
                            <Link href="https://lumoralabs.io/macro" className="app-card__logoWrap" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/macrologoNB.png"
                                    alt="Macro"
                                    width={108}
                                    height={108}
                                    className="app-card__logo"
                                    priority
                                />
                            </Link>
                            <h3 className={`${lexend.className} app-card__title`}>Macro</h3>
                            <p className={`${lexend.className} app-card__text`}>
                                Track, optimise, and feel good—with an AI nutritionist that learns how you live.
                            </p>

                            <div className="app-card__gallery">
                                {macroImages.map((img) => (
                                    <button
                                        key={img.src}
                                        onClick={() => setExpandedImage(img.src)}
                                        className="app-card__galleryButton"
                                        aria-label={`Expand ${img.alt}`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={130}
                                            height={130}
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="app-card__footer">
                                <span className={`${lexend.className} eyebrow`}>Download Macro</span>
                                <Link
                                    href="https://apps.apple.com/us/app/macro/id6753906481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download Macro on the App Store"
                                    className="store-cta"
                                >
                                    <Image
                                        src="/images/macrologoNB.png"
                                        alt="Macro logo"
                                        width={36}
                                        height={36}
                                        priority
                                    />
                                    <Image
                                        src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                        alt="Download Macro on the App Store"
                                        width={140}
                                        height={48}
                                        className="store-badge"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="app-panel" data-animate="slide" data-direction="right" data-delay="150">
                            <Link href="https://lumoralabs.io/micro" className="app-card__logoWrap" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/micro.png"
                                    alt="Micro"
                                    width={108}
                                    height={108}
                                    className="app-card__logo"
                                />
                            </Link>
                            <h3 className={`${lexend.className} app-card__title`}>Micro</h3>
                            <p className={`${lexend.className} app-card__text`}>
                                Flow-state planning for makers. Prioritise, schedule, and ship without the noise.
                            </p>

                            <div className="app-card__gallery">
                                <button
                                    onClick={() => setExpandedImage("/images/microprev.png")}
                                    className="app-card__galleryButton"
                                    aria-label="Expand Micro preview"
                                >
                                    <Image
                                        src="/images/microprev.png"
                                        alt="Micro App Preview"
                                        width={130}
                                        height={130}
                                    />
                                </button>
                            </div>

                            <div className="app-card__footer">
                                <span className={`${lexend.className} eyebrow`}>Launching soon</span>
                                <span className={`${lexend.className} pill-note pill-note--muted`}>
                                    In private preview
                                </span>
                            </div>
                        </div>
                    </div>
            </section>

            {/* Modal for expanded Macro image */}
            {expandedImage && (
                <div
                    onClick={() => setExpandedImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        cursor: "zoom-out",
                    }}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
                    >
                        <Image
                            src={expandedImage}
                            alt="Expanded Macro"
                            width={600}
                            height={600}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "80vh",
                                borderRadius: 20,
                                background: "#fff",
                            }}
                        />
                        <button
                            onClick={() => setExpandedImage(null)}
                            style={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                background: "rgba(0,0,0,0.6)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: 32,
                                height: 32,
                                fontSize: 20,
                                cursor: "pointer",
                            }}
                            aria-label="Close expanded image"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

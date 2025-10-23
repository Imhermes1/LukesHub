"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

    return (
        <main className="snap-container">
            {/* Section 1: Hero */}
            <section className="snap-section" style={{ background: "#f6f7f9" }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 48px",
                    }}
                >
                    <Image
                        src="/images/Gemini_Generated_Image_bqrw9jbqrw9jbqrw.png"
                        alt="Luke Fornieri"
                        width={180}
                        height={180}
                        style={{
                            borderRadius: "50%",
                            marginBottom: 20,
                            objectFit: "cover",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                        }}
                        priority
                    />

                    <div
                        role="heading"
                        aria-level={1}
                        className={lexendTera.className}
                        style={{
                            fontWeight: 700,
                            fontSize: "3rem",
                            marginBottom: 8,
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        LUKE FORNIERI
                    </div>

                    <div
                        className={lexend.className}
                        style={{
                            color: "#666",
                            marginBottom: 32,
                            fontSize: "1.4rem",
                            textAlign: "center",
                        }}
                    >
                        Founder of FORNIERI & Lumora Labs
                    </div>

                    {/* Social Media Icons */}
                    <div
                        style={{
                            display: "flex",
                            gap: 24,
                            marginBottom: 40,
                        }}
                    >
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#444",
                                    transition: "all 0.15s",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 0,
                                    width: 40,
                                    height: 40,
                                }}
                                aria-label={social.label}
                            >
                                <Image
                                    src={social.iconSrc}
                                    alt={social.label}
                                    width={40}
                                    height={40}
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div
                        className={lexend.className}
                        style={{
                            position: "absolute",
                            bottom: 40,
                            color: "#999",
                            fontSize: "1.1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
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
                            style={{
                                animation: "bounce 2s infinite",
                            }}
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Section 2: Fornieri Real Estate */}
            <section className="snap-section" style={{ background: "#fcfcfc" }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 32,
                        padding: "40px 80px 120px 80px",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    {/* Top - Centered Logo */}
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Link href="https://fornieri.com" style={{ display: "inline-block" }}>
                            <Image
                                src="/images/fornieri.svg"
                                alt="Fornieri Real Estate"
                                width={220}
                                height={220}
                                style={{
                                    borderRadius: "26%",
                                    objectFit: "cover",
                                    background: "#fff",
                                    border: "2px solid #eaeaea",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                                    transition: "all 0.4s ease",
                                }}
                            />
                        </Link>
                    </div>

                    {/* Content - centered under logo */}
                    <div className="animate-item" style={{ textAlign: "center", maxWidth: 700 }}>
                        <h2
                            className={lexend.className}
                            style={{
                                fontWeight: 700,
                                fontSize: "1.75rem",
                                margin: "0 0 16px 0",
                                color: "#000",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            People. Purpose. Property.
                        </h2>

                        <p
                            className={lexend.className}
                            style={{
                                color: "#444",
                                fontSize: 18,
                                marginBottom: 32,
                                lineHeight: 1.7,
                            }}
                        >
                            We believe trust is the cornerstone of a great result. We provide a sophisticated, personal service and an intelligent strategy tailored for you, acting as dedicated advisors to ensure your property journey is seamless and successful.
                        </p>

                        {/* Vertical group: Medium preview above Coming soon */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, marginBottom: 16 }}>
                            <Link
                                href="https://medium.com/@lukeforn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={lexend.className}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "12px 20px",
                                    borderRadius: 12,
                                    background: "#fff",
                                    color: "#222",
                                    textDecoration: "none",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    fontSize: 15,
                                    fontWeight: 600,
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.12)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.backgroundColor = "#f9f9f9";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#fff";
                                }}
                                aria-label="Read my articles on Medium"
                            >
                                Read My Articles
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transition: "transform 0.3s ease" }}>
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <span
                                className={lexend.className}
                                style={{
                                    background: "#222",
                                    color: "#fff",
                                    padding: "16px 40px",
                                    borderRadius: 12,
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: 18,
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                                    transition: "all 0.2s",
                                    display: "inline-block",
                                    cursor: "default",
                                    opacity: 0.95,
                                }}
                                aria-disabled="true"
                            >
                                Coming soon
                            </span>
                        </div>

                        {/* Removed duplicate CTA - kept vertical grouped Coming soon above */}
                    </div>
                </div>
            </section>

            {/* Section 3: Lumora Labs */}
            <section className="snap-section" style={{ background: "#fff" }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "80px 100px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {/* Lumora Labs Header */}
                    <div className="animate-item" style={{ textAlign: "center", marginBottom: 50 }}>
                        <Image
                            src="/images/Lumora_logo_new.svg"
                            alt="Lumora Labs"
                            width={100}
                            height={100}
                            style={{
                                borderRadius: "26%",
                                objectFit: "cover",
                                background: "#fff",
                                marginBottom: 20,
                            }}
                        />

                        <h2
                            className={lexend.className}
                            style={{
                                fontWeight: 700,
                                fontSize: "2.5rem",
                                margin: "0 0 12px 0",
                                color: "#1d1d1f",
                                letterSpacing: "-0.015em",
                            }}
                        >
                            Lumora Labs
                        </h2>

                        <p
                            className={lexend.className}
                            style={{
                                fontSize: "1.25rem",
                                color: "#86868b",
                                margin: "0 0 24px 0",
                                fontWeight: 400,
                                maxWidth: 600,
                            }}
                        >
                            Building apps that feel minimal, powerful, and effortless.
                        </p>

                        <Link
                            href="https://lumoralabs.io"
                            className={lexend.className}
                            style={{
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontWeight: 400,
                            }}
                        >
                            Learn more →
                        </Link>
                    </div>

                    {/* Apps Grid */}
                    <div className="animate-item" style={{ width: "100%", display: "flex", gap: 60, alignItems: "flex-start" }}>
                        {/* Macro App Card */}
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <Image
                                src="/images/Icon-iOS-Default-1024x1024@1x.png"
                                alt="Macro"
                                width={100}
                                height={100}
                                style={{
                                    borderRadius: "22%",
                                    marginBottom: 20,
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                }}
                            />

                            <h3
                                className={lexend.className}
                                style={{
                                    fontWeight: 600,
                                    fontSize: "2rem",
                                    color: "#1d1d1f",
                                    margin: "0 0 8px 0",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Macro
                            </h3>

                            <p
                                className={lexend.className}
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#86868b",
                                    margin: "0 0 28px 0",
                                    fontWeight: 400,
                                }}
                            >
                                Track. Optimise. Achieve.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    justifyContent: "center",
                                }}
                            >
                                {macroImages.map((img) => (
                                    <button
                                        key={img.src}
                                        onClick={() => setExpandedImage(img.src)}
                                        style={{
                                            border: "none",
                                            background: "none",
                                            padding: 0,
                                            cursor: "pointer",
                                            borderRadius: 14,
                                        }}
                                        aria-label={`Expand ${img.alt}`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={130}
                                            height={130}
                                            style={{
                                                objectFit: "contain",
                                                borderRadius: 14,
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Micro App Card */}
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <Image
                                src="/images/micro.png"
                                alt="Micro"
                                width={100}
                                height={100}
                                style={{
                                    borderRadius: "22%",
                                    marginBottom: 20,
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                }}
                            />

                            <h3
                                className={lexend.className}
                                style={{
                                    fontWeight: 600,
                                    fontSize: "2rem",
                                    color: "#1d1d1f",
                                    margin: "0 0 8px 0",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Micro
                            </h3>

                            <p
                                className={lexend.className}
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#86868b",
                                    margin: "0 0 28px 0",
                                    fontWeight: 400,
                                }}
                            >
                                Plan. Flow. Do.
                            </p>

                            <button
                                onClick={() => setExpandedImage("/images/microprev.PNG")}
                                style={{
                                    border: "none",
                                    background: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    borderRadius: 14,
                                }}
                                aria-label="Expand Micro preview"
                            >
                                <Image
                                    src="/images/microprev.PNG"
                                    alt="Micro App Preview"
                                    width={130}
                                    height={130}
                                    style={{
                                        objectFit: "contain",
                                        borderRadius: 14,
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                    }}
                                />
                            </button>

                            <p
                                className={lexend.className}
                                style={{
                                    marginTop: 16,
                                    fontSize: "0.9rem",
                                    color: "#86868b",
                                    fontWeight: 400,
                                }}
                            >
                                Coming soon
                            </p>
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

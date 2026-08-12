"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ userEmail, userRole }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("app_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsThemeDropdownOpen(false);
  };

  // Helper to translate roles into human readable tags and colors
  const getRoleDetails = (role) => {
    switch (role) {
      case "ADMIN":
        return { label: "Administrador 👑", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.3)" };
      case "PRODUCTORA":
        return { label: "Productora 📤", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", border: "rgba(168, 85, 247, 0.3)" };
      case "SEO_MANAGER":
        return { label: "Gestor SEO 🔍", color: "#0ea5e9", bg: "rgba(14, 165, 233, 0.12)", border: "rgba(14, 165, 233, 0.3)" };
      default:
        return { label: role || "Usuario", color: "#94a3b8", bg: "rgba(148, 163, 184, 0.1)", border: "rgba(148, 163, 184, 0.2)" };
    }
  };

  const roleDetails = getRoleDetails(userRole);

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <nav style={{
      width: "100%",
      background: theme === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(15, 23, 42, 0.55)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: theme === "light" ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
      padding: "0.85rem 1.5rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "system-ui, -apple-system, sans-serif",
      transition: "background 0.3s ease, border-color 0.3s ease"
    }}>
      <div style={{
        maxWidth: "1450px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span style={{
            fontSize: "1.35rem",
            fontWeight: "900",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            AutomYouTube
          </span>
        </Link>

        {/* User Status / Role */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          background: theme === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.02)",
          padding: "0.35rem 0.85rem",
          borderRadius: "20px",
          border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.05)"
        }}>
          <span style={{ fontSize: "0.8rem", color: theme === "light" ? "#334155" : "#e2e8f0", fontWeight: "500" }}>{userEmail}</span>
          <span style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            color: roleDetails.color,
            backgroundColor: roleDetails.bg,
            border: `1px solid ${roleDetails.border}`,
            padding: "2px 8px",
            borderRadius: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.03em"
          }}>
            {roleDetails.label}
          </span>
        </div>

        {/* Navigation, Theme Selector Dropdown & Logout */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem"
        }}>
          {/* Links conditionally based on role */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {userRole === "ADMIN" && (
              <>
                <Link href="/" style={{
                  color: pathname === "/" ? "#a855f7" : (theme === "light" ? "#64748b" : "#94a3b8"),
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  transition: "color 0.2s"
                }}>
                  Inicio
                </Link>
                <Link href="/subidor" style={{
                  color: pathname === "/subidor" ? "#a855f7" : (theme === "light" ? "#64748b" : "#94a3b8"),
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  transition: "color 0.2s"
                }}>
                  Subidor
                </Link>
                <Link href="/editor" style={{
                  color: pathname === "/editor" ? "#a855f7" : (theme === "light" ? "#64748b" : "#94a3b8"),
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  transition: "color 0.2s"
                }}>
                  Editor
                </Link>
              </>
            )}
            {userRole === "PRODUCTORA" && (
              <Link href="/subidor" style={{
                color: "#a855f7",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: "600"
              }}>
                Subidor de Vídeos
              </Link>
            )}
            {userRole === "SEO_MANAGER" && (
              <Link href="/editor" style={{
                color: "#0ea5e9",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: "600"
              }}>
                Editor SEO
              </Link>
            )}
          </div>

          {/* Vertical Divider */}
          <div style={{ width: "1px", height: "16px", backgroundColor: theme === "light" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)" }} />

          {/* Theme Dropdown Menu */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              title="Cambiar tema de interfaz"
              style={{
                background: theme === "light" ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.05)",
                border: theme === "light" ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)",
                color: theme === "light" ? "#6d28d9" : "#fbbf24",
                padding: "0.35rem 0.75rem",
                borderRadius: "10px",
                fontSize: "0.8rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <span>{theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}</span>
              <span style={{ fontSize: "0.65rem", opacity: 0.7 }}>▾</span>
            </button>

            {isThemeDropdownOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: theme === "light" ? "#ffffff" : "#0f172a",
                border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                padding: "0.4rem",
                boxShadow: theme === "light" ? "0 10px 25px -5px rgba(0,0,0,0.15)" : "0 10px 25px -5px rgba(0,0,0,0.5)",
                minWidth: "150px",
                zIndex: 1050,
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem"
              }}>
                <button
                  type="button"
                  onClick={() => selectTheme("light")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    background: theme === "light" ? "rgba(124, 58, 237, 0.1)" : "transparent",
                    border: "none",
                    borderRadius: "8px",
                    color: theme === "light" ? "#7c3aed" : "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: theme === "light" ? "700" : "500",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s"
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== "light") e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== "light") e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>☀️ Modo Claro</span>
                  {theme === "light" && <span style={{ color: "#7c3aed", fontWeight: "bold" }}>✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => selectTheme("dark")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    background: theme === "dark" ? "rgba(139, 92, 246, 0.15)" : "transparent",
                    border: "none",
                    borderRadius: "8px",
                    color: theme === "dark" ? "#a855f7" : "#475569",
                    fontSize: "0.8rem",
                    fontWeight: theme === "dark" ? "700" : "500",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s"
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== "dark") e.currentTarget.style.background = "rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== "dark") e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>🌙 Modo Oscuro</span>
                  {theme === "dark" && <span style={{ color: "#a855f7", fontWeight: "bold" }}>✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#f87171",
              padding: "0.35rem 0.85rem",
              borderRadius: "10px",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
              e.currentTarget.style.borderColor = "#ef4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)";
              e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.3)";
            }}
          >
            Cerrar Sesión 🚪
          </button>
        </div>
      </div>
    </nav>
  );
}

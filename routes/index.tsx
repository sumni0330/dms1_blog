import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        background: "#FFF8E7",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Sumin's Creative Blog</title>
      </Head>
      <img
        src="profile.jpg"
        alt="My profile"
        width="150"
        height="150"
        style={{
          borderRadius: "50%",
          marginBottom: "1rem",
          border: "4px solid #EFE6D8",
          objectFit: "cover",
          boxShadow: "0 2px 16px 0 #E0D4BB55",
        }}
      />
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        Welcome{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <p style={{ fontSize: "1.15rem", marginBottom: "2rem", color: "#333" }}>
        Hi! I'm <b>Sumin</b>.
        <br />
        I explore creative coding, sound art, and ecological aesthetics.
        <br />
        and share project about these thing in here!
      </p>
      <a
        href="/blog"
        style={{
          display: "inline-block",
          padding: "1rem 2.2rem",
          background: "#EFE6D8", // 4. 진한 아이보리 버튼
          color: "#222",
          borderRadius: "12px",
          border: "1.5px solid #E0D4BB",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textDecoration: "none",
          boxShadow: "0 2px 8px 0 #eee",
          transition: "box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          (e.target as HTMLAnchorElement).style.boxShadow =
            "0 6px 24px 0 #E0D4BB99";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLAnchorElement).style.boxShadow = "0 2px 8px 0 #eee";
        }}
      >
        Dig in
      </a>
    </div>
  );
}

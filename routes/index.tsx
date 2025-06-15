import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        background: "#FFF8E7", // 1. 배경색 아이보리
        minHeight: "100vh", // 세로 가운데
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Willby’s Creative Blog</title>
      </Head>
      <img
        src="/static/profile.jpg" // 2. 실제 파일명에 맞게 (profile.png → profile.jpg)
        alt="My profile"
        width="150"
        height="150"
        style={{
          borderRadius: "50%",
          marginBottom: "1rem",
          border: "4px solid #EFE6D8", // 3. 진한 아이보리 테두리
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
        안녕하세요! 저는 <b>Willby</b>입니다.
        <br />
        창의적인 코딩, 사운드 아트, 생태적 미학을 탐구합니다.
        <br />
        실험적인 프로젝트와 과제 과정을 공유합니다.
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
        블로그 보러가기
      </a>
    </div>
  );
}

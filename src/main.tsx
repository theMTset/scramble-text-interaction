import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScrambleText } from "./ScrambleText";
import "./styles.css";

function App() {
  return (
    <main>
      <header className="intro">
        <p className="eyebrow">interaction study · React + TypeScript</p>
        <h1>A word that resolves wherever you land.</h1>
        <p className="lede">
          Enter anywhere. The word converges toward your pointer, holds one live letter,
          and leaves a precise trail as you move.
        </p>
      </header>

      <section className="demo-card" aria-labelledby="demo-title">
        <div className="card-heading">
          <span id="demo-title">Live component</span>
          <span>mouse · touch</span>
        </div>
        <div className="stage">
          <ScrambleText text="turbopuffer" className="demo-word" scrambleOnMount />
        </div>
        <p className="hint">Move across the word or drag with a finger.</p>
      </section>

      <section className="details" aria-label="How it works">
        <article>
          <span>01</span>
          <h2>Converges on entry</h2>
          <p>Letters resolve farthest-first toward the exact character where the pointer entered.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Follows the path</h2>
          <p>The active character keeps scrambling while released characters decay behind it.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Ready to adopt</h2>
          <p>Accessible text, reduced-motion behavior, strict TypeScript, and no animation library.</p>
        </article>
      </section>

      <section className="usage" aria-labelledby="usage-title">
        <div>
          <p className="eyebrow">drop-in usage</p>
          <h2 id="usage-title">One component, one call.</h2>
        </div>
        <pre><code>{`<ScrambleText\n  text="turbopuffer"\n  scrambleOnMount\n  className="wordmark"\n/>`}</code></pre>
      </section>

      <footer>
        <p>Inspired by Turbopuffer’s public header animation. This independent interaction study is not affiliated with Turbopuffer.</p>
        <a href="https://github.com/theMTset/scramble-text-interaction">View source on GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

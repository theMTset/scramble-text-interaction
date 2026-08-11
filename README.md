# Scramble Text Interaction

A pointer-following text scramble built as a reusable React + TypeScript component.
Enter the word anywhere and its letters resolve toward that point. Move across it and
the active character follows the pointer while a timed trail settles behind it. Work for desktop mouse interactions as well as mobile touch.

The interaction was inspired by Turbopuffer's public header wordmark and developed as
an independent interaction study. This project is not affiliated with Turbopuffer.

[![The settled “turbopuffer” word beside an example of its characters scrambling under the pointer.](docs/scramble-text-preview.png)](https://themtset.github.io/da/assets/work/scramble-text.html)

[**Try the interactive demo →**](https://themtset.github.io/da/assets/work/scramble-text.html)

## Try it

```sh
npm install
npm run dev
```

The demo supports mouse and touch input. To verify a production build:

```sh
npm run typecheck
npm run build
```

## Adopt the component

Copy [`src/ScrambleText.tsx`](src/ScrambleText.tsx) into a React project, then render it:

```tsx
import { ScrambleText } from "./ScrambleText";

<ScrambleText
  text="turbopuffer"
  scrambleOnMount
  className="wordmark"
/>
```

The component inherits typography and color from its surroundings. A monospaced font
is recommended so random replacement characters retain a stable width.

### Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `text` | `string` | required | The displayed word or phrase |
| `className` | `string` | none | Styling hook for the outer span |
| `scrambleOnMount` | `boolean` | `false` | Runs one centered convergence when mounted |

## Behavior

- Entry resolves farthest-first toward the character under the pointer.
- With a mouse, the character under the pointer keeps scrambling until the pointer leaves.
- Moving releases every crossed character into a 450ms trail, including characters
  skipped by a fast pointer movement.
- Leaving with a mouse or lifting a touch releases the final focused character into a
  two-second flicker before it settles. Compatibility mouse events are ignored so taps
  cannot leave a persistent mobile hover.
- `prefers-reduced-motion: reduce` renders stable text and disables the animation.
- Animated characters are hidden from assistive technology; screen readers receive the
  real text once through an inline visually-hidden element.
- The animation uses `requestAnimationFrame` only while characters are active.

## Integration change from the studied wordmark

The studied header triggered a whole-word left-to-right decode from the logo wrapper.
This component listens on the text itself because pointer position determines the entry
character and trail.

## License

[0BSD](LICENSE). Use, modify, and distribute it for any purpose, with or without credit.

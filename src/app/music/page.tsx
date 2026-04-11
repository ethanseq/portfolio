import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description: "What I'm listening to, influences, and what I'm working on.",
};

const BLUR_FADE_DELAY = 0.04;

const CURRENTLY_LISTENING = [
  "3AuEbScnrjiJne0Yxf8U1J",
  "2tGruyXi5FsyP9c5yGh9gz",
  "4C5GsegFD0j5ujSr1y93Oj",
  "2f9mmR37OEceYERbXml0Nj",
  "6YVGKyOJbmXMkyOzw0uhIm",
];

const INFLUENCES = [
  "Alfa Mist",
  "Billy Joel",
  "Chick Corea",
  "Chris Stapleton",
  "Collective Soul",
  "D'Angelo",
  "Daniel Caesar",
  "Dirty Loops",
  "Earth, Wind & Fire",
  "Elton John",
  "Fleetwood Mac",
  "Gareth Donkin",
  "Herbie Hancock",
  "Hiatus Kaiyote",
  "Jacob Collier",
  "Knower",
  "Louis Cole",
  "Maden Lane",
  "Michael Buble",
  "Michael Jackson",
  "Moonchild",
  "Nirvana",
  "Oscar Peterson",
  "Pearl Jam",
  "Quincy Jones",
  "Radiohead",
  "Robert Glasper",
  "Sade",
  "Soundgarden",
  "Steely Dan",
  "Stevie Wonder",
  "Supertramp",
  "The Internet",
  "Thundercat",
  "Tigran Hamasyan",
  "Tom Misch",
  "Weezer",
];

export default function MusicPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14">
      {/* Currently Listening */}
      <section id="listening">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">Currently Listening</h2>
            <p className="text-sm text-muted-foreground mt-1">What's been on repeat lately.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="grid grid-cols-1 gap-3">
              {CURRENTLY_LISTENING.map((id, i) => (
                <iframe
                  key={i}
                  src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Influences */}
      <section id="influences">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Influences</h2>
            <p className="text-sm text-muted-foreground mt-1">Artists that shaped how I think about music.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-2">
              {INFLUENCES.map((artist) => (
                <span
                  key={artist}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center text-sm font-medium"
                >
                  {artist}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Showcase</h2>
            <p className="text-sm text-muted-foreground mt-1">My own stuff.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
              <p className="text-muted-foreground text-center">Coming soon.</p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* What I'm Working On */}
      <section id="working-on">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">What I&apos;m Working On</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <p className="text-muted-foreground">
              Placeholder — describe what you&apos;re currently working on here.
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

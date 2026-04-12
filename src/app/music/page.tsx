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
  "5MW2uXND2cHfZwyer0zfdo",
];

const FAVOURITES: string[] = [
  "6eJczgR1Hi9pQMcy1NEIGG",
  "3l3kfVCK5rhMlLzVw8ZYzg",
  "3vJgLX7Q0En7PgeFhchPiK",
  "1QvWxgZvTU0w8rlPRE5Zrv",
  "2iE3FLUWvdD2hYiPM4TuLM",
  "4nOWiygXRUEOCdCsd13Tu4",
  "4Xi8a8NsExp64EXYW4QqA0",
  "1BktkzhQ6rhP1jTREtUdPK",
  "2EoOZnxNgtmZaD8uUmz2nD",
  "5mjBYXmYowc4NOZp0j2dSH",
  "6jUyYHDikmw9WltPojSR37",
  "6YTBfxkdGce9pLEy9jG9Jo",
  "2uROM73VxtppgLSE2k27nf",
  "7oOOI85fVQvVnK5ynNMdW7",
  "1HibhNhwk2tljwC4BGGLXV",
  "7w33EVmTnC5uBF49SvMoJ2",
  "4T6HLdP6OcAtqC6tGnQelG",
  "15ouqiBsgL12olEwP3COsH",
  "1h9j1FfcLUvGFYUumJd84S",
  "2GH5jo15wbTv1Ll7zXEzSg",
  "6mHOcVtsHLMuesJkswc0GZ",
  "16GUMo6u3D2qo9a19AkYct",
  "38zsOOcu31XbbYj9BIPUF1",
  "79NTKlW2NyHQmxqlj8QaKC",
  "6VoIBz0VhCyz7OdEoRYDiA",
  "2kRFrWaLWiKq48YYVdGcm8",
  "5kZvimVpm0J8Ti9EyQNeyZ",
  "4tE4vdQo0FziPi2NeGFBym",
  "55mvtucws4Mnro27744t9X",
  "0qRR9d89hIS0MHRkQ0ejxX",
  "5emxp4RqsF6QoAWXW2Afrk",
  "1c5KZhtOAOH7eFOlBekNhS",
  "6Ms01Gqi8gVBs14YrNUlVZ",
  "0eGpcLG96GWVCG4Ix3qLCp",
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
      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-2xl font-bold mb-3">Music</h1>
          <p className="text-muted-foreground">
            Keyboardist and pianist with a love for a wide range of genres. Currently gigging with a few different bands and getting more into music production.
          </p>
        </BlurFade>
      </section>

      {/* Currently Listening */}
      <section id="listening">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-xl font-bold">Currently Listening</h2>
            <p className="text-sm text-muted-foreground mt-1">What's been on repeat lately.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

      {/* Some of My Favourites */}
      <section id="favourites">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Some of My Favourites</h2>
            <p className="text-sm text-muted-foreground mt-1">Songs I keep coming back to.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FAVOURITES.map((id, i) => (
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
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Influences</h2>
            <p className="text-sm text-muted-foreground mt-1">Artists that shaped how I think about music.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
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
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Showcase</h2>
            <p className="text-sm text-muted-foreground mt-1">My own stuff.</p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
              <p className="text-muted-foreground text-center">Coming soon.</p>
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}

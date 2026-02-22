import { Heart } from 'lucide-react';
import PhotoGallery from './components/PhotoGallery';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/apology-background.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-apology-overlay/60 via-apology-overlay/80 to-apology-overlay/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl space-y-8">
            {/* Apology Card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl p-8 sm:p-12 lg:p-16 space-y-8">
              {/* Heart Icon */}
              <div className="flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-apology-rose to-apology-coral p-4 shadow-lg">
                  <Heart className="h-12 w-12 text-white fill-white" />
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center space-y-3">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-apology-deep tracking-tight">
                  I'm Sorry, Aafu
                </h1>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-apology-rose via-apology-coral to-apology-peach rounded-full" />
              </div>

              {/* Apology Message */}
              <div className="space-y-6 text-center">
                <p className="text-lg sm:text-xl text-apology-text leading-relaxed font-light">
                  Words cannot fully express how deeply sorry I am. I know I've hurt you, and that weighs heavily on my heart.
                </p>

                <p className="text-lg sm:text-xl text-apology-text leading-relaxed font-light">
                  You mean the world to me, Aafu. Every moment without your smile feels incomplete, and I realize now how much I took for granted. I was wrong, and I own that completely.
                </p>

                <p className="text-lg sm:text-xl text-apology-text leading-relaxed font-light">
                  I promise to do better, to be better. You deserve someone who cherishes every moment with you, who listens, who understands. I want to be that person for you.
                </p>

                <p className="text-lg sm:text-xl text-apology-text leading-relaxed font-light">
                  Please give me a chance to make things right. I miss you more than words can say.
                </p>

                {/* Signature */}
                <div className="pt-8">
                  <p className="font-serif text-2xl sm:text-3xl text-apology-deep italic">
                    With all my heart
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Heart className="h-6 w-6 text-apology-rose fill-apology-rose animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery Card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl p-8 sm:p-12 lg:p-16">
              <PhotoGallery />
            </div>

            {/* Forever Yours Message Card */}
            <div className="rounded-3xl bg-gradient-to-br from-apology-rose/10 via-apology-coral/10 to-apology-peach/10 backdrop-blur-sm shadow-2xl p-8 sm:p-12 border border-apology-rose/20">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Heart className="h-8 w-8 text-apology-rose fill-apology-rose animate-pulse" />
                </div>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-apology-deep italic leading-relaxed">
                  forever yours with love bablet
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <Heart className="h-5 w-5 text-apology-coral fill-apology-coral" />
                  <Heart className="h-5 w-5 text-apology-rose fill-apology-rose" />
                  <Heart className="h-5 w-5 text-apology-coral fill-apology-coral" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center">
          <p className="text-sm text-white/80 flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-apology-rose fill-apology-rose inline" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'sorry-aafu'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-white/60 mt-2">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

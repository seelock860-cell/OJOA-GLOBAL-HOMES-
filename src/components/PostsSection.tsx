import { ArrowRight } from 'lucide-react';
import { MARKET_POSTS, MarketPost } from '../data/realEstateData';

interface PostsSectionProps {
  onSelectPost: (post: MarketPost) => void;
}

export function PostsSection({ onSelectPost }: PostsSectionProps) {
  return (
    <section id="posts" className="bg-white py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0B1D3A]/70 mb-2">
            Market Posts &amp; Advisory
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] tracking-tight text-balance">
            Buyer Guides &amp; Nigerian Property Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MARKET_POSTS.map((post) => (
            <article
              key={post.id}
              className="border border-slate-200 rounded-xl p-6 flex flex-col justify-between bg-slate-50/50 hover:bg-white transition-colors"
            >
              <div>
                {/* Unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <span className="text-[#0B1D3A] font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0B1D3A] leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">{post.excerpt}</p>
              </div>

              <button
                type="button"
                onClick={() => onSelectPost(post)}
                className="min-h-[44px] inline-flex items-center gap-2 text-sm font-semibold text-[#0B1D3A] hover:text-yellow-600 transition-colors self-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D3A] rounded-md px-1 -ml-1"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

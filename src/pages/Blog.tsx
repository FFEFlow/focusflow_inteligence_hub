
import React from 'react';

const Blog: React.FC = () => (
  <div className="p-12 max-w-6xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-12">Strategic Insights</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: "The End of High-Friction Scaling", date: "Feb 11, 2026" },
        { title: "Why Neural Assets are the New Gold", date: "Feb 05, 2026" }
      ].map((post, i) => (
        <div key={i} className="premium-card p-10 rounded-[3rem]">
          <span className="text-[10px] gold-text font-black uppercase tracking-widest">{post.date}</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-4">{post.title}</h3>
          <p className="text-white/40 text-sm">Discover how elite operators are using AI to collapse time and expand legacy.</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;

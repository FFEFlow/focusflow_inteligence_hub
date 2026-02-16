
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User, UserTier } from '../types';
import { LOGO_SVG, ICONS, MODULES } from '../constants';

interface SidebarProps {
  user: User;
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onLogout, isOpen, onClose }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'Dashboard' },
    { name: 'Neural War Room', path: '/war-room', icon: 'Decision' },
    { name: 'Maturity Concierge', path: '/concierge', icon: 'Roadmap' },
    { name: 'Strategic Chat', path: '/chat', icon: 'AI' },
    { name: 'Master Guide', path: '/guide', icon: 'Guide' },
    { name: 'Profile Archives', path: '/history', icon: 'History' },
    { name: 'Account', path: '/profile', icon: 'Clarity' },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full w-72 bg-[#0A0E27] border-r border-[#D4B46C]/10 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto`}>
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-[#D4B46C]/10 rounded-2xl flex items-center justify-center p-2 border border-[#D4B46C]/20">
            {LOGO_SVG}
          </div>
          <div>
            <h1 className="text-white font-brand font-bold text-xl tracking-tighter">Coach Kay</h1>
            <p className="text-[9px] gold-text font-black uppercase tracking-[0.2em]">Intelligence Hub</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${isActive ? 'bg-[#D4B46C]/10 text-white' : 'text-[#FAF7F2]/40 hover:text-white hover:bg-white/5'}`
              }
            >
              <div className={`w-6 h-6 transition-colors ${({ isActive }: any) => isActive ? 'gold-text' : 'group-hover:gold-text'}`}>
                {(ICONS as any)[item.icon]}
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest">{item.name}</span>
            </NavLink>
          ))}

          <div className="pt-8 pb-4">
             <p className="px-6 text-[9px] text-white/20 font-black uppercase tracking-[0.3em] mb-4">Core Modules</p>
             <div className="space-y-1">
                {MODULES.slice(0, 5).map(m => (
                  <button
                    key={m.id}
                    onClick={() => { navigate(`/module/${m.id}`); onClose(); }}
                    className="w-full flex items-center gap-4 px-6 py-3 text-[#FAF7F2]/30 hover:text-white hover:bg-white/5 transition-all rounded-xl text-[10px] font-bold uppercase tracking-widest text-left"
                  >
                     <span className="w-4 h-4">{(ICONS as any)[m.icon]}</span>
                     {m.title}
                  </button>
                ))}
             </div>
          </div>
        </nav>

        <div className="mt-auto pt-8 border-t border-[#D4B46C]/10">
          <div className="flex items-center gap-4 mb-6 px-2">
            <div className="w-10 h-10 rounded-full border border-[#D4B46C]/30 overflow-hidden">
              <img src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">{user.name}</p>
              <p className="text-[9px] gold-text font-black uppercase tracking-tighter truncate opacity-70">{user.tier}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-6 py-4 text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all rounded-2xl text-[11px] font-black uppercase tracking-widest"
          >
            <div className="w-6 h-6">{(ICONS as any).Logout}</div>
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

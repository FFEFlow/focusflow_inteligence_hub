
import React, { useState, useEffect } from 'react';
import { User, UserTier, UserRole } from '../types';
import { TEAM_MEMBERS, LOGO_SVG } from '../constants';

interface AdminConsoleProps {
  user: User;
}

const AdminConsole: React.FC<AdminConsoleProps> = ({ user }) => {
  const [registry, setRegistry] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [stats, setStats] = useState({ active: 0, total: 0, revenue: 0 });
  const [view, setView] = useState<'registry' | 'security'>('registry');

  useEffect(() => {
    // Load local registry (simulated database)
    const savedRegistry = localStorage.getItem('coach_kay_global_registry');
    let currentRegistry = savedRegistry ? JSON.parse(savedRegistry) : [...TEAM_MEMBERS];

    // Ensure team members are always there
    TEAM_MEMBERS.forEach(tm => {
      if (!currentRegistry.find((r: any) => r.email === tm.email)) {
        currentRegistry.push({ ...tm, tier: UserTier.SUMMIT, status: 'active', lastAccess: new Date().toISOString() });
      }
    });

    setRegistry(currentRegistry);
    setStats({
      active: currentRegistry.filter((u: any) => u.status === 'active').length,
      total: currentRegistry.length,
      revenue: currentRegistry.length * 697 // Simulated calculation
    });
  }, []);

  const saveRegistry = (newRegistry: any[]) => {
    setRegistry(newRegistry);
    localStorage.setItem('coach_kay_global_registry', JSON.stringify(newRegistry));
  };

  const handleRevoke = (email: string) => {
    const updated = registry.map(u => u.email === email ? { ...u, status: 'revoked' } : u);
    saveRegistry(updated);
  };

  const handleRestore = (email: string) => {
    const updated = registry.map(u => u.email === email ? { ...u, status: 'active' } : u);
    saveRegistry(updated);
  };

  const handleUpdateEmail = (oldEmail: string, newEmail: string) => {
    const updated = registry.map(u => u.email === oldEmail ? { ...u, email: newEmail } : u);
    saveRegistry(updated);
    setEditingUser(null);
  };

  return (
    <div className="p-8 md:p-16 max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#D4B46C]/10 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-black gold-text uppercase tracking-[0.5em]">Command Center Active</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-brand font-bold text-white tracking-tighter uppercase italic">
            Admin Intelligence <span className="text-[#D4B46C]">Registry</span>
          </h1>
          <p className="text-[#FAF7F2]/40 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
            Monitor neural traffic, manage operator access, and maintain the integrity of the Coach Kay ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
           <div className="premium-card p-6 rounded-3xl border border-[#D4B46C]/10 text-center">
              <p className="text-[9px] text-[#D4B46C] font-black uppercase tracking-widest mb-2">Total Access</p>
              <p className="text-3xl font-brand text-white">{stats.total}</p>
           </div>
           <div className="premium-card p-6 rounded-3xl border border-[#D4B46C]/10 text-center">
              <p className="text-[9px] text-[#D4B46C] font-black uppercase tracking-widest mb-2">Active Nodes</p>
              <p className="text-3xl font-brand text-white">{stats.active}</p>
           </div>
        </div>
      </div>

      {/* REGISTRY TABLE */}
      <div className="premium-card rounded-[3rem] border border-[#D4B46C]/20 overflow-hidden bg-black/40 backdrop-blur-3xl shadow-2xl">
        <div className="p-10 border-b border-white/5 flex justify-between items-center">
          <div className="flex gap-8">
             <button
               onClick={() => setView('registry')}
               className={`text-lg font-brand font-bold uppercase tracking-widest transition-all ${view === 'registry' ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
             >
               Neural Traffic Logs
             </button>
             <button
               onClick={() => setView('security')}
               className={`text-lg font-brand font-bold uppercase tracking-widest transition-all ${view === 'security' ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
             >
               Security Briefing
             </button>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white/5 rounded-xl text-[9px] font-black text-[#D4B46C] uppercase tracking-widest border border-[#D4B46C]/20">
                Live Feed
             </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          {view === 'registry' ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Operator</th>
                <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Intelligence Tier</th>
                <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Status</th>
                <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Last Uplink</th>
                <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {registry.map((regUser, idx) => (
                <tr key={regUser.email} className="group hover:bg-[#D4B46C]/5 transition-colors border-b border-white/5">
                  <td className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-[#D4B46C]/20 overflow-hidden flex-shrink-0">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${regUser.email}`} alt="avatar" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-white uppercase tracking-tight">{regUser.name}</p>
                          {regUser.sharingAlert && (
                             <span className="px-2 py-0.5 bg-red-500/20 text-red-500 text-[8px] font-black uppercase rounded-md animate-pulse">Sharing Alert</span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/40 font-mono italic">{regUser.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className="px-4 py-2 bg-[#D4B46C]/10 rounded-xl text-[9px] font-black gold-text uppercase tracking-[0.2em] border border-[#D4B46C]/30">
                      {regUser.tier || UserTier.SUMMIT}
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full ${regUser.status === 'revoked' ? 'bg-red-500' : 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'}`}></div>
                       <span className={`text-[10px] font-black uppercase tracking-widest ${regUser.status === 'revoked' ? 'text-red-500' : 'text-green-500'}`}>
                         {regUser.status || 'Active'}
                       </span>
                    </div>
                  </td>
                  <td className="p-8">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      {regUser.lastAccess ? new Date(regUser.lastAccess).toLocaleDateString() : 'INITIALIZING...'}
                    </p>
                  </td>
                  <td className="p-8 text-right space-x-4">
                    <button
                      onClick={() => setEditingUser(regUser)}
                      className="text-[10px] font-black text-white/40 hover:text-[#D4B46C] uppercase tracking-widest transition-all"
                    >
                      Update
                    </button>
                    {regUser.status === 'revoked' ? (
                       <button onClick={() => handleRestore(regUser.email)} className="text-[10px] font-black text-green-500/60 hover:text-green-500 uppercase tracking-widest transition-all">Restore</button>
                    ) : (
                       <button onClick={() => handleRevoke(regUser.email)} className="text-[10px] font-black text-red-500/60 hover:text-red-500 uppercase tracking-widest transition-all">Revoke</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          ) : (
            <div className="p-12 space-y-12 max-w-4xl animate-fade-in">
               <section className="space-y-6">
                  <h4 className="text-2xl font-brand font-bold text-[#D4B46C] uppercase italic">I. Authentication Architecture</h4>
                  <p className="text-[#FAF7F2]/60 leading-relaxed">
                    The Coach Kay Intelligence Hub currently utilizes a <span className="text-white font-bold">Client-Side Registry Protocol</span>.
                    This system cryptographically binds user emails to their browser signature upon the first successful uplink.
                  </p>
                  <ul className="space-y-4 text-sm text-[#FAF7F2]/40 italic">
                    <li className="flex gap-4"><span className="text-[#D4B46C]">»</span> Identity Binding: Sessions are locked to unique browser fingerprints.</li>
                    <li className="flex gap-4"><span className="text-[#D4B46C]">»</span> Access Code Paywall: Entrance requires a legacy key (FOCUS, LEGACY2026).</li>
                    <li className="flex gap-4"><span className="text-[#D4B46C]">»</span> Local Revocation: Admins can manually decommission neural identities from the registry.</li>
                  </ul>
               </section>

               <section className="space-y-6">
                  <h4 className="text-2xl font-brand font-bold text-[#D4B46C] uppercase italic">II. Sharing Prevention</h4>
                  <p className="text-[#FAF7F2]/60 leading-relaxed">
                    To prevent "Link Forwarding" or access sharing, the system monitors <span className="text-white font-bold">Browser Collision</span>.
                    If the same email is detected with a different device signature, a <span className="text-red-500 font-bold">Sharing Alert</span> is triggered in the logs.
                  </p>
               </section>

               <section className="space-y-6 p-8 bg-white/5 rounded-3xl border border-blue-500/20">
                  <h4 className="text-xl font-brand font-bold text-blue-400 uppercase italic">III. Scalability Roadmap (Recommendation)</h4>
                  <p className="text-[#FAF7F2]/60 text-sm leading-relaxed">
                    To scale to thousands of global users with absolute security, it is recommended to integrate <span className="text-white font-bold">Supabase Auth</span> or <span className="text-white font-bold">Firebase</span>.
                    This will allow for:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#D4B46C]">Remote Revocation</div>
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#D4B46C]">Multi-Factor Auth</div>
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#D4B46C]">IP Geo-Fencing</div>
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#D4B46C]">Email Verification</div>
                  </div>
               </section>
            </div>
          )}
        </div>
      </div>

      {/* EDIT MODAL */}
      {editingUser && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6">
           <div className="premium-card p-12 rounded-[3rem] border border-[#D4B46C]/40 max-w-md w-full space-y-8 animate-scale-in">
              <h2 className="text-3xl font-brand font-bold text-white uppercase tracking-tighter">Modify Credentials</h2>
              <div className="space-y-4">
                 <label className="text-[10px] font-black text-[#D4B46C] uppercase tracking-widest block">Neural Identifier (Email)</label>
                 <input
                    type="email"
                    defaultValue={editingUser.email}
                    id="edit-email-input"
                    className="w-full bg-black/40 border-2 border-[#D4B46C]/20 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-[#D4B46C]"
                 />
              </div>
              <div className="flex gap-4">
                 <button
                   onClick={() => handleUpdateEmail(editingUser.email, (document.getElementById('edit-email-input') as HTMLInputElement).value)}
                   className="flex-1 py-5 gold-gradient text-black font-black uppercase tracking-[0.3em] rounded-2xl text-[10px]"
                 >
                   Save Update
                 </button>
                 <button onClick={() => setEditingUser(null)} className="flex-1 py-5 bg-white/5 text-white/40 font-black uppercase tracking-[0.3em] rounded-2xl text-[10px]">Cancel</button>
              </div>
           </div>
        </div>
      )}

      {/* SECURITY ADVISORY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="premium-card p-10 rounded-[2.5rem] border border-red-500/10 bg-red-500/[0.02]">
            <h4 className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               Anti-Sharing Protocol
            </h4>
            <p className="text-[#FAF7F2]/40 text-xs leading-relaxed uppercase tracking-widest font-bold">
               Access codes are tied to single-browser identity markers. Concurrent neural uplinks from multiple IPs will trigger a legacy lockout.
            </p>
         </div>
         <div className="premium-card p-10 rounded-[2.5rem] border border-[#D4B46C]/10 bg-[#D4B46C]/[0.02]">
            <h4 className="text-[11px] font-black gold-text uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               Identity Binding
            </h4>
            <p className="text-[#FAF7F2]/40 text-xs leading-relaxed uppercase tracking-widest font-bold">
               Every operator email is cryptographically bound to their first session code. This prevents the "Forwarding" of paid access to unauthorized nodes.
            </p>
         </div>
         <div className="premium-card p-10 rounded-[2.5rem] border border-blue-500/10 bg-blue-500/[0.02]">
            <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               Next-Gen Roadmap
            </h4>
            <p className="text-[#FAF7F2]/40 text-xs leading-relaxed uppercase tracking-widest font-bold">
               To scale to 1000+ users, integrate Supabase Auth for real-time remote revocation and SOC2-compliant identity management.
            </p>
         </div>
      </div>
    </div>
  );
};

export default AdminConsole;

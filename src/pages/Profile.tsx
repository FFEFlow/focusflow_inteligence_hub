
import React from 'react';
import { User } from '../types';

const Profile: React.FC<{ user: User; onUpdateUser: (u: User) => void }> = ({ user }) => (
  <div className="p-12 max-w-4xl mx-auto">
    <h2 className="text-4xl font-brand font-bold text-white mb-8">User Profile</h2>
    <div className="premium-card p-10 rounded-[3rem] space-y-8">
      <div className="flex items-center gap-8">
        <div className="w-24 h-24 rounded-full border-4 border-[#D4B46C]/30 overflow-hidden">
          <img src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} alt="avatar" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{user.name}</h3>
          <p className="text-gold-text font-black uppercase tracking-widest text-xs">{user.tier}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
        <div>
          <label className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-2">Email Address</label>
          <p className="text-white font-bold">{user.email}</p>
        </div>
        <div>
          <label className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-2">Account Role</label>
          <p className="text-white font-bold">{user.role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;

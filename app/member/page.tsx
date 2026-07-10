"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Member {
  MemberId: string;
  FullName: string;
  Email: string;
  Fields: string;
  Status: string;
  ImageURL: string;
  Group: string;
  Role: string;
}

export default function MembersListPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/member");
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        {/* Custom loading spinner */}
        <div className="w-10 h-10 border-4 border-zinc-800 border-t-cyan-500 rounded-full animate-spin" />
        <span className="text-zinc-400 font-medium tracking-wide">
          Loading Members...
        </span>
      </div>
    );
  }

  const coreTeam = members.filter(
    (member) => member.Role === "Core Member"
  );

  const otherMembers = members.filter(
    (member) => member.Role !== "Core Member"
  );

  const MemberCard = ({ member }: { member: Member }) => {
    const isCore = member.Role === "Core Member";
    const isActive = member.Status === "Active";

    return (
      <div 
        className="
          flex flex-col
          bg-zinc-900 
          border border-zinc-800 
          rounded-2xl 
          transition-all duration-300 
          hover:border-cyan-500/40 
          hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] 
          hover:-translate-y-1
        "
      >
        {/* Card Header */}
        <div className="flex justify-between items-start pt-4 px-4">
          <span 
            className={`
              text-xs px-3 py-1 rounded-full font-medium tracking-wide
              ${isCore ? "bg-cyan-500/10 text-cyan-400" : "bg-zinc-800 text-zinc-300"}
            `}
          >
            {member.Role}
          </span>
          
          <div className="flex items-center gap-2">
            <div 
              className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-500" : "bg-amber-500"}`} 
            />
            <span className="text-xs text-zinc-400 font-medium">
              {member.Status}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col items-center justify-center px-4 py-4">
          <div className="relative mb-5 mt-2">
            {/* Glow effect for Core Member */}
            {isCore && (
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
            )}
            
        <Image
  src={
    member.ImageURL &&
    member.ImageURL.trim() !== ""
      ? member.ImageURL
      : "/no-user-dark.svg"
  }
  alt={member.FullName}
  width={1200}
  height={1200}
  className={`
    relative z-10
    w-24 h-24
    rounded-full
    object-cover
    ring-2 ring-offset-4 ring-offset-zinc-900
    ${isCore ? "ring-cyan-500/60" : "ring-zinc-700"}
  `}
/>
          </div>
          
          <h3 className="text-xl font-bold text-zinc-100 text-center">
            {member.FullName}
          </h3>
          <p className="text-sm text-zinc-400 mt-1 text-center truncate w-full">
            {member.Email}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex flex-wrap justify-center gap-2 pb-6 pt-2 px-4 mt-auto">
          <span className="text-xs px-3 py-1.5 rounded-lg bg-black border border-zinc-800 text-zinc-300">
            {member.Fields}
          </span>
          <span className="text-xs px-3 py-1.5 rounded-lg bg-black border border-zinc-800 text-zinc-300">
            {member.Group}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide mb-6 border border-cyan-500/20">
            Research Community
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
            Research <span className="text-cyan-400">Members</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-2xl text-lg">
            Meet our researchers, contributors and Core Member members driving
            innovation and collaboration.
          </p>
        </div>

        {/* Core Member Section */}
        {coreTeam.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 bg-cyan-500 rounded-full" />
              <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
                Core Member
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <MemberCard
                  key={member.MemberId || `core-${index}`}
                  member={member}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Members Section */}
        {otherMembers.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 bg-zinc-600 rounded-full" />
              <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
                Research Members
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherMembers.map((member, index) => (
                <MemberCard
                  key={member.MemberId || `member-${index}`}
                  member={member}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Orbit } from "@/components/ui/loader";
interface Member {
  MemberId: string;
  FullName: string;
  Email: string;
  Fields: string;
  Status: string;
  ImageURL: string;
  Group: string;
  Role: string;
  SpecialRole: string; // Added to interface mapping
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
      <div className="-mt-20 h-screen flex flex-col items-center justify-center">
   
<Orbit size="lg" />

      </div>
    );
  }

  // Updated layout filtration to check SpecialRole for Founder status
  const founders = members.filter((member) => member.SpecialRole === "Founder");
  const otherMembers = members.filter((member) => member.SpecialRole !== "Founder");

  const MemberCard = ({ member }: { member: Member }) => {
    const isFounder = member.SpecialRole === "Founder";
    const isActive = member.Status === "Active";

    return (
      <div
        className="
          flex flex-col
          bg-white dark:bg-zinc-900 
          border border-zinc-200 dark:border-zinc-800 
          rounded-4xl 
          transition-all duration-300 
          hover:border-cyan-500/40 
          hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] 
          hover:-translate-y-1
        "
      >
        {/* Card Header */}
        <div className="flex justify-between items-start pt-4 px-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
            />
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {member.Status}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col items-center justify-center px-4 py-4">
          <div className="relative mb-5 mt-2">
            {/* Glow effect for Founder profiles */}
            {isFounder && (
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
            )}

            <Image
              src={
                member.ImageURL && member.ImageURL.trim() !== ""
                  ? member.ImageURL
                  : "/no-user-dark.svg"
              }
              alt={member.FullName}
              width={120}
              height={120}
              className={`
                relative z-10
                w-24 h-24
                rounded-full
                object-cover
                object-top
                ring-2 ring-offset-4 ring-offset-white dark:ring-offset-zinc-900
                ${isFounder ? "ring-cyan-500/60" : "ring-zinc-300 dark:ring-zinc-700"}
              `}
            />
          </div>

          <h3 className="md:text-base text-sm font-bold text-zinc-950 dark:text-zinc-100 text-center">
            {member.FullName}
          </h3>

          <p
            className={`
              text-xs px-3 py-0.5 mt-3 rounded-full border font-medium tracking-wide
              ${isFounder ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700"}
            `}
          >
            {member.Role}
          </p>
        </div>

        {/* Card Footer */}
        <hr className="border-zinc-200 dark:border-zinc-800" />

        <div className="flex flex-wrap justify-center gap-2 pb-4 pt-3 px-4 mt-auto text-sm">
          <p className="text-zinc-500 dark:text-zinc-600">
            Academic Field:{" "}
            <span className="text-zinc-800 dark:text-zinc-300 font-medium">{member.Fields}</span>
          </p>

          <Separator orientation="vertical" className="bg-zinc-200 dark:bg-zinc-800 h-5" />
          
          <p className="text-zinc-500 dark:text-zinc-600">Group:
            <span className="text-zinc-800 dark:text-zinc-300 font-medium"> {member.Group} </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-10 font-sans transition-colors duration-300">
      <div className="">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center pb-10">
    
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 dark:text-zinc-100 tracking-tight">
            Research <span className="text-cyan-500 dark:text-cyan-400">Members</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-5 max-w-2xl text-lg">
            Meet our researchers, contributors and structural core team members driving
            innovation and collaboration.
          </p>
        </div>

        {/* Founders Section */}
        {founders.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 bg-cyan-500 rounded-full" />
              <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100 tracking-tight">
                Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founders.map((member, index) => (
                <MemberCard
                  key={member.MemberId || `founder-${index}`}
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
              <div className="h-6 w-1 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
              <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100 tracking-tight">
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
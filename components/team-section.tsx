"use client"
import Image from "next/image"
import { Globe, Mail, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FaGoogleScholar, FaResearchgate } from "react-icons/fa6"
import Link from "next/link"
import { LiaLinkedin } from "react-icons/lia"
import { FaLinkedin } from "react-icons/fa"
import { useEffect, useMemo, useState } from "react";

interface members {
  MemberId: string;
  FullName: string;
  Email: string;
  Fields: string;
  Status: string;
  ImageURL: string;
  Group: string;
  Role: string;
  SpecialRole: string;
  LKDN: string;
  GS: string;
}

export default function TeamSection() {
  const [members, setMembers] = useState<members[]>([]);
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

  // Filter for 'Active' status before getting a random subset
  const randomMembers = useMemo(() => {
    const activeMembers = members.filter(
      (m) => m.Status?.toLowerCase() === "active"
    );
    return [...activeMembers]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [members]);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 bg-white dark:bg-transparent">
        <div className="w-10 h-10 border-4 border-zinc-200 dark:border-zinc-800 border-t-primary rounded-full animate-spin" />
        <span className="text-zinc-500 dark:text-muted-foreground text-sm font-medium">Loading Team...</span>
      </div>
    );
  }

  return (
    <section id="team" className="py-24 bg-white dark:bg-black">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">The People</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-zinc-950 dark:text-foreground text-balance">
            FOUNDERS &<br />
            <span className="text-primary">MEMBERS</span>
          </h2>
          <p className="text-zinc-600 dark:text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Built by engineers, for engineers. Meet the team behind ElectroXplore and the growing community of researchers and learners.
          </p>
        </div>

        {/* Founders grid */}
        <div className="mb-16">
          <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
            Founders
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {members
              .filter((f) => f.SpecialRole === "Founder")
              .map((f) => (
                <div
                  key={f.FullName}
                  className="group bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors shadow-sm dark:shadow-none"
                >
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={f.ImageURL}
                      alt={`${f.FullName}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 dark:from-background dark:via-background/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 z-10">
                      <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs shadow-none">
                        {f.Fields}
                      </Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-zinc-950 dark:text-foreground text-lg leading-tight">
                        {f.FullName}
                      </h3>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">
                        {f.Role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {f.LKDN && (
                        <Link
                          href={f.LKDN}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="w-8 h-8 bg-zinc-50 dark:bg-surface rounded-lg flex items-center justify-center text-zinc-500 dark:text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-zinc-200 dark:border-border"
                        >
                          <FaLinkedin className="w-3.5 h-3.5" />
                        </Link>
                      )}

                      {f.GS && (
                        <Link
                          href={f.GS}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Google Scholar"
                          className="w-8 h-8 bg-zinc-50 dark:bg-surface rounded-lg flex items-center justify-center text-zinc-500 dark:text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-zinc-200 dark:border-border"
                        >
                          <FaGoogleScholar className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Active members strip */}
        <div>
          <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
            Active Members
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {randomMembers.map((m) => (
              <div
                key={m.FullName}
                className="group bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-primary/30 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-zinc-200 dark:border-border group-hover:border-primary/40 transition-colors">
                  <Image
                    src={
                      m.ImageURL && m.ImageURL.trim() !== ""
                        ? m.ImageURL
                        : "/no-user-dark.svg"
                    }
                    alt={m.FullName}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-zinc-950 dark:text-foreground text-sm line-clamp-1">
                    {m.FullName}
                  </h4>
                  <p className="text-zinc-500 dark:text-muted-foreground text-xs capitalize">{m.Status}</p>
                  <Badge className="mt-1.5 bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 shadow-none">
                    {m.Fields}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action section */}
          <div className="mt-8 bg-white dark:bg-primary/5 border border-zinc-200 dark:border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none">
            <div>
              <h4 className="font-heading font-bold text-zinc-950 dark:text-foreground text-lg">Become a Member</h4>
              <p className="text-zinc-600 dark:text-muted-foreground text-sm mt-1">
                Join our growing community. Research membership is currently free.
              </p>
            </div>
            <Link 
              href="/register"
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-colors text-center w-full sm:w-auto"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
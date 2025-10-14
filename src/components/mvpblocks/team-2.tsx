'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks?: { platform: 'github' | 'twitter' | 'linkedin'; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

// Default team members data - CORRIGIDO
const defaultMembers: TeamMember[] = [
    {
    name: 'Felipe Sales',
    role: 'Contador',
    imageUrl: '/felipe.png',
    socialLinks: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Robert Brown',
    role: 'CEO & Co-Founder',
    imageUrl: 'https://i.pravatar.cc/400?img=3',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Leslie Livingston',
    role: 'CTO & Co-Founder',
    imageUrl: 'https://i.pravatar.cc/400?img=1',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Helene Engels',
    role: 'Front-end Developer',
    imageUrl: 'https://i.pravatar.cc/400?img=2',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
    ],
  },
];

export default function Team2({
  title = 'Nossa equipe faz a diferença',
  subtitle = "Profissionais qualificados unindo expertise multidisciplinar para entregar excelência e resultados extraordinários.",
  members = defaultMembers,
  className,
}: TeamProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden py-16 md:py-24',
        className,
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="from-foreground/80 via-foreground to-foreground/80 dark:from-foreground/70 dark:via-foreground dark:to-foreground/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground md:text-lg">{subtitle}</p>
        </motion.div>

        {/* Team members grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamMemberCard key={`${member.name}-${index}`} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [imgError, setImgError] = React.useState(false);

  const handleImageError = () => {
    console.log(`Erro ao carregar imagem: ${member.imageUrl}`);
    setImgError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Image container */}
      <div className="bg-muted relative aspect-square overflow-hidden rounded-xl">
        <div className="from-background/80 absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {imgError ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">Imagem não encontrada</span>
          </div>
        ) : (
          <img
            src={member.imageUrl}
            alt={member.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
            onLoad={() => console.log(`Imagem carregada: ${member.imageUrl}`)}
          />
        )}

        {/* Social links that appear on hover */}
        {member.socialLinks && (
          <div className="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.socialLinks.map((link) => (
              <Link
                prefetch={false}
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all"
              >
                {link.platform === 'github' && (
                  <GithubIcon className="h-5 w-5" />
                )}
                {link.platform === 'twitter' && (
                  <TwitterIcon className="h-5 w-5" />
                )}
                {link.platform === 'linkedin' && (
                  <LinkedinIcon className="h-5 w-5" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Name and role */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-primary text-sm">{member.role}</p>
      </div>
    </motion.div>
  );
}
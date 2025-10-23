"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  company: string;     // "IBM"
  domain: string;      // "ibm.com"
  size?: number;       // px
  className?: string;
};

export default function CompanyLogo({ company, domain, size = 40, className }: Props) {
  const [err, setErr] = useState(false);

  // URL de logo por dominio (Clearbit)
  const src = useMemo(() => `https://logo.clearbit.com/${domain}`, [domain]);
  const initials = company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (err) {
    return (
      <div
        className={`grid place-items-center rounded-md border text-xs ${className ?? ""}`}
        style={{ width: size, height: size }}
        aria-label={company}
        title={company}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${company} logo`}
      width={size}
      height={size}
      className={className}
      onError={() => setErr(true)}
      referrerPolicy="no-referrer"
    />
  );
}

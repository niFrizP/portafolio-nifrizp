"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  company: string;
  domain?: string;
  name?: string;
  size?: number;
  className?: string;
};

export default function CompanyLogo({
  company,
  domain,
  name,
  size = 40,
  className = "",
}: Props) {
  const [resolvedDomain, setResolvedDomain] = useState<string | null>(domain ?? null);
  const [failed, setFailed] = useState(false);

  // Publishable Key para Image CDN (seguro en cliente)
  const pk = process.env.NEXT_PUBLIC_LOGO_DEV_PK || process.env.LOGO_DEV_PK;
  // TIP: expón pk como NEXT_PUBLIC_LOGO_DEV_PK si prefieres

  useEffect(() => {
    let ignore = false;

    async function lookup() {
      if (domain || !name) return; // ya tenemos dominio o no hay nombre
      try {
        const res = await fetch(`/api/brand-search?q=${encodeURIComponent(name)}`, { cache: "force-cache" });
        if (!res.ok) throw new Error("brand search failed");
        const data = await res.json();
        if (!ignore) setResolvedDomain(data.domain ?? null);
      } catch {
        if (!ignore) setResolvedDomain(null);
      }
    }

    lookup();
    return () => { ignore = true; };
  }, [domain, name]);

  const src = useMemo(() => {
    if (!resolvedDomain || !pk) return null;
    // Image CDN: https://img.logo.dev/<domain>?token=pk_...&format=svg&size=64
    // Doc keys: publishable pk_ para imágenes. Nunca exponer sk_. 
    // https://docs.logo.dev/platform/api-keys
    const params = new URLSearchParams({ token: pk, size: String(size), format: "png" });
    return `https://img.logo.dev/${resolvedDomain}?${params.toString()}`;
  }, [resolvedDomain, pk, size]);

  const initials = useMemo(
    () => company.split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase(),
    [company]
  );

  if (!src || failed) {
    return (
      <div
        className={`grid place-items-center rounded-md border text-xs ${className}`}
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
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
    />
  );
}

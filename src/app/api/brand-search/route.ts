import { NextResponse } from "next/server";

export const revalidate = 60 * 60 * 24; // cache 24h (ajusta a gusto)

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();
    if (!q) {
        return NextResponse.json({ error: "Missing q" }, { status: 400 });
    }

    const sk = process.env.LOGO_DEV_SK;
    if (!sk) {
        return NextResponse.json({ error: "Missing LOGO_DEV_SK" }, { status: 500 });
    }

    // Llamada a Brand Search (server-side, con SK)
    // Doc: https://docs.logo.dev/brand-search/introduction
    const resp = await fetch(`https://api.logo.dev/search?q=${encodeURIComponent(q)}`, {
        headers: { Authorization: `Bearer ${sk}` },
        // Cache del lado del servidor para reducir hits y latencia
        next: { revalidate: 60 * 60 * 24 },
    });

    if (!resp.ok) {
        return NextResponse.json({ error: "Search failed" }, { status: 502 });
    }

    const json = await resp.json();
    // Según doc, devuelve coincidencias/”domains”; tomamos el más popular
    // (ajusta a tu gusto según el payload real de tu query)
    const best = Array.isArray(json?.results) ? json.results[0] : json;
    const domain = best?.domain || best?.url || best?.website || null;

    if (!domain) {
        return NextResponse.json({ domain: null }, { status: 200 });
    }

    return NextResponse.json({ domain }, { status: 200 });
}

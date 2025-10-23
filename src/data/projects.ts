export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    repo?: string;
    demo?: string;
    image?: string; // /public/*
    year?: number;
    content?: string; // breve descripción larga (markdown simple)

};

export const projects: Project[] = [
    {
        slug: "tqmd-intranet",
        title: "TQMD Intranet",
        summary:
            "Portal interno con Next.js (App Router), auth JWT y dashboards. Enfoque en performance y DX.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        repo: "https://github.com/tu-user/tqmd-intranet",
        demo: "https://tqmd-intranet-demo.vercel.app",
        image: "/thumbs/tqmd-intranet.png",
        year: 2025,
    },
    {
        slug: "api-turnos",
        title: "API de Turnos Clínicos",
        summary:
            "API REST con NestJS + Prisma. Cache Redis, Docker y pruebas e2e.",
        tags: ["NestJS", "Prisma", "Redis"],
        repo: "https://github.com/tu-user/api-turnos",
        image: "/thumbs/api-turnos.png",
        year: 2024,
    },
    {
        slug: "monitor-iot",
        title: "Monitor IoT",
        summary:
            "Dashboard en tiempo real con WebSockets/MQTT y alertas.",
        tags: ["React", "MQTT", "WebSockets"],
        demo: "https://monitor-iot-demo.vercel.app",
        year: 2024,
    },
];

export function getAllProjects() {
    return projects;
}
export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
export function getAllSlugs() {
    return projects.map((p) => p.slug);
}

import PocketBase from "pocketbase";

export const pb = new PocketBase("https://sae203.melvyn-philippon.fr/");

export function getFileURL(record, field, thumb) {
    if (!record || !field || !record[field]) return null;
    return pb.files.getURL(record, record[field], { thumb });
}

export async function getHeroByPage(page) {
    const records = await pb.collection("hero_pages").getFullList({
        filter: `page="${page}" && is_active=true`,
        sort: "-created",
    });

    return records[0] ?? null;
}
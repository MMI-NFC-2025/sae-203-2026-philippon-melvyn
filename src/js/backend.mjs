import PocketBase from "pocketbase";

export const pb = new PocketBase("http://0.0.0.0:8090");

pb.autoCancellation(false);

export async function getArtistesByDate() {
    return await pb.collection("Artiste").getFullList({
        sort: "date_de_presentation",
        expand: "production"
    });
}

export async function getArtistesAlphabetique() {
    return await pb.collection("Artiste").getFullList({
        sort: "nom",
        expand: "production"
    });
}

export async function getArtisteById(id) {
    return await pb.collection("Artiste").getOne(id, {
        expand: "production"
    });
}

export async function getScenes() {
    return await pb.collection("Scene").getFullList({
        sort: "nom"
    });
}

export async function getSceneById(id) {
    return await pb.collection("Scene").getOne(id);
}

export async function getArtistesBySceneId(sceneId) {
    return await pb.collection("Artiste").getFullList({
        filter: `scene="${sceneId}"`,
        sort: "date_de_presentation",
        expand: "scene"
    });
}

export async function getArtistesBySceneName(sceneName) {

    const scene = await pb.collection("Scene").getFirstListItem(`nom="${sceneName}"`);

    return await pb.collection("Artiste").getFullList({
        filter: `production="${scene.id}"`,
        sort: "date_de_presentation",
        expand: "production"
    });
}

export async function saveArtiste(data) {

    if (data.id) {
        return await pb.collection("Artiste").update(data.id, data);
    }

    return await pb.collection("Artiste").create(data);
}

export async function saveScene(data) {

    if (data.id) {
        return await pb.collection("Scene").update(data.id, data);
    }

    return await pb.collection("Scene").create(data);
}

export const PB_BASE_URL = "http://0.0.0.0:8090";

/**
 * Build a PocketBase file URL for a given collection/record.
 * This avoids importing the `pb` object inside components.
 * @param {string} collection - name of the collection (e.g. "Artiste")
 * @param {string} recordId - ID of the record
 * @param {string} fileName - filename stored in the record
 * @param {string} [thumb] - optional thumbnail spec
 * @returns {string|null}
 */
export function buildFileURL(collection, recordId, fileName, thumb) {
    if (!collection || !recordId || !fileName) return null;
    let url = `${PB_BASE_URL}/api/files/${collection}/${recordId}/${fileName}`;
    if (thumb) url += `?thumb=${thumb}`;
    return url;
}


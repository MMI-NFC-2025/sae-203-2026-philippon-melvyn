import PocketBase from "pocketbase";

export const pb = new PocketBase("https://sae203.melvyn-philippon.fr");

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
        filter: `production="${sceneId}"`,
        sort: "date_de_presentation",
        expand: "production"
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


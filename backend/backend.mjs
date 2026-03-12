import PocketBase from "pocketbase";

export const pb = new PocketBase("https://sae203.melvyn-philippon.fr");

pb.autoCancellation(false);

export async function getArtistesByDate() {
    return await pb.collection("Artiste").getFullList({
        sort: "date_de_presentation",
        expand: "scene"
    });
}

export async function getArtistesAlphabetique() {
    return await pb.collection("Artiste").getFullList({
        sort: "nom",
        expand: "scene"
    });
}

export async function getArtisteById(id) {
    return await pb.collection("Artiste").getOne(id, {
        expand: "scene"
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

    const scene = await pb.collection("Scene").getFirstListItem(
        `nom="${sceneName}"`
    );

    return await getArtistesBySceneId(scene.id);
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

export async function addNewUser(user) {

    return await pb.collection("users").create({
        email: user.email,
        password: user.password,
        passwordConfirm: user.passwordConfirm,
        name: user.name || ""
    });
}

export async function userAuth(email, password) {
    return await pb.collection("users").authWithPassword(email, password);
}

export function logout() {
    pb.authStore.clear();
}

export function isLoggedIn() {
    return pb.authStore.isValid;
}

export function getCurrentUser() {
    return pb.authStore.record;
}

export function buildFileURL(collection, recordId, fileName) {

    if (!collection || !recordId || !fileName) return null;

    return `https://sae203.melvyn-philippon.fr/api/files/${collection}/${recordId}/${fileName}`;
}

export function getPBFromRequest(request) {
    const instance = new PocketBase("https://sae203.melvyn-philippon.fr");
    instance.autoCancellation(false);

    const cookieHeader = request.headers.get("cookie") || "";
    instance.authStore.loadFromCookie(cookieHeader);

    return instance;
}
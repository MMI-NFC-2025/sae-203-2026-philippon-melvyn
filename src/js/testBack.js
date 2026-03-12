import {
    getArtistesByDate,
    getArtistesAlphabetique,
    getArtisteById,
    getScenes,
    getSceneById,
    getArtistesBySceneId,
    getArtistesBySceneName
} from "./backend.mjs";

let artistes = [];
let scenes = [];

try {
    artistes = await getArtistesByDate();
    console.log(artistes);
} catch (e) {
    console.log(e);
}

try {
    const a = await getArtistesAlphabetique();
    console.log(a);
} catch (e) {
    console.log(e);
}

try {
    if (artistes.length > 0) {
        const a = await getArtisteById(artistes[0].id);
        console.log(a);
    }
} catch (e) {
    console.log(e);
}

try {
    scenes = await getScenes();
    console.log(scenes);
} catch (e) {
    console.log(e);
}

try {
    if (scenes.length > 0) {
        const s = await getSceneById(scenes[0].id);
        console.log(s);
    }
} catch (e) {
    console.log(e);
}

try {
    if (scenes.length > 0) {
        const a = await getArtistesBySceneId(scenes[0].id);
        console.log(a);
    }
} catch (e) {
    console.log(e);
}

try {
    if (scenes.length > 0) {
        const a = await getArtistesBySceneName(scenes[0].nom);
        console.log(a);
    }
} catch (e) {
    console.log(e);
}
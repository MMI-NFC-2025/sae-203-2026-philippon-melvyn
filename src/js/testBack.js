import {
    getArtistesByDate,
    getArtistesAlphabetique,
    getArtisteById,
    getScenes,
    getSceneById,
    getArtistesBySceneId,
    getArtistesBySceneName
} from "./backend.mjs";

async function runTests() {

    console.log("===== TEST BACKEND =====");

    try {

        const artistesDate = await getArtistesByDate();
        console.log("Artistes triés par date :", artistesDate);

        const artistesAlpha = await getArtistesAlphabetique();
        console.log("Artistes triés alphabétiquement :", artistesAlpha);

        const scenes = await getScenes();
        console.log("Scènes :", scenes);

        if (scenes.length > 0) {

            const sceneId = scenes[0].id;
            const sceneName = scenes[0].nom;

            const scene = await getSceneById(sceneId);
            console.log("Scene par ID :", scene);

            const artistesScene = await getArtistesBySceneId(sceneId);
            console.log("Artistes sur cette scène :", artistesScene);

            const artistesSceneNom = await getArtistesBySceneName(sceneName);
            console.log("Artistes par nom de scène :", artistesSceneNom);

        }

        if (artistesDate.length > 0) {

            const artisteId = artistesDate[0].id;

            const artiste = await getArtisteById(artisteId);
            console.log("Artiste par ID :", artiste);

        }

    } catch (error) {

        console.error("Erreur test backend :", error);

    }

}

runTests();
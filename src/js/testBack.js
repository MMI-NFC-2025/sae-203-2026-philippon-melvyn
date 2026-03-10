import {
    getArtistesByDate,
    getScenes,
    getArtistesAlphabetique,
    getArtisteById,
    getSceneById,
    getArtistesBySceneId
} from "./backend.mjs";

async function test() {

    console.log("ARTISTES PAR DATE");
    console.log(await getArtistesByDate());

    console.log("SCENES");
    console.log(await getScenes());

    console.log("ARTISTES ALPHABETIQUE");
    console.log(await getArtistesAlphabetique());

}

test();
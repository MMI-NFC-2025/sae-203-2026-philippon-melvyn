import { pb } from "./backend.mjs";

export function isLoggedIn() {
    return pb.authStore.isValid;
}

export function getCurrentUser() {
    return pb.authStore.record;
}

export function logout() {
    pb.authStore.clear();
}
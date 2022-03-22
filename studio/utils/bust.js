export default function bust(path) {
    return path + '?bust=' + (new Date()).getTime();
}
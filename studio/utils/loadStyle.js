export default function loadStyle(src, id) {
    return new Promise(function (resolve, reject) {
        if (!document.getElementById(id)) {
            let link = document.createElement('link');
            link.href = src;
            link.rel = 'stylesheet';
            link.id = id;

            link.onload = () => resolve(`${id} stylesheet has been added to the head`);
            link.onerror = () => reject(new Error(`Style load error for ${src}`));
            document.head.append(link);
        } else {
            resolve(`${id} stylesheet is already loaded`);
        }
    });
}
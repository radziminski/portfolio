export default function (showLoader = true) {
    const root = document.querySelector('.loader');
    console.log(root);
    const loader = document.createElement('div');
    loader.classList.add('loader__container');
    if (showLoader) loader.innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
    root.appendChild(loader);
    console.log(loader);
}

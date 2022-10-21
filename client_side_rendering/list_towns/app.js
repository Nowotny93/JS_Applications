/*import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', () => {
    event.preventDefault();

    const inputTowns = document.getElementById('towns')
        .value.split(', ')
        .map(x => x.trim());

    render(createView(inputTowns), root);
    document.getElementById('towns').value = '';
});

const createView = (towns) =>
    html `<ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
</ul>`;*/


import { html, render } from './node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

function getTowns(event) {
    event.preventDefault();

    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ')

    const result = listTemplate(towns);

    render(result, root);
}

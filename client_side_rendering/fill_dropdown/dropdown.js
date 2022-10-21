import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function getOptions() {
    const response = await fetch(url);
    return await response.json();
}

const selectTemplete = (data) => html`
<select id="menu">
    ${data.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>
`;

const options = Object.values(await getOptions());
const main = document.querySelector('div');

update(options);

function update(options) {
    const result = selectTemplete(Object.values(options));
    render(result, main);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();

    const text = document.getElementById('itemText').value;

    if (text == '') {
        return alert('You can\'t add empty field!')
    }

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    event.target.reset();

    options.push(await response.json())

    update(options);
}


/*import { html, render } from "./node_modules/lit-html/lit-html.js";
const container = document.querySelector('div');
const input = document.getElementById('itemText');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

getData();

async function getData() {
    document.querySelector('form').addEventListener('submit', (e) => addItem(event, list))
    const response = await fetch(url);

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    let list = Object.values(data);

    update(list)
}

async function addItem(event, list) {
    event.preventDefault();
    if (input.value) {
        const item = input.value

        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: item }),
        });

        const result = await response.json();
        list.push(result);
        input.value = ' ';
        update(list);
    }
}

const createTemplate = (list) =>
    html `<select id="menu">
    ${list.map((x) => html`<option value="${x._id}">${x.text}
    </option>`)};
</select>`;

function update(list) {
    const result = createTemplate(list);
    render(result, container);
}

 */
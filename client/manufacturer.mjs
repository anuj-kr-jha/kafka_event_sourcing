import { default as axios } from 'axios';
import { input, log } from './../utility/lib/readline.mjs';

function showMenu() {
    log('\n');
    log('######################################################################');
    log('# 1 # Ship to Seller                                                 #');
    log('######################################################################');
    menuListener();
}

async function menuListener() {
    const choice = input('input desired number (1) ? ');
    choice === '1' ? await ship() : log('invalid input');
}

async function ship() {
    const sku = input('sku ? ');
    const quantity = input('quantity ? ');
    const price = input('price ? ');
    const address = input('address ? ');
    const date = Date();
    log(`${'\n'}shipping your product ...`);

    const { data } = await axios.post('http://localhost:7000/ship', { sku, quantity, price, address, date });
    log(data);
    input('\nhit "l" to get menu > ') === 'l' ? showMenu() : '';
}

(function () {
    showMenu();
})();
         
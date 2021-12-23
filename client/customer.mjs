import { input, log } from '../utility/lib/readline.mjs';

function showMenu() {
    log('\n');
    log('######################################################################');
    log('# 1 # Ship to Customer                                               #');
    log('# 2 # Get Product Info                                               #');
    log('# 3 # Review Inventory                                               #');
    log('######################################################################');
    menuListener();
}

async function menuListener() {
    const choice = input('input desired number (1) ? ');
    switch (choice) {
        case '1':
            await shipToCustomer();
            break;
        case '2':
            await getProductDetails();
            break;
        case '3':
            await reviewInventory();
            break;
        default:
            log('Invalid input !!!');
    }
}

async function shipToCustomer() {
    const cid = input('cId ? ');
    const sku = input('sku ? ');
    const quantity = input('quantity ? ');
    const price = input('price ? ');
    const address = input('address ? ');
    const date = Date();

    log('Yeah product is shipped to the customer:)');

    input('\nhit "l" to get menu > ') === 'l' ? showMenu() : '';
}

(function () {
    showMenu();
})();

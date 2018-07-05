// import { ClientFunction} from 'testcafe';

// fixture `Get sale amount`
//     .page('https://js.devexpress.com/');

//     const getSaleAmount = ClientFunction(() => {
//         const elements = document.querySelector('.dx-datagrid-rowsview').querySelectorAll('td:nth-child(3),td:nth-child(7)');
//         const array = [];

//         for (let i = 0; i <= elements.length - 2; i+=2) {
//             const customerName  = elements[i+1].textContent;
//             const saleAmount = elements[i].textContent;

//             if (customerName && saleAmount)
//                 array.push(`Customer ${customerName}: ${saleAmount}`);
//         }

//         return array;
//     });

// test('My test', async t => {
//     console.log(await getSaleAmount());
// });

import { Selector } from 'testcafe'

fixture `Example 1: Home page`.page`http://localhost:8080/#/test`

const nameInput = Selector('#search_word')

test(`Test Speed`, async t => {
  await t
    .typeText(nameInput, 'Peter')
    .setTestSpeed(0.1)
    .typeText(nameInput, ' Parker')
    .setTestSpeed(0.01)
    .typeText(nameInput, 'noel')
    .wait(10000)
    .typeText(nameInput, 'noel')
})

// import { Selector, ClientFunction } from 'testcafe'

// // See: http://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client.html#executing-client-functions
// const getWindowLocation = ClientFunction(() => window.location.href);

// fixture `Example 1: Home page`.page`https://naver.com`



// test("naver", async t => {
//   const id = await Selector('#id')
//   const pw = await Selector('#pw')
//   const query = await Selector('#query')
//   const btn = await Selector('#btn_login')
//   await t
//     .typeText(id, 'newpouy')
//     .wait(100000000000)
//     .typeText(pw, "fdsafdsafdsafdsa")
//     .setTestSpeed(0.01)
//     .typeText(query,"ssear")
//     .click(btn)
// })

// test("The lastest reviews cards are displayed", async t => {
//   const latestReviews = await Selector(".home__review-container");
//   const count = await latestReviews.count;
//   await t.expect(count).eql(6);
// });

// test("The review cards ratings are between 0 and 10", async t => {
//   const latestReviews = await Selector(".home__review-container");
//   const count = await latestReviews.count;
//   for (let i = 0; i < count; i++) {
//     const card = latestReviews.nth(0);
//     const rating = parseInt(await card.find(".rating").innerText, 10);
//     await t.expect(isNaN(rating)).notOk();
//     await t.expect(rating).gte(0);
//     await t.expect(rating).lte(10);
//   }
// });

// test("Clicking a review card takes you to the review", async t => {
//   const latestReviews = await Selector(".home__review-container");
//   const readButton = await latestReviews.nth(0).find(".md-button");
//   await t.click(readButton);
//   await t.expect(getWindowLocation()).match(/sardless.com\/reviews\/\d+/);
// });
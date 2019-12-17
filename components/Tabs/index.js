// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tab = document.querySelector('.topics');

function tabComponent(data) {
    const newTopic = document.createElement('div');

    newTopic.classList.add("tab");
    newTopic.textContent = data;

    return newTopic;
}

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        res.data.topics.forEach(item => {
            tab.appendChild(tabComponent(item));
        })
    })
    .catch((err) => {
        console.log('You hit an error', err);
    });
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// selecting where tabs going
const tab = document.querySelector('.topics');

// API call
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        response.data.topics.forEach(item => {
            tab.appendChild(tabComponent(item));
        })
    })

.catch((err) => {
    console.log(err);
});


function tabComponent(data) {

    // create tab component
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = data;

    return topic;
}



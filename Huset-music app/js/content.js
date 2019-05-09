let fetchData = 'http://kea.sigurdarson.is/wp-huset/wp-json/wp/v2/concert?_embed';
const template = document.querySelector('template').content;
const parent = document.querySelector('.event');

//Loading data from the link
function loadData(link) {
    fetch(link)
        .then(e => e.json())
        .then(data => show(data));
}

//Using For each loop to select each element from the category (Concerts)
function show(data) {
    data.forEach(data => {
        console.log(data)
        //cloning
        const clone = template.cloneNode(true);
        //Inserting content
        const eventImage = clone.querySelector('article img')
        
        const title = clone.querySelector('article div h3');
        const eventDate = clone.querySelector('article div .date')
        const eventTime = clone.querySelector('article div .time')
        const eventPrice = clone.querySelector('article div div p')

        //Event Image
        eventImage.src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
       
        //Event Date
        eventDate.textContent = data.date_and_time;
        //Event title
        title.textContent = data.band_name;
        
        //Event Time
        eventTime.textContent = data.time;
        //Event Price
        eventPrice.textContent = data.price + "kr";
        //appending it to the main
        parent.appendChild(clone);
    });
}

loadData(fetchData);
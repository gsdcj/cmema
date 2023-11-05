    /*var holder = document.querySelector('.holder')
var imgs = ['/21daf1af175109cd9d6064fd13514b5e.jpg',
'/5be12e6b60336095526649c536a4cc9c.jpg',
'/60cc4b1f4ffb59d1e7477e11066f2667.jpg',
'/664fb36db5d95bb35a826328038d98c8.jpg',
'/99f8702093bd74454c4636a33f558c4a.jpg',
'/91040cef008be0cfa869f3fdfd055752.jpg']
var row = document.createElement('div')
//row.classList.add('row')
//col.classlist.add('col')

for (var i = 0; i in imgs; i++) {

    var col = document.createElement('div')
    var img = document.createElement('img')
    img.src = imgs[i]
    img.classList.add('img-thumbnail')
    col.appendChild(img)

    col.classList.add('col')
    row.classList.add('row')
    
    row.appendChild(col)
    //holder.appendChild(col)
    holder.appendChild(row)
    console.log(holder);
    
    
    console.log(col);
    if (i % 3) {
        var r = document.createElement('div')
        var c = document.createElement('div')
        var i = document.createElement('img')
        //c.classlist.add('col')
        //i.classlist.add('img-thumbnail')
        i.src = imgs[i]
        c.appendChild(i)
        r.appendChild(c)
        holder.appendChild(r)
        r.classlist.add('row')

    }*/
//i dunno if its cheating buh this is chatgpt correcting the above code
var holder = document.querySelector('.holder') 
var container = document.querySelector('.container')
console.log(container);
var imgs = ['/21daf1af175109cd9d6064fd13514b5e.jpg', 
'/5be12e6b60336095526649c536a4cc9c.jpg',
'/60cc4b1f4ffb59d1e7477e11066f2667.jpg', 
'/664fb36db5d95bb35a826328038d98c8.jpg', 
'/99f8702093bd74454c4636a33f558c4a.jpg', 
'/91040cef008be0cfa869f3fdfd055752.jpg',
'/0212b4a89dc44f6cf134af4a4d13f156.jpg',
'/066f6ac7c266bc906ae1b748bec9a5e5.jpg',
'/087b4752fe5cbcb83d1d88be1470df27.jpg',
'/2ba8ad75dcb95534372ab78e70286100.jpg',
'/2bb809f6587cfa32da88efb6659ef587.jpg',
'/32fad2e78c7e0a5125dcb92dc4431b82.jpg',
'/3509966fbcc98784e47c53854fbadb58.jpg',
'/3cb19b81b335250c77ac874f45ec5da0.jpg']
var clickedImgsrc;
for (var i = 0; i < imgs.length; i++) { // Create a new row element for every three images 
if (i % 3 === 0) {
var row = document.createElement('div') 
row.classList.add('row') }

var col = document.createElement('div')
var img = document.createElement('img')
img.src = imgs[i]
var id = i
if (id < 13) {
    img.classList.add(id)
}
console.log(img);
img.classList.add('img-thumbnail')
img.setAttribute('data-id', i); // Assign a unique ID to each image
col.appendChild(img)
/*col.addEventListener('click', function () {
    /*
    the problem is when i select the img tag it just gives me the first occurrence of the tag
    would be a good idea to have an id for each column div
    now that am thinking of it preety challenging than it sounds
    for it to happen here are ideas maybe
    in the for loop I'll need to give the id tag to the img tag
    increment the id as the img are 5''
    then a problem arises how do i add event listeners to all those 
    
   // var src = document.querySelector('#'+id)
   var src = document.querySelector('.'+id)
    //var link = src.src
    console.log(src);
})*/
col.addEventListener('click', function (event) {
        var clickedImgsrc = event.target.getAttribute('src');
        console.log('Clicked image ID:', clickedImgsrc);
        window.open('movie.html')
        // Handle the click event for the specific image here
    });

col.classList.add('col')

row.appendChild(col)

// Append the row element to the holder element after every three images or at the end of the loop
if (i % 3 === 2 || i === imgs.length - 1) {
    holder.appendChild(row)
}

//console.log(holder);
//console.log(col);

}
//movie page
const image = document.createElement('img')
image.src = clickedImagesrc
console.log(image.src);
container.appendChild(image)
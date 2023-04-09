console.log('app.js working!');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log('ADD - show');
        } else {
            entry.target.classList.remove('show');
            console.log('remove - show');
        }     
    });
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//entry.target.classList.toggle('show', entry.isIntersecting);


// const hidingObserver = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		entry.target.classList.toggle('show', entry.isIntersecting);
// 	});
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach(((element, i) => {
// 	element.style.transitionDelay = i * 200 + "ms";
// 	hidingObserver.observe(element);
// }));

// Of course, you can put that line
// element.style.transitionDelay = i * 200 + "ms";
// Into another querySelectAll that is specific to the section where you want the delay to occur. For example:
// const hiddenElements = document.querySelectorAll(".logo");
// hiddenElements.forEach(((element, i) => {
// 	hidingObserver.observe(element);
// }));

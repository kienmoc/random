// const tagsEl = document.getElementById('tag');
// const textarea = document.getElementById('textarea');

// textarea.focus ();

// textarea.addEventListener ('keyup', (e) => {
//     createTags(e.target.value);

//     if (e.key === 'Enter') {
//         setTimeout (() => {
//             e.target.value = '';
//         }, 10);
//         randomSelect ();
//     }
// });

// function createTags (input) {
//     const tags = input.split (',').filter(tag => tag.trim() !== '').map(tag => tag.trim ());
    
//     tagsEl.innerHTML = '';

//     tags.forEach (tag => {
//         const tagEl = document.createElement ('span');
//         tagEl.classList.add ('tag');
//         tagEl.innerText = tag;
//         tagsEl.appendChild (tagEl);
//     });
// }

// function randomSelect () {
//     const times = 30;
//     const interval = setInterval (() => {
//         const randomTag = pickRandomTag ();

//         highlightTag (randomTag);

//         setTimeout (() => {
//             unhightlightTag (randomTag);
//         }, 100);
//     }, 100);

//     setTimeout (() => {
//         clearInterval (interval);

//         setTimeout (() => {
//             const randomTag = pickRandomTag ();
//             highlightTag (randomTag);
//         }, 100);
//     }, times * 100);
// }

// function pickRandomTag () {
//     const tags = document.querySelectorAll ('.tag');
//     return tags[Math.floor (Math.random () * tags.length)];
// }

// function highlightTag (tag) {
//     tag.classList.add ('highlight');
// }

// function unhightlightTag (tag) {
//     tag.classList.remove ('highlight');
// }



const textarea = document.getElementById ('textarea');
const tagsElement = document.getElementById ('tag');
textarea.focus ();

textarea.addEventListener ('keyup', (e) => {
    createTags (e.target.value);
    if (e.key === 'Enter') {
        setTimeout (() => {
            e.target.value = '';
        }, 100);
        randomSelect ();
    }
});


function createTags (input) {
    let tags = input.split (',').filter (tag => tag.trim () !== '').map (tag => tag.trim ());
    tagsElement.innerHTML = '';
    tags.forEach (tag => {
        const newTag = document.createElement ('span');
        newTag.innerText = tag;
        newTag.classList.add ('tag');
        tagsElement.appendChild (newTag);
    });
}

function randomSelect () {
    const interval = setInterval (() => {
        let randomTag = pickRandom ();
        highlightTag (randomTag);

        setTimeout (() => {
            unhighlightTag (randomTag);
        }, 100);
    }, 100);

    setTimeout (() => {
        clearInterval (interval);
        setTimeout (() => {
            let randomTag = pickRandom ();
            highlightTag (randomTag);
            console.log ('We pick: ', randomTag.innerText);
        }, 100)
    }, 3000);
}

function pickRandom () {
    let tags = document.querySelectorAll ('.tag');
    return tags[Math.floor (Math.random () * tags.length)];
}

function highlightTag (tag) {
    tag.classList.add ('highlight');
}
function unhighlightTag (tag) {
    tag.classList.remove ('highlight');
}
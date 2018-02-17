//the following is from the treehouse js course
//might be useful for quizzes where a student
//has to move an item up on a list

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
//const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

//to fix the issue of new items added not triggering this loop, see below
//for (let i = 0; i < listItems.length; i++) {
//  listItems[i].addEventListener('mouseover', () => {
//      listItems[i].textContent = listItems[i].textContent.toUpperCase();
//  });
//
//  listItems[i].addEventListener('mouseout', () => {
//      listItems[i].textContent = listItems[i].textContent.toLowerCase();
//  });
//}

//  listDiv.addEventListener('mouseover', (e) => {
//    if (e.target.tagName == 'LI') {
//      e.target.textContent = e.target.textContent.toUpperCase();
//    }
//  });
//
//  listDiv.addEventListener('mouseout', (e) => {
//    if (e.target.tagName == 'LI') {
//      e.target.textContent = e.target.textContent.toLowerCase();
//    }
//  });

listUl.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.className == 'remove') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    // how to move an item up
    if (e.target.className == 'up') {
      let li = e.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    //move an item down
    if (e.target.className == 'down') {
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }

  };
});


toggleList.addEventListener('click', () => {
 if (listDiv.style.display == 'none') {
  toggleList.textContent = 'Hide List';
  listDiv.style.display = 'block';
} else {
  toggleList.textContent = 'Show List';
  listDiv.style.display = 'none';
}
});


descriptionButton.addEventListener('click', () => {
//  p.textContent = input.value + ':';
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
addItemInput.value = '';
});

//removeItemButton.addEventListener('click', () => {
//  let ul = document.getElementsByTagName('ul')[0];
//  let li = document.querySelector('li:last-child')
//  ul.removeChild(li);
//                                  });

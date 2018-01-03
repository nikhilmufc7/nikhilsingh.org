//http://youmightnotneedjquery.com/
//Get rid of jquery by copying just the needed functions

function addClass(el, className){
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function remClass(el, className){
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function toggle(el, className){
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

function offset(el){
  var rect = el.getBoundingClientRect()

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

function hasClass(el, className){
  if (el.classList)
    el.classList.contains(className);
  else
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
var replaceElement = function(ele, outerHTML) { // util function
  var parent = false, refEle;
  //if element that's going to be changed has previousElementSibling, take it as reference. If not, the parentElement will be the reference.
  if (ele.previousElementSibling !== null)
    refEle = ele.previousElementSibling;
  else
  {
    refEle = ele.parentElement;
    //indicate that parentElement has been taken as reference
    parent = true;
  }
  //change the outerHTML
  ele.outerHTML = outerHTML;
  //return the correct reference
  if (parent)
    return refEle.firstElementChild;
  else return refEle.nextElementSibling;
}

var tS = function(token, value) { // tokenShimmer
  return ('-webkit-'+token+': ' + value + "; "+ token + ': '+value+';');
}

var bT = { // bounceTokens
  'top': {
    '0': {'x':'0', 'y':'-3000px'},
    '60': {'x':'0','y':'25px'},
    '75': {'x':'0','y':'-10px'},
    '90': {'x':'0','y':'5px'}
  },
  'left': {
    '0': {'x':'-3000px', 'y':'0'},
    '60': {'x':'25px','y':'0'},
    '75': {'x':'-10px','y':'0'},
    '90': {'x':'5px','y':'0'}
  }
}

var bounceEnter = function(d) {
  return ' { from, 60%, 75%, 90%, to {'+
          tS('animation-timing-function','cubic-bezier(0.215, 0.610, 0.355, 1.000)')+'}'+
        ' 0% {opacity: 0;'+tS('transform','translate3d('+bT[d]['0'].x+','+bT[d]['0'].y+', 0)')+'}'+
        ' 60% {opacity: 1; '+tS('transform','translate3d('+bT[d]['60'].x+','+bT[d]['60'].y+', 0)')+'}'+
        ' 75% {'+tS('transform'+'translate3d('+bT[d]['75'].x+','+bT[d]['75'].y+', 0)')+'}'+
        ' 90% {'+tS('transform','translate3d('+bT[d]['90'].x+','+bT[d]['90'].y+', 0)')+'}'+
        ' to {'+tS('transform','none')+'}}'
}

var styleTokens = {
  'base': function(anType) {return (' .'+anType+' {'+
                            tS('animation-duration','1.4s')+
                            tS('fill-mode','both')+
                            tS('backface-visibility','visible !important')+
                            tS('animation-name',anType)+'}');},
  'slidein': ' { from {'+tS('transform','perspective(400px) rotate3d(1, 0, 0, 90deg)')+
                        tS('animation-timing-function','ease-in')+
                        'opacity: 0; }'+
                ' 40% {'+tS('transform','perspective(400px) rotate3d(1, 0, 0, -20deg)')+
                         tS('animation-timing-function','ease-in')+ '}'+
                ' 60% {'+tS('transform','perspective(400px) rotate3d(1, 0, 0, 10deg)')+
                        'opacity: 1; }'+
                ' 80% {'+tS('transform','perspective(400px) rotate3d(1, 0, 0, -5deg)')+'}'+
                ' to {'+tS('transform','perspective(400px)')+'}'+
              '}',
  'enterfromtop': ' { from {opacity: 0;'+tS('transform','translate3d(0, -100%, 0)')+'}'+
                    ' to {opacity: 1;'+tS('transform','none')+'}}',
  'bouncefromtop': bounceEnter('top'),
  'hoverable': bounceEnter('left'),
  'bouncefromleft': bounceEnter('left')
};

var styleComposer = function(anType, params) {
  if (!styleTokens[anType]) return 'na';
  var preStyle = '';
  switch (anType) {
    case 'hoverable':
      preStyle = '.hoverable {left: '+(params.left || '-10px') +'} .hoverable:hover {left: 0; '+tS('transition','ease-in-out, .55s ease-in-out')+'} ';
    break;
    default: break;
  }
  return (
    preStyle +
    '@-webkit-keyframes '+ anType +  styleTokens[anType] +
    ' @keyframes '+ anType + styleTokens[anType] +
    styleTokens['base'](anType)
  );
}

var animate = {};

animate.show = function(message, anType) {
  var co = message.trim();
  var re=new RegExp("\<(\\w+)(\\s|\>)"); // extract html element type
  var tg = re.exec(co);
  if (!tg || tg.length < 2) return;
  
  // create element
  var emptyd = document.createElement(tg[1]);
  document.body.appendChild(emptyd);
  var d = replaceElement(emptyd, co);
  
  
  // create animated style
  var s = document.createElement('style');
  var st = '';
  var params = {};
  if (anType == 'hoverable') params.left = d.style.left;
  if ((st = styleComposer(anType, params)) == 'na') console.log('unknown');
    else s.innerHTML = st;
  document.body.appendChild(s);
  
  d.className += (" "+anType); // apply animation style
  if (anType == 'hoverable') d.style.left = ''; // we need this hack to make :hover work
  
}

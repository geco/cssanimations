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

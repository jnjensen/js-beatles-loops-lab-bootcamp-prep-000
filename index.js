function theBeatlesPlay(musicians, instruments){
  var play = []
  for (i = 0; i <= musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
  return play
}
var structure = [
  {icon: 'pencil', text: 'item1', value: '100'},
  {icon: 'pencil', text: 'item2', value: '200'},
  {icon: 'pencil', text: 'item3', value: '300'},
  {icon: 'pencil', text: 'item4', value: '500'}
];

function searchWords(word/*string*/){
  return structure.filter(function(data, index, array){
    return ( data.text.toLowerCase().indexOf(word.toLowerCase()) != -1 );
  });
}

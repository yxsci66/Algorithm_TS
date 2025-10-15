function getMinlength(str:string){
  let s = str;
  while(s.length > 0 && (s.includes('01') || s.includes('10'))){
  
    s = s.replaceAll('01','');
    s = s.replaceAll('10','');
  }
  return s.length;
}

console.log(getMinlength('100101'));
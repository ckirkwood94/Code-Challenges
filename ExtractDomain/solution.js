function domainName(url) {
  // let re = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;
  let re = /.*([^\.]+)(\.com)$/;
  // let re = /https?:\/\/(^[a-z]+)/gim;
  //let re = /^.+[:\.](/w)\.$/gim;
  // let re = /:\/\/(.[^/]+)/;
  // let re = /^.+[:\/\.]?/;
  // let re = /\w/;
  let domain = re.exec(url);
  console.log('inside function', domain);
  // let solution = ? domain[1] : 'null';
  return domain ? domain[1] : 'null';
}

console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));

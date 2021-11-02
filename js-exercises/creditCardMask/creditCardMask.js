function maskify(cc) {
  if(cc.length <= 4) return cc;
  if(cc.length > 4) {
    let maskedCc = "";
    for (let i = 0; i < cc.length - 4; i++){
      maskedCc = maskedCc + "#";
    };
    for (let i = cc.length - 3; !(i > cc.length); i++){
      maskedCc = maskedCc + cc[i - 1];
    };
    return maskedCc;
  }
}

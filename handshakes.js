// In a party of N people, each person will shake her/his hand with each other person only once.
// On total how many hand-shakes would happen?

function handshakes(num) {
  if (num <= 1) {
    return 0;
  } else {
    return num - 1 + handshakes(num - 1);
  }
}

console.log(handshakes(5));

document.getElementById('roll-button').addEventListener('click', () => {
  const auras = ["End", "Skyfire", "Flame", "Mystic"];
  const randomAura = auras[Math.floor(Math.random() * auras.length)];
  document.getElementById('result').innerHTML = `You Got: ${randomAura}`;
});

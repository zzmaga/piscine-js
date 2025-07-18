export const getArchitects = () => [
  Array.from(document.querySelectorAll('a')),
  Array.from(document.querySelectorAll('span')),
];

export const getClassical = () => [
  Array.from(document.querySelectorAll('a.classical')),
  Array.from(document.querySelectorAll('a:not(.classical)')),
];

export const getActive = () => [
  Array.from(document.querySelectorAll('a.classical.active')),
  Array.from(document.querySelectorAll('a.classical:not(.active)')),
];

export const getBonannoPisano = () => {
  const bonanno = document.getElementById('BonannoPisano');
  const others = Array.from(document.querySelectorAll('a.classical.active')).filter(
    el => el !== bonanno
  );
  return [bonanno, others];
};

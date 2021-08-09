function applyCapitalLetter(string) {
  const capitalLetter = [...string][0].toUpperCase();

  const textArray = [...string];

  textArray.splice(0, 1, capitalLetter);

  return textArray.join('');
}

export function capitalize(text) {
  if (!text) return null;

  const stringged = String(text);

  const composed = stringged.includes('-');

  if (composed) {
    const parts = stringged.split('-');

    const result = parts.map((p) => applyCapitalLetter(p)).join('-');

    return result;
  } else {
    const result = applyCapitalLetter(stringged);

    return result;
  }
}

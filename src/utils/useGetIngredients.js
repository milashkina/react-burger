export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
export async function UseGetIngredients() {
  const fetchApiIngredients = 'https://norma.nomoreparties.space/api/ingredients';
  const res = await fetch(fetchApiIngredients);
  return checkRes(res);
}


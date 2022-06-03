export async function cdFakerApi(id, setData) {
    const url = "https://fakestoreapi.com/products/" + id;
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        return json;
      });
}

export async function hpFakerApi(setData, setClase) {
    await fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setClase(false);
        setData(json);
        return json;
      });
}
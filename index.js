async function getAddresbyCep() {
  const cep = document.getElementById("cep").value;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();
    console.log(data);
    document.getElementById("logradouro").innerHTML +=
      '<strong style="font-family: Inter;">' + data.logradouro + "</strong>";
    document.getElementById("uf").innerHTML +=
      '<strong style="font-family: Inter;">' + data.localidade + "</strong>";
    document.getElementById("bairro").innerHTML +=
      '<strong style="font-family: Inter;">' + data.bairro + "</strong>";
  } catch (error) {
    console.log(error.message);
  }
}

async function getPrevisao() {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
    );

    const data = await response.json();
    console.log(data);
    document.getElementById(
      "resultPrevisao"
    ).value =  `Previsao do tempo de acordo com a região:  ${data.hourly.temperature_2m[0]} °C`;
  } catch (error) {
    console.log(error.message);
  }
}

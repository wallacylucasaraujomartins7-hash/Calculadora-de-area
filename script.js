const forma = document.querySelector("#forma");
const campos = document.querySelector("#campos");
const formulaTexto = document.querySelector("#formula");
const areaForm = document.querySelector("#areaForm");
const resultado = document.querySelector("#resultado");

function mostrarCampos() {
  if (forma.value === "quadrado") {
    campos.innerHTML = `
      <label for="lado">Lado:</label>
      <input type="number" id="lado" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = lado²" readonly>
    `;
  }

  if (forma.value === "retangulo") {
    campos.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base" min="0" step="any" required>

      <label for="altura">Altura:</label>
      <input type="number" id="altura" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = base × altura" readonly>
    `;
  }

  if (forma.value === "triangulo") {
    campos.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base" min="0" step="any" required>

      <label for="altura">Altura:</label>
      <input type="number" id="altura" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = (base × altura) / 2" readonly>
    `;
  }

  if (forma.value === "circulo") {
    campos.innerHTML = `
      <label for="raio">Raio:</label>
      <input type="number" id="raio" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = π × raio²" readonly>
    `;
  }

  if (forma.value === "trapezio") {
    campos.innerHTML = `
      <label for="baseMenor">Base menor</label>
      <input type="number" id="baseMenor" min="0" step="any" required>

      <label for="baseMaior">Base maior</label>
      <input type="number" id="baseMaior" min="0" step="any" required>

      <label for="altura">Altura:</label>
      <input type="number" id="altura" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = ((base menor + base maior) × altura) / 2" readonly>
    `;
  }

  if (forma.value === "losango") {
    campos.innerHTML = `
      <label for="diametroMenor">Diâmetro menor:</label>
      <input type="number" id="diametroMenor" min="0" step="any" required>

      <label for="diametroMaior">Diâmetro maior:</label>
      <input type="number" id="diametroMaior" min="0" step="any" required>

      <label for="formula" id="formulaLabel">Fórmula:</label>
      <input type="text" id="formula" value="Área = (diâmetro menor × diâmetro maior) / 2" readonly>
     `;
  }
}

areaForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let area;

  if (forma.value === "quadrado") {
    const lado = Number(document.querySelector("#lado").value);
    area = lado ** 2;
  }

  if (forma.value === "retangulo") {
    const base = Number(document.querySelector("#base").value);
    const altura = Number(document.querySelector("#altura").value);
    area = base * altura;
  }

  if (forma.value === "triangulo") {
    const base = Number(document.querySelector("#base").value);
    const altura = Number(document.querySelector("#altura").value);
    area = (base * altura) / 2;
  }

  if (forma.value === "circulo") {
    const raio = Number(document.querySelector("#raio").value);
    area = Math.PI * raio ** 2;
  }

  if (forma.value === "trapezio") {
    const baseMenor = Number(document.querySelector("#baseMenor").value);
    const baseMaior = Number(document.querySelector("#baseMaior").value);
    const altura = Number(document.querySelector("#altura").value);
    area = ((baseMenor + baseMaior) * altura) / 2;
  }

  if (forma.value === "losango") {
    const diametroMenor = Number(document.querySelector("#diametroMenor").value);
    const diametroMaior = Number(document.querySelector("#diametroMaior").value);
    area = (diametroMenor * diametroMaior) / 2;
  }

  resultado.textContent = `Área: ${area.toFixed(2)} unidades²`;
});

forma.addEventListener("change", mostrarCampos);

mostrarCampos();
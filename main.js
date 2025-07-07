document.querySelector("app-root").innerHTML = `
  <div class='container'>
    <h1>Matrícula PUCPR</h1>
    <form onsubmit="event.preventDefault(); alert('Dados enviados com sucesso!')">
      <label>Nome:</label><input required>
      <label>Email:</label><input type="email" required>
      <label>Curso:</label>
      <select required>
        <option value="">Selecione...</option>
        <option>Sistemas de Informação</option>
        <option>Engenharia de Software</option>
        <option>Ciência da Computação</option>
      </select>
      <label>Documento (PDF):</label><input type="file">
      <button type="submit">Enviar</button>
    </form>
  </div>`;
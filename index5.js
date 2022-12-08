window.addEventListener("focus", (event) => {
  console.log("focus");
});
//quando sai da tela da JANELA e volta
//window manipula a aplicacao - historico do usuario, refresh na janela, abrir outra janela window.open, window.close, window.focus

document.addEventListener("click", (event) => {
  console.log("click");
});
//quando clica em qualquer documento/pagina lugar da tela

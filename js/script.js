
window.onload = function () {
  
  
  const URL= "https://corsproxy.io/?" + encodeURIComponent("https://demos.geprom.com/datos.php");

  //declarar los divs de las cantidades
  const THUMBS_DIV = document.getElementById("thumbs-ammount");
  const HEARTS_DIV = document.getElementById("hearts-ammount");
  const LAUGHTS_DIV = document.getElementById("laughts-ammount");
  const JAWDROPS_DIV = document.getElementById("jawdrops-ammount");

  //divs de los bar-filler
  const BAR1_FILLER = document.getElementById("bar1-filler");
  const BAR2_FILLER = document.getElementById("bar2-filler");
  const BAR3_FILLER = document.getElementById("bar3-filler");
  const BAR4_FILLER = document.getElementById("bar4-filler");

  let thumbsAmmount = 0;
  let heartsAmmount = 0;
  let laughtsAmmount = 0;
  let jawdropsAmmount = 0;

  let totalRespuestas;

  
  //espera 0.5 segundos y realiza la primera llamada
  setTimeout(function () {
    getData(URL);
  }, 500);





  function getData(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
	
        let data = JSON.parse(xhr.responseText);
        treat(data)

      } else if (xhr.readyState == 4 && xhr.status != 200) {

        console.error('Error de respuesta en petición: ' + xhr.status);
	
      }
    };

    xhr.send();
  }



  function treat(data) {

    //aumentar el numero de cada respuesta
    thumbsAmmount += data.respuesta1;
    heartsAmmount += data.respuesta2;
    laughtsAmmount += data.respuesta3;
    jawdropsAmmount += data.respuesta4;

    //añade las cada cantidad al dom
    THUMBS_DIV.removeChild(THUMBS_DIV.lastChild)
    THUMBS_DIV.append(thumbsAmmount)

    HEARTS_DIV.removeChild(HEARTS_DIV.lastChild)
    HEARTS_DIV.append(heartsAmmount)

    LAUGHTS_DIV.removeChild(LAUGHTS_DIV.lastChild)
    LAUGHTS_DIV.append(laughtsAmmount)

    JAWDROPS_DIV.removeChild(JAWDROPS_DIV.lastChild)
    JAWDROPS_DIV.append(jawdropsAmmount)


    //calcular el total de las respuestas
    totalRespuestas =
      thumbsAmmount
      + heartsAmmount
      + laughtsAmmount
      + jawdropsAmmount;



    //modifica width de los fillers con el % de cada respuesta

    BAR1_FILLER.style.width = `${getPercent(thumbsAmmount, totalRespuestas)}%`;
    BAR2_FILLER.style.width = `${getPercent(heartsAmmount, totalRespuestas)}%`;
    BAR3_FILLER.style.width = `${getPercent(laughtsAmmount, totalRespuestas)}%`;
    BAR4_FILLER.style.width = `${getPercent(jawdropsAmmount, totalRespuestas)}%`;



    
    console.log(BAR1_FILLER.style.width)
    console.log(BAR2_FILLER.style.width)
    console.log(BAR3_FILLER.style.width)
    console.log(BAR4_FILLER.style.width)
    console.log("--------------------")
    */
   
    //espera 3 segundos y llama recursivamente a getData(URL)
    setTimeout(function () {
      getData(URL);
    }, 3000);


  }






}

//devuelve porcentaje de cantidad en relacion al totalCantidad(100%)
function getPercent(ammount, totalAmmount) {
  return parseFloat((100 / totalAmmount * ammount).toFixed(2))
}

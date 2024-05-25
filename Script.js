//Skapar funktionen så kakor texten kan ändras
function kakor() {
  document.getElementById("Kakor_p").innerHTML =
    "<strong>Ingridenser:</strong> 100g Smör, 100g Mörk choklad, 1dl Strösocker, 1/2dl Farinsocker, 1 ägg, 2dl Vetemjöl, 1/2tsk bikarbonat, 1/2tsk salt, 1/2tsk vaniljsocker <br><strong>Instruktioner:</strong><br>1.Smält smöret långsamt i en kastrull, ta det från plattan så fort det har smält och låt det svalna. Om smöret är för varmt så smälter chokladbitarna ut i smeten.<br>2.Hacka chokladen grovt. Rör ner socker, farinsocker och ägg i kastrullen. Blanda bikarbonat, salt och vaniljsocker med mjölet och rör ner det tillsammans med chokladen i kastrullen.<br>3.Kyl smeten väl, minst 2 tim.<br>4. Rulla den kylda degent till bollar och placera på en plåt med bakplåtspapper. Lägg dem inte för tätt eftersom de flyter ut något i ugnen. Det är lagom med nio kakor på varje plåt.<br>5.Sätt ugnen på 200°.<br>6.Baka kakorna i mitten av ugnen i ca 10 min. Låt kakorna kallna på plåten.";
}

//Återställer kakor
function kakor_clear() {
  document.getElementById("Kakor_p").innerHTML =
    "<strong>Ingridenser:</strong> 100g Smör, 100g Mörk choklad, 1dl Strösocker, 1/2dl Farinsocker, 1 ägg, 2dl Vetemjöl, 1/2tsk bikarbonat, 1/2tsk salt, 1/2tsk vaniljsocker";
}

//se första funktionen
function chokladbollar() {
  document.getElementById("Chokladbollar_p").innerHTML =
    "<strong>Ingridienser:</strong> 150g Smör, 3msk Kakao, 1tsk Vaniljsocker, 2msk kallt kaffe, 4dl havregryn <br><strong>Instruktioner:</strong><br>1.Rör ihop smör och socker.<br>2.Rör i kakao, vaniljsocker, vatten och havregryn.<br>3.Forma runda bollar och rulla dem i kokos, mandel eller sesamfrön. Förvara i kylen eller frysen.";
}

//se andra funktionen
function chokladbollar_clear() {
  document.getElementById("Chokladbollar_p").innerHTML =
    "<strong>Ingridienser:</strong> 150g Smör, 3msk Kakao, 1tsk Vaniljsocker, 2msk kallt kaffe, 4dl havregryn";
}

//se första funktionen
function kollasnittar() {
  document.getElementById("Kollasnittar_p").innerHTML =
    "<strong>Ingridenser:</strong> 100g Smör, 1dl Strösocker, 1msk Vaniljsocker, 1msk Ljussirap, 2dl Vetemjöl, 1tsk Bakpulver, 1tsk Malen ingefära<br><strong>Instruktioner:</strong><br>1.Sätt ugnen på 175°.<br>2.Skär smöret i tunna skivor. Rör smör och socker poröst i en skål.<br>3.Tillsätt vaniljsocker, sirap, mjöl, bakpulver och ingefära. Arbeta snabbt ihop till en deg.<br>4.Ta upp degen på en lätt mjölad arbetsbänk och dela den i tre delar. Rulla ut till längder, ca 40 cm långa. Lägg dem på en plåt med bakplåtspapper. Platta till dem något.<br>5.Grädda mitt i ugnen tills längderna är ljusbruna, 10-12 min.<br>6.Skär de varma längderna i sneda ca 2 cm breda kolakakor.";
}

//se andra funktionen
function kollasnittar_clear() {
  document.getElementById("Kollasnittar_p").innerHTML =
    "<strong>Ingridenser:</strong> 100g Smör, 1dl Strösocker, 1msk Vaniljsocker, 1msk Ljussirap, 2dl Vetemjöl, 1tsk Bakpulver, 1tsk Malen ingefära";
}

//Ifall man trycker knappen på receptet så ändras texten till funktionen kakor och ifall man trycker igen så försvinner det, det fungerar 4 gånger
document.getElementById("Kakor").onclick = function () {
  kakor();
  document.getElementById("Kakor").onclick = function () {
    kakor_clear();
    document.getElementById("Kakor").onclick = function () {
      kakor();
      document.getElementById("Kakor").onclick = function () {
        kakor_clear();
      };
    };
  };
};

//Se övre programet
document.getElementById("Chokladbollar").onclick = function () {
  chokladbollar();
  document.getElementById("Chokladbollar").onclick = function () {
    chokladbollar_clear();
    document.getElementById("Chokladbollar").onclick = function () {
      chokladbollar();
      document.getElementById("Chokladbollar").onclick = function () {
        chokladbollar_clear();
      };
    };
  };
};

//Se översta programet
document.getElementById("Kollasnittar").onclick = function () {
  kollasnittar();
  document.getElementById("Kollasnittar").onclick = function () {
    kollasnittar_clear();
    document.getElementById("Kollasnittar").onclick = function () {
      kollasnittar();
      document.getElementById("Kollasnittar").onclick = function () {
        kollasnittar_clear();
      };
    };
  };
};

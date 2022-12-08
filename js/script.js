function kalkulerValuta(){
    ////////////////////////////////////////////////////// DATA HENTING \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // Henter verdien som blir skrevet i tekst input
    let input = document.querySelector("#input").value;
    // Finner hvilken valuta som blir valgt i første Dropdown Meny
    let firstCurrency = document.forms["kalkulator"]["Valuta1"].value;
    // Finner hvilken valuta som blir valgt i andre Dropdown Meny
    let secondCurrency = document.forms["kalkulator"]["Valuta2"].value;
    // Lager to tomme variabler som brukes lengre ned i koden. Må gjøre det sånn pga noe man kaller for "Scope"
    let firstCurrencyMap;
    let result;

    ///////////////////////////////////////////////////////// ARRAYS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // Her har vi ett "Map" som definerer hvor mye vi skal "gange med" når man konverterer NOK til andre valutaer. 
    let nok = new Map([
        ["usd", 0.1],
        ["euro", 0.095],
        ["nok", 1]
    ]);
    // Det samme gjelder på de andre "Mapsa" under
    let usd = new Map([
        ["nok", 10],
        ["euro", 0.95],
        ["usd", 1]
    ]);
    let euro = new Map([
        ["nok", 10.5],
        ["usd", 1.05],
        ["euro", 1]
    ]);
    

    // If-test for å se hvilken valuta som ble valgt og som skal konverteres fra 
    // Koden sier rett og slett: "Hvis første valuta = NOK, så skal nok Map brukes"
    if(firstCurrency == "nok") firstCurrencyMap = nok;
    
    // Hvis første valuta = usd, så skal usd Map brukes
    else if(firstCurrency == "usd") firstCurrencyMap = usd;
    
    // Hvis første valuta = euro, så skal euro Map brukes
    else if(firstCurrency == "euro") firstCurrencyMap = euro;
    
    /* 
    firstCurrencyMap er den tomme variabelen som vi definerte over på linje 10
    Når man skriver "firstCurrencyMap = nok;" 
    Så betyr det at firstCurrencyMap vil bli et Map som er identisk som:
    let nok = new Map([
        ["usd", 0.1],
        ["euro", 0.095],
        ["nok", 1]
    ]);
    */ 

    ////////////////////////////////////////////////////// KALKULERING \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    /*
    I "Maps" så har man det man kaller "Key/Value pairs"
    Det betyr at man "linker" en nøkkel med en verdi.
    I våre Maps her så betyr det at valutaene våres er nøkkelen, og hva man skal gange med er verdien

    EKSEMPEL: Konvertere fra en valuta til Dollar
    Da skriver vi firstCurrencyMap.get("usd") for å få tallet vi skal gange med

    Som du kan se i "if blokkene" under så skrev jeg "firstCurrencyMap.get(secondCurrency)" istedenfor -
    å skrive "usd", "euro", "nok".
    Det er fordi i HTML <option> tagsa så har de forskjellige valgene values som er: nok, usd, euro.
    Så hvis brukeren har valgt Dollar i den andre DropDown Menyen, så vil variabelen secondCurrency være "usd".
    */

    if(firstCurrency == "nok"){
        result = (input * firstCurrencyMap.get(secondCurrency));        
    }
    else if(firstCurrency == "usd"){
        result = (input * firstCurrencyMap.get(secondCurrency));
    }
    else if(firstCurrency == "euro"){
        result = (input * firstCurrencyMap.get(secondCurrency));
    }

    // Se på slutten av linjen under. For å få usd til å bli USD, så brukte jeg toUpperCase() :)
    document.getElementById("resultat").innerHTML = input + " " + firstCurrency + " til " + secondCurrency + ": " + result + firstCurrency.toUpperCase();
}
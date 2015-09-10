// 1 get the drivers nationality
// 2 ge a data set that has the nationality compared to the country countryCode
// 3 apply the country code to the country flag url
// 4 display the country flag
//
// country = driver.driverList.nationality
// return country.value
//
// if


var countries = {
  "Andorra":"ad",
  "UnitedArabEmirates":"ae",
  "Afghanistan":"af",
  "Antigua and Barbuda":"ag",
  "Anguilla":"ai",
  "Albania":"al",
  "Armenia":"am",
  "Angola":"ao",
  "Antarctica":"aq",
  "Argentina":"ar",
  "American Samoa":"as",
  "Austria":"at",
  "Australia":"au",
  "Aruba":"aw",
  "Ã…land":"ax",
  "Azerbaijan":"az",
  "Bosnia and Herzegovina":"ba",
  "Barbados":"bb",
  "Bangladesh":"bd",
  "Belgium":"be",
  "Burkina Faso":"bf",
  "Bulgaria":"bg",
  "Bahrain":"bh",
  "Burundi":"bi",
  "Benin":"bj",
  "Saint BarthÃ©lemy":"bl",
  "Bermuda":"bm",
  "Brunei":"bn",
  "Bolivia":"bo",
  "Bonaire":"bq",
  "Brazil":"br",
  "Bahamas":"bs",
  "Bhutan":"bt",
  "Bouvet Island":"bv",
  "Botswana":"bw",
  "Belarus":"by",
  "Belize":"bz",
  "Canada":"ca",
  "Cocos [Keeling] Islands":"cc",
  "Democratic Republic of the Congo":"cd",
  "Central African Republic":"cf",
  "Republic of the Congo":"cg",
  "Switzerland":"ch",
  "Ivory Coast":"ci",
  "Cook Islands":"ck",
  "Chile":"cl",
  "Cameroon":"cm",
  "China":"cn",
  "Colombia":"co",
  "Costa Rica":"cr",
  "Cuba":"cu",
  "Cape Verde":"cv",
  "Curacao":"cw",
  "Christmas Island":"cx",
  "Cyprus":"cy",
  "Czech Republic":"cz",
  "Germany":"de",
  "Djibouti":"dj",
  "Denmark":"dk",
  "Dominica":"dm",
  "Dominican Republic":"do",
  "Algeria":"dz",
  "Ecuador":"ec",
  "Estonia":"ee",
  "Egypt":"eg",
  "Western Sahara":"eh",
  "Eritrea":"er",
  "Spain":"es",
  "Ethiopia":"et",
  "Finland":"fi",
  "Fiji":"fj",
  "Falkland Islands":"fk",
  "Micronesia":"fm",
  "Faroe Islands":"fo",
  "France":"fr",
  "Gabon":"ga",
  "United Kingdom":"gb",
  "Britian":"gb",
  "Grenada":"gd",
  "Georgia":"ge",
  "French Guiana":"gf",
  "Guernsey":"gg",
  "Ghana":"gh",
  "Gibraltar":"gi",
  "Greenland":"gl",
  "Gambia":"gm",
  "Guinea":"gn",
  "Guadeloupe":"gp",
  "Equatorial Guinea":"gq",
  "Greece":"gr",
  "South Georgia and the South Sandwich Islands":"gs",
  "Guatemala":"gt",
  "Guam":"gu",
  "Guinea-Bissau":"gw",
  "Guyana":"gy",
  "Hong Kong":"hk",
  "Heard Island and McDonald Islands":"hm",
  "Honduras":"hn",
  "Croatia":"hr",
  "Haiti":"ht",
  "Hungary":"hu",
  "Indonesia":"id",
  "Ireland":"ie",
  "Israel":"il",
  "Isle of Man":"im",
  "India":"in",
  "British Indian Ocean Territory":"io",
  "Iraq":"iq",
  "Iran":"ir",
  "Iceland":"is",
  "Italy":"it",
  "Jersey":"je",
  "Jamaica":"jm",
  "Jordan":"jo",
  "Japan":"jp",
  "Kenya":"ke",
  "Kyrgyzstan":"kg",
  "Cambodia":"kh",
  "Kiribati":"ki",
  "Comoros":"km",
  "Saint Kitts and Nevis":"kn",
  "NorthKorea":"kp",
  "SouthKorea":"kr",
  "Kuwait":"kw",
  "Cayman Islands":"ky",
  "Kazakhstan":"kz",
  "Laos":"la",
  "Lebanon":"lb",
  "Saint Lucia":"lc",
  "Liechtenstein":"li",
  "Sri Lanka":"lk",
  "Liberia":"lr",
  "Lesotho":"ls",
  "Lithuania":"lt",
  "Luxembourg":"lu",
  "Latvia":"lv",
  "Libya":"ly",
  "Morocco":"ma",
  "Monaco":"mc",
  "Moldova":"md",
  "Montenegro":"me",
  "Saint Martin":"mf",
  "Madagascar":"mg",
  "Marshall Islands":"mh",
  "Macedonia":"mk",
  "Mali":"ml",
  "Myanmar [Burma]":"mm",
  "Mongolia":"mn",
  "Macao":"mo",
  "Northern Mariana Islands":"mp",
  "Martinique":"mq",
  "Mauritania":"mr",
  "Montserrat":"ms",
  "Malta":"mt",
  "Mauritius":"mu",
  "Maldives":"mv",
  "Malawi":"mw",
  "Mexico":"mx",
  "Malaysia":"my",
  "Mozambique":"mz",
  "Namibia":"na",
  "New Caledonia":"nc",
  "Niger":"ne",
  "Norfolk Island":"nf",
  "Nigeria":"ng",
  "Nicaragua":"ni",
  "Netherlands":"nl",
  "Norway":"no",
  "Nepal":"np",
  "Nauru":"nr",
  "Niue":"nu",
  "New Zealand":"nz",
  "Oman":"om",
  "Panama":"pa",
  "Peru":"pe",
  "French Polynesia":"pf",
  "Papua New Guinea":"pg",
  "Philippines":"ph",
  "Pakistan":"pk",
  "Poland":"pl",
  "Saint Pierre and Miquelon":"pm",
  "Pitcairn Islands":"pn",
  "Puerto Rico":"pr",
  "Palestine":"ps",
  "Portugal":"pt",
  "Palau":"pw",
  "Paraguay":"py",
  "Qatar":"qa",
  "RÃ©union":"re",
  "Romania":"ro",
  "Serbia":"rs",
  "Russia":"ru",
  "Rwanda":"rw",
  "Saudi Arabia":"sa",
  "Solomon Islands":"sb",
  "Seychelles":"sc",
  "Sudan":"sd",
  "Sweden":"se",
  "Singapore":"sg",
  "Saint Helena":"sh",
  "Slovenia":"si",
  "Svalbard and Jan Mayen":"sj",
  "Slovakia":"sk",
  "Sierra Leone":"sl",
  "San Marino":"sm",
  "Senegal":"sn",
  "Somalia":"so",
  "Suriname":"sr",
  "South Sudan":"ss",
  "SAEo TomAo and Pra­ncipe":"st",
  "El Salvador":"sv",
  "Sint Maarten":"sx",
  "Syria":"sy",
  "Swaziland":"sz",
  "Turks and Caicos Islands":"tc",
  "Chad":"td",
  "French Southern Territories":"tf",
  "Togo":"tg",
  "Thailand":"th",
  "Tajikistan":"tj",
  "Tokelau":"tk",
  "East Timor":"tl",
  "Turkmenistan":"tm",
  "Tunisia":"tn",
  "Tonga":"to",
  "Turkey":"tr",
  "Trinidad and Tobago":"tt",
  "Tuvalu":"tv",
  "Taiwan":"tw",
  "Tanzania":"tz",
  "Ukraine":"ua",
  "Uganda":"ug",
  "U.S. Minor Outlying Islands":"um",
  "UnitedStates":"us",
  "Uruguay":"uy",
  "Uzbekistan":"uz",
  "Vatican City":"va",
  "Saint Vincent and the Grenadines":"vc",
  "Venezuela":"ve",
  "British Virgin Islands":"vg",
  "U.S. Virgin Islands":"vi",
  "Vietnam":"vn",
  "Vanuatu":"vu",
  "Wallis and Futuna":"wf",
  "Samoa":"ws",
  "Kosovo":"xk",
  "Yemen":"ye",
  "Mayotte":"yt",
  "SouthAfrica":"za",
  "Zambia":"zm",
  "Zimbabwe":"zw"};

  //if (nationality[i] === )

  var nationality = {
    "South": countries.SouthAfrica,
    /*  need to make if statement in regex function
    to see if the following word after the first matches
    potential countries that require two words to
    succesfully id them.
    Exampmle: South Africa, United States, United Arab...
    after id-ing the required
    words the space needs to be removed between them
    */
    "Swedish": countries.Sweden,
    "Turk": countries.Turkey,
    "Turkis": countries.Turkey,
    "Swiss": countries.Switzerland,
    "Russian": countries.Russia,
    "Moroccan": countries.Morocco,
    "Austrian": countries.Austria,
    "Argentinean": countries.Argentina,
    "Spanish": countries.Spain,
    "German": countries.Germany,
    "Australian": countries.Australia,
    "British": countries.Britian,
    "Finnish": countries.Finland,
    "French": countries.France,
    "Brazilian": countries.Brazil,
    "Mexican": countries.Mexico,
    "Venezuelan": countries.Venezuela,
    "Netherlands": countries.Netherlands,
    "Dutch": countries.Netherlands,
    "Hungarian": countries.Hungary,
    "Belgian": countries.Belgium,
    "Italian": countries.Italy,
    "Malaysian": countries.Malaysia,
    "Chinese": countries.China,
    "Bahrain": countries.Bahrain,
    "Monaco": countries.Monaco,
    "Canadian": countries.Canada,
    "Singapore": countries.Singapore,
    "Korean": countries.SouthKorea,
    "Japanese": countries.Japan,
    "Indian": countries.India,
    "Abu": countries.UnitedArabEmirates,
    "United": countries.UnitedStates
  };


  function countryCode(dTC, cTD, givenDemony, translatesTo){

    if (arguments[0] === 'dTC') {
      demString = givenDemony.toString();
      // return {nationality.demString : countries.translatesTo};
      return {demString : countries.translatesTo};

    }
    else if (arguments[0] === 'cTD') {

    } else {
      return console.log('country not translated, please contact library creator.');
      //alert('country not translated, please contact library creator.')
    }

  }

  // var nationality = [
  // "Spanish ", countries.Spain,
  // "German || Nazi ", countries.Germany,
  // ];

  // function cTD(countryToDemonym, ){}

  // function dTC(demonymTocountry, ){}

  //
  // Country 	Demonym
  // "Afghanistan":	"Afghan"
  // "Albania":	"Albanian"
  // "Algeria":	"Algerian"
  // "Andorra":	"Andorran"
  // "Angola": 	"Angolan"
  // "Antigua"and Barbuda 	Antiguans, Barbudans"
  // "Argentina":	"Argentine or Argentinean"
  // "Armenia":	"Armenian"
  // "Australia":	"Australian or Ozzie or Aussie"
  // "Austria": 	"Austrian"
  // "Azerbaijan 	":"Azerbaijani"
  // "The "Bahamas :	"Bahamian"
  // "Bahrain": 	"Bahraini"
  // "Bangladesh":	"Bangladeshi"
  // "Barbados": 	"Barbadian or Bajuns"
  // "Belarus": 	"Belarusian"
  // "Belgium":	"Belgian"
  // "Belize":	"Belizean"
  // "Benin":	"Beninese"
  // "Bhutan":	"Bhutanese"
  // "Bolivia":	"Bolivian"
  // "Bosnia"and Herzegovina 	Bosnian, Herzegovinian"
  // "Botswana 	"Motswana (singular), Batswana (plural)"
  // "Brazil":	"Brazilian"
  // "Brunei":	"Bruneian"
  // "Bulgaria":	"Bulgarian"
  // "Burkina"Faso :	"Burkinabe"
  // "Burundi 	":"Burundian"
  // "Cambodia":	"Cambodian"
  // "Cameroon":	"Cameroonian"
  // "Canada":	"Canadian"
  // "Cape "Verde 	Cape Verdian or Cape Verdean"
  // "Central"African Republic :	"Central African"
  // "Chad":	"Chadian"
  // "Chile":	"Chilean"
  // "China":	"Chinese"
  // "Colombia":	"Colombian"
  // "Comoros":	"Comoran"
  // "Congo", Republic of the :	"Congolese"
  // "Congo", Democratic Republic of the :	"Congolese"
  // "Costa "Rica :	"Costa Rican"
  // "Cote"d&quot;Ivoire :	"Ivorian"
  // "Croatia 	"Croat or :"Croatian"
  // "Cuba":	"Cuban"
  // "Cyprus 	":"Cypriot"
  // "Czech"Republic :	"Czech"
  // "Denmark 	"Dane or :"Danish"
  // "Djibouti 	":"Djibouti"
  // "Dominica":	"Dominican"
  // "Dominican "Republic :	"Dominican"
  // "East "Timor :	"East Timorese"
  // "Ecuador":	"Ecuadorean"
  // "Egypt":	"Egyptian"
  // "El "Salvador :	"Salvadoran"
  // "Equatorial "Guinea :	"Equatorial Guinean or Equatoguinean"
  // "Eritrea":	"Eritrean"
  // "Estonia":	"Estonian"
  // "Ethiopia":	"Ethiopian"
  // "Fiji":	"Fijian"
  // "Finland":	"Finn or Finnish"
  // "France 	"French or :"Frenchman or Frenchwoman"
  // "Gabon":	"Gabonese"
  // "The "Gambia :	"Gambian"
  // "Georgia":	"Georgian"
  // "Germany":	"German"
  // "Ghana":	"Ghanaian"
  // "Greece 	":"Greek"
  // "Grenada":	"Grenadian or Grenadan"
  // "Guatemala":	"Guatemalan"
  // "Guinea":	"Guinean"
  // "Guinea"-Bissau :	"Guinea-Bissauan"
  // "Guyana":	"Guyanese"
  // "Haiti":	"Haitian"
  // "Honduras":	"Honduran"
  // "Hungary":	"Hungarian"
  // "Iceland":	"Icelander"
  // "India":	"Indian"
  // "Indonesia":	"Indonesian"
  // "Iran":	"Iranian"
  // "Iraq":	"Iraqi"
  // "Ireland":	"Irishman or Irishwoman or Irish"
  // "Israel":	"Israeli"
  // "Italy":	"Italian"
  // "Jamaica":	"Jamaican"
  // "Japan":	"Japanese"
  // "Jordan":	"Jordanian"
  // "Kazakhstan":	"Kazakhstani"
  // "Kenya":	"Kenyan"
  // "Kiribati":	"I-Kiribati"
  // "Korea", North :	"North Korean"
  // "Korea", South :	"South Korean"
  // "Kosovo":	"Kosovar"
  // "Kuwait":	"Kuwaiti"
  // "Kyrgyz"Republic :	"Kyrgyz or Kirghiz"
  // "Laos 	"Lao or: "Laotian"
  // "Latvia":	"Latvian"
  // "Lebanon":	"Lebanese"
  // "Lesotho":	"Mosotho (plural Basotho)"
  // "Liberia":	"Liberian"
  // "Libya":	"Libyan"
  // "Liechtenstein":	"Liechtensteiner"
  // "Lithuania":	"Lithuanian"
  // "Luxembourg":	"Luxembourger"
  // "Macedonia":	"Macedonian"
  // "Madagascar":	"Malagasy"
  // "Malawi":	"Malawian"
  // "Malaysia":	"Malaysian"
  // "Maldives":	"Maldivan"
  // "Mali":	"Malian"
  // "Malta":	"Maltese"
  // "Marshall "Islands :	"Marshallese"
  // "Mauritania":	"Mauritanian"
  // "Mauritius":	"Mauritian"
  // "Mexico":	"Mexican"
  // "Federated "States of Micronesia :	"Micronesian"
  // "Moldova":	"Moldovan"
  // "Monaco":	"Monegasque or Monacan"
  // "Mongolia":	"Mongolian"
  // "Montenegro":	"Montenegrin"
  // "Morocco":	"Moroccan"
  // "Mozambique":	"Mozambican"
  // "Myanmar "(Burma) :	"Burmese or Myanmarese"
  // "Namibia":	"Namibian"
  // "Nauru":	"Nauruan"
  // "Nepal":	"Nepalese"
  // "Netherlands":	"Netherlander, Dutchman, Dutchwoman, Hollander or Dutch (collective)"
  // "New "Zealand :	"New Zealander or Kiwi"
  // "Nicaragua":	"Nicaraguan"
  // "Niger":	"Nigerien"
  // "Nigeria":	"Nigerian"
  // "Norway":	"Norwegian"
  // "Oman":	"Omani"
  // "Pakistan":	"Pakistani"
  // "Palau":	"Palauan"
  // "Panama":	"Panamanian"
  // "Papua "New Guinea :	"Papua New Guinean"
  // "Paraguay":	"Paraguayan"
  // "Peru":	"Peruvian"
  // "Philippines":	"Filipino"
  // "Poland":	"Pole or Polish"
  // "Portugal":	"Portuguese"
  // "Qatar":	"Qatari"
  // "Romania":	"Romanian"
  // "Russia":	"Russian"
  // "Rwanda":	"Rwandan"
  // "Saint "Kitts and Nevis :	"Kittian and Nevisian"
  // "Saint "Lucia :	"Saint Lucian"
  // "Samoa":	"Samoan"
  // "San "Marino :	"Sammarinese or San Marinese"
  // "Sao "Tome and Principe :	"Sao Tomean"
  // "Saudi "Arabia :	"Saudi or Saudi Arabian"
  // "Senegal":	"Senegalese"
  // "Serbia":	"Serbian"
  // "Seychelles":	"Seychellois"
  // "Sierra "Leone 	:"Sierra Leonean"
  // "Singapore":	"Singaporean"
  // "Slovakia":	"Slovak or Slovakian"
  // "Slovenia":	"Slovene or Slovenian"
  // "Solomon "Islands :	"Solomon Islander"
  // "Somalia":	"Somali"
  // "South "Africa :	"South African"
  // "Spain":	"Spaniard or Spanish"
  // "Sri "Lanka :	"Sri Lankan"
  // "Sudan":	"Sudanese"
  // "Suriname":	"Surinamer"
  // "Swaziland":	"Swazi"
  // "Sweden":	"Swede or Swedish"
  // "Switzerland":	"Swiss"
  // "Syria":	"Syrian"
  // "Taiwan":	"Taiwanese"
  // "Tajikistan":	"Tajik or Tadzhik"
  // "Tanzania":	"Tanzanian"
  // "Thailand":	"Thai"
  // "Togo":	"Togolese"
  // "Tonga":	"Tongan"
  // "Trinidad"and Tobago :	"Trinidadian or Tobagonian"
  // "Tunisia":	"Tunisian"
  // "Turkey":	"Turk or Turkish"
  // "Turkmenistan":	"Turkmen(s)"
  // "Tuvalu":	"Tuvaluan"
  // "Uganda":	"Ugandan"
  // "Ukraine":	"Ukrainian"
  // "United"Arab Emirates :	"Emirian"
  // "United "Kingdom :	"Briton"
  // "United"States :	"American"
  // "Uruguay":	"Uruguayan"
  // "Uzbekistan":	"Uzbek or Uzbekistani"
  // Vanuatu :	"Ni-Vanuatu
  // "Vatican "City (Holy See) :	"none"
  // Venezuela :	"Venezuelan
  // "Vietnam":	"Vietnamese"
  // "Yemen":	"Yemeni or Yemenite"
  // "Zambia":	"Zambian"
  // "Zimbabwe":	"Zimbabwean"

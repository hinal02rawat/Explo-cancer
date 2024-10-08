const districts = {
    "DELHI": [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "North East Delhi",
        "North West Delhi",
        "Shahdara",
        "South Delhi",
        "South East Delhi",
        "South West Delhi",
        "West Delhi"
    ],
    "UTTAR PRADESH": [
        "GHAZIABAD",
        "GAUTAM BUDDHA NAGAR",
        "ALIGARH",
        "HATHRAS",
        "BULANDSHAHR",
        "MAINPURI",
        "FIROZABAD",
        "ETAWAH",
        "AURAIYA",
        "ETAH",
        "KANPUR NAGAR",
        "KANPUR DEHAT",
        "UNNAO",
        "AGRA",
        "FARRUKHABAD",
        "KANNAUJ",
        "BANDA",
        "CHITRAKOOT",
        "HAMIRPUR",
        "MAHOBA",
        "ALLAHABAD",
        "KAUSHAMBI",
        "FATEHPUR",
        "VARANASI",
        "CHANDAULI",
        "SANT RAVIDAS NAGAR",
        "MAU",
        "AZAMGARH",
        "BALLIA",
        "JAUNPUR",
        "SULTANPUR",
        "FAIZABAD",
        "AMBEDKAR NAGAR",
        "BARABANKI",
        "LUCKNOW",
        "RAEBARELI",
        "PRATAPGARH",
        "MIRZAPUR",
        "SONBHADRA",
        "GHAZIPUR",
        "HARDOI",
        "SHAHJAHANPUR",
        "BUDAUN",
        "BAREILLY",
        "PILIBHIT",
        "MORADABAD",
        "JYOTIBA PHULE NAGAR",
        "RAMPUR",
        "MUZAFFARNAGAR",
        "MEERUT",
        "BAGPAT",
        "SITAPUR",
        "KHERI",
        "GONDA",
        "BALRAMPUR",
        "SHRAWASTI",
        "AMROHA",
        "BHADOHI",
        "BIJNOR",
        "GHAZIABAD",
        "KANSHIRAM NAGAR",
        "LAKHIMPUR KHERI",
        "MAHAMAYA NAGAR",
        "AHARANPUR",
        "BASTI",
        "BAHRAICH",
        "SANT KABIR NAGAR",
        "SIDDHARTHNAGAR",
        "GORAKHPUR",
        "MAHARAJGANJ",
        "DEORIA",
        "KUSHINAGAR",
        "MATHURA",
        "JHANSI",
        "LALITPUR",
        "JALAUN"
    ],
    "UTTARAKHAND": [
        "UDHAM SINGH NAGAR",
        "NAINITAL",
        "ALMORA",
        "PAURI GARHWAL",
        "RUDRAPRAYAG",
        "CHAMOLI",
        "HARIDWAR",
        "DEHRADUN",
        "TEHRI GARHWAL",
        "UTTARKASHI",
        "CHAMPAWAT",
        "PITHORAGARH",
        "BAGESHWAR"
    ],

    "RAJASTHAN": [
        "ALWAR",
        "JAIPUR",
        "DAUSA",
        "TONK",
        "AJMER",
        "NAGAUR",
        "RAJSAMAND",
        "PALI",
        "SIROHI",
        "UDAIPUR",
        "JALOR",
        "BHILWARA",
        "CHITTORGARH",
        "DUNGARPUR",
        "BANSWARA",
        "BHARATPUR",
        "KARAULI",
        "SAWAI MADHOPUR",
        "BUNDI",
        "KOTA",
        "BARAN",
        "JHALAWAR",
        "DHOLPUR",
        "CHURU",
        "SIKAR",
        "JHUJHUNU",
        "BIKANER",
        "GANGANAGAR",
        "HANUMANGARH",
        "JODHPUR",
        "JAISALMER",
        "BARMER"
    ],
    "GUJARAT": [
        "RAJKOT",
        "JAMNAGAR",
        "BHAVNAGAR",
        "AMRELI",
        "SURENDRA NAGAR",
        "PORBANDAR",
        "JUNAGADH",
        "DIU",
        "GANDHI NAGAR",
        "AHMEDABAD",
        "MORBI",
        "KACHCHH",
        "MAHESANA",
        "SABARKANTHA",
        "PATAN",
        "BANASKANTHA",
        "KHEDA",
        "ANAND",
        "PANCH MAHALS",
        "VADODARA",
        "DAHOD",
        "NARMADA",
        "BHARUCH",
        "SURAT",
        "THE DANGS",
        "NAVSARI",
        "VALSAD"
    ],
    "DADRA & NAGAR HAVELI": [
        "DADRA & NAGAR HAVELI"
    ],
    "DAMAN & DIU": [
        "DIU",
        "DAMAN"
    ],
    "MAHARASHTRA": [
        "MUMBAI",
        "AHMED NAGAR",
        "AURANGABAD",
        "THANE",
        "RAIGARH(MH)",
        "PUNE",
        "NORTH GOA",
        "SOUTH GOA",
        "SATARA",
        "SOLAPUR",
        "BEED",
        "OSMANABAD",
        "LATUR",
        "KOLHAPUR",
        "RATNAGIRI",
        "SANGLI",
        "SINDHUDURG",
        "NASHIK",
        "DHULE",
        "JALGAON",
        "NANDURBAR",
        "JALNA",
        "PARBHANI",
        "HINGOLI",
        "NANDED",
        "NAGPUR",
        "BHANDARA",
        "CHANDRAPUR",
        "GADCHIROLI",
        "GONDIA",
        "WARDHA",
        "AMRAVATI",
        "BULDHANA",
        "AKOLA",
        "WASHIM",
        "YAVATMAL"
    ],
    "MADHYA PRADESH": [
        "EAST NIMAR",
        "WEST NIMAR",
        "BARWANI",
        "INDORE",
        "DEWAS",
        "DHAR",
        "UJJAIN",
        "SHAJAPUR",
        "RATLAM",
        "JHABUA",
        "MANDSAUR",
        "NEEMUCH",
        "BETUL",
        "CHHINDWARA",
        "HOSHANGABAD",
        "HARDA",
        "NARSINGHPUR",
        "BHOPAL",
        "RAISEN",
        "VIDISHA",
        "SAGAR",
        "RAJGARH",
        "SEHORE",
        "DAMOH",
        "CHHATARPUR",
        "PANNA",
        "TIKAMGARH",
        "GUNA",
        "SHIVPURI",
        "GWALIOR",
        "DATIA",
        "MORENA",
        "BHIND",
        "SHEOPUR",
        "SEONI",
        "BALAGHAT",
        "DINDORI",
        "MANDLA",
        "JABALPUR",
        "KATNI",
        "SATNA",
        "SHAHDOL",
        "UMARIA",
        "ANUPPUR",
        "SIDHI",
        "REWA",
        "DURG"
    ],
    "CHATTISGARH": [
        "DHAMTARI",
        "MAHASAMUND",
        "BASTAR",
        "BIJAPUR",
        "KANKER",
        "DANTEWADA",
        "NARAYANPUR",
        "BILASPUR",
        "JANJGIR-CHAMPA",
        "KORBA",
        "RAIGARH",
        "JASHPUR",
        "SURGUJA",
        "KORIYA"
    ],
    "TELANGANA": [
        "HYDERABAD",
        "K.V.RANGAREDDY",
        "MEDAK",
        "NIZAMABAD",
        "ADILABAD",
        "KARIM NAGAR",
        "WARANGAL",
        "KHAMMAM",
        "NALGONDA",
        "MAHABUB NAGAR"
    ],
    "ANDHRA PRADESH": [
        "ANANTHAPUR",
        "CUDDAPAH",
        "CHITTOOR",
        "KURNOOL",
        "KRISHNA",
        "WEST GODAVARI",
        "GUNTUR",
        "PRAKASAM",
        "NELLORE",
        "VISAKHAPATNAM",
        "VIZIANAGARAM",
        "SRIKAKULAM",
        "EAST GODAVARI"
    ],
    "KARNATAKA": [
        "BANGALORE",
        "BANGALORE RURAL",
        "RAMANAGAR",
        "TUMKUR",
        "CHIKKABALLAPUR",
        "KOLAR",
        "Mysuru",
        "CHAMRAJNAGAR",
        "KODAGU",
        "MANDYA",
        "HASSAN",
        "CHICKMAGALUR",
        "UDUPI",
        "DAKSHINA KANNADA",
        "DAVANGARE",
        "SHIMOGA",
        "CHITRADURGA",
        "DHARWARD",
        "HAVERI",
        "GADAG",
        "UTTARA KANNADA",
        "BELGAUM",
        "BELLARY",
        "KOPPAL",
        "RAICHUR",
        "GULBARGA",
        "BIDAR",
        "BIJAPUR",
        "BAGALKOT"
    ],
    "TAMIL NADU": [
        "VELLORE",
        "NORTH GOA",
        "SOUTH GOA",
        "KANCHIPURAM",
        "TIRUVALLUR",
        "VILLUPURAM",
        "TIRUVANNAMALAI",
        "PONDICHERRY",
        "CUDDALORE",
        "NAGAPATTINAM",
        "ARIYALUR",
        "THANJAVUR",
        "TIRUVARUR",
        "KARAIKAL",
        "TIRUCHIRAPPALLI",
        "PUDUKKOTTAI",
        "NAMAKKAL",
        "PERAMBALUR",
        "SALEM",
        "KARUR",
        "SIVAGANGA",
        "RAMANATHAPURAM",
        "VIRUDHUNAGAR",
        "DINDIGUL",
        "MADURAI",
        "TIRUPPUR",
        "THENI",
        "TUTICORIN",
        "TIRUNELVELI",
        "KANYAKUMARI",
        "KRISHNAGIRI",
        "DHARMAPURI",
        "ERODE",
        "COIMBATORE",
        "NILGIRIS"
    ],
    "KERALA": [
        "KANNUR",
        "KASARGOD",
        "WAYANAD",
        "KOZHIKODE",
        "MALAPPURAM",
        "PALAKKAD",
        "THRISSUR",
        "ERNAKULAM",
        "LAKSHADWEEP",
        "IDUKKI",
        "KOTTAYAM",
        "ALAPPUZHA",
        "PATHANAMTHITTA",
        "KOLLAM",
        "THIRUVANANTHAPURAM"
    ],
    "WEST BENGAL": [
        "KOLKATA",
        "SOUTH 24 PARGANAS",
        "NORTH 24 PARGANAS",
        "HOWRAH",
        "HOOGHLY",
        "BARDHAMAN",
        "MURSHIDABAD",
        "WEST MIDNAPORE",
        "EAST MIDNAPORE",
        "BANKURA",
        "Purulia",
        "BIRBHUM",
        "MALDA",
        "SOUTH DINAJPUR",
        "NORTH DINAJPUR",
        "NADIA",
        "JALPAIGURI",
        "DARJILING",
        "COOCH BEHAR"
    ],
    "SIKKIM": [
        "EAST SIKKIM",
        "SOUTH SIKKIM",
        "NORTH SIKKIM",
        "WEST SIKKIM"
    ],
    "ANDAMAN & NICOBAR ISLANDS": [
        "SOUTH ANDAMAN",
        "NORTH AND MIDDLE ANDAMAN",
        "NICOBAR"
    ],
    "ODISHA": [
        "KHORDA",
        "PURI",
        "NAYAGARH",
        "CUTTACK",
        "JAGATSINGHAPUR",
        "JAJAPUR",
        "KENDRAPARA",
        "KENDUJHAR",
        "BALESWAR",
        "MAYURBHANJ",
        "BHADRAK",
        "DHENKANAL",
        "ANGUL",
        "GANJAM",
        "GAJAPATI",
        "KANDHAMAL",
        "BOUDH",
        "KORAPUT",
        "RAYAGADA",
        "MALKANGIRI",
        "NABARANGAPUR",
        "KALAHANDI",
        "NUAPADA",
        "BALANGIR",
        "SONAPUR",
        "SAMBALPUR",
        "BARGARH",
        "JHARSUGUDA",
        "DEBAGARH",
        "SUNDERGARH"
    ],
    "ASSAM": [
        "KAMRUP",
        "NALBARI",
        "BARPETA",
        "NAGAON",
        "KARBI ANGLONG",
        "MARIGAON",
        "GOALPARA",
        "DARRANG",
        "LAKHIMPUR",
        "DHEMAJI",
        "JORHAT",
        "SIBSAGAR",
        "GOLAGHAT",
        "DIBRUGARH",
        "TINSUKIA",
        "CACHAR",
        "HAILAKANDI",
        "KARIMGANJ",
        "NORTH CACHAR HILLS"
    ],
    "ARUNACHAL PRADESH": [
        "WEST KAMENG",
        "EAST KAMENG",
        "TAWANG",
        "WEST SIANG",
        "UPPER SIANG",
        "EAST SIANG",
        "PAPUM PARE",
        "KURUNG KUMEY",
        "LOWER SUBANSIRI",
        "UPPER SUBANSIRI",
        "LOHIT",
        "CHANGLANG",
        "DIBANG VALLEY",
        "TIRAP",
        "EAST KHASI HILLS",
        "JAINTIA HILLS",
        "WEST GARO HILLS",
        "SOUTH GARO HILLS"
    ],
    "MEGHALAYA": [
        "RI BHOI",
        "WEST KHASI HILLS",
        "EAST GARO HILLS",
        "SOUTH WEST KHASI HILLS",
        "JAINTIA HILLS",
        "WEST GARO HILLS",
        "SOUTH GARO HILLS"
    ],
    "MANIPUR": [
        "IMPHAL WEST",
        "IMPHAL EAST",
        "SENAPATI",
        "BISHNUPUR",
        "THOUBAL",
        "UKHRUL",
        "CHANDEL",
        "CHURACHANDPUR",
        "TAMENGLONG"
    ],
    "MIZORAM": [
        "AIZAWL",
        "KOLASIB",
        "MAMMIT",
        "LUNGLEI",
        "SERCHHIP",
        "CHAMPHAI",
        "LAWNGTLAI",
        "SAIHA"
    ],
    "NAGALAND": [
        "KOHIMA",
        "PEREN",
        "WOKHA",
        "DIMAPUR",
        "PHEK",
        "ZUNHEBOTTO",
        "MOKOKCHUNG",
        "TUENSANG",
        "MON",
        "KIPHIRE",
        "LONGLENG"
    ],
    "TRIPURA": [
        "WEST TRIPURA",
        "SOUTH TRIPURA",
        "DHALAI",
        "NORTH TRIPURA"
    ],
    "BIHAR": [
        "PATNA",
        "NALANDA",
        "BUXAR",
        "BHOJPUR",
        "KAIMUR (BHABUA)",
        "ROHTAS",
        "NAWADA",
        "GAYA",
        "ARWAL",
        "JEHANABAD",
        "SHEIKHPURA",
        "LAKHISARAI",
        "MUNGER",
        "BEGUSARAI",
        "BHAGALPUR",
        "JAMUI",
        "BANKA",
        "MADHEPURA",
        "SAHARSA",
        "SUPAUL",
        "KHAGARIA",
        "PURNEA",
        "KATIHAR",
        "ARARIA",
        "AURANGABAD",
        "DARBHANGA",
        "GOPALGANJ",
        "MADHUBANI",
        "MUZAFFARPUR",
        "PASCHIM CHAMPARAN",
        "PURAB CHAMPARAN",
        "SAMASTIPUR",
        "SARAN",
        "SHEOHAR",
        "SITAMARHI",
        "SIWAN",
        "VAISHALI",
        "KISHANGANJ"
    ],
    "JHARKHAND": [
        "SAHIBGANJ",
        "DUMKA",
        "GODDA",
        "DEOGHAR",
        "JAMTARA",
        "PAKUR",
        "GIRIDH",
        "PALAMAU",
        "GARHWA",
        "LATEHAR",
        "AURANGABAD(BH)",
        "RAMGARH",
        "BOKARO",
        "CHATRA",
        "KODERMA",
        "HAZARIBAG",
        "DHANBAD",
        "RANCHI",
        "EAST SINGHBHUM",
        "WEST SINGHBHUM",
        "SERAIKELA-KHARSAWAN",
        "KHUNTI",
        "LOHARDAGA",
        "GUMLA",
        "SIMDEGA"
    ],
    "PONDICHERRY": [
        "PONDICHERRY",
        "KARAIKAL",
        "YANAM",
        "MAHE"
    ]
}


export default districts;
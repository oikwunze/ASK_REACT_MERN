import {RandomUserEntity} from "../models/RandomUserEntity";
import {RandomUser} from "../models/RandomUser";

export class RandomUserService{

    private static randomUserEntity:RandomUserEntity = {
        results: [
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Mitesh",
                    last: "Shayana"
                },
                location: {
                    street: {
                        number: 3701,
                        name: "Rani No Hajiro"
                    },
                    city: "Mehsana",
                    state: "Jammu and Kashmir",
                    country: "India",
                    postcode: 84532,
                    coordinates: {
                        latitude: "4.6185",
                        longitude: "-166.6159"
                    },
                    timezone: {
                        offset: "0:00",
                        description: "Western Europe Time, London, Lisbon, Casablanca"
                    }
                },
                email: "mitesh.shayana@example.com",
                login: {
                    uuid: "9d75b96d-f706-4f3b-accb-f1ef581caa2e",
                    username: "silverpanda949",
                    password: "rush2112",
                    salt: "8BdA9mRi",
                    md5: "5cc034a34ea05d5b7f3b364f94c5655c",
                    sha1: "c8714d99942963e740482982eaa4a8cf116b842d",
                    sha256: "83091d568c608a7fcd38ebdd634e667271dc23345145640cba2ac3cc183f4084"
                },
                dob: {
                    date: "1951-05-28T18:27:14.767Z",
                    age: 71
                },
                registered: {
                    date: "2020-08-30T02:15:16.514Z",
                    age: 2
                },
                phone: "7517661922",
                cell: "7957062581",
                id: {
                    name: "UIDAI",
                    value: "953723267271"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/98.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
                },
                nat: "IN"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Sharief",
                    last: "Hupkes"
                },
                location: {
                    street: {
                        number: 2482,
                        name: "Kousweg"
                    },
                    city: "Zeelst",
                    state: "Groningen",
                    country: "Netherlands",
                    postcode: "5277 ZA",
                    coordinates: {
                        latitude: "-49.8668",
                        longitude: "-87.7905"
                    },
                    timezone: {
                        offset: "0:00",
                        description: "Western Europe Time, London, Lisbon, Casablanca"
                    }
                },
                email: "sharief.hupkes@example.com",
                login: {
                    uuid: "0f8c0a38-c2e9-45b4-94ac-3b2a2d573ff5",
                    username: "happybutterfly853",
                    password: "cisco",
                    salt: "pu2mSu5k",
                    md5: "40b77233f8295ed12168e0b17921adb3",
                    sha1: "fbaff424b09b331d08fd5e873b12660479d829af",
                    sha256: "02dd1113817e9a78def062615139027caceb31a8eef39b7ff897e984d45fdb87"
                },
                dob: {
                    date: "1964-04-05T12:07:20.311Z",
                    age: 58
                },
                registered: {
                    date: "2012-10-20T12:49:54.085Z",
                    age: 10
                },
                phone: "(0996) 833966",
                cell: "(06) 23035279",
                id: {
                    name: "BSN",
                    value: "42813084"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/1.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
                },
                nat: "NL"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Zackary",
                    last: "Brown"
                },
                location: {
                    street: {
                        number: 3606,
                        name: "West Ave"
                    },
                    city: "Armstrong",
                    state: "Québec",
                    country: "Canada",
                    postcode: "R3O 1V9",
                    coordinates: {
                        latitude: "-88.4668",
                        longitude: "-88.1648"
                    },
                    timezone: {
                        offset: "+9:30",
                        description: "Adelaide, Darwin"
                    }
                },
                email: "zackary.brown@example.com",
                login: {
                    uuid: "5d3b5e23-61d5-480b-953b-2d69ffad65ea",
                    username: "ticklishduck871",
                    password: "letter",
                    salt: "o7wRcavV",
                    md5: "6372d9359c9a91f8b8c9d9b72d0bb933",
                    sha1: "ec9957bf664ef014ed7ec6ff50bb69c0db14fe61",
                    sha256: "7795e8a6fca5391e082441689e4c5e3fb59da2c27a5b38ae0839e1cd83355a9c"
                },
                dob: {
                    date: "1976-06-29T02:36:34.355Z",
                    age: 46
                },
                registered: {
                    date: "2020-10-08T05:49:12.294Z",
                    age: 2
                },
                phone: "U75 Y92-3925",
                cell: "F92 Z77-4218",
                id: {
                    name: "SIN",
                    value: "355280249"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/49.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg"
                },
                nat: "CA"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Aleksi",
                    last: "Kujala"
                },
                location: {
                    street: {
                        number: 6397,
                        name: "Tehtaankatu"
                    },
                    city: "Lappeenranta",
                    state: "Northern Ostrobothnia",
                    country: "Finland",
                    postcode: 61843,
                    coordinates: {
                        latitude: "33.7635",
                        longitude: "114.2721"
                    },
                    timezone: {
                        offset: "+11:00",
                        description: "Magadan, Solomon Islands, New Caledonia"
                    }
                },
                email: "aleksi.kujala@example.com",
                login: {
                    uuid: "461583cf-74c2-460d-b83c-cf017f2e5f0c",
                    username: "whitemeercat633",
                    password: "dragon1",
                    salt: "RinNSbgN",
                    md5: "9a54b6c40f91646b38c63b29b39cc0bd",
                    sha1: "2ec1570e5529e722977d707b7254462ace3e3d2e",
                    sha256: "6ef99b794f83cd7955fa6b2ebad1d946633d926f61810b55e5f2e9c31e93b73f"
                },
                dob: {
                    date: "1989-09-15T11:12:38.367Z",
                    age: 33
                },
                registered: {
                    date: "2020-03-18T21:00:45.820Z",
                    age: 2
                },
                phone: "09-036-763",
                cell: "042-294-66-27",
                id: {
                    name: "HETU",
                    value: "NaNNA941undefined"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg"
                },
                nat: "FI"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Irina",
                    last: "Stošić"
                },
                location: {
                    street: {
                        number: 1786,
                        name: "Abadžijska"
                    },
                    city: "Bor",
                    state: "Bor",
                    country: "Serbia",
                    postcode: 60838,
                    coordinates: {
                        latitude: "-51.9758",
                        longitude: "-94.3994"
                    },
                    timezone: {
                        offset: "+10:00",
                        description: "Eastern Australia, Guam, Vladivostok"
                    }
                },
                email: "irina.stosic@example.com",
                login: {
                    uuid: "f5b005c8-d3d8-4e7c-89ee-46f493e4fbc6",
                    username: "yellowostrich130",
                    password: "peters",
                    salt: "EPTE9Zda",
                    md5: "bc985072209fe9b0bb93296110922922",
                    sha1: "97e1c00dd5ed8c469ed690319af7d26dc21023ae",
                    sha256: "08e0dffe80681e57521947f4645593dbdf6a50e941141704adb1f442be0f1a1d"
                },
                dob: {
                    date: "1993-03-31T20:21:21.203Z",
                    age: 29
                },
                registered: {
                    date: "2015-05-03T11:12:58.172Z",
                    age: 7
                },
                phone: "010-9389-644",
                cell: "064-1260-135",
                id: {
                    name: "SID",
                    value: "067372631"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/18.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg"
                },
                nat: "RS"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Divo",
                    last: "Oliveira"
                },
                location: {
                    street: {
                        number: 5009,
                        name: "Rua Pernambuco "
                    },
                    city: "Cascavel",
                    state: "Minas Gerais",
                    country: "Brazil",
                    postcode: 39384,
                    coordinates: {
                        latitude: "-45.1856",
                        longitude: "-126.6204"
                    },
                    timezone: {
                        offset: "-2:00",
                        description: "Mid-Atlantic"
                    }
                },
                email: "divo.oliveira@example.com",
                login: {
                    uuid: "d5883c04-6ea5-482d-b561-6fae669b23ab",
                    username: "organiczebra396",
                    password: "tracy",
                    salt: "3D187k5C",
                    md5: "c1adbd7fc53e2c1f74d3c3f30f8d3dbc",
                    sha1: "7c49f47ad2883a3496e29fe6e8f56d9f40e9c9b1",
                    sha256: "3e8f1c9a33ff8569257dd74fd857e6be8e2813d3c12399b038208cabc24f3472"
                },
                dob: {
                    date: "1944-09-10T12:48:27.244Z",
                    age: 78
                },
                registered: {
                    date: "2016-01-23T11:53:03.411Z",
                    age: 6
                },
                phone: "(95) 5807-0321",
                cell: "(95) 5491-3897",
                id: {
                    name: "CPF",
                    value: "302.905.098-23"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/43.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg"
                },
                nat: "BR"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Kevin",
                    last: "Sanchez"
                },
                location: {
                    street: {
                        number: 5012,
                        name: "Oak Lawn Ave"
                    },
                    city: "Devonport",
                    state: "Victoria",
                    country: "Australia",
                    postcode: 5146,
                    coordinates: {
                        latitude: "-85.4435",
                        longitude: "-139.5416"
                    },
                    timezone: {
                        offset: "-3:00",
                        description: "Brazil, Buenos Aires, Georgetown"
                    }
                },
                email: "kevin.sanchez@example.com",
                login: {
                    uuid: "a4e99ce3-e15a-4ba5-84f6-aa3cf70dd4cb",
                    username: "sadostrich127",
                    password: "cory",
                    salt: "qM87kVUb",
                    md5: "f1fd9c3e3cb6017d574f4037ef0aa3bd",
                    sha1: "8ed55edf08662900328bb52f3ce34e8da867b18b",
                    sha256: "a8342162b7dc61ac937cfc57d5a4ed92f0d69e0751251bf84d47232eae4e0ab4"
                },
                dob: {
                    date: "1957-01-10T18:45:18.300Z",
                    age: 65
                },
                registered: {
                    date: "2012-10-08T20:54:01.477Z",
                    age: 10
                },
                phone: "02-0285-4125",
                cell: "0418-916-966",
                id: {
                    name: "TFN",
                    value: "007606480"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/45.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                },
                nat: "AU"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "هستی",
                    last: "صدر"
                },
                location: {
                    street: {
                        number: 672,
                        name: "میدان امام خمینی"
                    },
                    city: "اصفهان",
                    state: "اصفهان",
                    country: "Iran",
                    postcode: 70538,
                    coordinates: {
                        latitude: "81.9642",
                        longitude: "-115.7220"
                    },
                    timezone: {
                        offset: "-10:00",
                        description: "Hawaii"
                    }
                },
                email: "hsty.sdr@example.com",
                login: {
                    uuid: "02097ab7-fd00-4afa-8da3-30f6cfa67714",
                    username: "sadbear839",
                    password: "binladen",
                    salt: "4jHbOCn4",
                    md5: "4c98baffff97e4af37e53a90764b8d7b",
                    sha1: "ef5bad5a5512a590285ba053de920ddc213c563e",
                    sha256: "81e8baf9e0dfec48320b21919bdce84db924e7db6959d14cde401adf69f7e203"
                },
                dob: {
                    date: "1985-02-28T08:46:21.238Z",
                    age: 37
                },
                registered: {
                    date: "2012-01-28T20:53:18.864Z",
                    age: 10
                },
                phone: "049-15917011",
                cell: "0961-341-7522",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/88.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"
                },
                nat: "IR"
            },
            {
                gender: "male",
                name: {
                    title: "Monsieur",
                    first: "Basil",
                    last: "Gonzalez"
                },
                location: {
                    street: {
                        number: 6286,
                        name: "Rue D'Abbeville"
                    },
                    city: "Sargans",
                    state: "Nidwalden",
                    country: "Switzerland",
                    postcode: 3975,
                    coordinates: {
                        latitude: "18.4251",
                        longitude: "-152.0549"
                    },
                    timezone: {
                        offset: "+9:00",
                        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                    }
                },
                email: "basil.gonzalez@example.com",
                login: {
                    uuid: "2590ab6c-3a61-4154-b587-375e7dff2e7e",
                    username: "silverduck900",
                    password: "john316",
                    salt: "NUD0d6rV",
                    md5: "457e19962b3131cfe3cdc158b96e8384",
                    sha1: "ce2e7eb36487d3e4bca6954a62f0787aa1ffd6d6",
                    sha256: "7b7cee24765a99422f24351dfc4503e589a8839046497c4c5ab854eb784e601d"
                },
                dob: {
                    date: "1988-03-09T08:49:49.123Z",
                    age: 34
                },
                registered: {
                    date: "2015-05-21T20:01:46.761Z",
                    age: 7
                },
                phone: "076 616 37 45",
                cell: "078 257 95 33",
                id: {
                    name: "AVS",
                    value: "756.4418.5181.10"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/75.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                },
                nat: "CH"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Neea",
                    last: "Huotari"
                },
                location: {
                    street: {
                        number: 5531,
                        name: "Pyynikintie"
                    },
                    city: "Pyhtää",
                    state: "Northern Ostrobothnia",
                    country: "Finland",
                    postcode: 94373,
                    coordinates: {
                        latitude: "16.9068",
                        longitude: "175.8833"
                    },
                    timezone: {
                        offset: "+4:00",
                        description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                    }
                },
                email: "neea.huotari@example.com",
                login: {
                    uuid: "50a6f89d-1b05-442f-887f-26efc504f191",
                    username: "purpledog904",
                    password: "chevys",
                    salt: "w3eVS9wv",
                    md5: "5fa070155b7c6984aa663db9043b214f",
                    sha1: "d0cc183bebf43851db7adb616c9e854be48f5ff7",
                    sha256: "aacef6a3f2f39a8089668469c7b0437e03bdbb239ac98a093caab20fd261663b"
                },
                dob: {
                    date: "1997-07-16T06:22:15.476Z",
                    age: 25
                },
                registered: {
                    date: "2013-04-20T18:44:34.815Z",
                    age: 9
                },
                phone: "04-050-684",
                cell: "043-115-15-10",
                id: {
                    name: "HETU",
                    value: "NaNNA910undefined"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/5.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg"
                },
                nat: "FI"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Reema",
                    last: "Singh"
                },
                location: {
                    street: {
                        number: 6001,
                        name: "Lamington Rd"
                    },
                    city: "Dehri",
                    state: "Uttarakhand",
                    country: "India",
                    postcode: 47384,
                    coordinates: {
                        latitude: "79.9992",
                        longitude: "125.3503"
                    },
                    timezone: {
                        offset: "-8:00",
                        description: "Pacific Time (US & Canada)"
                    }
                },
                email: "reema.singh@example.com",
                login: {
                    uuid: "35069c58-95c3-449f-b2cb-04ba0387404d",
                    username: "bigbear652",
                    password: "joseph",
                    salt: "NXWD8VEG",
                    md5: "0b25cd9f769b6b2634b3d28b90ddcb27",
                    sha1: "53a3739c2494c32b2922679dc30a662dd04341e7",
                    sha256: "d4245f22cb71a0ba84bacb5eb62cfdaa9ed8e235f09aa8d5bff82df7bf382de4"
                },
                dob: {
                    date: "1977-12-01T10:31:28.415Z",
                    age: 45
                },
                registered: {
                    date: "2009-03-07T03:11:52.463Z",
                    age: 13
                },
                phone: "7262829307",
                cell: "8480546181",
                id: {
                    name: "UIDAI",
                    value: "575931183964"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/45.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg"
                },
                nat: "IN"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "Suzanne",
                    last: "Mitchell"
                },
                location: {
                    street: {
                        number: 7873,
                        name: "Green Lane"
                    },
                    city: "Preston",
                    state: "Cornwall",
                    country: "United Kingdom",
                    postcode: "ZX4S 3AX",
                    coordinates: {
                        latitude: "13.5702",
                        longitude: "-3.7287"
                    },
                    timezone: {
                        offset: "+4:30",
                        description: "Kabul"
                    }
                },
                email: "suzanne.mitchell@example.com",
                login: {
                    uuid: "2381df29-f9a0-40bb-8a7d-089cc6411a11",
                    username: "lazyladybug527",
                    password: "trunks",
                    salt: "E1Q2StRy",
                    md5: "e3ae11dcac6923bd2facf0941cf32e05",
                    sha1: "8dd9590b2c7598221264036ced98e8d4b2a4150b",
                    sha256: "ac6123ad5a42170715952c3ae501ed8420bed73ba1cb8a658651d60675fb8029"
                },
                dob: {
                    date: "1945-01-24T22:34:53.215Z",
                    age: 77
                },
                registered: {
                    date: "2021-06-26T16:16:01.860Z",
                    age: 1
                },
                phone: "021 9816 1924",
                cell: "07956 963122",
                id: {
                    name: "NINO",
                    value: "CM 53 19 24 H"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/61.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
                },
                nat: "GB"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Elif",
                    last: "Karaer"
                },
                location: {
                    street: {
                        number: 993,
                        name: "Vatan Cd"
                    },
                    city: "Amasya",
                    state: "Kilis",
                    country: "Turkey",
                    postcode: 18294,
                    coordinates: {
                        latitude: "31.0774",
                        longitude: "143.8196"
                    },
                    timezone: {
                        offset: "-7:00",
                        description: "Mountain Time (US & Canada)"
                    }
                },
                email: "elif.karaer@example.com",
                login: {
                    uuid: "280a73e2-b0db-47e7-a18e-1c121a2672b8",
                    username: "organicbird597",
                    password: "dollars",
                    salt: "R4wrHbgp",
                    md5: "aacdde2b4dca70016fcaa2cdba49ae24",
                    sha1: "3d5b098e49047dc68d75f9fb466aa64cf0b45805",
                    sha256: "3176ee15ff05a83c758279194010cfd50b56d9c65eb5ce226fb5fba450dda185"
                },
                dob: {
                    date: "1973-01-23T14:42:42.611Z",
                    age: 49
                },
                registered: {
                    date: "2017-03-02T04:13:48.698Z",
                    age: 5
                },
                phone: "(652)-547-7794",
                cell: "(212)-118-2386",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/53.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
                },
                nat: "TR"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Lotta",
                    last: "Hokkanen"
                },
                location: {
                    street: {
                        number: 4384,
                        name: "Otavalankatu"
                    },
                    city: "Muhos",
                    state: "Central Finland",
                    country: "Finland",
                    postcode: 15742,
                    coordinates: {
                        latitude: "-37.5152",
                        longitude: "-106.3302"
                    },
                    timezone: {
                        offset: "-4:00",
                        description: "Atlantic Time (Canada), Caracas, La Paz"
                    }
                },
                email: "lotta.hokkanen@example.com",
                login: {
                    uuid: "2416da7c-85ab-47f0-a4c7-c3ecac55a2a4",
                    username: "organicpeacock236",
                    password: "nights",
                    salt: "4fUzKl31",
                    md5: "79b931c8a946059aff5982bab34dd85b",
                    sha1: "c6b3844bc873b9dcdaf7c9a4ba5268950853bb50",
                    sha256: "3d4859b0b49e0095c91234ba75540085e377fefca79eaff200d34580db0bfdaf"
                },
                dob: {
                    date: "1952-08-27T02:16:38.059Z",
                    age: 70
                },
                registered: {
                    date: "2017-06-02T06:16:43.667Z",
                    age: 5
                },
                phone: "02-965-559",
                cell: "048-388-77-75",
                id: {
                    name: "HETU",
                    value: "NaNNA910undefined"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/35.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg"
                },
                nat: "FI"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Sverre",
                    last: "Nystad"
                },
                location: {
                    street: {
                        number: 3718,
                        name: "Holmenkollveien"
                    },
                    city: "Vanse",
                    state: "Møre og Romsdal",
                    country: "Norway",
                    postcode: "4092",
                    coordinates: {
                        latitude: "48.6536",
                        longitude: "-30.2629"
                    },
                    timezone: {
                        offset: "+11:00",
                        description: "Magadan, Solomon Islands, New Caledonia"
                    }
                },
                email: "sverre.nystad@example.com",
                login: {
                    uuid: "9b39ce95-5662-4e82-a120-5da2d989a5e5",
                    username: "brownsnake890",
                    password: "player1",
                    salt: "2jakqNHP",
                    md5: "e065737bb642b4591a50c3e0e0666ed8",
                    sha1: "a2104898128001740d0c3cfdb464f21724b4c986",
                    sha256: "6037a85155f37b4b68b4884b34b618e17e2167f705dfc2139f241b4b67dac326"
                },
                dob: {
                    date: "1973-07-25T07:23:37.491Z",
                    age: 49
                },
                registered: {
                    date: "2008-12-20T02:09:12.950Z",
                    age: 14
                },
                phone: "25695364",
                cell: "95784010",
                id: {
                    name: "FN",
                    value: "25077337175"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/29.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                },
                nat: "NO"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Marleen",
                    last: "Tijsma"
                },
                location: {
                    street: {
                        number: 4197,
                        name: "Delstraat"
                    },
                    city: "Oud-Beijerland",
                    state: "Friesland",
                    country: "Netherlands",
                    postcode: "1878 AS",
                    coordinates: {
                        latitude: "69.5069",
                        longitude: "-155.5110"
                    },
                    timezone: {
                        offset: "-6:00",
                        description: "Central Time (US & Canada), Mexico City"
                    }
                },
                email: "marleen.tijsma@example.com",
                login: {
                    uuid: "cbf553a2-ee80-4409-9ae7-42291930f218",
                    username: "happymeercat329",
                    password: "thewho",
                    salt: "bf82o41N",
                    md5: "b651bdd7453e9f8b005509668614aadb",
                    sha1: "64c4e25f7c93485862db10ab37103254b40c0918",
                    sha256: "88c3d77bb62378f13528d7c66e654a2155f214ef97516bd3ba95dd7074bf423c"
                },
                dob: {
                    date: "2001-02-18T15:39:59.183Z",
                    age: 21
                },
                registered: {
                    date: "2005-11-17T18:46:11.179Z",
                    age: 17
                },
                phone: "(0715) 576240",
                cell: "(06) 15459196",
                id: {
                    name: "BSN",
                    value: "31264484"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/88.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"
                },
                nat: "NL"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Murat",
                    last: "Ayaydın"
                },
                location: {
                    street: {
                        number: 4683,
                        name: "Filistin Cd"
                    },
                    city: "Çorum",
                    state: "Kilis",
                    country: "Turkey",
                    postcode: 43297,
                    coordinates: {
                        latitude: "45.9415",
                        longitude: "44.3677"
                    },
                    timezone: {
                        offset: "+4:30",
                        description: "Kabul"
                    }
                },
                email: "murat.ayaydin@example.com",
                login: {
                    uuid: "ea2963f6-acc7-4fc7-8710-995713a3d3e4",
                    username: "tinyladybug705",
                    password: "gerry",
                    salt: "s1OALRRI",
                    md5: "b5bc141318bc5e102a849889b8277750",
                    sha1: "0f5284b2941960752a7d2ce3be2ee06849784aec",
                    sha256: "d432c93f9ba7d997e5674baba8822d74f4e7bf5dc518baf58a99333f95fb1dda"
                },
                dob: {
                    date: "1988-09-30T13:25:33.945Z",
                    age: 34
                },
                registered: {
                    date: "2006-09-12T07:40:13.141Z",
                    age: 16
                },
                phone: "(518)-786-3857",
                cell: "(916)-118-4372",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/42.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
                },
                nat: "TR"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Galina",
                    last: "Aleksić"
                },
                location: {
                    street: {
                        number: 1015,
                        name: "Željka Božića"
                    },
                    city: "Priština",
                    state: "Mačva",
                    country: "Serbia",
                    postcode: 93811,
                    coordinates: {
                        latitude: "-78.8045",
                        longitude: "85.1498"
                    },
                    timezone: {
                        offset: "+8:00",
                        description: "Beijing, Perth, Singapore, Hong Kong"
                    }
                },
                email: "galina.aleksic@example.com",
                login: {
                    uuid: "87d197a3-d29b-48e6-a1d4-f967ce90ac3b",
                    username: "biglion209",
                    password: "goddess",
                    salt: "xcdgf2jd",
                    md5: "afced75e44fb1e0edc85b95bbde0e92d",
                    sha1: "a5a725c5888397ced8ab660bab1f533cd28b15b6",
                    sha256: "2f0301d092b2ee1043ba07dec9864caac9e752b17515fe50010293ce9223bc4b"
                },
                dob: {
                    date: "1965-08-20T12:51:55.234Z",
                    age: 57
                },
                registered: {
                    date: "2002-12-06T19:56:21.729Z",
                    age: 20
                },
                phone: "029-5659-585",
                cell: "061-9396-099",
                id: {
                    name: "SID",
                    value: "838753093"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/45.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg"
                },
                nat: "RS"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Harry",
                    last: "Walker"
                },
                location: {
                    street: {
                        number: 8089,
                        name: "Ward Street"
                    },
                    city: "Porirua",
                    state: "Manawatu-Wanganui",
                    country: "New Zealand",
                    postcode: 98171,
                    coordinates: {
                        latitude: "-63.1543",
                        longitude: "143.6258"
                    },
                    timezone: {
                        offset: "-2:00",
                        description: "Mid-Atlantic"
                    }
                },
                email: "harry.walker@example.com",
                login: {
                    uuid: "7dadb4b6-e877-40fa-91c4-2a715ec3120d",
                    username: "purpletiger141",
                    password: "burger",
                    salt: "cmfwIQ8j",
                    md5: "44d8b9e13ef4b76f7d16f6cbcb95044c",
                    sha1: "817ce21fe310d0c389115469094f082286f58883",
                    sha256: "06ba771d0786c5be768bb8021bcc956e40a0f7bfd0cfea98bc270fe13fc1b3c9"
                },
                dob: {
                    date: "1998-01-06T21:30:02.120Z",
                    age: 24
                },
                registered: {
                    date: "2011-08-22T05:57:22.647Z",
                    age: 11
                },
                phone: "(789)-829-2370",
                cell: "(783)-534-2645",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/24.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg"
                },
                nat: "NZ"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Salman",
                    last: "Mariën"
                },
                location: {
                    street: {
                        number: 6784,
                        name: "Eskampstraat"
                    },
                    city: "Kraggenburg",
                    state: "Limburg",
                    country: "Netherlands",
                    postcode: "3612 OC",
                    coordinates: {
                        latitude: "83.2915",
                        longitude: "-108.3096"
                    },
                    timezone: {
                        offset: "+8:00",
                        description: "Beijing, Perth, Singapore, Hong Kong"
                    }
                },
                email: "salman.marien@example.com",
                login: {
                    uuid: "1cf18fc1-3a0d-4b16-b0c7-9325b65e998a",
                    username: "beautifulpeacock118",
                    password: "butkus",
                    salt: "tS1nYIAW",
                    md5: "cd8b4486abeb080b8ccfbf46411561c7",
                    sha1: "d9570299aa375b36960f46abf212e62b740073f0",
                    sha256: "cb784ae0a4b1e95c45a7fe8dfe4d8e11c44a4e967266fd8bc94d473829393a42"
                },
                dob: {
                    date: "1967-12-17T09:41:30.056Z",
                    age: 55
                },
                registered: {
                    date: "2018-04-26T17:26:26.155Z",
                    age: 4
                },
                phone: "(040) 8960787",
                cell: "(06) 22504249",
                id: {
                    name: "BSN",
                    value: "21835980"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/85.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg"
                },
                nat: "NL"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Eric",
                    last: "Kaczmarek"
                },
                location: {
                    street: {
                        number: 1212,
                        name: "Danziger Straße"
                    },
                    city: "Goslar",
                    state: "Schleswig-Holstein",
                    country: "Germany",
                    postcode: 31008,
                    coordinates: {
                        latitude: "-0.2108",
                        longitude: "153.8528"
                    },
                    timezone: {
                        offset: "+3:00",
                        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                email: "eric.kaczmarek@example.com",
                login: {
                    uuid: "5d4d13b5-4dd9-45a3-b365-ce3377dfcc94",
                    username: "brownostrich109",
                    password: "tools",
                    salt: "ToqlHU3B",
                    md5: "e9e5092aba826b141ddc3ddfe99861f9",
                    sha1: "9a71baf11f7b3813441fe539342cb9963cc84f32",
                    sha256: "57a37dec2e6e1c8ed7ebbf6511b94d9dae1610a7a5fed261d3f67de2254a2280"
                },
                dob: {
                    date: "1970-08-21T08:19:45.047Z",
                    age: 52
                },
                registered: {
                    date: "2011-04-25T21:21:19.965Z",
                    age: 11
                },
                phone: "0603-7733499",
                cell: "0171-0867618",
                id: {
                    name: "SVNR",
                    value: "39 210870 K 036"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/88.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
                },
                nat: "DE"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Kira",
                    last: "Kim"
                },
                location: {
                    street: {
                        number: 9906,
                        name: "Liljeveien"
                    },
                    city: "Brunstad",
                    state: "Hedmark",
                    country: "Norway",
                    postcode: "3471",
                    coordinates: {
                        latitude: "27.1280",
                        longitude: "141.0537"
                    },
                    timezone: {
                        offset: "+4:30",
                        description: "Kabul"
                    }
                },
                email: "kira.kim@example.com",
                login: {
                    uuid: "8ca70d26-3c9f-4599-93fd-1a2e46fe8afb",
                    username: "orangefish806",
                    password: "sweetie",
                    salt: "i11MsGhm",
                    md5: "9cfcefb5e0c54c4404a043c4d8814786",
                    sha1: "1b17d18fda407e0abe00409aee007bf67de851ec",
                    sha256: "62b3edda495de083d8649f60a706c1f14901a1900c5f30886ef4f3c97e96ca4a"
                },
                dob: {
                    date: "1973-06-21T01:50:08.367Z",
                    age: 49
                },
                registered: {
                    date: "2018-02-17T14:20:28.366Z",
                    age: 4
                },
                phone: "69208314",
                cell: "41771563",
                id: {
                    name: "FN",
                    value: "21067349889"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/46.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg"
                },
                nat: "NO"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Brian",
                    last: "Drageset"
                },
                location: {
                    street: {
                        number: 6943,
                        name: "Granebakken"
                    },
                    city: "Haugo",
                    state: "Nord-Trøndelag",
                    country: "Norway",
                    postcode: "2211",
                    coordinates: {
                        latitude: "-20.7712",
                        longitude: "-131.8286"
                    },
                    timezone: {
                        offset: "+5:00",
                        description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
                    }
                },
                email: "brian.drageset@example.com",
                login: {
                    uuid: "3346ae5d-dad5-45c2-9df8-a5c9ac8fe7b5",
                    username: "orangepeacock531",
                    password: "valerie",
                    salt: "j8YCVVTh",
                    md5: "5658a6bdb45e09a835877f71ffcbfc79",
                    sha1: "391476a2a8dba8ec58fecbab31e36c07256f3dfc",
                    sha256: "f46cf1ed7e9591acac843f8407dd92af675dfb6726b779d18ff94507f1f6ab73"
                },
                dob: {
                    date: "1961-12-18T02:42:30.403Z",
                    age: 61
                },
                registered: {
                    date: "2014-01-26T02:48:27.047Z",
                    age: 8
                },
                phone: "64499243",
                cell: "41857345",
                id: {
                    name: "FN",
                    value: "18126109152"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/7.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
                },
                nat: "NO"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Alexa",
                    last: "White"
                },
                location: {
                    street: {
                        number: 1868,
                        name: "Elgin St"
                    },
                    city: "Des Moines",
                    state: "Hawaii",
                    country: "United States",
                    postcode: 46812,
                    coordinates: {
                        latitude: "-89.7802",
                        longitude: "139.3114"
                    },
                    timezone: {
                        offset: "+3:30",
                        description: "Tehran"
                    }
                },
                email: "alexa.white@example.com",
                login: {
                    uuid: "66f8d4a2-8863-4f36-8da5-7931f0f1be54",
                    username: "heavygorilla754",
                    password: "majestic",
                    salt: "LkZWwWrq",
                    md5: "a6f46d71d5c0803560ead7c0e2efd1ad",
                    sha1: "a04556cbbabcc2c38afe0deffef6b90bdf1f4dfc",
                    sha256: "48e308db614ad4da4a80678c267882788d238bc9001077f6273d02947c9cb8a8"
                },
                dob: {
                    date: "1997-01-30T18:19:23.820Z",
                    age: 25
                },
                registered: {
                    date: "2018-06-21T04:25:52.497Z",
                    age: 4
                },
                phone: "(895) 357-0800",
                cell: "(514) 259-3524",
                id: {
                    name: "SSN",
                    value: "618-39-7922"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/61.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
                },
                nat: "US"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Ella",
                    last: "Fernandez"
                },
                location: {
                    street: {
                        number: 8979,
                        name: "York Road"
                    },
                    city: "Sunderland",
                    state: "Buckinghamshire",
                    country: "United Kingdom",
                    postcode: "AO8Z 5PP",
                    coordinates: {
                        latitude: "6.0962",
                        longitude: "-171.4403"
                    },
                    timezone: {
                        offset: "+10:00",
                        description: "Eastern Australia, Guam, Vladivostok"
                    }
                },
                email: "ella.fernandez@example.com",
                login: {
                    uuid: "1449088b-8a84-496c-bcf6-42432e35da5f",
                    username: "smallsnake566",
                    password: "billie",
                    salt: "eeuk9OtM",
                    md5: "a4c7b18b32ac9e0013b97a45d665155d",
                    sha1: "a0c4d7e6ce07d717b5d7a816efafd32e2477ac47",
                    sha256: "f010ca5d4faaecb8127fbc1a2e412b72f6400ae523316a721a3827281ceb8d10"
                },
                dob: {
                    date: "1972-03-13T23:20:52.862Z",
                    age: 50
                },
                registered: {
                    date: "2004-09-12T21:45:15.140Z",
                    age: 18
                },
                phone: "017687 30774",
                cell: "07150 660162",
                id: {
                    name: "NINO",
                    value: "XC 48 19 15 S"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/40.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
                },
                nat: "GB"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Kenan",
                    last: "Özgörkey"
                },
                location: {
                    street: {
                        number: 2743,
                        name: "Istiklal Cd"
                    },
                    city: "Denizli",
                    state: "Samsun",
                    country: "Turkey",
                    postcode: 46804,
                    coordinates: {
                        latitude: "1.7446",
                        longitude: "-120.2209"
                    },
                    timezone: {
                        offset: "+3:00",
                        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                email: "kenan.ozgorkey@example.com",
                login: {
                    uuid: "6478801e-1b69-42dd-a9b2-2c50ea888fc5",
                    username: "greenrabbit767",
                    password: "peanut",
                    salt: "I1IsoORB",
                    md5: "02da86f2385b97775a16cca7b736d92a",
                    sha1: "b91d89d6b2700a634f5dcd296a37abe29bffd6c6",
                    sha256: "86a626764f978d5c0e7dd19ebbf38841292cba401fef69b3f119449dd0366880"
                },
                dob: {
                    date: "1949-05-30T05:06:04.400Z",
                    age: 73
                },
                registered: {
                    date: "2007-10-14T21:07:24.448Z",
                    age: 15
                },
                phone: "(142)-438-4634",
                cell: "(835)-526-3754",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/24.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg"
                },
                nat: "TR"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Tallak",
                    last: "Brækken"
                },
                location: {
                    street: {
                        number: 2934,
                        name: "Movassbakken"
                    },
                    city: "Hjelset",
                    state: "Hedmark",
                    country: "Norway",
                    postcode: "7623",
                    coordinates: {
                        latitude: "67.7957",
                        longitude: "112.3429"
                    },
                    timezone: {
                        offset: "-6:00",
                        description: "Central Time (US & Canada), Mexico City"
                    }
                },
                email: "tallak.braekken@example.com",
                login: {
                    uuid: "ccb8e20c-1d9f-455e-a0d2-024a8ab3de85",
                    username: "beautifulzebra199",
                    password: "chilli",
                    salt: "PZkXtznH",
                    md5: "2896f4e5c9174cdfdb45acd56d078d03",
                    sha1: "fa7f43b7a2a0b0ed2df1100e00107a99e6bff482",
                    sha256: "3a1e59953ae1b8b1fab57854c083ed4c5cbdd1d148f3e10813ff4840445fa38b"
                },
                dob: {
                    date: "1983-06-17T13:03:38.359Z",
                    age: 39
                },
                registered: {
                    date: "2015-09-13T01:57:30.493Z",
                    age: 7
                },
                phone: "79803513",
                cell: "47139664",
                id: {
                    name: "FN",
                    value: "17068340942"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/24.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg"
                },
                nat: "NO"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Scott",
                    last: "Richardson"
                },
                location: {
                    street: {
                        number: 6027,
                        name: "Pockrus Page Rd"
                    },
                    city: "Moscow",
                    state: "New Mexico",
                    country: "United States",
                    postcode: 95197,
                    coordinates: {
                        latitude: "-36.4787",
                        longitude: "-176.4169"
                    },
                    timezone: {
                        offset: "-1:00",
                        description: "Azores, Cape Verde Islands"
                    }
                },
                email: "scott.richardson@example.com",
                login: {
                    uuid: "9bf9596f-9cd7-4021-87bf-9bb366a3b01f",
                    username: "silverbutterfly597",
                    password: "surgery",
                    salt: "I8I9WtCt",
                    md5: "8fe57c46342ef9306014ffa8debaa092",
                    sha1: "b9239cb7daa73c777a7de152b2e548e06ee59619",
                    sha256: "d89bf847608a9b0b68c6db4f2993534690314ea70dd46af1cae7e9c3e5e02844"
                },
                dob: {
                    date: "1975-09-19T18:55:28.286Z",
                    age: 47
                },
                registered: {
                    date: "2014-05-16T12:16:16.021Z",
                    age: 8
                },
                phone: "(581) 269-1478",
                cell: "(860) 757-0122",
                id: {
                    name: "SSN",
                    value: "407-09-7732"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/19.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
                },
                nat: "US"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Lourdes",
                    last: "Villa"
                },
                location: {
                    street: {
                        number: 1475,
                        name: "Calle Armenia"
                    },
                    city: "Tacubaya",
                    state: "Aguascalientes",
                    country: "Mexico",
                    postcode: 28695,
                    coordinates: {
                        latitude: "65.3394",
                        longitude: "-98.1345"
                    },
                    timezone: {
                        offset: "+3:00",
                        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                email: "lourdes.villa@example.com",
                login: {
                    uuid: "edae694f-2eac-447f-8b53-c198ba371939",
                    username: "blackmeercat565",
                    password: "commando",
                    salt: "4nyNfxAy",
                    md5: "1b5e65e7c78c8328e9d453fe2ad2765e",
                    sha1: "93991f6746c05e4cc91d971b3f3dfa7436cea128",
                    sha256: "311bf5b04e2461692b91cba6575d8e4d69f43b2461973384bb1fbf23c195cc32"
                },
                dob: {
                    date: "1944-12-09T23:44:17.671Z",
                    age: 78
                },
                registered: {
                    date: "2009-06-14T08:54:10.940Z",
                    age: 13
                },
                phone: "(672) 989 1249",
                cell: "(649) 087 3355",
                id: {
                    name: "NSS",
                    value: "29 92 08 1301 4"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/54.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg"
                },
                nat: "MX"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Hailey",
                    last: "Roy"
                },
                location: {
                    street: {
                        number: 1602,
                        name: "Brock Rd"
                    },
                    city: "Enterprise",
                    state: "New Brunswick",
                    country: "Canada",
                    postcode: "O1R 7E1",
                    coordinates: {
                        latitude: "-2.9439",
                        longitude: "33.9892"
                    },
                    timezone: {
                        offset: "0:00",
                        description: "Western Europe Time, London, Lisbon, Casablanca"
                    }
                },
                email: "hailey.roy@example.com",
                login: {
                    uuid: "e2fa5139-66d7-43ec-80bd-4b2a793f54da",
                    username: "silverpeacock361",
                    password: "1026",
                    salt: "5PXEcCKg",
                    md5: "6eeba1c1c6ba5c0e250ae8fe368cbd03",
                    sha1: "73a784fc966240e9b65ad3e9125f6fd910aa900d",
                    sha256: "fc991ac4a32ca8dd0583232af186831c188389c82686392f50cc412dcce04f65"
                },
                dob: {
                    date: "1997-08-06T11:43:50.080Z",
                    age: 25
                },
                registered: {
                    date: "2006-04-26T02:21:54.209Z",
                    age: 16
                },
                phone: "T45 B05-7309",
                cell: "Q23 R59-5248",
                id: {
                    name: "SIN",
                    value: "576621783"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/8.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg"
                },
                nat: "CA"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "Iina",
                    last: "Leppo"
                },
                location: {
                    street: {
                        number: 7668,
                        name: "Tahmelantie"
                    },
                    city: "Kesälahti",
                    state: "Kymenlaakso",
                    country: "Finland",
                    postcode: 67979,
                    coordinates: {
                        latitude: "-14.1609",
                        longitude: "37.1822"
                    },
                    timezone: {
                        offset: "+9:30",
                        description: "Adelaide, Darwin"
                    }
                },
                email: "iina.leppo@example.com",
                login: {
                    uuid: "bb86e7ac-3682-4dcd-a5d9-cf2b22c76b3d",
                    username: "blueswan719",
                    password: "droopy",
                    salt: "IcyJ8ojC",
                    md5: "c5ee208ba48add2375e4cf4e215cfb91",
                    sha1: "4a89b99da552ffb55198a7c2c1d3328c918c7a32",
                    sha256: "5b738cd420e68500d3b4cf0216fce239fb02374cfc9b6fce6c44313b61db1516"
                },
                dob: {
                    date: "1960-12-10T10:23:37.930Z",
                    age: 62
                },
                registered: {
                    date: "2009-12-01T13:10:01.715Z",
                    age: 13
                },
                phone: "07-661-303",
                cell: "048-401-82-71",
                id: {
                    name: "HETU",
                    value: "NaNNA452undefined"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/23.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"
                },
                nat: "FI"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Ilarion",
                    last: "Bryuhoveckiy"
                },
                location: {
                    street: {
                        number: 6471,
                        name: "Petra Pancha"
                    },
                    city: "Mostiska",
                    state: "Hersonska",
                    country: "Ukraine",
                    postcode: 59985,
                    coordinates: {
                        latitude: "16.2173",
                        longitude: "-85.6828"
                    },
                    timezone: {
                        offset: "+1:00",
                        description: "Brussels, Copenhagen, Madrid, Paris"
                    }
                },
                email: "ilarion.bryuhoveckiy@example.com",
                login: {
                    uuid: "07d1fa5e-5001-41d2-8619-15078f899e9e",
                    username: "yellowrabbit522",
                    password: "ranger",
                    salt: "KZahoHlI",
                    md5: "8979e935532db60c2a1bbec33c116ad0",
                    sha1: "199d90922f960f01ec377f99f3b908b8821c59c2",
                    sha256: "d7e25a1ff075f75ea00456dacca0c6ae22376c4106c0b5fe8cb6cd5eba4f7831"
                },
                dob: {
                    date: "1970-07-19T21:15:21.840Z",
                    age: 52
                },
                registered: {
                    date: "2008-05-21T03:29:33.611Z",
                    age: 14
                },
                phone: "(098) P72-2985",
                cell: "(066) J40-2673",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/2.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
                },
                nat: "UA"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "باران",
                    last: "احمدی"
                },
                location: {
                    street: {
                        number: 3460,
                        name: "دکتر فاطمی"
                    },
                    city: "یزد",
                    state: "کرمانشاه",
                    country: "Iran",
                    postcode: 96830,
                    coordinates: {
                        latitude: "7.6120",
                        longitude: "-136.2036"
                    },
                    timezone: {
                        offset: "-10:00",
                        description: "Hawaii"
                    }
                },
                email: "brn.hmdy@example.com",
                login: {
                    uuid: "e5fa0fed-5dc8-451e-9c36-c6cfa5f03159",
                    username: "ticklishfrog836",
                    password: "someone",
                    salt: "BnlkDGqr",
                    md5: "5ac6b64205103e811226d7f1039281d2",
                    sha1: "89fb2b5813f9f022c4e40ca7b45ca087c17de72d",
                    sha256: "1ad38555497aab1bb8e0026588d86e6706aa2403240fe542ac3038342068dfbe"
                },
                dob: {
                    date: "1948-10-13T08:45:34.275Z",
                    age: 74
                },
                registered: {
                    date: "2007-01-02T12:43:17.527Z",
                    age: 15
                },
                phone: "015-61163390",
                cell: "0973-819-8439",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/93.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg"
                },
                nat: "IR"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Manuel",
                    last: "Santiago"
                },
                location: {
                    street: {
                        number: 6123,
                        name: "Calle Mota"
                    },
                    city: "Pozuelo de Alarcón",
                    state: "Región de Murcia",
                    country: "Spain",
                    postcode: 98216,
                    coordinates: {
                        latitude: "32.5066",
                        longitude: "164.7370"
                    },
                    timezone: {
                        offset: "-4:00",
                        description: "Atlantic Time (Canada), Caracas, La Paz"
                    }
                },
                email: "manuel.santiago@example.com",
                login: {
                    uuid: "22ae0f73-beee-43f3-9c1c-d49474978a0c",
                    username: "yellowbear316",
                    password: "captain1",
                    salt: "T5BSHB8f",
                    md5: "d9adce8fe250a832e62b67c44134b7f7",
                    sha1: "afd412e14a2f7bf35476f036f2e83d907bb570f9",
                    sha256: "b569049840e261b357ea9a199723770f73981923662cb529ac5abfb4a64c99c7"
                },
                dob: {
                    date: "1968-03-21T17:16:25.679Z",
                    age: 54
                },
                registered: {
                    date: "2004-02-16T09:41:37.796Z",
                    age: 18
                },
                phone: "919-026-519",
                cell: "695-424-940",
                id: {
                    name: "DNI",
                    value: "06555487-W"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/83.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
                },
                nat: "ES"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "Milja",
                    last: "Tanner"
                },
                location: {
                    street: {
                        number: 135,
                        name: "Suvantokatu"
                    },
                    city: "Honkajoki",
                    state: "South Karelia",
                    country: "Finland",
                    postcode: 56754,
                    coordinates: {
                        latitude: "-7.0615",
                        longitude: "124.7619"
                    },
                    timezone: {
                        offset: "-3:30",
                        description: "Newfoundland"
                    }
                },
                email: "milja.tanner@example.com",
                login: {
                    uuid: "a877d5bd-3d86-4c31-806c-d60cea0ccb85",
                    username: "redcat203",
                    password: "yoda",
                    salt: "57TWIGFq",
                    md5: "ce47bd37eefc734ae9d8440b9c6f49d4",
                    sha1: "d19b34abeeaa3e4505296ef15742df9d959303cb",
                    sha256: "e5d51b8ed14d150deb0ffc27ae910aab87fa2ffa0e52197c248a579f125c41bd"
                },
                dob: {
                    date: "1985-05-12T14:35:54.172Z",
                    age: 37
                },
                registered: {
                    date: "2011-09-23T11:20:05.001Z",
                    age: 11
                },
                phone: "04-267-989",
                cell: "046-722-47-69",
                id: {
                    name: "HETU",
                    value: "NaNNA096undefined"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/61.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
                },
                nat: "FI"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "Priscilla",
                    last: "Webb"
                },
                location: {
                    street: {
                        number: 5062,
                        name: "Walnut Hill Ln"
                    },
                    city: "Cape Fear",
                    state: "New York",
                    country: "United States",
                    postcode: 16831,
                    coordinates: {
                        latitude: "84.3064",
                        longitude: "12.7986"
                    },
                    timezone: {
                        offset: "-10:00",
                        description: "Hawaii"
                    }
                },
                email: "priscilla.webb@example.com",
                login: {
                    uuid: "73bc3733-8073-47e4-ad58-fe14a2391303",
                    username: "crazybutterfly379",
                    password: "jackson5",
                    salt: "57uZKeZF",
                    md5: "da86ed268b0f110d41156aad7278f746",
                    sha1: "509fb7207684ec255d174b4c1bbd3eca050a1b85",
                    sha256: "c00a05d050de3385df119f39ce674939dfcdaeda40bf9aaf5510ae7cfcbe3930"
                },
                dob: {
                    date: "1944-11-19T12:43:24.474Z",
                    age: 78
                },
                registered: {
                    date: "2019-12-15T02:40:53.699Z",
                    age: 3
                },
                phone: "(685) 750-2831",
                cell: "(915) 255-7897",
                id: {
                    name: "SSN",
                    value: "264-37-9448"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/4.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
                },
                nat: "US"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Taliana",
                    last: "da Conceição"
                },
                location: {
                    street: {
                        number: 9461,
                        name: "Rua José Bonifácio "
                    },
                    city: "Recife",
                    state: "Espírito Santo",
                    country: "Brazil",
                    postcode: 40221,
                    coordinates: {
                        latitude: "-17.0666",
                        longitude: "20.4790"
                    },
                    timezone: {
                        offset: "-3:00",
                        description: "Brazil, Buenos Aires, Georgetown"
                    }
                },
                email: "taliana.daconceicao@example.com",
                login: {
                    uuid: "134e3b34-28be-47e3-a077-ea16bc657ff2",
                    username: "orangemouse180",
                    password: "bigguns",
                    salt: "Kxz9FpeL",
                    md5: "8f1b1d0c49ee95558ca733e239dc72dd",
                    sha1: "96a952331fa945f102c08f9125b8262668023624",
                    sha256: "10bb0631295be94805432b1c0b5e125ccf0d0914f35b8298b176b4420bce4808"
                },
                dob: {
                    date: "1996-12-28T03:20:35.022Z",
                    age: 26
                },
                registered: {
                    date: "2019-02-28T10:15:06.574Z",
                    age: 3
                },
                phone: "(96) 3127-6570",
                cell: "(63) 8605-2326",
                id: {
                    name: "CPF",
                    value: "747.297.763-52"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/43.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
                },
                nat: "BR"
            },
            {
                gender: "female",
                name: {
                    title: "Madame",
                    first: "Matilde",
                    last: "Renard"
                },
                location: {
                    street: {
                        number: 8976,
                        name: "Rue Jean-Baldassini"
                    },
                    city: "Hilterfingen",
                    state: "Neuchâtel",
                    country: "Switzerland",
                    postcode: 3904,
                    coordinates: {
                        latitude: "-78.6925",
                        longitude: "125.5852"
                    },
                    timezone: {
                        offset: "+2:00",
                        description: "Kaliningrad, South Africa"
                    }
                },
                email: "matilde.renard@example.com",
                login: {
                    uuid: "ac91e51a-b976-48af-8145-2dd94813e84c",
                    username: "organicsnake876",
                    password: "vette",
                    salt: "cRaABRbg",
                    md5: "21f50b72c909efbb7341ffcc3b2f0722",
                    sha1: "1a3e0f7f2870a35f62e0497ffb1ab8f03e38d1b1",
                    sha256: "fb6292ffb8889a187ec830f3743eeb85e49850ad86e9bf6f3ef6e2b99eaf1913"
                },
                dob: {
                    date: "1983-12-29T13:42:44.061Z",
                    age: 39
                },
                registered: {
                    date: "2015-03-15T16:39:56.085Z",
                    age: 7
                },
                phone: "079 032 06 63",
                cell: "079 976 50 61",
                id: {
                    name: "AVS",
                    value: "756.9059.1310.08"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/30.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg"
                },
                nat: "CH"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Niklas",
                    last: "Hackbarth"
                },
                location: {
                    street: {
                        number: 147,
                        name: "Schützenstraße"
                    },
                    city: "Löbau-Zittau",
                    state: "Saarland",
                    country: "Germany",
                    postcode: 34077,
                    coordinates: {
                        latitude: "1.4001",
                        longitude: "103.9650"
                    },
                    timezone: {
                        offset: "-5:00",
                        description: "Eastern Time (US & Canada), Bogota, Lima"
                    }
                },
                email: "niklas.hackbarth@example.com",
                login: {
                    uuid: "7af40d62-652c-4b29-a605-c222ab44672f",
                    username: "brownostrich130",
                    password: "ethan",
                    salt: "iRkaYjI1",
                    md5: "908e64c05ef0687483a20180850cacca",
                    sha1: "de9898a16a1636fa152fd56240d439614b956d06",
                    sha256: "704af8a189e9cbd8b8fc331872f2de8474e799784a0493b578b082d0a69a4d8d"
                },
                dob: {
                    date: "1971-07-05T08:55:54.910Z",
                    age: 51
                },
                registered: {
                    date: "2009-04-13T08:54:06.814Z",
                    age: 13
                },
                phone: "0930-5138308",
                cell: "0175-9559060",
                id: {
                    name: "SVNR",
                    value: "72 050771 H 189"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/29.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                },
                nat: "DE"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Ariel",
                    last: "Porto"
                },
                location: {
                    street: {
                        number: 5248,
                        name: "Rua Paraná "
                    },
                    city: "Petrópolis",
                    state: "Mato Grosso do Sul",
                    country: "Brazil",
                    postcode: 25453,
                    coordinates: {
                        latitude: "55.1888",
                        longitude: "-11.8669"
                    },
                    timezone: {
                        offset: "+11:00",
                        description: "Magadan, Solomon Islands, New Caledonia"
                    }
                },
                email: "ariel.porto@example.com",
                login: {
                    uuid: "ccb1e8b7-4918-476f-a365-72d9b569d3fd",
                    username: "yellowkoala419",
                    password: "madden",
                    salt: "FPPejV5G",
                    md5: "23f536f45876b000bebc99d19b34a765",
                    sha1: "bf68e33c23a660c2eebc42b060554a09b38ca532",
                    sha256: "8feb1df6dcbe19554ab5b760ca7e88b72d10e177fe8debfba56727fb47db1a4d"
                },
                dob: {
                    date: "1972-08-15T19:05:33.595Z",
                    age: 50
                },
                registered: {
                    date: "2016-06-16T21:33:30.475Z",
                    age: 6
                },
                phone: "(73) 9244-5008",
                cell: "(09) 0854-0467",
                id: {
                    name: "CPF",
                    value: "749.021.413-65"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/73.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg"
                },
                nat: "BR"
            },
            {
                gender: "male",
                name: {
                    title: "Monsieur",
                    first: "Kilian",
                    last: "Nicolas"
                },
                location: {
                    street: {
                        number: 7434,
                        name: "Rue de L'Abbé-De-L'Épée"
                    },
                    city: "Uesslingen-Buch",
                    state: "Fribourg",
                    country: "Switzerland",
                    postcode: 8415,
                    coordinates: {
                        latitude: "-88.5354",
                        longitude: "169.4577"
                    },
                    timezone: {
                        offset: "+3:00",
                        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                email: "kilian.nicolas@example.com",
                login: {
                    uuid: "69243369-2dc5-4c44-976b-ecade828b0d1",
                    username: "heavyswan531",
                    password: "rolex",
                    salt: "VC2bDNuB",
                    md5: "87ce40b7e18778a782e42c98824d91b3",
                    sha1: "95eb729f72e51d6887f1c0d35a36982ec3c5c1a0",
                    sha256: "8a1ebf0cf6dd3c1f2e4e509a146021808fc521d73090355e3c8e09082e14e33b"
                },
                dob: {
                    date: "1945-05-24T04:05:26.341Z",
                    age: 77
                },
                registered: {
                    date: "2009-04-15T06:15:50.029Z",
                    age: 13
                },
                phone: "078 801 67 06",
                cell: "075 554 95 83",
                id: {
                    name: "AVS",
                    value: "756.2428.1312.68"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/68.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg"
                },
                nat: "CH"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Gopal",
                    last: "Shetty"
                },
                location: {
                    street: {
                        number: 873,
                        name: "MG Rd Bangalore"
                    },
                    city: "Miryalaguda",
                    state: "Odisha",
                    country: "India",
                    postcode: 93871,
                    coordinates: {
                        latitude: "-84.7240",
                        longitude: "-27.7837"
                    },
                    timezone: {
                        offset: "+5:30",
                        description: "Bombay, Calcutta, Madras, New Delhi"
                    }
                },
                email: "gopal.shetty@example.com",
                login: {
                    uuid: "2718f694-6a2d-44eb-b347-8537fefd0411",
                    username: "crazytiger991",
                    password: "moondog",
                    salt: "s434T6jF",
                    md5: "f22b1bf8a1c1f893916daf4c634b986f",
                    sha1: "fd0a460c386a70cbde5eb43e901af9a30463c2da",
                    sha256: "24756e08ba0eaac4d2d01a80afee0b44b06766fdd12f68b7b817f16f74ccc960"
                },
                dob: {
                    date: "1951-05-06T05:33:49.346Z",
                    age: 71
                },
                registered: {
                    date: "2008-03-03T20:42:08.827Z",
                    age: 14
                },
                phone: "9704200939",
                cell: "8916440647",
                id: {
                    name: "UIDAI",
                    value: "888192593738"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/37.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg"
                },
                nat: "IN"
            },
            {
                gender: "female",
                name: {
                    title: "Mademoiselle",
                    first: "Elvira",
                    last: "Lecomte"
                },
                location: {
                    street: {
                        number: 6495,
                        name: "Rue Barrème"
                    },
                    city: "Kilchberg (Zh)",
                    state: "Neuchâtel",
                    country: "Switzerland",
                    postcode: 1910,
                    coordinates: {
                        latitude: "-30.5515",
                        longitude: "-118.7796"
                    },
                    timezone: {
                        offset: "-5:00",
                        description: "Eastern Time (US & Canada), Bogota, Lima"
                    }
                },
                email: "elvira.lecomte@example.com",
                login: {
                    uuid: "fa592cd8-7165-4af4-9b37-a96e1f87f376",
                    username: "sadelephant705",
                    password: "pitures",
                    salt: "QcEDm52C",
                    md5: "b5c564296d5b7b82f31e0c7a4f6a9365",
                    sha1: "dc981e5647bf4fbf42bcda29da90822de06d0a49",
                    sha256: "7d4f8c280ea33fc7825ad68dd93b00fe6e2acd982b9eb5be4f119d545ce0c152"
                },
                dob: {
                    date: "1999-10-24T21:46:36.090Z",
                    age: 23
                },
                registered: {
                    date: "2022-05-09T20:41:48.614Z",
                    age: 0
                },
                phone: "077 134 90 38",
                cell: "079 587 94 99",
                id: {
                    name: "AVS",
                    value: "756.9231.5149.16"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/1.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg"
                },
                nat: "CH"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Necati",
                    last: "Tanrıkulu"
                },
                location: {
                    street: {
                        number: 2866,
                        name: "Maçka Cd"
                    },
                    city: "Yozgat",
                    state: "Kars",
                    country: "Turkey",
                    postcode: 71727,
                    coordinates: {
                        latitude: "-5.2380",
                        longitude: "42.7944"
                    },
                    timezone: {
                        offset: "+10:00",
                        description: "Eastern Australia, Guam, Vladivostok"
                    }
                },
                email: "necati.tanrikulu@example.com",
                login: {
                    uuid: "ce134fda-5fae-44be-884c-013719cfd436",
                    username: "happyfrog751",
                    password: "lantern",
                    salt: "sNr6b246",
                    md5: "0a9e8d5e0d11ed2d663ea6ac0e217585",
                    sha1: "df285d820b16aeeb81c368653f7b366a53c39620",
                    sha256: "48010c82c7ae108fd94a90f238f0ff2d83caff8f68dd2b4db6615b3985452dbc"
                },
                dob: {
                    date: "1948-04-25T03:31:53.017Z",
                    age: 74
                },
                registered: {
                    date: "2017-09-02T19:18:29.106Z",
                    age: 5
                },
                phone: "(724)-380-3208",
                cell: "(542)-816-9973",
                id: {
                    name: "",
                    value: null
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/12.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"
                },
                nat: "TR"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Gunda",
                    last: "Hannemann"
                },
                location: {
                    street: {
                        number: 807,
                        name: "Mühlenstraße"
                    },
                    city: "Wilsdruff",
                    state: "Baden-Württemberg",
                    country: "Germany",
                    postcode: 83324,
                    coordinates: {
                        latitude: "-52.5670",
                        longitude: "-107.1250"
                    },
                    timezone: {
                        offset: "-4:00",
                        description: "Atlantic Time (Canada), Caracas, La Paz"
                    }
                },
                email: "gunda.hannemann@example.com",
                login: {
                    uuid: "a31b596c-a529-4b66-a5f5-98337ee6b2ad",
                    username: "yellowtiger831",
                    password: "grand",
                    salt: "Q2oO4wna",
                    md5: "0feed7aab4040e50add96b9a41c7c1f5",
                    sha1: "39b270246d32924014f79d67ca67f80d2d02ab59",
                    sha256: "5133d1c7f4ff84f1c650d8445da4fe5f19db971cfd3888f8e5b1dcd0881f5d4c"
                },
                dob: {
                    date: "1986-07-02T00:44:37.141Z",
                    age: 36
                },
                registered: {
                    date: "2006-09-28T08:11:26.072Z",
                    age: 16
                },
                phone: "0377-9078994",
                cell: "0171-7366806",
                id: {
                    name: "SVNR",
                    value: "21 010786 H 794"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/31.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg"
                },
                nat: "DE"
            },
            {
                gender: "female",
                name: {
                    title: "Ms",
                    first: "Fátima",
                    last: "Garrido"
                },
                location: {
                    street: {
                        number: 7549,
                        name: "Avenida de Castilla"
                    },
                    city: "Pamplona",
                    state: "Cantabria",
                    country: "Spain",
                    postcode: 51243,
                    coordinates: {
                        latitude: "-21.9434",
                        longitude: "148.1019"
                    },
                    timezone: {
                        offset: "-6:00",
                        description: "Central Time (US & Canada), Mexico City"
                    }
                },
                email: "fatima.garrido@example.com",
                login: {
                    uuid: "9d50bc73-c0b7-4b8f-84d7-c9d381aa02a4",
                    username: "goldenzebra355",
                    password: "blaster",
                    salt: "8oGLpodP",
                    md5: "fb4d86d7e4fa9a3cc1a8bbc393b740fa",
                    sha1: "56e64c482515e004086af71ec7f34013070ad418",
                    sha256: "7f1dde7f7a23f58a64432347a53626c804550501d562811ce3e002612c3ba368"
                },
                dob: {
                    date: "1966-07-30T07:05:13.868Z",
                    age: 56
                },
                registered: {
                    date: "2016-12-08T19:46:33.455Z",
                    age: 6
                },
                phone: "977-418-239",
                cell: "612-950-001",
                id: {
                    name: "DNI",
                    value: "24654009-P"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/92.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg"
                },
                nat: "ES"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Orinder",
                    last: "Anand"
                },
                location: {
                    street: {
                        number: 1030,
                        name: "Kasba Peth"
                    },
                    city: "Tiruchirappalli",
                    state: "Gujarat",
                    country: "India",
                    postcode: 53840,
                    coordinates: {
                        latitude: "-7.9033",
                        longitude: "-29.1557"
                    },
                    timezone: {
                        offset: "+5:00",
                        description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
                    }
                },
                email: "orinder.anand@example.com",
                login: {
                    uuid: "db75fe58-8883-4ee7-8a74-c6508df88886",
                    username: "silverzebra220",
                    password: "town",
                    salt: "rQDdsXnV",
                    md5: "5a390f05afdd7fb6c65fc81b78401387",
                    sha1: "b046743ff212a81e325f002d50cca09c3c1c9b50",
                    sha256: "3983ff69e8c4a1ea348944bc3e58df390242b2d72c1c16f333c35adc43b70490"
                },
                dob: {
                    date: "1977-03-04T06:34:01.971Z",
                    age: 45
                },
                registered: {
                    date: "2020-05-24T09:58:35.871Z",
                    age: 2
                },
                phone: "9847060144",
                cell: "8424254597",
                id: {
                    name: "UIDAI",
                    value: "482248976775"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/83.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
                },
                nat: "IN"
            },
            {
                gender: "female",
                name: {
                    title: "Mrs",
                    first: "Emilie",
                    last: "Clark"
                },
                location: {
                    street: {
                        number: 7516,
                        name: "West Ave"
                    },
                    city: "Tecumseh",
                    state: "Québec",
                    country: "Canada",
                    postcode: "S3G 1V1",
                    coordinates: {
                        latitude: "-34.2999",
                        longitude: "81.2013"
                    },
                    timezone: {
                        offset: "+3:00",
                        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                email: "emilie.clark@example.com",
                login: {
                    uuid: "b9ad16d2-e28b-4e38-b847-3a68d843ab7a",
                    username: "browncat616",
                    password: "service",
                    salt: "71IouAOB",
                    md5: "1755e61aa36d66773a35eb05c6b80cca",
                    sha1: "af2ec7c673515e240221efc2bd318aae7ba62a81",
                    sha256: "11b730aad1c2ab595843176b518c265004acae4c2264d666614a3fde13a04be6"
                },
                dob: {
                    date: "1994-05-27T04:47:54.725Z",
                    age: 28
                },
                registered: {
                    date: "2005-02-09T01:06:09.287Z",
                    age: 17
                },
                phone: "T69 D89-6439",
                cell: "Y19 U83-8324",
                id: {
                    name: "SIN",
                    value: "449322601"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/14.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"
                },
                nat: "CA"
            },
            {
                gender: "female",
                name: {
                    title: "Miss",
                    first: "Abril",
                    last: "Vela"
                },
                location: {
                    street: {
                        number: 3682,
                        name: "Corredor Tlaxcala"
                    },
                    city: "Pueblo Mayo",
                    state: "Guanajuato",
                    country: "Mexico",
                    postcode: 98944,
                    coordinates: {
                        latitude: "-22.9671",
                        longitude: "107.0095"
                    },
                    timezone: {
                        offset: "+8:00",
                        description: "Beijing, Perth, Singapore, Hong Kong"
                    }
                },
                email: "abril.vela@example.com",
                login: {
                    uuid: "b1432637-5d7a-467d-8894-a4b97b5d1349",
                    username: "yellowzebra676",
                    password: "artemis",
                    salt: "1M6wVr15",
                    md5: "4bd4d7b39a89080c81dd02b2ffa70dc0",
                    sha1: "c9102e5a590debc5da5d028607904f6d8b000225",
                    sha256: "4942c46cc2794be1bae7f08cd4234fcea56bb80bf235e0be8d839c0cb8f2eb83"
                },
                dob: {
                    date: "1984-10-18T10:57:05.246Z",
                    age: 38
                },
                registered: {
                    date: "2020-05-05T18:11:14.691Z",
                    age: 2
                },
                phone: "(684) 467 2303",
                cell: "(634) 947 3861",
                id: {
                    name: "NSS",
                    value: "38 21 80 9900 5"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/10.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg"
                },
                nat: "MX"
            },
            {
                gender: "male",
                name: {
                    title: "Mr",
                    first: "Falko",
                    last: "Oliemans"
                },
                location: {
                    street: {
                        number: 5687,
                        name: "Kasteelsepad"
                    },
                    city: "Wiuwert",
                    state: "Zuid-Holland",
                    country: "Netherlands",
                    postcode: "9603 TM",
                    coordinates: {
                        latitude: "-37.2655",
                        longitude: "-61.6999"
                    },
                    timezone: {
                        offset: "-3:00",
                        description: "Brazil, Buenos Aires, Georgetown"
                    }
                },
                email: "falko.oliemans@example.com",
                login: {
                    uuid: "1ad2c463-830f-41aa-bdfd-058251c25e9a",
                    username: "organicelephant957",
                    password: "danger",
                    salt: "p2IRocdj",
                    md5: "14f3ce529458175e1e2d4aba8f2898ed",
                    sha1: "ce7c6bf018edd1eeb9066202b9b9eaffaaf90397",
                    sha256: "e354f175c7847f8a2cf26a2f9abdb2faa983819fbf403f75ebd272f4e0b505cc"
                },
                dob: {
                    date: "1980-11-12T15:28:40.247Z",
                    age: 42
                },
                registered: {
                    date: "2011-09-22T07:52:13.911Z",
                    age: 11
                },
                phone: "(0599) 138008",
                cell: "(06) 13120281",
                id: {
                    name: "BSN",
                    value: "86231801"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/17.jpg",
                    medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
                },
                nat: "NL"
            }
        ],
        info: {
            seed: "88920452c62beef7",
            results: 50,
            page: 1,
            version: "1.4"
        }
    };

    public static getAllUsers():RandomUser[] | null | undefined{
        return this.randomUserEntity.results;
    }
}
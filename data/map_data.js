const schools = [
    {
        name: "Colorado High School Charter Osage",
        address: "1175 Osage St #100, Denver CO 80204",
        url: "https://www.coloradohighschoolcharter.com/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            },
            {
                class_title: "Advance Production Techniques",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Devin Urisote",
                teacher_link: "https://www.youthonrecord.org/team-member/devin-urioste",
            },
            {
                teacher_name: "Wes Watkins",
                teacher_link: "https://www.youthonrecord.org/team-member/wesley-watkins",
            },
            {
                teacher_name: "DJ AL",
                teacher_link: "https://www.youthonrecord.org/team-member/dj-a-l",
            }
        ],
        latitude: 39.7347978,
        longitude: -105.0080127,
        img_src: "",
    },
    {
        name: "Colorado High School Charter GES",
        address: "3093 E. 42nd Ave Denver CO 80216",
        url: "https://www.coloradohighschoolcharter.com/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Elijah Lynch",
                teacher_link: "https://www.youthonrecord.org/team-member/eli-lynchhttps://www.youthonrecord.org/team-member/eli-lynch",
            },
            {
                teacher_name: "Kalyn Heffernan",
                teacher_link: "https://www.youthonrecord.org/team-member/kalyn-heffernan",
            }
        ],
        latitude: 39.7549728,
        longitude: -105.0133255,
        img_src: "",
    },
    {
        name: "North High School",
        address: "2960 Speer Blvd, Denver CO 80211",
        url: "https://north.dpsk12.org/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            },
            {
                class_title: "Advance Production Techniques",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Mona Magno",
                teacher_link: "https://www.youthonrecord.org/team-member/mona-magno",
            }
        ],
        latitude: 39.7549623,
        longitude: -105.0134972,
        img_src: "",
    },
    {
        name: "Legacy Options High School",
        address: "6850 Argonne St, Denver CO 80249",
        url: "https://www.makeyourownlegacy.org/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Michelle Rocqet",
                teacher_link: "https://www.youthonrecord.org/team-member/michelle-rocqet",
            },
            {
                teacher_name: "Stephen Brackett",
                teacher_link: "https://www.youthonrecord.org/team-member/stephen-brackett",
            }
        ],
        latitude: 39.8206545,
        longitude: -104.7712093,
        img_src: "",
    },
    {
        name: "Third Way Center",
        address: "505 W 5th Ave, Denver CO 80204",
        url: "https://thirdwaycenter.org/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Babah Fly",
                teacher_link: "https://www.youthonrecord.org/team-member/babah-fly"
            }
        ],
        latitude: 39.7342607,
        longitude: -104.9700286,
        img_src: "",
    },
    {
        name: "Rise Up Community School",
        address: "2342 Broadway, Denver CO 80205",
        url: "https://riseupcommunityschool.net/",
        classes: [
            {
                class_title: "Introduction to Music Production",
                class_link: ""
            },
            {
                class_title: "Visual Representation",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Michelle Rocqet",
                teacher_link: "https://www.youthonrecord.org/team-member/michelle-rocqet",
            },
        ],
        latitude: 39.7554754,
        longitude: -104.9893925,
        img_src: "",
    },
    {
        name: "PREP Academy",
        address: "2727 Columbine St, Denver CO 80205",
        url: "http://prepacademy.dpsk12.org/",
        classes: [
            {
                class_title: "Creative Writing",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Elijah Lynch",
                teacher_link: "https://www.youthonrecord.org/team-member/eli-lynchhttps://www.youthonrecord.org/team-member/eli-lynch",
            },
        ],
        latitude: 39.7554542,
        longitude: -105.0574214,
        img_src: "",
    },
    {
        name: "Aurora West Collegiate Prep Academy",
        address: "10100 E 13th Ave, Aurora CO 80010",
        url: "https://awcpa.aurorak12.org/",
        classes: [
            {
                class_title: "Introduction to Ethnic Studies",
                class_link: ""
            },
            {
                class_title: "Music Production",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Stephen Brackett",
                teacher_link: "https://www.youthonrecord.org/team-member/stephen-brackett",
            }
        ],
        latitude: 39.7359811,
        longitude: -104.8727836,
        img_src: "",
    },
    {
        name: "Hill Campus of Arts and Sciences",
        address: "451 Clermont Street, Denver CO 80220",
        url: "http://hill.dpsk12.org/",
        classes: [
            {
                class_title: "Intro to Creative Writing",
                class_link: ""
            },
            {
                class_title: "Social Justice",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Babah Fly",
                teacher_link: "https://www.youthonrecord.org/team-member/babah-fly"
            }
        ],
        latitude: 39.723709,
        longitude: -104.9376726,
        img_src: "",
    },
]

const libraries = [
    {
        name: "Ford Warren",
        address: "2825 N High St, Denver CO 80205",
        url: "https://www.denverlibrary.org/content/ford-warren-branch-library",
        classes: [
            {
                class_title: "Beats Lab",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Mona Magno",
                teacher_link: "https://www.youthonrecord.org/team-member/mona-magno",
            }
        ],
        latitude: 39.7573889,
        longitude: -104.967268,
        img_src: "https://geo2.ggpht.com/cbk?panoid=_DAxCFBBb-bpsvkDepIKDg&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=274.08768&pitch=0&thumbfov=100",
    },
    {
        name: "Corky Gonzalez",
        address: "1498 Irving St, Denver CO 80204",
        url: "https://www.denverlibrary.org/content/rodolfo-corky-gonzales-branch-library",
        classes: [
            {
                class_title: "Beats Lab",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Elijah Lynch",
                teacher_link: "https://www.youthonrecord.org/team-member/eli-lynchhttps://www.youthonrecord.org/team-member/eli-lynch",
            }
        ],
        latitude: 39.740052,
        longitude: -105.0317483,
        img_src: "https://geo0.ggpht.com/cbk?panoid=qb_c23eijRyK6vhu5VhBog&output=thumbnail&cb_client=search.gws-prod/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=95.982475&pitch=0&thumbfov=100",
    },
    {
        name: "Ross Barnum",
        address: "3570 W First Ave, Denver CO 80219",
        url: "https://www.denverlibrary.org/content/ross-barnum-branch-library",
        classes: [
            {
                class_title: "Beats Lab",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Michelle Rocqet",
                teacher_link: "https://www.youthonrecord.org/team-member/michelle-rocqet",
            },
        ],
        latitude: 39.7179532,
        longitude: -105.0367947,
        img_src: "https://geo2.ggpht.com/cbk?panoid=G_mBcqGpr6JMD2OhUIzI3A&output=thumbnail&cb_client=search.gws-prod/maps/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=176.32733&pitch=0&thumbfov=100",
    },
    {
        name: "Athmar Park ",
        address: "1055 S Tejon St, Denver CO 80223",
        url: "https://www.denverlibrary.org/content/athmar-park-branch-library",
        classes: [
            {
                class_title: "Beats Lab",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Devin Urisote",
                teacher_link: "https://www.youthonrecord.org/team-member/devin-urioste",
            },
        ],
        latitude: 39.6970863,
        longitude: -105.0157936,
        img_src: "https://geo0.ggpht.com/cbk?panoid=m9snCv6AFMd2XsEuFxHDTg&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=315.50183&pitch=0&thumbfov=100",
    },
    {
        name: "Pauline Robinson",
        address: "5575 E 33rd Ave, Denver CO 80207",
        url: "https://www.denverlibrary.org/content/pauline-robinson-branch-library",
        classes: [
            {
                class_title: "single day kick off",
                class_link: ""
            }
        ],
        teachers: [
            {
                teacher_name: "Stephen Brackett",
                teacher_link: "https://www.youthonrecord.org/team-member/stephen-brackett",
            }
        ],
        latitude: 39.7640976,
        longitude: -104.9248814,
        img_src: "https://geo1.ggpht.com/cbk?panoid=Q9dE1rc5JGYaVy6WZ50JBg&output=thumbnail&cb_client=search.gws-prod/maps/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=46.23256&pitch=0&thumbfov=100",
    },
]

const workshops = [
    {
        partner: "Heritage Camps for Adoptive Families ",
        students_served: 20,
        date: "6/17/2019"
    },
    {
        partner: "EcoArts",
        students_served: 10,
        date: "3/21/2019"
    },
    {
        partner: "Noel Community Arts",
        students_served: 15,
        date: "12/14/2019"
    },
    {
        partner: "Bruce Randolph",
        students_served: 10,
        date: "4/30 & 5/1/2019"
    },
    {
        partner: "Kipp middle school",
        students_served: 10,
        date: "4/30/2019"
    },
    {
        partner: "World Denver",
        students_served: 20,
        date: "3/20/2019"
    },
    {
        partner: "Gateway to College ",
        students_served: 15,
        date: "5/20/2019"
    },
    {
        partner: "RAMP",
        students_served: 10,
        date: "2/28/2019"
    },
    {
        partner: "John F Kennedy High School ",
        students_served: 6,
        date: "5/14/2019"
    },
    {
        partner: "Florence Crittenton High School ",
        students_served: 15,
        date: "5/16/2019"
    },
    {
        partner: "Gals",
        students_served: 6,
        date: "Fridays 2018 - 2019"
    },
    {
        partner: "The Breaking Convention",
        students_served: 30,
        date: "11/3/2019"
    },
    {
        partner: "Career Connect",
        students_served: 5,
        date: "2018-2019 School year"
    },
    {
        partner: "Goodwill internships",
        students_served: 4,
        date: "2018-2019 School year"
    },
    {
        partner: "BBYO International Convention",
        students_served: 25,
        date: "2/15/2019"
    },
    {
        partner: "Clyde Miller Middle School",
        students_served: 10,
        date: "4/24/2019"
    }

]
export { schools, libraries, workshops }
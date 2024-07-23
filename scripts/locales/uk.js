ilib.data.plurals_uk = {
    "few": {
        "and": [
            {
                "eq": [
                    "v",
                    0
                ]
            },
            {
                "eq": [
                    {
                        "mod": [
                            "i",
                            10
                        ]
                    },
                    [
                        2,
                        4
                    ]
                ]
            },
            {
                "neq": [
                    {
                        "mod": [
                            "i",
                            100
                        ]
                    },
                    [
                        12,
                        14
                    ]
                ]
            }
        ]
    },
    "many": {
        "or": [
            {
                "and": [
                    {
                        "eq": [
                            "v",
                            0
                        ]
                    },
                    {
                        "eq": [
                            {
                                "mod": [
                                    "i",
                                    10
                                ]
                            },
                            0
                        ]
                    }
                ]
            },
            {
                "and": [
                    {
                        "eq": [
                            "v",
                            0
                        ]
                    },
                    {
                        "eq": [
                            {
                                "mod": [
                                    "i",
                                    10
                                ]
                            },
                            [
                                5,
                                9
                            ]
                        ]
                    }
                ]
            },
            {
                "and": [
                    {
                        "eq": [
                            "v",
                            0
                        ]
                    },
                    {
                        "eq": [
                            {
                                "mod": [
                                    "i",
                                    100
                                ]
                            },
                            [
                                11,
                                14
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    "one": {
        "and": [
            {
                "eq": [
                    "v",
                    0
                ]
            },
            {
                "eq": [
                    {
                        "mod": [
                            "i",
                            10
                        ]
                    },
                    1
                ]
            },
            {
                "neq": [
                    {
                        "mod": [
                            "i",
                            100
                        ]
                    },
                    11
                ]
            }
        ]
    }
}
ilib.data.localeinfo_uk = {
    "delimiter": {
        "alternateQuotationEnd": "“",
        "alternateQuotationStart": "„",
        "quotationEnd": "»",
        "quotationStart": "«"
    },
    "language.name": "Ukrainian",
    "locale": "uk",
    "numfmt": {
        "currencyFormats": {
            "common": "{n} {s}",
            "commonNegative": "-{n} {s}"
        },
        "decimalChar": ",",
        "exponential": "Е",
        "groupChar": " "
    },
    "scripts": [
        "Cyrl"
    ]
}
ilib.data.localeinfo_und_UA = {
    "clock": "24",
    "currency": "UAH",
    "firstDayOfWeek": 1,
    "locale": "UA",
    "region.name": "Ukraine",
    "timezone": "Europe/Kiev"
}
ilib.data.dateformats_uk = {
    "dayPeriods": [
        {
            "at": 0
        },
        {
            "from": 0,
            "to": 240
        },
        {
            "from": 0,
            "to": 720
        },
        {
            "from": 240,
            "to": 720
        },
        {
            "at": 720
        },
        {
            "from": 720,
            "to": 1080
        },
        {
            "from": 720,
            "to": 1440
        },
        {
            "from": 1080,
            "to": 1440
        }
    ],
    "gregorian": {
        "date": {
            "d": {
                "f": "d",
                "l": "d",
                "m": "d",
                "s": "dd"
            },
            "dm": {
                "l": "d MMMM",
                "m": "d MMM",
                "s": "dd.MM"
            },
            "dmw": {
                "f": "EEEE, d MMMM",
                "l": "EEE, d MMMM",
                "m": "EE, d MMM",
                "s": "E, dd.MM"
            },
            "dmwy": {
                "f": "EEEE, d MMMM yyyy 'р'.",
                "l": "EEE, d MMMM yyyy 'р'.",
                "m": "EE, d MMM yyyy 'р'.",
                "s": "E, dd.MM.yy"
            },
            "dmy": {
                "f": "d MMMM yyyy 'р'.",
                "l": "d MMMM yyyy 'р'.",
                "m": "d MMM yyyy 'р'.",
                "s": "dd.MM.yy"
            },
            "dw": {
                "f": "EEEE, d",
                "l": "EEE, d",
                "m": "EE, d",
                "s": "E, dd"
            },
            "e": {
                "f": "cccc",
                "l": "ccc",
                "m": "cc",
                "s": "c"
            },
            "l": {
                "f": "LLLL",
                "l": "LLLL",
                "m": "LLL",
                "s": "LL"
            },
            "m": {
                "l": "MMMM",
                "m": "MMM",
                "s": "MM"
            },
            "my": {
                "f": "MMMM yyyy 'р'.",
                "l": "MMMM yyyy 'р'.",
                "m": "MMM yyyy 'р'.",
                "s": "MM.yy"
            },
            "mys": {
                "f": "LLLL yyyy 'р'.",
                "l": "LLLL yyyy 'р'.",
                "m": "LLL yyyy 'р'.",
                "s": "MM.yy"
            }
        },
        "order": {
            "f": "{date} 'о' {time}",
            "l": "{date} 'о' {time}",
            "m": "{date}, {time}",
            "s": "{date}, {time}"
        },
        "range": {
            "c00": {
                "f": "{sd} {sm} {sy} р. о {st} – {et}",
                "l": "{sd} {sm} {sy} р. о {st} – {et}",
                "m": "{sd} {sm} {sy} р., {st} – {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {et}"
            },
            "c01": {
                "f": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "l": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "m": "{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c02": {
                "f": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "l": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "m": "{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c03": {
                "f": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "l": "{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}",
                "m": "{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c10": {
                "f": "{sd} – {ed} {em} {ey} р.",
                "l": "{sd} – {ed} {em} {ey} р.",
                "m": "{sd} – {ed} {em} {ey} р.",
                "s": "{sd} – {ed}.{em}.{ey}"
            },
            "c11": {
                "f": "{sd} {sm} – {ed} {em} {ey} р.",
                "l": "{sd} {sm} – {ed} {em} {ey} р.",
                "m": "{sd} {sm} – {ed} {em} {ey} р.",
                "s": "{sd}.{sm} – {ed}.{em}.{ey}"
            },
            "c12": {
                "f": "{sd} {sm} {sy} р. – {ed} {em} {ey} р.",
                "l": "{sd} {sm} {sy} р. – {ed} {em} {ey} р.",
                "m": "{sd} {sm} {sy} р. – {ed} {em} {ey} р.",
                "s": "{sd}.{sm}.{sy} – {ed}.{em}.{ey}"
            },
            "c20": {
                "f": "{sm} {sy} р. – {em} {ey} р.",
                "l": "{sm} {sy} р. – {em} {ey} р.",
                "m": "{sm} {sy} р. – {em} {ey} р.",
                "s": "{sm}.{sy} – {em}.{ey}"
            },
            "c30": {
                "f": "{sy} – {ey}",
                "l": "{sy} – {ey}",
                "m": "{sy} – {ey}",
                "s": "{sy} – {ey}"
            }
        },
        "time": {
            "12": {
                "ah": "h a"
            },
            "24": {
                "ah": "HH",
                "ahm": "HH:mm",
                "ahms": "HH:mm:ss",
                "ahmsz": "HH:mm:ss z",
                "ahmz": "HH:mm z",
                "h": "HH",
                "hm": "HH:mm",
                "hms": "HH:mm:ss",
                "hmsz": "HH:mm:ss z",
                "hmz": "HH:mm z"
            }
        }
    }
}
ilib.data.sysres_uk = {
    "#in {num}d": "one#через {num} дн.|few#через {num} дн.|many#через {num} дн.|#через {num} дн.",
    "#in {num}h": "one#через {num} год|few#через {num} год|many#через {num} год|#через {num} год",
    "#in {num}mi": "one#через {num} хв|few#через {num} хв|many#через {num} хв|#через {num} хв",
    "#in {num}mo": "one#через {num} міс.|few#через {num} міс.|many#через {num} міс.|#через {num} міс.",
    "#in {num}s": "one#через {num} с|few#через {num} с|many#через {num} с|#через {num} с",
    "#in {num}w": "one#через {num} тиж.|few#через {num} тиж.|many#через {num} тиж.|#через {num} тиж.",
    "#in {num}y": "one#через {num} р.|few#через {num} р.|many#через {num} р.|#через {num} р.",
    "#{num} ms": "one#{num} мс|few#{num} мс|many#{num} мс|#{num} мс",
    "#{num}d": "one#{num}д|few#{num}д|many#{num}д|#{num}д",
    "#{num}d ago": "one#{num} дн. тому|few#{num} дн. тому|many#{num} дн. тому|#{num} дн. тому",
    "#{num}h": "one#{num}г|few#{num}г|many#{num}г|#{num}г",
    "#{num}h ago": "one#{num} год тому|few#{num} год тому|many#{num} год тому|#{num} год тому",
    "#{num}mi ago": "one#{num} хв тому|few#{num} хв тому|many#{num} хв тому|#{num} хв тому",
    "#{num}mo ago": "one#{num} міс. тому|few#{num} міс. тому|many#{num} міс. тому|#{num} міс. тому",
    "#{num}s": "one#{num}с|few#{num}с|many#{num}с|#{num}с",
    "#{num}s ago": "one#{num} с тому|few#{num} с тому|many#{num} с тому|#{num} с тому",
    "#{num}w": "one#{num}т|few#{num}т|many#{num}т|#{num}т",
    "#{num}w ago": "one#{num} тиж. тому|few#{num} тиж. тому|many#{num} тиж. тому|#{num} тиж. тому",
    "#{num}y": "one#{num}р|few#{num}р|many#{num}р|#{num}р",
    "#{num}y ago": "one#{num} р. тому|few#{num} р. тому|many#{num} р. тому|#{num} р. тому",
    "1#1 day ago|#{num} days ago": "one#{num} день тому|few#{num} дні тому|many#{num} днів тому|#{num} дня тому",
    "1#1 day|#{num} days": "one#{num} день|few#{num} дні|many#{num} днів|#{num} дня",
    "1#1 dy ago|#{num} dys ago": "one#{num} день тому|few#{num} дні тому|many#{num} днів тому|#{num} дня тому",
    "1#1 dy|#{num} dys": "one#{num}д|few#{num}д|many#{num}д|#{num}д",
    "1#1 hour ago|#{num} hours ago": "one#{num} годину тому|few#{num} години тому|many#{num} годин тому|#{num} години тому",
    "1#1 hour|#{num} hours": "one#{num} година|few#{num} години|many#{num} годин|#{num} години",
    "1#1 hr ago|#{num} hrs ago": "one#{num} годину тому|few#{num} години тому|many#{num} годин тому|#{num} години тому",
    "1#1 hr|#{num} hrs": "one#{num} год|few#{num} год|many#{num} год|#{num} год",
    "1#1 millisecond|#{num} milliseconds": "one#{num} мілісекунда|few#{num} мілісекунди|many#{num} мілісекунд|#{num} мілісекунди",
    "1#1 min ago|#{num} min ago": "one#{num} хвилину тому|few#{num} хвилини тому|many#{num} хвилин тому|#{num} хвилини тому",
    "1#1 minute ago|#{num} minutes ago": "one#{num} хвилину тому|few#{num} хвилини тому|many#{num} хвилин тому|#{num} хвилини тому",
    "1#1 minute|#{num} minutes": "one#{num} хвилина|few#{num} хвилини|many#{num} хвилин|#{num} хвилини",
    "1#1 min|#{num} min": "one#{num} хв|few#{num} хв|many#{num} хв|#{num} хв",
    "1#1 mi|#{num} min": "one#{num}х|few#{num}х|many#{num}х|#{num}х",
    "1#1 mon ago|#{num} mons ago": "one#{num} місяць тому|few#{num} місяці тому|many#{num} місяців тому|#{num} місяця тому",
    "1#1 month ago|#{num} months ago": "one#{num} місяць тому|few#{num} місяці тому|many#{num} місяців тому|#{num} місяця тому",
    "1#1 month|#{num} months": "one#{num} місяць|few#{num} місяці|many#{num} місяців|#{num} місяця",
    "1#1 mon|#{num} mons": "one#{num} міс.|few#{num} міс.|many#{num} міс.|#{num} міс.",
    "1#1 mo|#{num} mos": "one#{num}м|few#{num}м|many#{num}м|#{num}м",
    "1#1 sec ago|#{num} sec ago": "one#{num} секунду тому|few#{num} секунди тому|many#{num} секунд тому|#{num} секунди тому",
    "1#1 second ago|#{num} seconds ago": "one#{num} секунду тому|few#{num} секунди тому|many#{num} секунд тому|#{num} секунди тому",
    "1#1 second|#{num} seconds": "one#{num} секунда|few#{num} секунди|many#{num} секунд|#{num} секунди",
    "1#1 sec|#{num} sec": "one#{num} с|few#{num} с|many#{num} с|#{num} с",
    "1#1 se|#{num} sec": "one#{num}с|few#{num}с|many#{num}с|#{num}с",
    "1#1 week ago|#{num} weeks ago": "one#{num} тиждень тому|few#{num} тижні тому|many#{num} тижнів тому|#{num} тижня тому",
    "1#1 week|#{num} weeks": "one#{num} тиждень|few#{num} тижні|many#{num} тижнів|#{num} тижня",
    "1#1 wk ago|#{num} wks ago": "one#{num} тиждень тому|few#{num} тижні тому|many#{num} тижнів тому|#{num} тижня тому",
    "1#1 wk|#{num} wks": "one#{num} тиж.|few#{num} тиж.|many#{num} тиж.|#{num} тиж.",
    "1#1 year ago|#{num} years ago": "one#{num} рік тому|few#{num} роки тому|many#{num} років тому|#{num} року тому",
    "1#1 year|#{num} years": "one#{num} рік|few#{num} роки|many#{num} років|#{num} року",
    "1#1 yr ago|#{num} yrs ago": "one#{num} рік тому|few#{num} роки тому|many#{num} років тому|#{num} року тому",
    "1#1 yr|#{num} yrs": "one#{num} р.|few#{num} р.|many#{num} р.|#{num} р.",
    "1#in 1 day|#in {num} days": "one#через {num} день|few#через {num} дні|many#через {num} днів|#через {num} дня",
    "1#in 1 dy|#in {num} dys": "one#через {num} день|few#через {num} дні|many#через {num} днів|#через {num} дня",
    "1#in 1 hour|#in {num} hours": "one#через {num} годину|few#через {num} години|many#через {num} годин|#через {num} години",
    "1#in 1 hr|#in {num} hrs": "one#через {num} годину|few#через {num} години|many#через {num} годин|#через {num} години",
    "1#in 1 minute|#in {num} minutes": "one#через {num} хвилину|few#через {num} хвилини|many#через {num} хвилин|#через {num} хвилини",
    "1#in 1 min|#in {num} min": "one#через {num} хвилину|few#через {num} хвилини|many#через {num} хвилин|#через {num} хвилини",
    "1#in 1 month|#in {num} months": "one#через {num} місяць|few#через {num} місяці|many#через {num} місяців|#через {num} місяця",
    "1#in 1 mon|#in {num} mons": "one#через {num} місяць|few#через {num} місяці|many#через {num} місяців|#через {num} місяця",
    "1#in 1 second|#in {num} seconds": "one#через {num} секунду|few#через {num} секунди|many#через {num} секунд|#через {num} секунди",
    "1#in 1 sec|#in {num} sec": "one#через {num} секунду|few#через {num} секунди|many#через {num} секунд|#через {num} секунди",
    "1#in 1 week|#in {num} weeks": "one#через {num} тиждень|few#через {num} тижні|many#через {num} тижнів|#через {num} тижня",
    "1#in 1 wk|#in {num} wks": "one#через {num} тиждень|few#через {num} тижні|many#через {num} тижнів|#через {num} тижня",
    "1#in 1 year|#in {num} years": "one#через {num} рік|few#через {num} роки|many#через {num} років|#через {num} року",
    "1#in 1 yr|#in {num} yrs": "one#через {num} рік|few#через {num} роки|many#через {num} років|#через {num} року",
    "B0": "опівночі",
    "B1": "ночі",
    "B2": "дп",
    "B3": "ранку",
    "B4": "опівдні",
    "B5": "дня",
    "B6": "пп",
    "B7": "вечора",
    "E0": "Н",
    "E1": "П",
    "E2": "В",
    "E3": "С",
    "E4": "Ч",
    "E5": "П",
    "E6": "С",
    "EE0": "нд",
    "EE1": "пн",
    "EE2": "вт",
    "EE3": "ср",
    "EE4": "чт",
    "EE5": "пт",
    "EE6": "сб",
    "EEE0": "нд",
    "EEE1": "пн",
    "EEE2": "вт",
    "EEE3": "ср",
    "EEE4": "чт",
    "EEE5": "пт",
    "EEE6": "сб",
    "EEEE0": "неділю",
    "EEEE1": "понеділок",
    "EEEE2": "вівторок",
    "EEEE3": "середу",
    "EEEE4": "четвер",
    "EEEE5": "пʼятницю",
    "EEEE6": "суботу",
    "G-1": "до н. е.",
    "G1": "н. е.",
    "L1": "С",
    "L10": "Ж",
    "L11": "Л",
    "L12": "Г",
    "L2": "Л",
    "L3": "Б",
    "L4": "К",
    "L5": "Т",
    "L6": "Ч",
    "L7": "Л",
    "L8": "С",
    "L9": "В",
    "LL1": "сі",
    "LL10": "жо",
    "LL11": "ли",
    "LL12": "гр",
    "LL2": "лю",
    "LL3": "бе",
    "LL4": "кв",
    "LL5": "тр",
    "LL6": "че",
    "LL7": "ли",
    "LL8": "се",
    "LL9": "ве",
    "LLL1": "січ.",
    "LLL10": "жовт.",
    "LLL11": "лист.",
    "LLL12": "груд.",
    "LLL2": "лют.",
    "LLL3": "бер.",
    "LLL4": "квіт.",
    "LLL5": "трав.",
    "LLL6": "черв.",
    "LLL7": "лип.",
    "LLL8": "серп.",
    "LLL9": "вер.",
    "LLLL1": "січень",
    "LLLL10": "жовтень",
    "LLLL11": "листопад",
    "LLLL12": "грудень",
    "LLLL2": "лютий",
    "LLLL3": "березень",
    "LLLL4": "квітень",
    "LLLL5": "травень",
    "LLLL6": "червень",
    "LLLL7": "липень",
    "LLLL8": "серпень",
    "LLLL9": "вересень",
    "MMM1": "січ.",
    "MMM10": "жовт.",
    "MMM11": "лист.",
    "MMM12": "груд.",
    "MMM2": "лют.",
    "MMM3": "бер.",
    "MMM4": "квіт.",
    "MMM5": "трав.",
    "MMM6": "черв.",
    "MMM7": "лип.",
    "MMM8": "серп.",
    "MMM9": "вер.",
    "MMMM1": "січня",
    "MMMM10": "жовтня",
    "MMMM11": "листопада",
    "MMMM12": "грудня",
    "MMMM2": "лютого",
    "MMMM3": "березня",
    "MMMM4": "квітня",
    "MMMM5": "травня",
    "MMMM6": "червня",
    "MMMM7": "липня",
    "MMMM8": "серпня",
    "MMMM9": "вересня",
    "N1": "с",
    "N10": "ж",
    "N11": "л",
    "N12": "г",
    "N2": "л",
    "N3": "б",
    "N4": "к",
    "N5": "т",
    "N6": "ч",
    "N7": "л",
    "N8": "с",
    "N9": "в",
    "NN1": "сі",
    "NN10": "жо",
    "NN11": "ли",
    "NN12": "гр",
    "NN2": "лю",
    "NN3": "бе",
    "NN4": "кв",
    "NN5": "тр",
    "NN6": "че",
    "NN7": "ли",
    "NN8": "се",
    "NN9": "ве",
    "a0": "дп",
    "a1": "пп",
    "c0": "Н",
    "c1": "П",
    "c2": "В",
    "c3": "С",
    "c4": "Ч",
    "c5": "П",
    "c6": "С",
    "cc0": "нд",
    "cc1": "пн",
    "cc2": "вт",
    "cc3": "ср",
    "cc4": "чт",
    "cc5": "пт",
    "cc6": "сб",
    "ccc0": "нд",
    "ccc1": "пн",
    "ccc2": "вт",
    "ccc3": "ср",
    "ccc4": "чт",
    "ccc5": "пт",
    "ccc6": "сб",
    "cccc0": "неділя",
    "cccc1": "понеділок",
    "cccc2": "вівторок",
    "cccc3": "середа",
    "cccc4": "четвер",
    "cccc5": "пʼятниця",
    "cccc6": "субота",
    "durationLongDays": "one#{num} дн.|few#{num} дн.|many#{num} дн.|#{num} дн.",
    "durationMediumHours": "one#{num}г|few#{num}г|many#{num}г|#{num}г",
    "durationMediumMillis": "one#{num}мс|few#{num}мс|many#{num}мс|#{num}мс",
    "durationMediumWeeks": "one#{num}т|few#{num}т|many#{num}т|#{num}т",
    "durationMediumYears": "one#{num}р|few#{num}р|many#{num}р|#{num}р",
    "durationShortMillis": "one#{num}мс|few#{num}мс|many#{num}мс|#{num}мс",
    "durationShortMinutes": "one#{num}х|few#{num}х|many#{num}х|#{num}х",
    "durationShortMonths": "one#{num}м|few#{num}м|many#{num}м|#{num}м",
    "finalSeparatorFull": " і ",
    "finalSeparatorLong": " і ",
    "finalSeparatorMedium": " і ",
    "finalSeparatorShort": " і ",
    "separatorMedium": ", ",
    "separatorShort": ", "
}

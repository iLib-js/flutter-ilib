ilib.data.plurals_mk = {
    "one": {
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
            },
            {
                "and": [
                    {
                        "eq": [
                            {
                                "mod": [
                                    "f",
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
                                    "f",
                                    100
                                ]
                            },
                            11
                        ]
                    }
                ]
            }
        ]
    }
}
ilib.data.localeinfo_mk = {
    "delimiter": {
        "alternateQuotationEnd": "‘",
        "alternateQuotationStart": "‚",
        "quotationEnd": "“",
        "quotationStart": "„"
    },
    "language.name": "Macedonian",
    "locale": "mk",
    "numfmt": {
        "currencyFormats": {
            "common": "{n} {s}",
            "commonNegative": "-{n} {s}"
        },
        "decimalChar": ",",
        "groupChar": ".",
        "negativepctFmt": "-{n} %",
        "pctFmt": "{n} %"
    },
    "scripts": [
        "Cyrl"
    ]
}
ilib.data.localeinfo_und_MK = {
    "clock": "24",
    "currency": "MKD",
    "firstDayOfWeek": 1,
    "locale": "MK",
    "region.name": "North Macedonia",
    "timezone": "Europe/Skopje"
}
ilib.data.dateformats_mk = {
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
            "to": 600
        },
        {
            "from": 600,
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
                "s": "d"
            },
            "dm": {
                "l": "d MMMM",
                "m": "d.M",
                "s": "d.M"
            },
            "dmw": {
                "f": "EEEE, d MMMM",
                "l": "EEE, d MMMM",
                "m": "EE, d.M",
                "s": "E, d.M"
            },
            "dmwy": {
                "f": "EEEE, d MMMM yyyy",
                "l": "EEE, d MMMM yyyy",
                "m": "EE, d.M.yyyy",
                "s": "E, d.M.yy"
            },
            "dmy": {
                "l": "d MMMM yyyy",
                "m": "d.M.yyyy",
                "s": "d.M.yy"
            },
            "dw": {
                "f": "EEEE, d",
                "l": "EEE, d",
                "m": "EE, d",
                "s": "E, d"
            },
            "m": {
                "l": "MMMM",
                "m": "M"
            },
            "my": {
                "l": "MMMM yyyy",
                "m": "M.yyyy",
                "s": "M.yy"
            }
        },
        "order": "{date}, 'во' {time}",
        "range": {
            "c00": {
                "f": "{sd} {sm} {sy}, во {st} – {et}",
                "l": "{sd} {sm} {sy}, во {st} – {et}",
                "m": "{sd}.{sm}.{sy}, во {st} – {et}",
                "s": "{sd}.{sm}.{sy}, во {st} – {et}"
            },
            "c01": {
                "f": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "l": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "m": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}",
                "s": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}"
            },
            "c02": {
                "f": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "l": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "m": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}",
                "s": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}"
            },
            "c03": {
                "f": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "l": "{sd} {sm} {sy}, во {st} – {ed} {em} {ey}, во {et}",
                "m": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}",
                "s": "{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}"
            },
            "c10": {
                "f": "{sd} – {ed} {em} {ey}",
                "l": "{sd} – {ed} {em} {ey}",
                "m": "{sd} – {ed}.{em}.{ey}",
                "s": "{sd} – {ed}.{em}.{ey}"
            },
            "c11": {
                "f": "{sd} {sm} – {ed} {em} {ey}",
                "l": "{sd} {sm} – {ed} {em} {ey}",
                "m": "{sd}.{sm} – {ed}.{em}.{ey}",
                "s": "{sd}.{sm} – {ed}.{em}.{ey}"
            },
            "c12": {
                "m": "{sd}.{sm}.{sy} – {ed}.{em}.{ey}",
                "s": "{sd}.{sm}.{sy} – {ed}.{em}.{ey}"
            },
            "c20": {
                "m": "{sm}.{sy} – {em}.{ey}",
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
ilib.data.sysres_mk = {
    "#in {num}d": "one#за {num} ден|#за {num} дена",
    "#in {num}h": "one#за {num} час|#за {num} часа",
    "#in {num}mi": "one#за {num} мин.|#за {num} мин.",
    "#in {num}mo": "one#за {num} месец|#за {num} месеци",
    "#in {num}s": "one#за {num} сек.|#за {num} сек.",
    "#in {num}w": "one#за {num} седмица|#за {num} седмици",
    "#in {num}y": "one#за {num} год.|#за {num} год.",
    "#{num} ms": "one#{num} мс|#{num} мс",
    "#{num}d": "one#{num} д.|#{num} д.",
    "#{num}d ago": "one#пред {num} ден|#пред {num} дена",
    "#{num}h": "one#{num} ч.|#{num} ч.",
    "#{num}h ago": "one#пред {num} час|#пред {num} часа",
    "#{num}mi ago": "one#пред {num} мин.|#пред {num} мин.",
    "#{num}mo ago": "one#пред {num} месец|#пред {num} месеци",
    "#{num}s": "one#{num} с.|#{num} с.",
    "#{num}s ago": "one#пред {num} сек.|#пред {num} сек.",
    "#{num}w": "one#{num} с.|#{num} с.",
    "#{num}w ago": "one#пред {num} седмица|#пред {num} седмици",
    "#{num}y": "one#{num} г.|#{num} г.",
    "#{num}y ago": "one#пред {num} год.|#пред {num} год.",
    "1#1 day ago|#{num} days ago": "one#пред {num} ден|#пред {num} дена",
    "1#1 day|#{num} days": "one#{num} ден|#{num} дена",
    "1#1 dy ago|#{num} dys ago": "one#пред {num} ден|#пред {num} дена",
    "1#1 dy|#{num} dys": "one#{num} д.|#{num} д.",
    "1#1 hour ago|#{num} hours ago": "one#пред {num} час|#пред {num} часа",
    "1#1 hour|#{num} hours": "one#{num} час|#{num} часа",
    "1#1 hr ago|#{num} hrs ago": "one#пред {num} час|#пред {num} часа",
    "1#1 hr|#{num} hrs": "one#{num} ч.|#{num} ч.",
    "1#1 millisecond|#{num} milliseconds": "one#{num} милисекунда|#{num} милисекунди",
    "1#1 min ago|#{num} min ago": "one#пред {num} минута|#пред {num} минути",
    "1#1 minute ago|#{num} minutes ago": "one#пред {num} минута|#пред {num} минути",
    "1#1 minute|#{num} minutes": "one#{num} минута|#{num} минути",
    "1#1 min|#{num} min": "one#{num} мин.|#{num} мин.",
    "1#1 mi|#{num} min": "one#{num} м.|#{num} м.",
    "1#1 mon ago|#{num} mons ago": "one#пред {num} месец|#пред {num} месеци",
    "1#1 month ago|#{num} months ago": "one#пред {num} месец|#пред {num} месеци",
    "1#1 month|#{num} months": "one#{num} месец|#{num} месеци",
    "1#1 mon|#{num} mons": "one#{num} мес.|#{num} мес.",
    "1#1 mo|#{num} mos": "one#{num} м.|#{num} м.",
    "1#1 sec ago|#{num} sec ago": "one#пред {num} секунда|#пред {num} секунди",
    "1#1 second ago|#{num} seconds ago": "one#пред {num} секунда|#пред {num} секунди",
    "1#1 second|#{num} seconds": "one#{num} секунда|#{num} секунди",
    "1#1 sec|#{num} sec": "one#{num} сек.|#{num} сек.",
    "1#1 se|#{num} sec": "one#{num} с.|#{num} с.",
    "1#1 week ago|#{num} weeks ago": "one#пред {num} седмица|#пред {num} седмици",
    "1#1 week|#{num} weeks": "one#{num} седмица|#{num} седмици",
    "1#1 wk ago|#{num} wks ago": "one#пред {num} седмица|#пред {num} седмици",
    "1#1 wk|#{num} wks": "one#{num} сед.|#{num} сед.",
    "1#1 year ago|#{num} years ago": "one#пред {num} година|#пред {num} години",
    "1#1 year|#{num} years": "one#{num} година|#{num} години",
    "1#1 yr ago|#{num} yrs ago": "one#пред {num} година|#пред {num} години",
    "1#1 yr|#{num} yrs": "one#{num} год.|#{num} год.",
    "1#in 1 day|#in {num} days": "one#за {num} ден|#за {num} дена",
    "1#in 1 dy|#in {num} dys": "one#за {num} ден|#за {num} дена",
    "1#in 1 hour|#in {num} hours": "one#за {num} час|#за {num} часа",
    "1#in 1 hr|#in {num} hrs": "one#за {num} час|#за {num} часа",
    "1#in 1 minute|#in {num} minutes": "one#за {num} минута|#за {num} минути",
    "1#in 1 min|#in {num} min": "one#за {num} минута|#за {num} минути",
    "1#in 1 month|#in {num} months": "one#за {num} месец|#за {num} месеци",
    "1#in 1 mon|#in {num} mons": "one#за {num} месец|#за {num} месеци",
    "1#in 1 second|#in {num} seconds": "one#за {num} секунда|#за {num} секунди",
    "1#in 1 sec|#in {num} sec": "one#за {num} секунда|#за {num} секунди",
    "1#in 1 week|#in {num} weeks": "one#за {num} седмица|#за {num} седмици",
    "1#in 1 wk|#in {num} wks": "one#за {num} седмица|#за {num} седмици",
    "1#in 1 year|#in {num} years": "one#за {num} година|#за {num} години",
    "1#in 1 yr|#in {num} yrs": "one#за {num} година|#за {num} години",
    "B0": "полноќ",
    "B1": "ноќе",
    "B2": "претпл.",
    "B3": "наутро",
    "B4": "претпладне",
    "B5": "напладне",
    "B6": "попладне",
    "B7": "попл.",
    "B8": "навечер",
    "E0": "н",
    "E1": "п",
    "E2": "в",
    "E3": "с",
    "E4": "ч",
    "E5": "п",
    "E6": "с",
    "EE0": "нед.",
    "EE1": "пон.",
    "EE2": "вто.",
    "EE3": "сре.",
    "EE4": "чет.",
    "EE5": "пет.",
    "EE6": "саб.",
    "EEE0": "нед.",
    "EEE1": "пон.",
    "EEE2": "вто.",
    "EEE3": "сре.",
    "EEE4": "чет.",
    "EEE5": "пет.",
    "EEE6": "саб.",
    "EEEE0": "недела",
    "EEEE1": "понеделник",
    "EEEE2": "вторник",
    "EEEE3": "среда",
    "EEEE4": "четврток",
    "EEEE5": "петок",
    "EEEE6": "сабота",
    "G-1": "п.н.е.",
    "G1": "н.е.",
    "MMM1": "јан.",
    "MMM10": "окт.",
    "MMM11": "ное.",
    "MMM12": "дек.",
    "MMM2": "фев.",
    "MMM3": "мар.",
    "MMM4": "апр.",
    "MMM5": "мај",
    "MMM6": "јун.",
    "MMM7": "јул.",
    "MMM8": "авг.",
    "MMM9": "сеп.",
    "MMMM1": "јануари",
    "MMMM10": "октомври",
    "MMMM11": "ноември",
    "MMMM12": "декември",
    "MMMM2": "февруари",
    "MMMM3": "март",
    "MMMM4": "април",
    "MMMM5": "мај",
    "MMMM6": "јуни",
    "MMMM7": "јули",
    "MMMM8": "август",
    "MMMM9": "септември",
    "N1": "ј",
    "N10": "о",
    "N11": "н",
    "N12": "д",
    "N2": "ф",
    "N3": "м",
    "N4": "а",
    "N5": "м",
    "N6": "ј",
    "N7": "ј",
    "N8": "а",
    "N9": "с",
    "NN1": "ја",
    "NN10": "ок",
    "NN11": "но",
    "NN12": "де",
    "NN2": "фе",
    "NN3": "ма",
    "NN4": "ап",
    "NN5": "ма",
    "NN6": "ју",
    "NN7": "ју",
    "NN8": "ав",
    "NN9": "се",
    "a0": "претпл.",
    "a1": "попл.",
    "durationLongDays": "one#{num} ден|#{num} дена",
    "durationMediumHours": "one#{num} ч.|#{num} ч.",
    "durationMediumMillis": "one#{num} мс|#{num} мс",
    "durationMediumWeeks": "one#{num} с.|#{num} с.",
    "durationMediumYears": "one#{num} г.|#{num} г.",
    "durationShortMillis": "one#{num} мс|#{num} мс",
    "durationShortMinutes": "one#{num} м.|#{num} м.",
    "durationShortMonths": "one#{num} м.|#{num} м.",
    "finalSeparatorFull": " и ",
    "finalSeparatorLong": " и ",
    "finalSeparatorMedium": " и ",
    "finalSeparatorShort": " и ",
    "separatorMedium": ", ",
    "separatorShort": ", "
}

ilib.data.plurals_ru = {
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
ilib.data.localeinfo_ru = {
    "delimiter": {
        "alternateQuotationEnd": "“",
        "alternateQuotationStart": "„",
        "quotationEnd": "»",
        "quotationStart": "«"
    },
    "language.name": "Russian",
    "locale": "ru",
    "numfmt": {
        "currencyFormats": {
            "common": "{n} {s}",
            "commonNegative": "-{n} {s}"
        },
        "decimalChar": ",",
        "groupChar": " ",
        "negativepctFmt": "-{n} %",
        "pctFmt": "{n} %"
    },
    "scripts": [
        "Cyrl"
    ]
}
ilib.data.localeinfo_und_BY = {
    "clock": "24",
    "currency": "BYN",
    "firstDayOfWeek": 1,
    "locale": "BY",
    "region.name": "Belarus",
    "timezone": "Europe/Minsk"
}
ilib.data.dateformats_ru = {
    "dayPeriods": [
        {
            "at": 0
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
            "to": 1320
        },
        {
            "from": 1320,
            "to": 240
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
                "f": "EEEE, d MMMM yyyy 'г'.",
                "l": "EEE, d MMMM yyyy 'г'.",
                "m": "EE, d MMM yyyy 'г'.",
                "s": "E, dd.MM.yyyy"
            },
            "dmy": {
                "f": "d MMMM yyyy 'г'.",
                "l": "d MMMM yyyy 'г'.",
                "m": "d MMM yyyy 'г'.",
                "s": "dd.MM.yyyy"
            },
            "dw": {
                "f": "EEEE, d",
                "l": "EEE, d",
                "m": "EE, d",
                "s": "E, dd"
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
                "f": "MMMM yyyy 'г'.",
                "l": "MMMM yyyy 'г'.",
                "m": "MMM yyyy 'г'.",
                "s": "MM.yyyy"
            },
            "mys": {
                "f": "LLLL yyyy 'г'.",
                "l": "LLLL yyyy 'г'.",
                "m": "LLL yyyy 'г'.",
                "s": "MM.yyyy"
            },
            "y": {
                "s": "yyyy"
            }
        },
        "order": {
            "f": "{date} 'в' {time}",
            "l": "{date} 'в' {time}",
            "m": "{date}, {time}",
            "s": "{date}, {time}"
        },
        "range": {
            "c00": {
                "f": "{sd} {sm} {sy} г. в {st} – {et}",
                "l": "{sd} {sm} {sy} г. в {st} – {et}",
                "m": "{sd} {sm} {sy} г., {st} – {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {et}"
            },
            "c01": {
                "f": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "l": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "m": "{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c02": {
                "f": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "l": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "m": "{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c03": {
                "f": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "l": "{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}",
                "m": "{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}",
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c10": {
                "f": "{sd} – {ed} {em} {ey} г.",
                "l": "{sd} – {ed} {em} {ey} г.",
                "m": "{sd} – {ed} {em} {ey} г.",
                "s": "{sd} – {ed}.{em}.{ey}"
            },
            "c11": {
                "f": "{sd} {sm} – {ed} {em} {ey} г.",
                "l": "{sd} {sm} – {ed} {em} {ey} г.",
                "m": "{sd} {sm} – {ed} {em} {ey} г.",
                "s": "{sd}.{sm} – {ed}.{em}.{ey}"
            },
            "c12": {
                "f": "{sd} {sm} {sy} г. – {ed} {em} {ey} г.",
                "l": "{sd} {sm} {sy} г. – {ed} {em} {ey} г.",
                "m": "{sd} {sm} {sy} г. – {ed} {em} {ey} г.",
                "s": "{sd}.{sm}.{sy} – {ed}.{em}.{ey}"
            },
            "c20": {
                "f": "{sm} {sy} г. – {em} {ey} г.",
                "l": "{sm} {sy} г. – {em} {ey} г.",
                "m": "{sm} {sy} г. – {em} {ey} г.",
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
ilib.data.sysres_ru = {
    "#in {num}d": "one#через {num} дн.|few#через {num} дн.|many#через {num} дн.|#через {num} дн.",
    "#in {num}h": "one#через {num} ч|few#через {num} ч|many#через {num} ч|#через {num} ч",
    "#in {num}mi": "one#через {num} мин.|few#через {num} мин.|many#через {num} мин.|#через {num} мин.",
    "#in {num}mo": "one#через {num} мес.|few#через {num} мес.|many#через {num} мес.|#через {num} мес.",
    "#in {num}s": "one#через {num} сек.|few#через {num} сек.|many#через {num} сек.|#через {num} сек.",
    "#in {num}w": "one#через {num} нед.|few#через {num} нед.|many#через {num} нед.|#через {num} нед.",
    "#in {num}y": "one#через {num} г.|few#через {num} г.|many#через {num} л.|#через {num} г.",
    "#{num} ms": "one#{num} мс|few#{num} мс|many#{num} мс|#{num} мс",
    "#{num}d": "one#{num} д.|few#{num} д.|many#{num} д.|#{num} д.",
    "#{num}d ago": "one#{num} дн. назад|few#{num} дн. назад|many#{num} дн. назад|#{num} дн. назад",
    "#{num}h": "one#{num} ч|few#{num} ч|many#{num} ч|#{num} ч",
    "#{num}h ago": "one#{num} ч назад|few#{num} ч назад|many#{num} ч назад|#{num} ч назад",
    "#{num}mi ago": "one#{num} мин. назад|few#{num} мин. назад|many#{num} мин. назад|#{num} мин. назад",
    "#{num}mo ago": "one#{num} мес. назад|few#{num} мес. назад|many#{num} мес. назад|#{num} мес. назад",
    "#{num}s": "one#{num} с|few#{num} с|many#{num} с|#{num} с",
    "#{num}s ago": "one#{num} сек. назад|few#{num} сек. назад|many#{num} сек. назад|#{num} сек. назад",
    "#{num}w": "one#{num} н.|few#{num} н.|many#{num} н.|#{num} н.",
    "#{num}w ago": "one#{num} нед. назад|few#{num} нед. назад|many#{num} нед. назад|#{num} нед. назад",
    "#{num}y": "one#{num} г.|few#{num} г.|many#{num} л.|#{num} г.",
    "#{num}y ago": "one#{num} г. назад|few#{num} г. назад|many#{num} л. назад|#{num} г. назад",
    "1#1 day ago|#{num} days ago": "one#{num} день назад|few#{num} дня назад|many#{num} дней назад|#{num} дня назад",
    "1#1 day|#{num} days": "one#{num} день|few#{num} дня|many#{num} дней|#{num} дня",
    "1#1 dy ago|#{num} dys ago": "one#{num} день назад|few#{num} дня назад|many#{num} дней назад|#{num} дня назад",
    "1#1 dy|#{num} dys": "one#{num} д.|few#{num} д.|many#{num} д.|#{num} д.",
    "1#1 hour ago|#{num} hours ago": "one#{num} час назад|few#{num} часа назад|many#{num} часов назад|#{num} часа назад",
    "1#1 hour|#{num} hours": "one#{num} час|few#{num} часа|many#{num} часов|#{num} часа",
    "1#1 hr ago|#{num} hrs ago": "one#{num} час назад|few#{num} часа назад|many#{num} часов назад|#{num} часа назад",
    "1#1 hr|#{num} hrs": "one#{num} ч|few#{num} ч|many#{num} ч|#{num} ч",
    "1#1 millisecond|#{num} milliseconds": "one#{num} миллисекунда|few#{num} миллисекунды|many#{num} миллисекунд|#{num} миллисекунды",
    "1#1 min ago|#{num} min ago": "one#{num} минуту назад|few#{num} минуты назад|many#{num} минут назад|#{num} минуты назад",
    "1#1 minute ago|#{num} minutes ago": "one#{num} минуту назад|few#{num} минуты назад|many#{num} минут назад|#{num} минуты назад",
    "1#1 minute|#{num} minutes": "one#{num} минута|few#{num} минуты|many#{num} минут|#{num} минуты",
    "1#1 min|#{num} min": "one#{num} мин|few#{num} мин|many#{num} мин|#{num} мин",
    "1#1 mi|#{num} min": "one#{num} мин|few#{num} мин|many#{num} мин|#{num} мин",
    "1#1 mon ago|#{num} mons ago": "one#{num} месяц назад|few#{num} месяца назад|many#{num} месяцев назад|#{num} месяца назад",
    "1#1 month ago|#{num} months ago": "one#{num} месяц назад|few#{num} месяца назад|many#{num} месяцев назад|#{num} месяца назад",
    "1#1 month|#{num} months": "one#{num} месяц|few#{num} месяца|many#{num} месяцев|#{num} месяца",
    "1#1 mon|#{num} mons": "one#{num} мес.|few#{num} мес.|many#{num} мес.|#{num} мес.",
    "1#1 mo|#{num} mos": "one#{num} м.|few#{num} м.|many#{num} м.|#{num} м.",
    "1#1 sec ago|#{num} sec ago": "one#{num} секунду назад|few#{num} секунды назад|many#{num} секунд назад|#{num} секунды назад",
    "1#1 second ago|#{num} seconds ago": "one#{num} секунду назад|few#{num} секунды назад|many#{num} секунд назад|#{num} секунды назад",
    "1#1 second|#{num} seconds": "one#{num} секунда|few#{num} секунды|many#{num} секунд|#{num} секунды",
    "1#1 sec|#{num} sec": "one#{num} с|few#{num} с|many#{num} с|#{num} с",
    "1#1 se|#{num} sec": "one#{num} с|few#{num} с|many#{num} с|#{num} с",
    "1#1 week ago|#{num} weeks ago": "one#{num} неделю назад|few#{num} недели назад|many#{num} недель назад|#{num} недели назад",
    "1#1 week|#{num} weeks": "one#{num} неделя|few#{num} недели|many#{num} недель|#{num} недели",
    "1#1 wk ago|#{num} wks ago": "one#{num} неделю назад|few#{num} недели назад|many#{num} недель назад|#{num} недели назад",
    "1#1 wk|#{num} wks": "one#{num} нед.|few#{num} нед.|many#{num} нед.|#{num} нед.",
    "1#1 year ago|#{num} years ago": "one#{num} год назад|few#{num} года назад|many#{num} лет назад|#{num} года назад",
    "1#1 year|#{num} years": "one#{num} год|few#{num} года|many#{num} лет|#{num} года",
    "1#1 yr ago|#{num} yrs ago": "one#{num} год назад|few#{num} года назад|many#{num} лет назад|#{num} года назад",
    "1#1 yr|#{num} yrs": "one#{num} г.|few#{num} г.|many#{num} л.|#{num} г.",
    "1#in 1 day|#in {num} days": "one#через {num} день|few#через {num} дня|many#через {num} дней|#через {num} дня",
    "1#in 1 dy|#in {num} dys": "one#через {num} день|few#через {num} дня|many#через {num} дней|#через {num} дня",
    "1#in 1 hour|#in {num} hours": "one#через {num} час|few#через {num} часа|many#через {num} часов|#через {num} часа",
    "1#in 1 hr|#in {num} hrs": "one#через {num} час|few#через {num} часа|many#через {num} часов|#через {num} часа",
    "1#in 1 minute|#in {num} minutes": "one#через {num} минуту|few#через {num} минуты|many#через {num} минут|#через {num} минуты",
    "1#in 1 min|#in {num} min": "one#через {num} минуту|few#через {num} минуты|many#через {num} минут|#через {num} минуты",
    "1#in 1 month|#in {num} months": "one#через {num} месяц|few#через {num} месяца|many#через {num} месяцев|#через {num} месяца",
    "1#in 1 mon|#in {num} mons": "one#через {num} месяц|few#через {num} месяца|many#через {num} месяцев|#через {num} месяца",
    "1#in 1 second|#in {num} seconds": "one#через {num} секунду|few#через {num} секунды|many#через {num} секунд|#через {num} секунды",
    "1#in 1 sec|#in {num} sec": "one#через {num} секунду|few#через {num} секунды|many#через {num} секунд|#через {num} секунды",
    "1#in 1 week|#in {num} weeks": "one#через {num} неделю|few#через {num} недели|many#через {num} недель|#через {num} недели",
    "1#in 1 wk|#in {num} wks": "one#через {num} неделю|few#через {num} недели|many#через {num} недель|#через {num} недели",
    "1#in 1 year|#in {num} years": "one#через {num} год|few#через {num} года|many#через {num} лет|#через {num} года",
    "1#in 1 yr|#in {num} yrs": "one#через {num} год|few#через {num} года|many#через {num} лет|#через {num} года",
    "B0": "полночь",
    "B1": "AM",
    "B2": "утра",
    "B3": "полдень",
    "B4": "дня",
    "B5": "PM",
    "B6": "вечера",
    "B7": "ночи",
    "E0": "В",
    "E1": "П",
    "E2": "В",
    "E3": "С",
    "E4": "Ч",
    "E5": "П",
    "E6": "С",
    "EE0": "вс",
    "EE1": "пн",
    "EE2": "вт",
    "EE3": "ср",
    "EE4": "чт",
    "EE5": "пт",
    "EE6": "сб",
    "EEE0": "вс",
    "EEE1": "пн",
    "EEE2": "вт",
    "EEE3": "ср",
    "EEE4": "чт",
    "EEE5": "пт",
    "EEE6": "сб",
    "EEEE0": "воскресенье",
    "EEEE1": "понедельник",
    "EEEE2": "вторник",
    "EEEE3": "среда",
    "EEEE4": "четверг",
    "EEEE5": "пятница",
    "EEEE6": "суббота",
    "G-1": "до н. э.",
    "G1": "н. э.",
    "L1": "Я",
    "L10": "О",
    "L11": "Н",
    "L12": "Д",
    "L2": "Ф",
    "L3": "М",
    "L4": "А",
    "L5": "М",
    "L6": "И",
    "L7": "И",
    "L8": "А",
    "L9": "С",
    "LL1": "ян",
    "LL10": "ок",
    "LL11": "но",
    "LL12": "де",
    "LL2": "фе",
    "LL3": "ма",
    "LL4": "ап",
    "LL5": "ма",
    "LL6": "ию",
    "LL7": "ию",
    "LL8": "ав",
    "LL9": "се",
    "LLL1": "янв.",
    "LLL10": "окт.",
    "LLL11": "нояб.",
    "LLL12": "дек.",
    "LLL2": "февр.",
    "LLL3": "март",
    "LLL4": "апр.",
    "LLL5": "май",
    "LLL6": "июнь",
    "LLL7": "июль",
    "LLL8": "авг.",
    "LLL9": "сент.",
    "LLLL1": "январь",
    "LLLL10": "октябрь",
    "LLLL11": "ноябрь",
    "LLLL12": "декабрь",
    "LLLL2": "февраль",
    "LLLL3": "март",
    "LLLL4": "апрель",
    "LLLL5": "май",
    "LLLL6": "июнь",
    "LLLL7": "июль",
    "LLLL8": "август",
    "LLLL9": "сентябрь",
    "MMM1": "янв.",
    "MMM10": "окт.",
    "MMM11": "нояб.",
    "MMM12": "дек.",
    "MMM2": "февр.",
    "MMM3": "мар.",
    "MMM4": "апр.",
    "MMM5": "мая",
    "MMM6": "июн.",
    "MMM7": "июл.",
    "MMM8": "авг.",
    "MMM9": "сент.",
    "MMMM1": "января",
    "MMMM10": "октября",
    "MMMM11": "ноября",
    "MMMM12": "декабря",
    "MMMM2": "февраля",
    "MMMM3": "марта",
    "MMMM4": "апреля",
    "MMMM5": "мая",
    "MMMM6": "июня",
    "MMMM7": "июля",
    "MMMM8": "августа",
    "MMMM9": "сентября",
    "N1": "я",
    "N10": "о",
    "N11": "н",
    "N12": "д",
    "N2": "ф",
    "N3": "м",
    "N4": "а",
    "N5": "м",
    "N6": "и",
    "N7": "и",
    "N8": "а",
    "N9": "с",
    "NN1": "ян",
    "NN10": "ок",
    "NN11": "но",
    "NN12": "де",
    "NN2": "фе",
    "NN3": "ма",
    "NN4": "ап",
    "NN5": "ма",
    "NN6": "ию",
    "NN7": "ию",
    "NN8": "ав",
    "NN9": "се",
    "durationLongDays": "one#{num} дн.|few#{num} дн.|many#{num} дн.|#{num} дн.",
    "durationMediumHours": "one#{num} ч|few#{num} ч|many#{num} ч|#{num} ч",
    "durationMediumMillis": "one#{num} мс|few#{num} мс|many#{num} мс|#{num} мс",
    "durationMediumWeeks": "one#{num} н.|few#{num} н.|many#{num} н.|#{num} н.",
    "durationMediumYears": "one#{num} г.|few#{num} г.|many#{num} л.|#{num} г.",
    "durationShortMillis": "one#{num} мс|few#{num} мс|many#{num} мс|#{num} мс",
    "durationShortMinutes": "one#{num} мин|few#{num} мин|many#{num} мин|#{num} мин",
    "durationShortMonths": "one#{num} м.|few#{num} м.|many#{num} м.|#{num} м.",
    "finalSeparatorFull": " ",
    "finalSeparatorLong": " ",
    "finalSeparatorMedium": " ",
    "finalSeparatorShort": " ",
    "separatorFull": " ",
    "separatorLong": " "
}
ilib.data.localeinfo_und_GE = {
    "clock": "24",
    "currency": "GEL",
    "firstDayOfWeek": 1,
    "locale": "GE",
    "region.name": "Georgia",
    "timezone": "Asia/Tbilisi"
}
ilib.data.localeinfo_und_KG = {
    "clock": "24",
    "currency": "KGS",
    "firstDayOfWeek": 1,
    "locale": "KG",
    "region.name": "Kyrgyzstan",
    "timezone": "Asia/Bishkek"
}
ilib.data.localeinfo_und_KZ = {
    "clock": "24",
    "currency": "KZT",
    "firstDayOfWeek": 1,
    "locale": "KZ",
    "region.name": "Kazakhstan",
    "timezone": "Asia/Almaty"
}
ilib.data.localeinfo_und_RU = {
    "clock": "24",
    "currency": "RUB",
    "firstDayOfWeek": 1,
    "locale": "RU",
    "region.name": "Russia",
    "timezone": "Europe/Moscow"
}
ilib.data.localeinfo_und_UA = {
    "clock": "24",
    "currency": "UAH",
    "firstDayOfWeek": 1,
    "locale": "UA",
    "region.name": "Ukraine",
    "timezone": "Europe/Kiev"
}

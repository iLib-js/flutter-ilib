ilib.data.plurals_it = {
    "many": {
        "or": [
            {
                "and": [
                    {
                        "eq": [
                            "e",
                            0
                        ]
                    },
                    {
                        "neq": [
                            "i",
                            0
                        ]
                    },
                    {
                        "eq": [
                            {
                                "mod": [
                                    "i",
                                    1000000
                                ]
                            },
                            0
                        ]
                    },
                    {
                        "eq": [
                            "v",
                            0
                        ]
                    }
                ]
            },
            {
                "neq": [
                    "e",
                    [
                        0,
                        5
                    ]
                ]
            }
        ]
    },
    "one": {
        "and": [
            {
                "eq": [
                    "i",
                    1
                ]
            },
            {
                "eq": [
                    "v",
                    0
                ]
            }
        ]
    }
}
ilib.data.localeinfo_it = {
    "delimiter": {
        "alternateQuotationEnd": "”",
        "alternateQuotationStart": "“",
        "quotationEnd": "»",
        "quotationStart": "«"
    },
    "language.name": "Italian",
    "locale": "it",
    "numfmt": {
        "currencyFormats": {
            "common": "{n} {s}",
            "commonNegative": "-{n} {s}"
        },
        "decimalChar": ",",
        "groupChar": "."
    },
    "scripts": [
        "Latn"
    ]
}
ilib.data.localeinfo_it_CH = {
    "clock": "24",
    "locale": "it-CH",
    "numfmt": {
        "currencyFormats": {
            "common": "{s} {n}",
            "commonNegative": "{s}-{n}"
        },
        "decimalChar": ".",
        "groupChar": "’"
    }
}
ilib.data.localeinfo_und_CH = {
    "clock": "24",
    "currency": "CHF",
    "firstDayOfWeek": 1,
    "locale": "CH",
    "region.name": "Switzerland",
    "timezone": "Europe/Zurich"
}
ilib.data.dateformats_it = {
    "dayPeriods": [
        {
            "at": 0
        },
        {
            "from": 0,
            "to": 360
        },
        {
            "from": 0,
            "to": 720
        },
        {
            "from": 360,
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
                "s": "dd/MM"
            },
            "dmw": {
                "l": "EEE d MMMM",
                "m": "EE d MMM",
                "s": "E dd/MM"
            },
            "dmwy": {
                "l": "EEE d MMMM yyyy",
                "m": "EE d MMM yyyy",
                "s": "E dd/MM/yy"
            },
            "dmy": {
                "l": "d MMMM yyyy",
                "m": "d MMM yyyy",
                "s": "dd/MM/yy"
            },
            "dw": {
                "s": "E dd"
            },
            "m": {
                "l": "MMMM",
                "m": "MMM",
                "s": "MM"
            },
            "my": {
                "l": "MMMM yyyy",
                "m": "MMM yyyy",
                "s": "MM/yy"
            }
        },
        "order": {
            "f": "{date} 'alle' 'ore' {time}",
            "l": "{date} 'alle' 'ore' {time}",
            "m": "{date}, {time}",
            "s": "{date}, {time}"
        },
        "range": {
            "c00": {
                "f": "{sd} {sm} {sy} alle ore {st} – {et}",
                "l": "{sd} {sm} {sy} alle ore {st} – {et}",
                "m": "{sd} {sm} {sy}, {st} – {et}",
                "s": "{sd}/{sm}/{sy}, {st} – {et}"
            },
            "c01": {
                "f": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "l": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}",
                "s": "{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}"
            },
            "c02": {
                "f": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "l": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}",
                "s": "{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}"
            },
            "c03": {
                "f": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "l": "{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}",
                "s": "{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}"
            },
            "c10": {
                "f": "{sd} – {ed} {em} {ey}",
                "l": "{sd} – {ed} {em} {ey}",
                "m": "{sd} – {ed} {em} {ey}",
                "s": "{sd} – {ed}/{em}/{ey}"
            },
            "c11": {
                "f": "{sd} {sm} – {ed} {em} {ey}",
                "l": "{sd} {sm} – {ed} {em} {ey}",
                "m": "{sd} {sm} – {ed} {em} {ey}",
                "s": "{sd}/{sm} – {ed}/{em}/{ey}"
            },
            "c12": {
                "m": "{sd} {sm} {sy} – {ed} {em} {ey}"
            },
            "c20": {
                "m": "{sm} {sy} – {em} {ey}"
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
ilib.data.dateformats_it_CH = {
    "gregorian": {
        "date": {
            "dm": {
                "s": "dd.MM"
            },
            "dmw": {
                "f": "EEEE, d MMMM",
                "l": "EEE, d MMMM",
                "m": "EE, d MMM",
                "s": "E, dd.MM"
            },
            "dmwy": {
                "f": "EEEE, d MMMM yyyy",
                "l": "EEE, d MMMM yyyy",
                "m": "EE, d MMM yyyy",
                "s": "E, dd.MM.yy"
            },
            "dmy": {
                "s": "dd.MM.yy"
            },
            "dw": {
                "f": "EEEE, d",
                "l": "EEE, d",
                "m": "EE, d",
                "s": "E, dd"
            },
            "my": {
                "s": "MM.yy"
            }
        },
        "range": {
            "c00": {
                "s": "{sd}.{sm}.{sy}, {st} – {et}"
            },
            "c01": {
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c02": {
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c03": {
                "s": "{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}"
            },
            "c10": {
                "s": "{sd} – {ed}.{em}.{ey}"
            },
            "c11": {
                "s": "{sd}.{sm} – {ed}.{em}.{ey}"
            },
            "c12": {
                "s": "{sd}.{sm}.{sy} – {ed}.{em}.{ey}"
            },
            "c20": {
                "s": "{sm}.{sy} – {em}.{ey}"
            }
        }
    }
}
ilib.data.sysres_it = {
    "#in {num}d": "one#tra {num} g|#tra {num} gg",
    "#in {num}h": "one#tra {num} h|#tra {num} h",
    "#in {num}mi": "one#tra {num} min|#tra {num} min",
    "#in {num}mo": "one#tra {num} mese|#tra {num} mesi",
    "#in {num}s": "one#tra {num} sec.|#tra {num} sec.",
    "#in {num}w": "one#tra {num} sett.|#tra {num} sett.",
    "#in {num}y": "one#tra {num} anno|#tra {num} anni",
    "#{num} ms": "#{num} ms",
    "#{num}d": "one#{num}g|#{num}gg",
    "#{num}d ago": "one#{num} g fa|#{num} gg fa",
    "#{num}h": "one#{num}h|#{num}h",
    "#{num}h ago": "one#{num} h fa|#{num} h fa",
    "#{num}mi ago": "one#{num} min fa|#{num} min fa",
    "#{num}mo ago": "one#{num} mese fa|#{num} mesi fa",
    "#{num}s": "one#{num}s|#{num}s",
    "#{num}s ago": "one#{num} sec. fa|#{num} sec. fa",
    "#{num}w": "one#{num}sett.|#{num}sett.",
    "#{num}w ago": "one#{num} sett. fa|#{num} sett. fa",
    "#{num}y": "one#{num}anno|#{num}anni",
    "#{num}y ago": "one#{num} anno fa|#{num} anni fa",
    "1#1 day ago|#{num} days ago": "one#{num} giorno fa|#{num} giorni fa",
    "1#1 day|#{num} days": "one#{num} giorno|#{num} giorni",
    "1#1 dy ago|#{num} dys ago": "one#{num} giorno fa|#{num} giorni fa",
    "1#1 dy|#{num} dys": "one#{num}g|#{num}gg",
    "1#1 hour ago|#{num} hours ago": "one#{num} ora fa|#{num} ore fa",
    "1#1 hour|#{num} hours": "one#{num} ora|#{num} ore",
    "1#1 hr ago|#{num} hrs ago": "one#{num} ora fa|#{num} ore fa",
    "1#1 hr|#{num} hrs": "#{num} h",
    "1#1 millisecond|#{num} milliseconds": "one#{num} millisecondo|#{num} millisecondi",
    "1#1 min ago|#{num} min ago": "one#{num} minuto fa|#{num} minuti fa",
    "1#1 minute ago|#{num} minutes ago": "one#{num} minuto fa|#{num} minuti fa",
    "1#1 minute|#{num} minutes": "one#{num} minuto|#{num} minuti",
    "1#1 min|#{num} min": "#{num} min",
    "1#1 mi|#{num} min": "one#{num}min|#{num}min",
    "1#1 mon ago|#{num} mons ago": "one#{num} mese fa|#{num} mesi fa",
    "1#1 month ago|#{num} months ago": "one#{num} mese fa|#{num} mesi fa",
    "1#1 month|#{num} months": "one#{num} mese|#{num} mesi",
    "1#1 mon|#{num} mons": "one#{num} mese|#{num} mesi",
    "1#1 mo|#{num} mos": "one#{num} mese|#{num} mesi",
    "1#1 sec ago|#{num} sec ago": "one#{num} secondo fa|#{num} secondi fa",
    "1#1 second ago|#{num} seconds ago": "one#{num} secondo fa|#{num} secondi fa",
    "1#1 second|#{num} seconds": "one#{num} secondo|#{num} secondi",
    "1#1 sec|#{num} sec": "#{num} s",
    "1#1 se|#{num} sec": "one#{num}s|#{num}s",
    "1#1 week ago|#{num} weeks ago": "one#{num} settimana fa|#{num} settimane fa",
    "1#1 week|#{num} weeks": "one#{num} settimana|#{num} settimane",
    "1#1 wk ago|#{num} wks ago": "one#{num} settimana fa|#{num} settimane fa",
    "1#1 wk|#{num} wks": "one#{num} sett.|#{num} sett.",
    "1#1 year ago|#{num} years ago": "one#{num} anno fa|#{num} anni fa",
    "1#1 year|#{num} years": "one#{num} anno|#{num} anni",
    "1#1 yr ago|#{num} yrs ago": "one#{num} anno fa|#{num} anni fa",
    "1#1 yr|#{num} yrs": "one#{num} anno|#{num} anni",
    "1#in 1 day|#in {num} days": "one#tra {num} giorno|#tra {num} giorni",
    "1#in 1 dy|#in {num} dys": "one#tra {num} giorno|#tra {num} giorni",
    "1#in 1 hour|#in {num} hours": "one#tra {num} ora|#tra {num} ore",
    "1#in 1 hr|#in {num} hrs": "one#tra {num} ora|#tra {num} ore",
    "1#in 1 minute|#in {num} minutes": "one#tra {num} minuto|#tra {num} minuti",
    "1#in 1 min|#in {num} min": "one#tra {num} minuto|#tra {num} minuti",
    "1#in 1 month|#in {num} months": "one#tra {num} mese|#tra {num} mesi",
    "1#in 1 mon|#in {num} mons": "one#tra {num} mese|#tra {num} mesi",
    "1#in 1 second|#in {num} seconds": "one#tra {num} secondo|#tra {num} secondi",
    "1#in 1 sec|#in {num} sec": "one#tra {num} secondo|#tra {num} secondi",
    "1#in 1 week|#in {num} weeks": "one#tra {num} settimana|#tra {num} settimane",
    "1#in 1 wk|#in {num} wks": "one#tra {num} settimana|#tra {num} settimane",
    "1#in 1 year|#in {num} years": "one#tra {num} anno|#tra {num} anni",
    "1#in 1 yr|#in {num} yrs": "one#tra {num} anno|#tra {num} anni",
    "B0": "mezzanotte",
    "B1": "di notte",
    "B2": "AM",
    "B3": "di mattina",
    "B4": "mezzogiorno",
    "B5": "del pomeriggio",
    "B6": "PM",
    "B7": "di sera",
    "E0": "D",
    "E1": "L",
    "E2": "M",
    "E3": "M",
    "E4": "G",
    "E5": "V",
    "EE0": "dom",
    "EE1": "lun",
    "EE2": "mar",
    "EE3": "mer",
    "EE4": "gio",
    "EE5": "ven",
    "EE6": "sab",
    "EEE0": "dom",
    "EEE1": "lun",
    "EEE2": "mar",
    "EEE3": "mer",
    "EEE4": "gio",
    "EEE5": "ven",
    "EEE6": "sab",
    "EEEE0": "domenica",
    "EEEE1": "lunedì",
    "EEEE2": "martedì",
    "EEEE3": "mercoledì",
    "EEEE4": "giovedì",
    "EEEE5": "venerdì",
    "EEEE6": "sabato",
    "G-1": "a.E.V.",
    "G1": "E.V.",
    "MMM1": "gen",
    "MMM10": "ott",
    "MMM11": "nov",
    "MMM12": "dic",
    "MMM2": "feb",
    "MMM3": "mar",
    "MMM4": "apr",
    "MMM5": "mag",
    "MMM6": "giu",
    "MMM7": "lug",
    "MMM8": "ago",
    "MMM9": "set",
    "MMMM1": "gennaio",
    "MMMM10": "ottobre",
    "MMMM11": "novembre",
    "MMMM12": "dicembre",
    "MMMM2": "febbraio",
    "MMMM3": "marzo",
    "MMMM4": "aprile",
    "MMMM5": "maggio",
    "MMMM6": "giugno",
    "MMMM7": "luglio",
    "MMMM8": "agosto",
    "MMMM9": "settembre",
    "N1": "g",
    "N10": "o",
    "N11": "n",
    "N12": "d",
    "N2": "f",
    "N3": "m",
    "N4": "a",
    "N5": "m",
    "N6": "g",
    "N7": "l",
    "N8": "a",
    "N9": "s",
    "NN1": "ge",
    "NN10": "ot",
    "NN11": "no",
    "NN12": "di",
    "NN2": "fe",
    "NN3": "ma",
    "NN4": "ap",
    "NN5": "ma",
    "NN6": "gi",
    "NN7": "lu",
    "NN8": "ag",
    "NN9": "se",
    "durationLongDays": "one#{num} giorno|#{num} giorni",
    "durationMediumHours": "one#{num}h|#{num}h",
    "durationMediumMillis": "one#{num}ms|#{num}ms",
    "durationMediumWeeks": "one#{num}sett.|#{num}sett.",
    "durationMediumYears": "one#{num}anno|#{num}anni",
    "durationShortMillis": "one#{num}ms|#{num}ms",
    "durationShortMinutes": "one#{num}min|#{num}min",
    "durationShortMonths": "one#{num} mese|#{num} mesi",
    "finalSeparatorFull": " e ",
    "finalSeparatorLong": " e ",
    "finalSeparatorMedium": " e ",
    "finalSeparatorShort": " ",
    "separatorMedium": ", "
}
ilib.data.localeinfo_it_IT = {
    "clock": "24",
    "locale": "it-IT"
}
ilib.data.localeinfo_und_IT = {
    "clock": "24",
    "currency": "EUR",
    "firstDayOfWeek": 1,
    "locale": "IT",
    "region.name": "Italy",
    "timezone": "Europe/Rome"
}

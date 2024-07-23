ilib.data.plurals_fr = {
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
        "eq": [
            "i",
            [
                0,
                1
            ]
        ]
    }
}
ilib.data.localeinfo_fr = {
    "delimiter": {
        "alternateQuotationEnd": "»",
        "alternateQuotationStart": "«",
        "quotationEnd": "»",
        "quotationStart": "«"
    },
    "language.name": "French",
    "locale": "fr",
    "numfmt": {
        "currencyFormats": {
            "common": "{n} {s}",
            "commonNegative": "-{n} {s}"
        },
        "decimalChar": ",",
        "groupChar": " ",
        "negativepctFmt": "-{n} %",
        "pctFmt": "{n} %"
    },
    "scripts": [
        "Latn",
        "Dupl"
    ]
}
ilib.data.localeinfo_und_BE = {
    "clock": "24",
    "currency": "EUR",
    "firstDayOfWeek": 1,
    "locale": "BE",
    "region.name": "Belgium",
    "timezone": "Europe/Brussels"
}
ilib.data.dateformats_fr = {
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
                "s": "E dd/MM/yyyy"
            },
            "dmy": {
                "l": "d MMMM yyyy",
                "m": "d MMM yyyy",
                "s": "dd/MM/yyyy"
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
                "s": "MM/yyyy"
            },
            "y": {
                "s": "yyyy"
            }
        },
        "order": {
            "f": "{date} 'à' {time}",
            "l": "{date} 'à' {time}",
            "m": "{date}, {time}",
            "s": "{date} {time}"
        },
        "range": {
            "c00": {
                "f": "{sd} {sm} {sy} à {st} – {et}",
                "l": "{sd} {sm} {sy} à {st} – {et}",
                "m": "{sd} {sm} {sy}, {st} – {et}"
            },
            "c01": {
                "f": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "l": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}"
            },
            "c02": {
                "f": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "l": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}"
            },
            "c03": {
                "f": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "l": "{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}",
                "m": "{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}"
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
ilib.data.dateformats_fr_BE = {
    "gregorian": {
        "date": {
            "d": {
                "s": "d"
            },
            "dm": {
                "s": "d/MM"
            },
            "dmw": {
                "s": "E d/MM"
            },
            "dmwy": {
                "s": "E d/MM/yy"
            },
            "dmy": {
                "s": "d/MM/yy"
            },
            "dw": {
                "s": "E d"
            },
            "my": {
                "s": "MM/yy"
            },
            "y": {
                "s": "yy"
            }
        }
    }
}
ilib.data.sysres_fr = {
    "#in {num}d": "one#dans {num} j|#dans {num} j",
    "#in {num}h": "one#dans {num} h|#dans {num} h",
    "#in {num}mi": "one#dans {num} min|#dans {num} min",
    "#in {num}mo": "one#dans {num} m.|#dans {num} m.",
    "#in {num}s": "one#dans {num} s|#dans {num} s",
    "#in {num}w": "one#dans {num} sem.|#dans {num} sem.",
    "#in {num}y": "one#dans {num} a|#dans {num} a",
    "#{num} ms": "one#{num} ms|#{num} ms",
    "#{num}d": "one#{num}j|#{num}j",
    "#{num}d ago": "one#il y a {num} j|#il y a {num} j",
    "#{num}h": "one#{num}h|#{num}h",
    "#{num}h ago": "one#il y a {num} h|#il y a {num} h",
    "#{num}mi ago": "one#il y a {num} min|#il y a {num} min",
    "#{num}mo ago": "one#il y a {num} m.|#il y a {num} m.",
    "#{num}s": "one#{num}s|#{num}s",
    "#{num}s ago": "one#il y a {num} s|#il y a {num} s",
    "#{num}w": "one#{num}sem.|#{num}sem.",
    "#{num}w ago": "one#il y a {num} sem.|#il y a {num} sem.",
    "#{num}y": "one#{num}a|#{num}a",
    "#{num}y ago": "one#il y a {num} a|#il y a {num} a",
    "1#1 day ago|#{num} days ago": "one#il y a {num} jour|#il y a {num} jours",
    "1#1 day|#{num} days": "one#{num} jour|#{num} jours",
    "1#1 dy ago|#{num} dys ago": "one#il y a {num} jour|#il y a {num} jours",
    "1#1 dy|#{num} dys": "one#{num}j|#{num}j",
    "1#1 hour ago|#{num} hours ago": "one#il y a {num} heure|#il y a {num} heures",
    "1#1 hour|#{num} hours": "one#{num} heure|#{num} heures",
    "1#1 hr ago|#{num} hrs ago": "one#il y a {num} heure|#il y a {num} heures",
    "1#1 hr|#{num} hrs": "one#{num} h|#{num} h",
    "1#1 millisecond|#{num} milliseconds": "one#{num} milliseconde|#{num} millisecondes",
    "1#1 min ago|#{num} min ago": "one#il y a {num} minute|#il y a {num} minutes",
    "1#1 minute ago|#{num} minutes ago": "one#il y a {num} minute|#il y a {num} minutes",
    "1#1 minute|#{num} minutes": "one#{num} minute|#{num} minutes",
    "1#1 min|#{num} min": "one#{num} min|#{num} min",
    "1#1 mi|#{num} min": "one#{num}min|#{num}min",
    "1#1 mon ago|#{num} mons ago": "one#il y a {num} mois|#il y a {num} mois",
    "1#1 month ago|#{num} months ago": "one#il y a {num} mois|#il y a {num} mois",
    "1#1 month|#{num} months": "one#{num} mois|#{num} mois",
    "1#1 mon|#{num} mons": "one#{num} m.|#{num} m.",
    "1#1 mo|#{num} mos": "one#{num}m.|#{num}m.",
    "1#1 sec ago|#{num} sec ago": "one#il y a {num} seconde|#il y a {num} secondes",
    "1#1 second ago|#{num} seconds ago": "one#il y a {num} seconde|#il y a {num} secondes",
    "1#1 second|#{num} seconds": "one#{num} seconde|#{num} secondes",
    "1#1 sec|#{num} sec": "one#{num} s|#{num} s",
    "1#1 se|#{num} sec": "one#{num}s|#{num}s",
    "1#1 week ago|#{num} weeks ago": "one#il y a {num} semaine|#il y a {num} semaines",
    "1#1 week|#{num} weeks": "one#{num} semaine|#{num} semaines",
    "1#1 wk ago|#{num} wks ago": "one#il y a {num} semaine|#il y a {num} semaines",
    "1#1 wk|#{num} wks": "one#{num} sem.|#{num} sem.",
    "1#1 year ago|#{num} years ago": "one#il y a {num} an|#il y a {num} ans",
    "1#1 year|#{num} years": "one#{num} an|#{num} ans",
    "1#1 yr ago|#{num} yrs ago": "one#il y a {num} an|#il y a {num} ans",
    "1#1 yr|#{num} yrs": "one#{num} an|#{num} ans",
    "1#in 1 day|#in {num} days": "one#dans {num} jour|#dans {num} jours",
    "1#in 1 dy|#in {num} dys": "one#dans {num} jour|#dans {num} jours",
    "1#in 1 hour|#in {num} hours": "one#dans {num} heure|#dans {num} heures",
    "1#in 1 hr|#in {num} hrs": "one#dans {num} heure|#dans {num} heures",
    "1#in 1 minute|#in {num} minutes": "one#dans {num} minute|#dans {num} minutes",
    "1#in 1 min|#in {num} min": "one#dans {num} minute|#dans {num} minutes",
    "1#in 1 month|#in {num} months": "one#dans {num} mois|#dans {num} mois",
    "1#in 1 mon|#in {num} mons": "one#dans {num} mois|#dans {num} mois",
    "1#in 1 second|#in {num} seconds": "one#dans {num} seconde|#dans {num} secondes",
    "1#in 1 sec|#in {num} sec": "one#dans {num} seconde|#dans {num} secondes",
    "1#in 1 week|#in {num} weeks": "one#dans {num} semaine|#dans {num} semaines",
    "1#in 1 wk|#in {num} wks": "one#dans {num} semaine|#dans {num} semaines",
    "1#in 1 year|#in {num} years": "one#dans {num} an|#dans {num} ans",
    "1#in 1 yr|#in {num} yrs": "one#dans {num} an|#dans {num} ans",
    "B0": "minuit",
    "B1": "du matin",
    "B2": "AM",
    "B3": "du matin",
    "B4": "midi",
    "B5": "de l’après-midi",
    "B6": "PM",
    "B7": "du soir",
    "E0": "D",
    "E1": "L",
    "E2": "M",
    "E3": "M",
    "E4": "J",
    "E5": "V",
    "EE0": "di",
    "EE1": "lu",
    "EE2": "ma",
    "EE3": "me",
    "EE4": "je",
    "EE5": "ve",
    "EE6": "sa",
    "EEE0": "dim.",
    "EEE1": "lun.",
    "EEE2": "mar.",
    "EEE3": "mer.",
    "EEE4": "jeu.",
    "EEE5": "ven.",
    "EEE6": "sam.",
    "EEEE0": "dimanche",
    "EEEE1": "lundi",
    "EEEE2": "mardi",
    "EEEE3": "mercredi",
    "EEEE4": "jeudi",
    "EEEE5": "vendredi",
    "EEEE6": "samedi",
    "G-1": "AEC",
    "G1": "EC",
    "MMM1": "janv.",
    "MMM10": "oct.",
    "MMM11": "nov.",
    "MMM12": "déc.",
    "MMM2": "févr.",
    "MMM3": "mars",
    "MMM4": "avr.",
    "MMM5": "mai",
    "MMM6": "juin",
    "MMM7": "juil.",
    "MMM8": "août",
    "MMM9": "sept.",
    "MMMM1": "janvier",
    "MMMM10": "octobre",
    "MMMM11": "novembre",
    "MMMM12": "décembre",
    "MMMM2": "février",
    "MMMM3": "mars",
    "MMMM4": "avril",
    "MMMM5": "mai",
    "MMMM6": "juin",
    "MMMM7": "juillet",
    "MMMM8": "août",
    "MMMM9": "septembre",
    "N1": "j",
    "N10": "o",
    "N11": "n",
    "N12": "d",
    "N2": "f",
    "N3": "m",
    "N4": "a",
    "N5": "m",
    "N6": "j",
    "N7": "j",
    "N8": "a",
    "N9": "s",
    "NN1": "ja",
    "NN10": "oc",
    "NN11": "no",
    "NN12": "dé",
    "NN2": "fé",
    "NN3": "ma",
    "NN4": "av",
    "NN5": "ma",
    "NN6": "ju",
    "NN7": "ju",
    "NN8": "ao",
    "NN9": "se",
    "durationLongDays": "one#{num} j|#{num} j",
    "durationMediumHours": "one#{num}h|#{num}h",
    "durationMediumMillis": "one#{num}ms|#{num}ms",
    "durationMediumWeeks": "one#{num}sem.|#{num}sem.",
    "durationMediumYears": "one#{num}a|#{num}a",
    "durationShortMillis": "one#{num}ms|#{num}ms",
    "durationShortMinutes": "one#{num}min|#{num}min",
    "durationShortMonths": "one#{num}m.|#{num}m.",
    "finalSeparatorFull": " et ",
    "finalSeparatorLong": " et ",
    "finalSeparatorMedium": " et ",
    "finalSeparatorShort": " ",
    "separatorMedium": ", "
}
ilib.data.localeinfo_fr_CA = {
    "clock": "24",
    "delimiter": {
        "alternateQuotationEnd": "“",
        "alternateQuotationStart": "”"
    },
    "locale": "fr-CA",
    "numfmt": {
        "groupChar": " "
    }
}
ilib.data.localeinfo_und_CA = {
    "clock": "12",
    "currency": "CAD",
    "firstDayOfWeek": 0,
    "locale": "CA",
    "paperSizes": {
        "regular": "8x11"
    },
    "region.name": "Canada",
    "timezone": "America/Toronto"
}
ilib.data.dateformats_fr_CA = {
    "gregorian": {
        "date": {
            "dm": {
                "s": "MM-dd"
            },
            "dmw": {
                "s": "E MM-dd"
            },
            "dmwy": {
                "s": "E yyyy-MM-dd"
            },
            "dmy": {
                "s": "yyyy-MM-dd"
            },
            "my": {
                "s": "yyyy-MM"
            }
        },
        "range": {
            "c00": {
                "s": "{sy}-{sm}-{sd} {st} – {et}"
            },
            "c01": {
                "s": "{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}"
            },
            "c02": {
                "s": "{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}"
            },
            "c03": {
                "s": "{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}"
            },
            "c10": {
                "s": "{sy}-{sm}-{sd} – {ed}"
            },
            "c11": {
                "s": "{sy}-{sm}-{sd} – {ey}-{em}-{ed}"
            },
            "c12": {
                "s": "{sy}-{sm}-{sd} – {ey}-{em}-{ed}"
            },
            "c20": {
                "s": "{sy}-{sm} – {ey}-{em}"
            }
        },
        "time": {
            "12": {
                "ah": "h 'h' a",
                "ahm": "hh 'h' mm a",
                "ahms": "hh 'h' mm 'min' ss 's' a",
                "ahmsz": "hh 'h' mm 'min' ss 's' a z",
                "ahmz": "hh 'h' mm a z",
                "h": "hh",
                "hm": "hh 'h' mm",
                "hms": "hh 'h' mm 'min' ss 's'",
                "hmsz": "hh 'h' mm 'min' ss 's' z",
                "hmz": "hh 'h' mm z",
                "ms": "mm 'min' ss"
            },
            "24": {
                "ahm": "HH 'h' mm",
                "ahms": "HH 'h' mm 'min' ss 's'",
                "ahmsz": "HH 'h' mm 'min' ss 's' z",
                "ahmz": "HH 'h' mm z",
                "hm": "HH 'h' mm",
                "hms": "HH 'h' mm 'min' ss 's'",
                "hmsz": "HH 'h' mm 'min' ss 's' z",
                "hmz": "HH 'h' mm z",
                "ms": "mm 'min' ss"
            }
        }
    }
}
ilib.data.sysres_fr_CA = {
    "#{num} ms": "one#{num} ms|#{num} ms",
    "#{num}w": "one#{num}sem|#{num}sem",
    "1#1 day|#{num} days": "one#{num} jour|#{num} jours",
    "1#1 hour|#{num} hours": "one#{num} heure|#{num} heures",
    "1#1 hr|#{num} hrs": "one#{num} h|#{num} h",
    "1#1 millisecond|#{num} milliseconds": "one#{num} milliseconde|#{num} millisecondes",
    "1#1 min|#{num} min": "one#{num} min|#{num} min",
    "1#1 mi|#{num} min": "one#{num}m|#{num}m",
    "1#1 month|#{num} months": "one#{num} mois|#{num} mois",
    "1#1 mon|#{num} mons": "one#{num} m.|#{num} m.",
    "1#1 mo|#{num} mos": "one#{num}m|#{num}m",
    "1#1 second|#{num} seconds": "one#{num} seconde|#{num} secondes",
    "1#1 sec|#{num} sec": "one#{num} s|#{num} s",
    "1#1 week|#{num} weeks": "one#{num} semaine|#{num} semaines",
    "1#1 wk|#{num} wks": "one#{num} sem.|#{num} sem.",
    "1#1 yr|#{num} yrs": "one#{num} an|#{num} ans",
    "B2": "a.m.",
    "B6": "p.m.",
    "MMM7": "juill.",
    "a0": "a.m.",
    "a1": "p.m.",
    "durationLongDays": "one#{num} j|#{num} j",
    "durationMediumWeeks": "one#{num}sem|#{num}sem",
    "durationShortMinutes": "one#{num}m|#{num}m",
    "durationShortMonths": "one#{num}m|#{num}m"
}
ilib.data.localeinfo_fr_CH = {
    "delimiter": {
        "alternateQuotationEnd": "›",
        "alternateQuotationStart": "‹"
    },
    "locale": "fr-CH",
    "numfmt": {
        "negativepctFmt": "-{n}%",
        "pctFmt": "{n}%"
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
ilib.data.dateformats_fr_CH = {
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
            },
            "y": {
                "s": "yy"
            }
        },
        "range": {
            "c00": {
                "s": "{sd}.{sm}.{sy} {st} – {et}"
            },
            "c01": {
                "s": "{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}"
            },
            "c02": {
                "s": "{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}"
            },
            "c03": {
                "s": "{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}"
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
ilib.data.localeinfo_und_FR = {
    "clock": "24",
    "currency": "EUR",
    "firstDayOfWeek": 1,
    "locale": "FR",
    "region.name": "France",
    "timezone": "Europe/Paris"
}
ilib.data.localeinfo_fr_LU = {
    "locale": "fr-LU",
    "numfmt": {
        "groupChar": "."
    }
}
ilib.data.localeinfo_und_LU = {
    "clock": "24",
    "currency": "EUR",
    "firstDayOfWeek": 1,
    "locale": "LU",
    "region.name": "Luxembourg",
    "timezone": "Europe/Luxembourg"
}
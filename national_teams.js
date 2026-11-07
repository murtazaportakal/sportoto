// Exact aliases only. National teams have a separate namespace from clubs.
const countries = [
 ['FRA','Fransa','France'],['TUR','Türkiye','Turkiye','Turkey','Türki̇ye'],['BUL','Bulgaristan','Bulgaria'],
 ['ISL','İzlanda','Iceland'],['LIE','Lihtenştayn','Liechtenstein'],['AZE','Azerbaycan','Azerbaijan'],
 ['LUX','Lüksemburg','Luxembourg'],['EST','Estonya','Estonia'],['SVK','Slovakya','Slovakia'],
 ['FRO','Faroe Adaları','Faroe Islands'],['GEO','Gürcistan','Georgia'],['HUN','Macaristan','Hungary'],
 ['NOR','Norveç','Norway'],['WAL','Galler','Wales'],['POR','Portekiz','Portugal'],['DEN','Danimarka','Denmark'],
 ['BEL','Belçika','Belgium'],['ITA','İtalya','Italy'],['CRO','Hırvatistan','Croatia'],['CZE','Çekya','Czechia','Czech Republic'],
 ['ESP','İspanya','Spain'],['ENG','İngiltere','England'],['GER','Almanya','Germany'],['NED','Hollanda','Netherlands'],
 ['MKD','Kuzey Makedonya Cumhuriyeti','Kuzey Makedonya','North Macedonia','FYR Macedonia'],['SVN','Slovenya','Slovenia'],
 ['GRE','Yunanistan','Greece'],['SRB','Sırbistan','Serbia'],['SUI','İsviçre','Switzerland'],['SCO','İskoçya','Scotland'],
 ['ALB','Arnavutluk','Albania'],['AND','Andorra'],['ARM','Ermenistan','Armenia'],['AUT','Avusturya','Austria'],
 ['BLR','Belarus','Beyaz Rusya'],['BIH','Bosna Hersek','Bosnia-Herzegovina','Bosnia and Herzegovina'],
 ['CYP','Kıbrıs Rum Kesimi','Cyprus'],['FIN','Finlandiya','Finland'],['GIB','Cebelitarık','Gibraltar'],
 ['IRL','İrlanda','Republic of Ireland','Ireland'],['ISR','İsrail','Israel'],['KAZ','Kazakistan','Kazakhstan'],
 ['KOS','Kosova','Kosovo'],['LVA','Letonya','Latvia'],['LTU','Litvanya','Lithuania'],['MLT','Malta'],
 ['MDA','Moldova'],['MNE','Karadağ','Montenegro'],['NIR','Kuzey İrlanda','Northern Ireland'],
 ['POL','Polonya','Poland'],['ROU','Romanya','Romania'],['SMR','San Marino'],['SWE','İsveç','Sweden'],['UKR','Ukrayna','Ukraine']
];
const normalize = value => String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0131/g,'i').replace(/\s+/g,' ').trim();
const aliases=new Map(countries.flatMap(([code,...names])=>names.map(name=>[normalize(name),'NAT_'+code])));
function nationalCode(name){return aliases.get(normalize(name))||null;}
module.exports={nationalCode,countries};

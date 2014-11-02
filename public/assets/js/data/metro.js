var locations = [
	['5 CANILLEJAS', -3.608164961766647, 40.44942144215434, 'metro'],
	['2 AVENIDA DE GUADALAJARA', -3.6120708332680076, 40.42239172554295, 'metro'],
	['12 LEGANES CENTRAL', -3.771544569800793, 40.32897722527568, 'metro'],
	['6 ARGANZUELA-PLANETARIO', -3.688641470416205, 40.39309596001727, 'metro'],
	['7A SAN BLAS', -3.6154696111204454, 40.427986323585394, 'metro'],
	['ML3 CIUDAD DE LA IMAGEN', -3.783998919412633, 40.39708334989402, 'metro'],
	['9A,7A,6,4 AVENIDA DE AMERICA', -3.676648799468696, 40.438031843253, 'metro'],
	['7A ASCAO', -3.6410608433050236, 40.43019861136028, 'metro'],
	['3,2,1 SOL', -3.703263952716334, 40.4168729535334, 'metro'],
	['6 CONDE DE CASAL', -3.6704096277412406, 40.40696897461864, 'metro'],
	['1 VILLA DE VALLECAS', -3.621308020750173, 40.37959431567341, 'metro'],
	['9A ARTILLEROS', -3.641813751306118, 40.40522132054802, 'metro'],
	['7A BARRIO DE LA CONCEPCION', -3.6520047159864566, 40.43909238459439, 'metro'],
	['4 MANOTERAS', -3.6629051638999885, 40.476868155535264, 'metro'],
	['7A FRANCOS RODRIGUEZ', -3.7123923977382236, 40.45647472583504, 'metro'],
	['12 JUAN DE LA CIERVA', -3.7222501553757494, 40.311799686142244, 'metro'],
	['12 MOSTOLES CENTRAL', -3.863545439544514, 40.32849814576706, 'metro'],
	['ML2 BERNA', -3.791204405870805, 40.44486308857277, 'metro'],
	['4 VELAZQUEZ', -3.6829196062285985, 40.425030979720276, 'metro'],
	['9A,8 COLOMBIA', -3.6768324073355148, 40.45633706451893, 'metro'],
	['7A ALONSO CANO', -3.6992550842523215, 40.43837479022226, 'metro'],
	['10A AVIACION ESPA\xd1OLA', -3.7839254246933263, 40.38363332651039, 'metro'],
	['1 ATOCHA RENFE', -3.689379999079354, 40.4065871509325, 'metro'],
	['2 SEVILLA', -3.699256783373693, 40.41805041634745, 'metro'],
	['3 SAN FERMIN-ORCASUR', -3.694177844478536, 40.36999055068376, 'metro'],
	['9B RIVAS VACIAMADRID', -3.520602745225861, 40.32836977288053, 'metro'],
	['9B,9A PUERTA DE ARGANDA', -3.5959828631938597, 40.40131344602211, 'metro'],
	['4 SERRANO', -3.686637037145088, 40.42543238545867, 'metro'],
	['ML3 VENTORRO DEL CANO', -3.838120020545176, 40.39419920761245, 'metro'],
	['3 PALOS DE LA FRONTERA', -3.6942347314494355, 40.403071595618144, 'metro'],
	['ML3 CANTABRIA', -3.8643981145298136, 40.39528502663989, 'metro'],
	['4 SAN LORENZO', -3.639582355296153, 40.474468050879565, 'metro'],
	['9A,10A,1 PLAZA DE CASTILLA', -3.689182346052143, 40.46689468480269, 'metro'],
	['ML4 BULEVAR SUR', -3.7723663991203362, 40.234726214904676, 'metro'],
	['ML1 FUENTE DE LA MORA', -3.6632546867013684, 40.48481204955866, 'metro'],
	['ML3 CIUDAD DEL CINE', -3.795575774769704, 40.394544805059674, 'metro'],
	['10B MANUEL DE FALLA', -3.6468833919727643, 40.55048065335891, 'metro'],
	['1 VALDECARROS', -3.593169841297621, 40.360066094786674, 'metro'],
	['4 ESPERANZA', -3.64582062640135, 40.45944241498234, 'metro'],
	['12 CASA DEL RELOJ', -3.75942842266733, 40.32659790646591, 'metro'],
	['R,5,2 OPERA', -3.7094295122270493, 40.41808754185801, 'metro'],
	['ML3 MONTEPRINCIPE', -3.8358094207577422, 40.39791864382318, 'metro'],
	['10B RONDA DE LA COMUNICACION', -3.662778265647421, 40.515535221645685, 'metro'],
	['12 HOSPITAL SEVERO OCHOA', -3.7679784363645195, 40.32176659998117, 'metro'],
	['10B LA MORALEJA', -3.6355710093918283, 40.53194913028556, 'metro'],
	['1 BAMBU', -3.6763772815477234, 40.47680811803293, 'metro'],
	['12 SAN NICASIO', -3.7758763425167072, 40.3361555690427, 'metro'],
	['1 LA GAVIA', -3.61347110873574, 40.37018557467113, 'metro'],
	['ML4 PARLA CENTRO - BULEVAR NORTE', -3.769543246100782, 40.240790258831254, 'metro'],
	['ML1,4,1 PINAR DE CHAMARTIN', -3.6668070489569375, 40.480133980071855, 'metro'],
	['5 TORRE ARIAS', -3.6170047347741927, 40.44374395830959, 'metro'],
	['6 MENDEZ ALVARO', -3.6781422516936098, 40.39537424655571, 'metro'],
	['3 CIUDAD DE LOS ANGELES', -3.693635296503236, 40.35957925666222, 'metro'],
	['10B MARQUES DE LA VALDAVIA', -3.6373926197882787, 40.54102004433109, 'metro'],
	['ML4 TIERRA SUR', -3.7567490296953077, 40.22254068214155, 'metro'],
	['ML1 MARIA TUDOR', -3.658891891081716, 40.497161236769024, 'metro'],
	['5 ALAMEDA DE OSUNA', -3.5875298560645428, 40.457789434241064, 'metro'],
	['10A,1 TRIBUNAL', -3.7011092950034614, 40.426183365064986, 'metro'],
	['ML4 AVENIDA SISTEMA SOLAR', -3.760719745495282, 40.223424593837095, 'metro'],
	['4 PARQUE DE SANTA MARIA', -3.6452466668251837, 40.47711223138429, 'metro'],
	['ML3 NUEVO MUNDO', -3.885766992370484, 40.40563680956141, 'metro'],
	['9A HERRERA ORIA', -3.707522399369353, 40.48465763315051, 'metro'],
	['8 PINAR DEL REY', -3.6486745798490077, 40.46799398048667, 'metro'],
	['7B COSLADA CENTRAL', -3.5611932328329394, 40.42373097112736, 'metro'],
	['9B RIVAS URBANIZACIONES', -3.5472814834020223, 40.36676993738754, 'metro'],
	['ML4 ESTRELLA POLAR SUR', -3.7538308042750295, 40.23071315867877, 'metro'],
	['9A VINATEROS', -3.6527397719478243, 40.41024127184873, 'metro'],
	['1 RIOS ROSAS', -3.7015911244457245, 40.44191919420917, 'metro'],
	['ML4,10B REYES CATOLICOS', -3.623403338680384, 40.55037550528663, 'metro'],
	['5 SUANZES', -3.626847452003059, 40.44084415226601, 'metro'],
	['4 HORTALEZA', -3.6525796426092887, 40.47536836577263, 'metro'],
	['ML1 BLASCO IBA\xd1EZ', -3.6558486700744695, 40.493674071528204, 'metro'],
	['4 LISTA', -3.6754163781556333, 40.42916516037262, 'metro'],
	['1 TIRSO DE MOLINA', -3.7046664800540814, 40.412341872810984, 'metro'],
	['7A,2 CANAL', -3.7043372264788177, 40.438407000568155, 'metro'],
	['11 PAN BENDITO', -3.7341716840943375, 40.37586074559566, 'metro'],
	['6,4,3 ARG\xdcELLES', -3.7159750373526372, 40.43065983011964, 'metro'],
	['5 URGEL', -3.7236156360295825, 40.39335085291281, 'metro'],
	['7A SIMANCAS', -3.6257259881240316, 40.42798532116267, 'metro'],
	['7A,5 PUEBLO NUEVO', -3.6428344086472495, 40.43569328401266, 'metro'],
	['ML2 COLONIA DE LOS ANGELES', -3.784411008124424, 40.40720671426678, 'metro'],
	['9A VALDEBERNARDO', -3.6215666819315797, 40.40004360175914, 'metro'],
	['9A SAN CIPRIANO', -3.602404009705041, 40.403811726230394, 'metro'],
	['1 ANTON MARTIN', -3.6993757471110227, 40.412464088048, 'metro'],
	['4 COLON', -3.69101038799368, 40.42541533737568, 'metro'],
	['ML2 SOMOSAGUAS CENTRO', -3.7987441577370675, 40.4193608465657, 'metro'],
	['ML2 POZUELO OESTE', -3.804481628576368, 40.42306880990105, 'metro'],
	['4 AVENIDA DE LA PAZ', -3.6611898411345964, 40.45353571190591, 'metro'],
	['5 EL CAPRICHO', -3.594013972226353, 40.4534680040023, 'metro'],
	['ML3 PUERTA DE BOADILLA', -3.903791080679537, 40.407767585274755, 'metro'],
	['ML3 COCHERAS', -3.8038633974900193, 40.39687488124612, 'metro'],
	['12 PARQUE LISBOA', -3.82120109523051, 40.34968065645224, 'metro'],
	['6 METROPOLITANO', -3.719432375373863, 40.446431150760525, 'metro'],
	['6 OPA\xd1EL', -3.723134267624081, 40.386903364839974, 'metro'],
	['8 AEROPUERTO T4', -3.593254090068511, 40.4917601055005, 'metro'],
	['ML4 VENUS SUR', -3.7552217357815336, 40.22683008536884, 'metro'],
	['6,3 LEGAZPI', -3.695125556785026, 40.39114723645119, 'metro'],
	['ML3 PRADO DEL ESPINO', -3.8477451086794083, 40.395011924620896, 'metro'],
	['7A PE\xd1AGRANDE', -3.7158303635103915, 40.47592185478177, 'metro'],
	['4 ARTURO SORIA', -3.6561881277156516, 40.45582547206542, 'metro'],
	['4,1 BILBAO', -3.7021883013519576, 40.42905069586836, 'metro'],
	['4 ALFONSO XIII', -3.6679186579899956, 40.448244779709626, 'metro'],
	['5 EL CARMEN', -3.6575823705144552, 40.431889605558915, 'metro'],
	['1 LAS SUERTES', -3.5995338929148137, 40.363222521329554, 'metro'],
	['12 FUENLABRADA CENTRAL', -3.798909375207058, 40.28267346196854, 'metro'],
	['2 QUEVEDO', -3.704342027104579, 40.433217779751516, 'metro'],
	['1 IGLESIA', -3.6989834588230206, 40.434916971729535, 'metro'],
	['5,3 CALLAO', -3.7056671508823, 40.42012859170676, 'metro'],
	['4 CANILLAS', -3.635600584738448, 40.46380536350123, 'metro'],
	['12 ALCORCON CENTRAL', -3.8317801756667986, 40.35008253979741, 'metro'],
	['3 VILLAVERDE ALTO', -3.711990998942114, 40.341224196811964, 'metro'],
	['ML4 IGLESIA CENTRO', -3.7705898176961847, 40.23770211661923, 'metro'],
	['7A ANTONIO MACHADO', -3.7177043711182876, 40.47021657551088, 'metro'],
	['5 CHUECA', -3.6976215707393187, 40.422925175776896, 'metro'],
	['3 ALMENDRALES', -3.6979745196405482, 40.384066948658585, 'metro'],
	['10A CUATRO VIENTOS', -3.791525485827724, 40.377698631654795, 'metro'],
	['7A,10A GREGORIO MARA\xd1ON', -3.6912759030333055, 40.437530887144206, 'metro'],
	['7A AVDA. DE LA ILUSTRACION', -3.7184112647167886, 40.48009500002723, 'metro'],
	['10A SANTIAGO BERNABEU', -3.690382074089246, 40.45158126575142, 'metro'],
	['9A ESTRELLA', -3.661791538169238, 40.4114691025468, 'metro'],
	['2 NOVICIADO', -3.7074256850643508, 40.42483857792767, 'metro'],
	['1 CONGOSTO', -3.6188505889390794, 40.37238217005932, 'metro'],
	['6,5,4 DIEGO DE LEON', -3.6749645070082146, 40.43467231561307, 'metro'],
	['12 LORANCA', -3.837691913936109, 40.296804866126685, 'metro'],
	['11 LA PESETA', -3.7569060298081776, 40.36421856882589, 'metro'],
	['3 HOSPITAL 12 DE OCTUBRE', -3.6958551103632624, 40.375025573938096, 'metro'],
	['10A FUENCARRAL', -3.6928338450754943, 40.495079868005874, 'metro'],
	['ML1 PALAS DE REY', -3.665074706989077, 40.505432048198514, 'metro'],
	['6 REPUBLICA ARGENTINA', -3.684064551057651, 40.44379000259904, 'metro'],
	['12 MANUELA MALASA\xd1A', -3.86402699670702, 40.30902580533031, 'metro'],
	['3,10A PLAZA DE ESPA\xd1A', -3.7097047167296044, 40.42408586956348, 'metro'],
	['5 PIRAMIDES', -3.711388079281904, 40.40259795902546, 'metro'],
	['5 RUBEN DARIO', -3.6895451317420838, 40.43315383183627, 'metro'],
	['6 LUCERO', -3.7453431392210117, 40.40509578552482, 'metro'],
	['ML4 POLIGONO INDUSTRIAL CIUDAD DE PARLA', -3.750450952340516, 40.23866331388882, 'metro'],
	['7A GARCIA NOBLEJAS', -3.6333103721205955, 40.42842150201045, 'metro'],
	['5 LA LATINA', -3.7081675838043617, 40.411275431706784, 'metro'],
	['1 VALDEACEDERAS', -3.6950664719440036, 40.46441801935108, 'metro'],
	['12 CONSERVATORIO', -3.7457717238868806, 40.29324463564865, 'metro'],
	['ML1 ALVAREZ DE VILLAAMIL', -3.6513669165166895, 40.48904179501775, 'metro'],
	['6 CARPETANA', -3.7410000091062043, 40.39270021015217, 'metro'],
	['12 PARQUE OESTE', -3.849343417868749, 40.34589179085773, 'metro'],
	['10B,10A TRES OLIVOS', -3.6952099548681736, 40.5012006729737, 'metro'],
	['9B LA POVEDA', -3.4774526391285843, 40.319015132480565, 'metro'],
	['10A BEGO\xd1A', -3.685851905815314, 40.48040991774922, 'metro'],
	['10B BAUNATAL', -3.635133831173698, 40.5544196503943, 'metro'],
	['4,2 GOYA', -3.6759123812326258, 40.42454062624169, 'metro'],
	['6,3 MONCLOA', -3.719452180080623, 40.43501662344703, 'metro'],
	['12 PARQUE EUROPA', -3.806326592469152, 40.28517161548538, 'metro'],
	['ML2 BELGICA', -3.807553818113316, 40.43057890865037, 'metro'],
	['9A CRUZ DEL RAYO', -3.678220656951523, 40.4442658780325, 'metro'],
	['4,2 SAN BERNARDO', -3.7055818211365636, 40.430012017632926, 'metro'],
	['ML3 JOSE ISBERT', -3.7899399393523345, 40.39525011444458, 'metro'],
	['11 LA FORTUNA', -3.7778337856292503, 40.35795351445639, 'metro'],
	['ML4 ISABEL II', -3.765084714008081, 40.231134822484066, 'metro'],
	['12 PARQUE DE LOS ESTADOS', -3.786982314234991, 40.28683637867598, 'metro'],
	['ML3,ML2,10A COLONIA JARDIN', -3.774618022017095, 40.396975403947295, 'metro'],
	['8 CAMPO DE LAS NACIONES', -3.616210056882399, 40.463892345701076, 'metro'],
	['ML2 AVENIDA DE EUROPA', -3.7930611009107316, 40.43930083727808, 'metro'],
	['12 GETAFE CENTRAL', -3.734033825917272, 40.30992367706035, 'metro'],
	['1 ESTRECHO', -3.7030287548801475, 40.4542798096964, 'metro'],
	['9A VICALVARO', -3.6088656365690928, 40.404210317117695, 'metro'],
	['12 EL CARRASCAL', -3.7401861399196927, 40.33663271563503, 'metro'],
	['5 ALUCHE', -3.7608096588055564, 40.38562557538846, 'metro'],
	['6 CIUDAD UNIVERSITARIA', -3.7267950750797425, 40.44355626984068, 'metro'],
	['2 ALSACIA', -3.623514407657664, 40.418285507185765, 'metro'],
	['ML4 PLAZA DE TOROS', -3.7575650854384035, 40.24409461492802, 'metro'],
	['5 ACACIAS', -3.706652236625238, 40.403870250308834, 'metro'],
	['7B BARRIO DEL PUERTO', -3.5691987965666954, 40.42249362802511, 'metro'],
	['9B ARGANDA DEL REY', -3.4475260692511793, 40.3036658577812, 'metro'],
	['3 VILLAVERDE BAJO CRUCE', -3.692651337574659, 40.35089133294532, 'metro'],
	['12,10A PUERTA DEL SUR', -3.8121162393379575, 40.345240249069484, 'metro'],
	['6,5 OPORTO', -3.7313276815409306, 40.388464460996076, 'metro'],
	['11 ABRANTES', -3.7279111645272467, 40.38082829675677, 'metro'],
	['6 LAGUNA', -3.7443003669171224, 40.399228600963696, 'metro'],
	['10A,1 CHAMARTIN', -3.6825932834610664, 40.47202385189198, 'metro'],
	['9A PAVONES', -3.635122750979477, 40.40051048036962, 'metro'],
	['12 HOSPITAL DE FUENLABRADA', -3.816427072532433, 40.285749445263065, 'metro'],
	['12 UNIVERSIDAD REY JUAN CARLOS', -3.8721885540074115, 40.33511805874597, 'metro'],
	['8,6,10A NUEVOS MINISTERIOS', -3.6924180916734253, 40.446578103714806, 'metro'],
	['5,1 GRAN VIA', -3.7018113693076806, 40.42000791727693, 'metro'],
	['7B LA RAMBLA', -3.5479311684597126, 40.42514594640941, 'metro'],
	['1 BUENOS AIRES', -3.6539143451038445, 40.39155880753551, 'metro'],
	['7A,6 GUZMAN EL BUENO', -3.712297363431821, 40.446358219515204, 'metro'],
	['ML1 VIRGEN DEL CORTIJO', -3.6609904907567925, 40.48733851789946, 'metro'],
	['2 RETIRO', -3.686254794252373, 40.420299503037164, 'metro'],
	['7A LACOMA', -3.7230534541332743, 40.48501195658861, 'metro'],
	['5 EMPALME', -3.7653543649538515, 40.390568589226135, 'metro'],
	['7A CARTAGENA', -3.672157759763834, 40.439337323784756, 'metro'],
	['5,4,10A ALONSO MARTINEZ', -3.696441603597934, 40.42852689821103, 'metro'],
	['7A VALDEZARZA', -3.715983800961631, 40.46482187020762, 'metro'],
	['9A VENTILLA', -3.6958849055022736, 40.469431089926225, 'metro'],
	['12 LOS ESPARTALES', -3.718203887331696, 40.32422152310413, 'metro'],
	['2 BANCO DE ESPA\xd1A', -3.6949665000028693, 40.41922043347424, 'metro'],
	['9A IBIZA', -3.6785854635642874, 40.41838980895368, 'metro'],
	['ML2 CAMPUS DE SOMOSAGUAS', -3.79525513054887, 40.43337587213629, 'metro'],
	['ML3 INFANTE DON LUIS', -3.8974145751993343, 40.405943385382606, 'metro'],
	['7B SAN FERNANDO', -3.535417769337362, 40.424411776218186, 'metro'],
	['9A DUQUE DE PASTRANA', -3.6791750861644044, 40.46762058495208, 'metro'],
	['1 NUEVA NUMANCIA', -3.664145356963981, 40.39553656988687, 'metro'],
	['ML1 ANTONIO SAURA', -3.6535386316482197, 40.485452981863574, 'metro'],
	['3 VENTURA RODRIGUEZ', -3.71341429173834, 40.427081061632386, 'metro'],
	['6,2 MANUEL BECERRA', -3.66926173279445, 40.427903652767455, 'metro'],
	['ML4 LA BALLENA', -3.7663570457305875, 40.24598273320263, 'metro'],
	['4 PROSPERIDAD', -3.6748238340971913, 40.444186658327624, 'metro'],
	['5 VISTA ALEGRE', -3.7398266508291504, 40.388842832017616, 'metro'],
	['5 EUGENIA DE MONTIJO', -3.7512174782001138, 40.38438197265499, 'metro'],
	['5 QUINTANA', -3.647365171210328, 40.43357790585855, 'metro'],
	['6 PUERTA DEL ANGEL', -3.7272419612096934, 40.413895775966544, 'metro'],
	['12 JULIAN BESTEIRO', -3.7526680306408298, 40.33474132707299, 'metro'],
	['10A LAGO', -3.7356377227797393, 40.41641023588192, 'metro'],
	['1 ALVARADO', -3.7033178125635438, 40.45033211451537, 'metro'],
	['ML3 FERIAL DE BOADILLA', -3.879390574756271, 40.40195575759452, 'metro'],
	['9A CONCHA ESPINA', -3.6773847353781695, 40.45144194562, 'metro'],
	['10A JOAQUIN VILUMBRALES', -3.807202284716327, 40.34984226936704, 'metro'],
	['5,2 VENTAS', -3.6636676949825366, 40.43088185592945, 'metro'],
	['ML4 JULIO ROMERO DE TORRES', -3.7623288846721823, 40.245342651195344, 'metro'],
	['8,4 MAR DE CRISTAL', -3.6383312595599535, 40.46942093123173, 'metro'],
	['3 DELICIAS', -3.694202156550914, 40.399900598863226, 'metro'],
	['3 SAN CRISTOBAL', -3.6931914383216857, 40.341536594687376, 'metro'],
	['1 MIGUEL HERNANDEZ', -3.6395112303825465, 40.387314991857345, 'metro'],
	['1 SIERRA DE GUADALUPE', -3.6247245215857298, 40.38216152701732, 'metro'],
	['1 PUENTE DE VALLECAS', -3.669061708657388, 40.39819293417765, 'metro'],
	['7A PARQUE DE LAS AVENIDAS', -3.6629736889308107, 40.439444413228046, 'metro'],
	['3 EMBAJADORES', -3.7026819979669257, 40.40511967929685, 'metro'],
	['2 LA ELIPA', -3.6505285024367073, 40.426614180295644, 'metro'],
	['5,10A CASA DE CAMPO', -3.761019286756125, 40.40320086887072, 'metro'],
	['6,11 PLAZA ELIPTICA', -3.718255725562412, 40.38460041732617, 'metro'],
	['10B MONTECARMELO', -3.695759283071379, 40.505251377338965, 'metro'],
	['5 CARABANCHEL', -3.744881666184908, 40.3878193811018, 'metro'],
	['9A,5 NU\xd1EZ DE BALBOA', -3.67972995771758, 40.43255430040624, 'metro'],
	['ML2 ESTACION DE ARAVACA', -3.7859147953752994, 40.4483225811108, 'metro'],
	['ML4 JAIME I SUR', -3.752405550534627, 40.23469553863154, 'metro'],
	['1 TETUAN', -3.698258347036883, 40.46055194922595, 'metro'],
	['6 ALTO DE EXTREMADURA', -3.738937778190442, 40.40992070260811, 'metro'],
	['10A CUZCO', -3.6898623851105183, 40.45842219033371, 'metro'],
	['7A LAS MUSAS', -3.6078871348400607, 40.43298141874559, 'metro'],
	['5 PUERTA DE TOLEDO', -3.7110576393307793, 40.40703244851561, 'metro'],
	['12 EL BERCIAL', -3.7296384824724718, 40.329068971088006, 'metro'],
	['ML2 PRADO DE LA VEGA', -3.781219298249051, 40.40229137248812, 'metro'],
	['ML3 BOADILLA CENTRO', -3.8800471903912226, 40.40713093634462, 'metro'],
	['5 CIUDAD LINEAL', -3.6381640947720557, 40.438043489632165, 'metro'],
	['12 ALONSO DE MENDOZA', -3.736641509233372, 40.30080780607303, 'metro'],
	['6 USERA', -3.706901012764277, 40.387093833022185, 'metro'],
	['11 CARABANCHEL ALTO', -3.751915969142416, 40.37197192088226, 'metro'],
	['ML4 PARQUE PARLA ESTE', -3.761477955649932, 40.22815850866993, 'metro'],
	['9A BARRIO DEL PILAR', -3.703170088449048, 40.476882449874864, 'metro'],
	['7B,7A ESTADIO OLIMPICO', -3.6001566507331892, 40.433391179933935, 'metro'],
	['12 ARROYO CULEBRO', -3.756828055465867, 40.288740302237066, 'metro'],
	['ML2 DOS CASTILLAS', -3.801623377956172, 40.43253008873702, 'metro'],
	['8 AEROPUERTO T1 T2 T3', -3.5695410720446614, 40.468645233506194, 'metro'],
	['7B HOSPITAL DEL HENARES', -3.5345387045961227, 40.41760497755307, 'metro'],
	['7A PITIS', -3.7258995124576386, 40.495102127210394, 'metro'],
	['9B RIVAS FUTURA', -3.5247997631686228, 40.341342100625035, 'metro'],
	['10A BATAN', -3.753116589250486, 40.407856234953144, 'metro'],
	['12 HOSPITAL DE MOSTOLES', -3.8747150351383035, 40.31652217091693, 'metro'],
	['10B LA GRANJA', -3.658599537222745, 40.52759499700287, 'metro'],
	['7B JARAMA', -3.5255040558533493, 40.42293472815007, 'metro'],
	['ML2 PRADO DEL REY', -3.787489583039874, 40.41046507293738, 'metro'],
	['9A PIO XII', -3.6758023487125158, 40.46300073130351, 'metro'],
	['11 SAN FRANCISCO', -3.739106228508547, 40.37359505652825, 'metro'],
	['1 ATOCHA', -3.69249088895368, 40.40884785306371, 'metro'],
	['9A MIRASIERRA', -3.7158651954710034, 40.491417008731375, 'metro'],
	['5 MARQUES DE VADILLO', -3.7159638187452613, 40.397353467438805, 'metro'],
	['5 CAMPAMENTO', -3.7681359812057247, 40.39480242011578, 'metro'],
	['12 PRADILLO', -3.8648944963859337, 40.32167716657807, 'metro'],
	['3 LAVAPIES', -3.700914061323349, 40.408508807234305, 'metro'],
	['2 LAS ROSAS', -3.603312660169485, 40.42374407461544, 'metro'],
	['1 PORTAZGO', -3.658685216624016, 40.392657866069065, 'metro'],
	['2 LA ALMUDENA', -3.639147589169747, 40.42361458294594, 'metro'],
	['9A,2 PRINCIPE DE VERGARA', -3.6801282615934703, 40.42293931962459, 'metro'],
	['9A,6 SAINZ DE BARANDA', -3.6695234608035796, 40.41506424707161, 'metro'],
	["6 O'DONNELL", -3.6685990565440196, 40.422889451815756, 'metro'],
	['7A ISLAS FILIPINAS', -3.7137413598671962, 40.43906103202648, 'metro'],
	['2 SANTO DOMINGO', -3.7079663482786454, 40.421312736951315, 'metro'],
	['12 EL CASAR', -3.7098585856755197, 40.318624275975935, 'metro'],
	['ML2 SOMOSAGUAS SUR', -3.7925323964149658, 40.41535854915256, 'metro'],
	['ML3 SIGLO XXI', -3.892642623606615, 40.40512447171537, 'metro'],
	['ML1,10B LAS TABLAS', -3.6694467924419247, 40.508325691313956, 'metro'],
	['R,6,10A PRINCIPE PIO', -3.7203286715946082, 40.421029166133174, 'metro'],
	['7B HENARES', -3.5271847602105475, 40.417764870720255, 'metro'],
	['1 MENENDEZ PELAYO', -3.680990950831421, 40.40444766175837, 'metro'],
	['ML3 RETAMARES', -3.8167531226788824, 40.398712483353385, 'metro'],
	['6,1 PACIFICO', -3.675137368939774, 40.40125674145831, 'metro'],
	['8 BARAJAS', -3.5825311306716694, 40.475769670406116, 'metro'],
	['6,2,1 CUATRO CAMINOS', -3.703978482140975, 40.44696773829664, 'metro'],
	['10B HOSPITAL INFANTA SOFIA', -3.611465763726152, 40.55976346809929, 'metro']
]
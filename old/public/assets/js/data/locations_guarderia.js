var locations = [
['ESCUELA INFANTIL NUESTRA SE\xc3\x91ORA DE LA PROVIDENCIA', -3.6438995637091, 40.44826018438408, 'fa-child'],
['CENTRO INFANTIL LOS ANGELES', -3.6385773708306144, 40.452059167522066, 'fa-child'],
['CENTRO INFANTIL LUNA DE PAPEL', -3.722310296278847, 40.41030075341116, 'fa-child'],
['ESCUELA INFANTIL  MI PRIMER COLE', -3.649868172000594, 40.43173811003584, 'fa-child'],
['ESCUELA INFANTIL ARGANZUELA 4 EL BARBERILLO DE LAVAPIES', -3.6888365986159584, 40.39550970289936, 'fa-child'],
['ESCUELA INFANTIL / AYUNTAMIENTO DE MADRID', -3.633141831488832, 40.46475265673247, 'fa-child'],
['ESCUELA INFANTIL MERLIN', -3.602706698347438, 40.40685424708051, 'fa-child'],
['BALOO ESCUELA INFANTIL', -3.6377612715625873, 40.45441529377216, 'fa-child'],
['ESCUELA INFANTIL PAYDOS', -3.6774865113541226, 40.409863978289515, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL LOS LAPAZARES', -3.6610889495746894, 40.39338255321489, 'fa-child'],
['ESCUELA INFANTIL ARCOIRIS', -3.651965607278992, 40.40991340428409, 'fa-child'],
['ESCUELA INFANTIL', -3.5909649972506537, 40.45300499836368, 'fa-child'],
['ESCUELA INFANTIL CONTUMAMI', -3.7072573814361816, 40.47977399692909, 'fa-child'],
['ESCUELA INFANTIL MUNDO MAGICO, HOTEL', -3.590428760381598, 40.40612110184529, 'fa-child'],
['SANCALO GUARDERIA INFANTIL', -3.6884186654085274, 40.486974449033845, 'fa-child'],
['ESCUELA INFANTIL LOS MADRO\xc3\x91OS', -3.6760546073575817, 40.35058117253681, 'fa-child'],
['ESCUELA INFANTIL  ZALEO', -3.639200123129485, 40.38437624756151, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL HIEDRA', -3.6180518916765387, 40.42472840476208, 'fa-child'],
['CADI ESCUELA INFANTIL', -3.7055514379426486, 40.507739473208055, 'fa-child'],
['ESCUELA INFANTIL LATINA VIII', -3.7668047567305236, 40.37359698802695, 'fa-child'],
['CENTRO DE RECREO JUEGOS INFANTILES BULLE BULLE', -3.618979271237314, 40.39936091630459, 'fa-child'],
['ESCUELA INFANTIL EL TREBOL', -3.6532002043426486, 40.38487297450483, 'fa-child'],
['CENTRO INFANTIL DON MARIO', -3.667247117593723, 40.39680378835532, 'fa-child'],
['ESCUELA INFANTIL ALFREDO L\xc3\x93PEZ', -3.6290558047404775, 40.4225065220413, 'fa-child'],
['GUARDERIA  TEDDY', -3.677898802381552, 40.40420476955716, 'fa-child'],
['ESCUELA INFANTIL  EL DUENDE', -3.7033143394558534, 40.42860044754252, 'fa-child'],
['CENTRO INFANTIL ANDAL', -3.6714889808396354, 40.41042239201964, 'fa-child'],
['ESCUELA INFANTIL TREN DE PISCIS', -3.652347425957206, 40.41294829695085, 'fa-child'],
['ESCUELA INFANTIL', -3.8139449291389047, 40.47110665474444, 'fa-child'],
['ESCUELA INFANTIL CUENTA CONMIGO', -3.6905928365927507, 40.3950082323851, 'fa-child'],
['ESCUELA INFANTIL EL SOL', -3.6688594363279536, 40.4627605949555, 'fa-child'],
['ESCUELA INFANTIL TRAVESURAS', -3.786310351190349, 40.46315225960066, 'fa-child'],
['GUARDERIA INFANTIL JUEGOS', -3.7082139502505793, 40.38774042123236, 'fa-child'],
['CENTRO PRIVADO DE EDUCACION INFANTIL CONCERTADO SAN PEDRO', -3.684989356112424, 40.35232862973706, 'fa-child'],
['ESCUELA INFANTIL', -3.6544070010088134, 40.497374393624966, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LOS DELFINES', -3.656109691750453, 40.375262427921804, 'fa-child'],
['GUARDERIA \xc3\x91ECOS SL', -3.6432888127425724, 40.429665981591285, 'fa-child'],
['ESCUELA INFANTIL LUNA MAGICA', -3.744783943951195, 40.403637784045046, 'fa-child'],
['CENTRO EDUCACION INFANTIL SAN ALONSO DE OROZCO', -3.7174140954635515, 40.44789731605586, 'fa-child'],
['ESCUELA INFANTIL LA COLINA', -3.5766986434155497, 40.47404236149274, 'fa-child'],
['ESCUELA INFANTIL NEMOMARLIN ARGANZUELA', -3.710386712670408, 40.4024450372035, 'fa-child'],
['ESCUELA INFANTIL DENENES 2', -3.638604693905876, 40.440941890894905, 'fa-child'],
['PEQUES ESCUELA INFANTIL', -3.616859235085564, 40.43629905698619, 'fa-child'],
['ESCUELA INFANTIL VALLEHERMOSO', -3.7078045114175313, 40.43710899705958, 'fa-child'],
['ESCUELA INFANTIL SUS PEQUE\xc3\x91OS PASOS', -3.6585789381822496, 40.464648180265755, 'fa-child'],
['ESCUELA INFANTIL EL SUR', -3.697505068562739, 40.35102452988661, 'fa-child'],
['ESCUELA INFANTIL ARCADIA III', -3.7808967241550775, 40.46201644648913, 'fa-child'],
['ESCUELA INFANTIL  GRUMETE MADRID', -3.6644919715320765, 40.473243944309104, 'fa-child'],
['GUARDERIA ESCUELA INFANTIL BAMBI', -3.7791796101699093, 40.39511855502258, 'fa-child'],
['ESCUELA INFANTIL LOS PEQUES', -3.7074435842342925, 40.457114327516386, 'fa-child'],
['ESCUELA INFANTIL NENUFAR', -3.603333123693347, 40.40915496348377, 'fa-child'],
['ESCUELA INFANTIL JESUS NI\xc3\x91O', -3.6393067141265325, 40.44031656815289, 'fa-child'],
['ESCUELA INFANTIL LA GUARDE', -3.6615310317677774, 40.48984839792169, 'fa-child'],
['GUARDERIA FLORA', -3.708511479791354, 40.35009842758776, 'fa-child'],
['GUARDERIA INFANTIL DE OCA A OCA', -3.7394689595309734, 40.3910700236425, 'fa-child'],
['GUARDERIA  LA CASA DE PAPEL', -3.6461651293119415, 40.44151168121331, 'fa-child'],
['ESCUELA INFANTIL PEQUE\xc3\x91INES 1', -3.713404501579963, 40.404188719181455, 'fa-child'],
['ESCUELA INFANTIL LA LUNA', -3.609552407207077, 40.38670617331201, 'fa-child'],
['GUARDERIA EL CARMEN -ALMARCHA CIRUJANO M TERESA', -3.711607500442626, 40.40993450668915, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL EL ALBA', -3.7124261169164567, 40.40346087370321, 'fa-child'],
['MONTEMAR ESCUELA INFANTIL', -3.69495712059501, 40.512730549720466, 'fa-child'],
['ESCUELA INFANTIL PIRUETAS', -3.6112094152344474, 40.42553289353876, 'fa-child'],
['ESCUELA INFANTIL JUAN  DE VALDEZ', -3.6084763068743726, 40.42823444111427, 'fa-child'],
['ESCUELA INFANTIL FISBIS', -3.7018558784760343, 40.394779604226024, 'fa-child'],
['ESCUELA INFANTIL CHULAP@S / PARQUE DE BOLAS', -3.5872188480229608, 40.366631003466495, 'fa-child'],
['GUARDERIA LOS PEKES', -3.6977164064986936, 40.45356201919634, 'fa-child'],
['ESCUELA INFANTIL ARLEQUIN', -3.7509192458553895, 40.39629671402996, 'fa-child'],
['LOS DUENDES CENTRO INFANTIL', -3.6165051035272047, 40.4499985413409, 'fa-child'],
['ESCUELA INFANTIL SAN SIMON Y SAN JUDAS', -3.703127375679107, 40.366473040385806, 'fa-child'],
['ESCUELA INFANTIL  CONDE DE ELDA', -3.7108392518044235, 40.47654195498303, 'fa-child'],
['ESCUELA INFANTIL NUBES', -3.7071227589738864, 40.38652834987237, 'fa-child'],
['ESCUELA INFANTIL ZAZUAR III', -3.6042680507730203, 40.385387404873384, 'fa-child'],
['GUARDERIA LONDRES II', -3.6682595868814976, 40.43332254593348, 'fa-child'],
['CENTRO INFANTIL LA JIRAFITA', -3.5893761418626493, 40.453605813609926, 'fa-child'],
['ESCUELA INFANTIL OLAVIDE', -3.700988621933156, 40.43446097673258, 'fa-child'],
['ESCUELA INFANTIL GLOBOS', -3.654863866066722, 40.41321001892934, 'fa-child'],
['ESCUELA INFANTIL CAPERUCITA', -3.7216473578611473, 40.46701323451474, 'fa-child'],
['ESCUELA INFANTIL ALICIA', -3.718675517204108, 40.43309300675985, 'fa-child'],
['ESCUELA INFANTIL ESCOLANDIA', -3.689799114501356, 40.502143827440406, 'fa-child'],
['CENTRO INFANTIL PICOLOS', -3.75673543085463, 40.3948892390793, 'fa-child'],
['ESCUELA INFANTIL IRIS', -3.6428230076650285, 40.462860396888296, 'fa-child'],
['CENTRO INFANTIL MARIA AUXILIADORA', -3.692726365005018, 40.361211415081485, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL CRI-CRI', -3.646805228049226, 40.40480721523462, 'fa-child'],
['ESCUELA INFANTIL ANDAL', -3.5871365471405094, 40.45784415082496, 'fa-child'],
['MINICOLE CENTRO DE EDUCACION INFANTIL', -3.780795457880279, 40.461786591620175, 'fa-child'],
['ESCUELA INFANTIL EDUKA', -3.72547617397187, 40.48235060083824, 'fa-child'],
['CENTRO INFANTIL Y PRIMARIA CEIP', -3.7179417443995106, 40.370013505394006, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL EL CARMEN', -3.6592249495601417, 40.48158199001992, 'fa-child'],
['GUARDERIA PIPOS', -3.6987265136742975, 40.40091166315826, 'fa-child'],
['ESCUELA INFANTIL SAN MIGUEL', -3.7488291608401023, 40.40619148675685, 'fa-child'],
['EL MONIN ESCUELA DE EDUCACION INFANTIL', -3.7264592426619836, 40.482768746596896, 'fa-child'],
['ESCUELA INFANTIL EL PEQUE\xc3\x91O KOALA', -3.6141560680319094, 40.40648931156116, 'fa-child'],
['PASO A PASO ESCUELA INFANTIL', -3.7044473629575387, 40.39986928655205, 'fa-child'],
['CENTRO INFANTIL GARABATOS Y OCHO PATOS', -3.7023592168511503, 40.403371020700064, 'fa-child'],
['ESCUELA INFANTIL EXTREMADURA', -3.6052902715056057, 40.43986400412195, 'fa-child'],
['ESCUELA INFANTIL LETRAS SL', -3.6688105706391445, 40.43291043989594, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL  LOS JUNCOS', -3.604509668816913, 40.410931084766965, 'fa-child'],
['ESCUELA INFANTIL ALARIA', -3.782181285320064, 40.46254397341279, 'fa-child'],
['ESCUELA INFANTIL LOS CHAVALITOS', -3.747156021904287, 40.4048691521619, 'fa-child'],
['CENTRO DE OCIO Y RECREO INFANTIL', -3.6462987017217214, 40.43809876663943, 'fa-child'],
['ESCUELA INFANTIL', -3.6013082733105297, 40.42626571873557, 'fa-child'],
['ESCUELA INFANTIL', -3.6444518414784373, 40.48091891660428, 'fa-child'],
['ESCUELA INFANTIL  LOS PITUFOS', -3.7002607281296704, 40.47705067302987, 'fa-child'],
['ESCUELA INFANTIL  EL BELEN', -3.6958105667204566, 40.49725882881052, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL CINCO ESTRELLAS', -3.613962694144216, 40.442158276360715, 'fa-child'],
['ESCUELA INFANTIL OSITO DE PAPEL', -3.7822024826199243, 40.46219536390909, 'fa-child'],
['CENTRO EDUCACI\xc3\x93N INFANTIL ACUARELA', -3.6982518769937327, 40.47913713739587, 'fa-child'],
['ESCUELA INFANTIL TOBOGAN II', -3.7076634392969776, 40.39456690890864, 'fa-child'],
['ESCUELA INFANTIL GRAN VIA', -3.647747736706222, 40.46856423920074, 'fa-child'],
['CENTRO DE RECREO INFANTIL', -3.6071887610164, 40.45388650394741, 'fa-child'],
['ESCUELA INFANTIL SANTA CATALINA', -3.775192894090054, 40.460275212465305, 'fa-child'],
['ESCUELA INFANTIL DICIEMBRE', -3.568118117707486, 40.44499438753498, 'fa-child'],
['ESCUELA INFANTIL JAIZKIBEL', -3.644251301126957, 40.441649480189, 'fa-child'],
['ESCUELA INFANTIL ALBA', -3.73908123588547, 40.40938061723472, 'fa-child'],
['ESCUELA INFANTIL CREATIVA LA GAVIA', -3.604665751828988, 40.37269344450773, 'fa-child'],
['ESCUELA INFANTIL EL ABETO', -3.6142010277409513, 40.443469896025505, 'fa-child'],
['NIRO ESCUELA INFANTIL', -3.680565018003779, 40.409683195042845, 'fa-child'],
['ESCUELA INFANTIL BALOO', -3.6914233787696187, 40.389669260743, 'fa-child'],
['GUARDERIA EL JARDIN', -3.757858856455558, 40.398968749274836, 'fa-child'],
['ESCUELA INFANTIL LOS PITUFOS', -3.6741386873176354, 40.343160339827726, 'fa-child'],
['ESCUELA INFANTIL   TREBOL', -3.700225070902351, 40.47787682960762, 'fa-child'],
['CENTRO RECREATIVO INFANTIL', -3.64472281536248, 40.43899369396178, 'fa-child'],
['ESCUELA INFANTIL LOS TITERES', -3.735624310011948, 40.3782126405949, 'fa-child'],
['ESCUELA INFANTIL COQUITO DE LUZ', -3.6557310444981947, 40.38082266001803, 'fa-child'],
['ESCUELA INFANTIL AMADEO VIVES', -3.7540307848896304, 40.39898152413509, 'fa-child'],
['ESCUELA INFANTIL BAMBI', -3.713055654433287, 40.348964719109446, 'fa-child'],
['ESCUELA INFANTIL GARABATOS Y OCHO PATOS', -3.706860422463974, 40.40518008769927, 'fa-child'],
['ESCUELA INFANTIL VIRGEN DE BEGO\xc3\x91A', -3.6873045953238335, 40.48889583940517, 'fa-child'],
['EDUCACION INFANTIL SANDY', -3.6514740748699603, 40.4713810336879, 'fa-child'],
['WEST GARDEN ESCUELA INFANTIL EL JARDIN DEL OESTE', -3.674506775164164, 40.49921935066675, 'fa-child'],
['ESCUELA INFANTIL EL SOL', -3.6690390927462175, 40.46279811365973, 'fa-child'],
['CENTRO INFANTIL MIMITOS', -3.742179909612153, 40.37607839118123, 'fa-child'],
['EPI ESCUELA INFANTIL', -3.6995995201789, 40.40265648564297, 'fa-child'],
['ESCUELA INFANTIL', -3.634558799677146, 40.383415131622776, 'fa-child'],
['GUARDERIA CADI', -3.7151202275432227, 40.48882040372919, 'fa-child'],
['ESCUELA INFANTIL JARDIIMAR', -3.7178727609660975, 40.408498832998184, 'fa-child'],
['ESCUELA INFANTIL VIRGEN DE BEGO\xc3\x91A', -3.6875702845681406, 40.48885750257588, 'fa-child'],
['ESCUELA INFANTIL PISPAS', -3.739915708455234, 40.410278166164176, 'fa-child'],
['HAPPYSCHOOL ESCUELA INFANTIL', -3.6959109282268554, 40.48082647020046, 'fa-child'],
['ESCUELA INFANTIL - NANOS', -3.716624985055931, 40.47685730489831, 'fa-child'],
['ESCUELA INFANTIL', -3.728958306070955, 40.38524680638804, 'fa-child'],
['CENTRO EDUCACION INFANTIL SOLMIKI II', -3.6083424812260256, 40.43419796390716, 'fa-child'],
['ESCUELA INFANTIL BAMI', -3.6557560012856394, 40.432173782880646, 'fa-child'],
['ESCUELA INFANTIL PITUFOS', -3.6065964652213736, 40.39907356392043, 'fa-child'],
['ESCUELA INFANTIL', -3.6821312605257903, 40.45179531341746, 'fa-child'],
['ESCUELA INFANTIL  EL ENCINAR', -3.6508139998573763, 40.45414317204173, 'fa-child'],
['ESCUELA INFANTIL CHULY', -3.705051525590446, 40.40115660348324, 'fa-child'],
['ESCUELA INFANTIL NUESTRA SE\xc3\x91ORA DEL ROSARIO', -3.707307106336448, 40.35211672982101, 'fa-child'],
['LOS NIDOS EDUCACION INFANTIL', -3.6696390437095294, 40.48982936039249, 'fa-child'],
['GUARDERIA MU\xc3\x91ECOS', -3.6742510672424746, 40.41378291290877, 'fa-child'],
['ESCUELA INFANTIL LA CIGUE\xc3\x91A', -3.7126699666591207, 40.3824965117053, 'fa-child'],
['ESCUELA INFANTIL PEQUES', -3.7119956002591024, 40.347302215313455, 'fa-child'],
['ESCUELA INFANTIL LUIS MAPETONGA PELUCHE', -3.6104288669193267, 40.42086113527243, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LAS MARAVILLAS', -3.769333595907871, 40.38419441900007, 'fa-child'],
['ESCUELA INFANTIL DINA CONDADO-2', -3.667571713605194, 40.48258758707441, 'fa-child'],
['ESCUELA INFANTIL KIND OF KIDS', -3.6534591242538226, 40.44561644974459, 'fa-child'],
['ESCUELA INFANTIL LA PALOMA', -3.710354363670202, 40.41268474719169, 'fa-child'],
['ESCUELA INFANTIL LA ABEJA MAYA', -3.7216399841018397, 40.479888871333515, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL ARCE', -3.6552170474899524, 40.416071908185714, 'fa-child'],
['ESCUELA INFANTIL ROCIO JURADO', -3.6657804310510635, 40.484243674987695, 'fa-child'],
['ESCUELA INFANTIL LOS PINOS', -3.6619402482390893, 40.42502905724609, 'fa-child'],
['ESCUELA INFANTIL DINA CONDADO', -3.6676633919585893, 40.48275471408962, 'fa-child'],
['ESCUELA INFANTIL', -3.6289486471103025, 40.480640359894906, 'fa-child'],
['ESCUELA INFANTIL KIDSCO BALANCE', -3.688644906554317, 40.39147522596962, 'fa-child'],
['EDUCACION INFANTIL MECANOGRAFIA INGLES', -3.690655688907832, 40.37460829120323, 'fa-child'],
['ESCUELA INFANTIL EL ELEFANTE', -3.661401367356292, 40.471902668293964, 'fa-child'],
['GUARDERIA EL BOSQUECITO', -3.6999354765002317, 40.352454103077925, 'fa-child'],
['ESCUELA INFANTIL RABEL', -3.6304948160274293, 40.469582068582326, 'fa-child'],
['ESCUELA INFANTIL MOLINOS DE VIENTO', -3.608833269436706, 40.40518006294089, 'fa-child'],
['ESCUELA INFANTIL EL BOSQUE ENCANTADO', -3.694621858344156, 40.38418310458738, 'fa-child'],
['ESCUELA INFANTIL MARGOT', -3.7155156161726683, 40.470973315208205, 'fa-child'],
['ESCUELA INFANTIL SAN FERM\xc3\x8dN', -3.6914537135531376, 40.375352990336644, 'fa-child'],
['ESCUELA INFANTIL SAN GABRIEL', -3.721912783788289, 40.466894100195944, 'fa-child'],
['ADELA ABRINES CENTRO DE EDUCACION INFANTIL', -3.77807141258116, 40.38178972351285, 'fa-child'],
['ESCUELA INFANTIL SUECIA GARDEN', -3.607226992838402, 40.42424576369395, 'fa-child'],
['ESCUELA INFANTIL EL JARDIN DE LARIN', -3.5837300938234544, 40.47514075498229, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL LAS AZALEAS', -3.6340960185770155, 40.42794441864889, 'fa-child'],
['ESCUELA INFANTIL', -3.587420102433206, 40.36828198962118, 'fa-child'],
['ESCUELA INFANTIL SANTA EUGENIA', -3.607125542799446, 40.38457395941279, 'fa-child'],
['SAGRADA FAMILIAESCUELA INFANTIL', -3.6557788789512946, 40.42494065626632, 'fa-child'],
['GUARDERIA  TOWER HOUSE.', -3.6706316238649492, 40.40971655303356, 'fa-child'],
['ESCUELA INFANTIL LOS CUENTOS', -3.67090099103636, 40.50201634957239, 'fa-child'],
['ESCUELA INFANTIL SANTA MARIA', -3.648295321814885, 40.43702893624234, 'fa-child'],
['GUARDERIA ANDAL II', -3.6711959743231493, 40.409543547532934, 'fa-child'],
['ESCUELA INFANTIL P\xc3\x9aBLICA GIGANTES Y CABEZUDOS', -3.658524790977946, 40.452435629373056, 'fa-child'],
['ESCUELA INFANTIL CARRICOCHE', -3.698149668796301, 40.372099750785985, 'fa-child'],
['ESCUELA INFANTIL NAZARET', -3.645958488165734, 40.39384716958604, 'fa-child'],
['ESCUELA INFANTIL', -3.764792191338445, 40.38234317913708, 'fa-child'],
['KIKA ESCUELA INFANTIL', -3.6860329417780777, 40.3926122930108, 'fa-child'],
['ESCUELA INFANTIL EL PATIO', -3.6332612414361214, 40.476963134207566, 'fa-child'],
['ESCUELA INFANTIL MIS BEBES', -3.705357040959979, 40.50618446202841, 'fa-child'],
['ESCUELA INFANTIL  JUNCOS', -3.659643272720522, 40.40233782174046, 'fa-child'],
['CENTRO INFANTIL PEQUE\xc3\x91INES', -3.7135181935722623, 40.40420810784364, 'fa-child'],
['ESCUELA INFANTIL  LA JIRAFA', -3.7343006755335773, 40.41022071994249, 'fa-child'],
['ESCUELA INFANTIL LOS PEKES', -3.6979301546085144, 40.453589827850756, 'fa-child'],
['ESCUELA INFANTIL CAMPANILLA', -3.7005213383233593, 40.454571898898934, 'fa-child'],
['ESCUELA INFANTIL TEO', -3.6934916510851337, 40.43625970769042, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL EL ARRULLO', -3.6239705344703292, 40.40794281197578, 'fa-child'],
['ESCUELA INFANTIL GARABATOS Y OCHO PATOS', -3.709029917116312, 40.4032825593008, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL ALDEA', -3.697471157711772, 40.336095119530825, 'fa-child'],
['ESCUELA INFANTIL BARAJAS 2 CORRALEJOS', -3.5911489269133288, 40.46621306620103, 'fa-child'],
['ESCUELA INFANTIL PELUCHINES', -3.6871198957801314, 40.49922234088337, 'fa-child'],
['ESCUELA INFANTIL AGUA DULCE', -3.707957366257381, 40.45579181676884, 'fa-child'],
['GUARDERIA COLORIN', -3.7504974892754293, 40.38853589063826, 'fa-child'],
['CENTRO INFANTIL LAS GAVIOTAS', -3.5833675289512024, 40.45394980710379, 'fa-child'],
['ESCUELA INFANTIL  LAS ACACIAS', -3.7145305705334355, 40.45860298272658, 'fa-child'],
['ESCUELA INFANTIL LOS SOBRINOS DEL CAPITAN GRANT', -3.610381044599488, 40.375444630635904, 'fa-child'],
['ESCUELA INFANTIL WALDORF DE ARAVACA', -3.7888986778949993, 40.46523118350155, 'fa-child'],
['ESCUELA INFANTIL  IMAGEN', -3.677045459912631, 40.40620356643056, 'fa-child'],
['CENTRO DE RECREO Y CUIDADO INFANTIL', -3.701155939688587, 40.505881834011305, 'fa-child'],
['ESCUELA INFANTIL MINICLUB', -3.670903409986567, 40.506002151094684, 'fa-child'],
['ESCOOL CENTRO INFANTIL', -3.6672271328610537, 40.404208735689075, 'fa-child'],
['GUARDERIA GARABATOS', -3.6857624784403114, 40.36037668888634, 'fa-child'],
['CENTRO INFANTIL LA VIRGEN NI\xc3\x91A', -3.6481514349497406, 40.45169425982764, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL CUCHITOS', -3.6752377139098975, 40.43687605804172, 'fa-child'],
['ESCUELA INFANTIL DINA', -3.735856818296041, 40.409826140309306, 'fa-child'],
['ESCUELA INFANTIL BORJA', -3.659641788212088, 40.37756344364154, 'fa-child'],
['ESCUELA INFANTIL GARABATOS', -3.7506024228035058, 40.40883981804524, 'fa-child'],
['ESCUELA INFANTIL DIABOLO', -3.6943674316283293, 40.40054566783705, 'fa-child'],
['GUARDER\xc3\x8dA INFANTIL', -3.6839978868958356, 40.39663582310901, 'fa-child'],
['ESCUELA INFANTIL EL ROCIO', -3.705283784330663, 40.35287188945028, 'fa-child'],
['ESCUELA INFANTIL', -3.6949049351218797, 40.45744975569346, 'fa-child'],
['ESCUELA INFANTIL TANIA NARDIN', -3.656211784199785, 40.39017931205048, 'fa-child'],
['ESCUELA INFANTIL EL JARDIN DE LAS DELICIAS', -3.686787747348981, 40.4011244545054, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL LA OLIVA', -3.7139243238029285, 40.36735465139607, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL LAZARO', -3.648309705209531, 40.43096469562517, 'fa-child'],
['ESCUELA INFANTIL BLANCANITOS 2', -3.7056559469677834, 40.40068336380237, 'fa-child'],
['ESCUELA INFANTIL FUENCARRAL-EL PARDO N\xc2\xba 6 LA CORTE DEL FARA\xc3\x93N', -3.7140856060029344, 40.47482186470919, 'fa-child'],
['ESCUELA INFANTIL CERVANTES BABY', -3.728854446385217, 40.386071431733946, 'fa-child'],
['ESCUELA INFANTIL EL PEQUE\xc3\x91O SOL', -3.764370232930403, 40.37793728618834, 'fa-child'],
['ESCUELA INFANTIL', -3.708461868471029, 40.43601163687005, 'fa-child'],
['CENTRO INFANTIL KANGURO VEN TE CUIDARE', -3.646767340718467, 40.47378691712115, 'fa-child'],
['ESCUELA INFANTIL NUESTRA SE\xc3\x91ORA DE LAS VICTORIAS', -3.6988227991360487, 40.465791689923954, 'fa-child'],
['ESCUELA INFANTIL TABATA', -3.7126503698817137, 40.473929197411906, 'fa-child'],
['GUARDERIA EL JUGLAR', -3.7131711413692896, 40.44557204336905, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LOS NOGALES', -3.719520567695271, 40.47505734537232, 'fa-child'],
['ESCUELA INFANTIL RIOMAR', -3.6613884325908277, 40.43725513096802, 'fa-child'],
['ESCUELA INFANTIL BOLBORETA', -3.741602444550879, 40.3896983329442, 'fa-child'],
['ESCUELA INFANTIL EL ZOFIO', -3.713439980468772, 40.384596647515025, 'fa-child'],
['ESCUELA INFANTIL EL ARRULLO', -3.623295801772472, 40.400377648167655, 'fa-child'],
['ESCUELA INFANTIL  ANDAL', -3.6727656855849666, 40.41010884235283, 'fa-child'],
['MASCERO  EDUCACION INFANTIL', -3.63182408500107, 40.48267799950107, 'fa-child'],
['ESCUELA INFANTIL TARABILLA', -3.630127876074961, 40.43500641056908, 'fa-child'],
['ESCUELA INFANTIL FANTASIA', -3.6506777181217336, 40.42220415150885, 'fa-child'],
['ESCUELA INFANTIL CIELO AZUL', -3.619935537509086, 40.40374123841315, 'fa-child'],
['ESCUELA INFANTIL', -3.7002589845173963, 40.41142398329731, 'fa-child'],
['ESCUELA INFANTIL AVIACION', -3.771013502986217, 40.37622911653156, 'fa-child'],
['ESCUELA INFANTIL LOS COMPA\xc3\x91EROS', -3.6350960314000846, 40.393638599269615, 'fa-child'],
['GUARDERIA LOS PITUFOS.', -3.6734712301813413, 40.41356556497709, 'fa-child'],
['ESCUELA INFANTIL CARACOL', -3.61709044844898, 40.43997468040431, 'fa-child'],
['CENTRO RECREO INFANTIL', -3.5936710902033826, 40.36109896324396, 'fa-child'],
['ESCUELA INFANTIL VIRGEN DE LA PAZ', -3.7733759825663524, 40.4673948122892, 'fa-child'],
['ESCUELA INFANTIL PARQUE DE HORTALEZA', -3.644140891465912, 40.475394190229004, 'fa-child'],
['CUQUITOS GUARDERIA', -3.659752170479977, 40.38770707002609, 'fa-child'],
['ESCUELA INFANTIL AEIOU GUARDERIA', -3.751876844166631, 40.39439732735471, 'fa-child'],
['ESCUELA INFANTIL ALBENIZ', -3.7508517554836587, 40.388905485223795, 'fa-child'],
['ESCUELA INFANTIL LOS GIRASOLES', -3.651192009366977, 40.40226068096426, 'fa-child'],
['ESCUELA INFANTIL RUIZ JIMENEZ', -3.6711413066061067, 40.436943245787866, 'fa-child'],
['ESCUELA INFANTIL DUMBO', -3.6341170090917245, 40.475882230595325, 'fa-child'],
['ESCUELA INFANTIL MAMA QUECA', -3.651780594211228, 40.46846967660634, 'fa-child'],
['GUARDERIA', -3.712292311690122, 40.44681448692946, 'fa-child'],
['CENTRO DE OCIO INFANTIL CHAMAQUITOS', -3.6449769944602854, 40.444542013513704, 'fa-child'],
['ESCUELA INFANTIL CINCO LOBITOS', -3.753977335520827, 40.3669282932127, 'fa-child'],
['ESCUELA INFANTIL LAGO COMO', -3.630744188472337, 40.408923904455285, 'fa-child'],
['EDUCACION INFANTIL PADRES CAPUCHINOS', -3.7018732319515677, 40.45273550456307, 'fa-child'],
['ESCUELA INFANTIL JARDIN INFANTIL', -3.692880689568085, 40.39558617195616, 'fa-child'],
['ESCUELA INFANTIL DON MELITON', -3.613811860708659, 40.442687456898575, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL ARAVACA (LAS VI\xc3\x91AS)', -3.7840473038792757, 40.46256952874207, 'fa-child'],
['ESCUELA INFANTIL SAN MARCOS', -3.711305535329396, 40.43501210258092, 'fa-child'],
['ESCUELA INFANTIL  GEPPETTO INFANTIL , S.L.', -3.6217126610149144, 40.396528026415226, 'fa-child'],
['ESCUELA INFANTIL OLAVIDE', -3.7000786505347234, 40.4340502743274, 'fa-child'],
['ESCUELA INFANTIL COLORS', -3.6847803278828173, 40.359824212236944, 'fa-child'],
['CENTRO RECREO INFANTIL', -3.6842778814149932, 40.35880708154185, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL VEO VEO', -3.6541582885918458, 40.44616537847436, 'fa-child'],
['ESCUELA INFANTIL SAN VICENTE DE PAUL', -3.724676032874428, 40.38724112561886, 'fa-child'],
['ESCUELA INFANTIL EL ALTAIR', -3.7674061759674626, 40.38004124976462, 'fa-child'],
['ESCUELA INFANTIL AMANECER', -3.599709747260426, 40.40392457851137, 'fa-child'],
['ESCUELA INFANTIL ALBAICIN', -3.7005023400372914, 40.37024712402231, 'fa-child'],
['GUARDERIA CEI CUARTEL GENERAL DEL EJERCITO DEL AIRE', -3.7183949261379237, 40.43557502151691, 'fa-child'],
['ESCUELA INFANTIL LA PALOMA', -3.615272414277512, 40.38407404725944, 'fa-child'],
['CHIQUITIN CENTRO INFANTIL', -3.7075434538041745, 40.40386103766913, 'fa-child'],
['ESCUELA INFANTIL BABILIN', -3.743744967653139, 40.4026596925534, 'fa-child'],
['ESCUELA INFANTIL SAN NICOLAS', -3.666874280809817, 40.42367925563694, 'fa-child'],
['CENTRO DE ATENCION INFANTIL', -3.7316890135760583, 40.38703254734978, 'fa-child'],
['ESCUELA INFANTIL  MARGAL', -3.659826096435687, 40.40223398501252, 'fa-child'],
['ESCUELA INFANTIL MUNICIPAL EL BOSQUE', -3.6902027724000566, 40.40581568177232, 'fa-child'],
['EDUCACION INFANTIL ZAZUAR II', -3.60451337899136, 40.381292917739955, 'fa-child'],
['ESCUELA INFANTIL ST. ALICE\xc2\xb4S', -3.7091026468031116, 40.436547888464126, 'fa-child'],
['ESCUELA INFANTIL LAPICES DE COLORES', -3.6364932073491967, 40.40993655109756, 'fa-child'],
['ESCUELA INFANTIL GOOFY', -3.7352524870745745, 40.39405999415531, 'fa-child'],
['ESCUELA INFANTIL \xc2\xbfDONDE ESTAN LAS LLAVES?', -3.6897983143917816, 40.39818507118375, 'fa-child'],
['ESCUELA INFANTIL QUECA', -3.6497156090846468, 40.47094480737094, 'fa-child'],
['ESCUELA INFANTIL  LA JARA', -3.7002827937907923, 40.386154024902744, 'fa-child'],
['ESCUELA INFANTIL TRAPITOS', -3.673467920755484, 40.34546960220851, 'fa-child'],
['KIDSCO ESCUELA INFANTIL', -3.8312921433453995, 40.47507701922225, 'fa-child'],
['ESCUELA INFANTIL EL PILAR', -3.6519317933294086, 40.43486019320851, 'fa-child'],
['ESCUELA INFANTIL EL VALLE', -3.7143618686322855, 40.44564739371518, 'fa-child'],
['ESCUELA INFANTIL EL LIRON', -3.64102008120396, 40.40338482643133, 'fa-child'],
['ESCUELA INFANTIL LA CASITA', -3.618236306351349, 40.41976315693713, 'fa-child'],
['ESCUELA INFANTIL INIA', -3.7494462071252705, 40.45889232158697, 'fa-child'],
['ESCUELA INFANTIL PELOCHO II', -3.6681360650140693, 40.51310279115322, 'fa-child'],
['GUARDERIA PEQUE\xc3\x91ILANDIA', -3.69801708938847, 40.35165478379201, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LA CARACOLA', -3.6834565874080067, 40.49019387454772, 'fa-child'],
['NEMOMARLIN ESCUELA INFANTIL', -3.7098413948318667, 40.43489614704304, 'fa-child'],
['GUARDERIA EL ARCO DE COLORES', -3.7083861404521756, 40.389398839864256, 'fa-child'],
['ESCUELA INFANTIL LA PRADERA', -3.717970860985792, 40.399141956860745, 'fa-child'],
['ESCUELA INFANTIL LAS LEANDRAS', -3.592564786714613, 40.44501904705534, 'fa-child'],
['CENTRO INFANTIL LOS MIRASOLES JARDIN DE INFANCIA N', -3.6830164569363775, 40.4679367054465, 'fa-child'],
['SAN JORGE CENTRO EDUCACION INFANTIL', -3.644770065060066, 40.44924524234052, 'fa-child'],
['GUARDERIA ROGER DE FLOR', -3.7313180087465905, 40.395669910405324, 'fa-child'],
['ESCUELA INFANTIL PRIVADA BETARIA', -3.690704715281336, 40.472280996092586, 'fa-child'],
['ESCUELA INFANTIL GRAZALEMA', -3.61699336770856, 40.375364225194275, 'fa-child'],
['ESCUELA INFANTIL DINO', -3.707509454662778, 40.344120234619176, 'fa-child'],
['ESCUELA INFANTIL CEI PARQUE', -3.749452778656988, 40.38084017581699, 'fa-child'],
['ESCUELA INFANTIL LALI', -3.683953249064385, 40.46799098546495, 'fa-child'],
['ESCUELA INFANTIL TOSCANA GARDEN', -3.6122296033428927, 40.42016404193908, 'fa-child'],
['ESCUELA INFANTIL ROSA', -3.6782492162003946, 40.46744018554258, 'fa-child'],
['ESCUELA INFANTIL DELIFILIUS', -3.657104778696789, 40.46104351658109, 'fa-child'],
['ESCUELA INFANTIL CARABANCHEL 8 LA PATRIA CHICA', -3.761685196192731, 40.36354324475966, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LOS ANGELES', -3.6996914911656438, 40.460296637035626, 'fa-child'],
['CENTRO INFANTIL PLIS PLAS', -3.7058056958059455, 40.38159698137333, 'fa-child'],
['ESCUELA INFANTIL  MI COLE', -3.635682065403647, 40.41189841456831, 'fa-child'],
['ESCUELA INFANTIL LAS NUBES', -3.6828965765019177, 40.40522770915139, 'fa-child'],
['ESCUELA INFANTIL EL DUENDE', -3.67581449645052, 40.34956571260007, 'fa-child'],
['GUARDERIA ANY', -3.772568854134898, 40.37761595447399, 'fa-child'],
['ESCUELA INFANTIL GUI\xc3\x91OL', -3.634371756298337, 40.40981019113259, 'fa-child'],
['ESCUELA INFANTIL TOBOGAN', -3.7084172470864156, 40.394436166059464, 'fa-child'],
['ESCUELA INFANTIL  SANTA CRISTINA', -3.6762034105180943, 40.467293524191994, 'fa-child'],
['ESCUELA INFANTIL CALASANZ', -3.7003106659708505, 40.37358931429614, 'fa-child'],
['ESCUELA INFANTIL LOS ANGELOTES', -3.6602677855988843, 40.45225064175248, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL DE GAIA', -3.6323729985452813, 40.40882716900015, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL SOLMIKI I', -3.6143763460457, 40.44177067241676, 'fa-child'],
['CENTRO DE DIA E INFANTIL  ROSALIA RENDU', -3.7031020860804045, 40.4134016027078, 'fa-child'],
['CENTRO INFANTIL ALICIA', -3.7176246914601263, 40.42983241509285, 'fa-child'],
['ESCUELA INFANTIL CUATRO PECAS', -3.716293311256222, 40.41399414737649, 'fa-child'],
['ESCUELA INFANTIL PUBLICA  PRADOLONGO', -3.707702981404075, 40.374052335601974, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL PETIRROJO', -3.642858895878744, 40.388957096659304, 'fa-child'],
['ESCUELA INFANTIL NUBES 2', -3.7170659259726535, 40.40051433753205, 'fa-child'],
['ESCUELA INFANTIL  LA ALMUDENA', -3.6319346429698625, 40.46820826351614, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL CANGURITO', -3.640128786276011, 40.447028423497315, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL NUESTRA SE\xc3\x91ORA DE LA CONSOLACION AGUSTINA', -3.649847858424347, 40.46597741384439, 'fa-child'],
['ESCUELA INFANTIL OLAVIDE AEIOU', -3.7009054325756994, 40.43772418550024, 'fa-child'],
['ESCUELA INFANTIL SOFIA GARDEN', -3.5994058840928913, 40.42651199526739, 'fa-child'],
['COLEGIO Y GUARDERIA SAN ALFONSO', -3.7009727767203007, 40.40875757270676, 'fa-child'],
['MIRIAM ESCUELA INFANTIL (LA CASA DEL R\xc3\x8dO)', -3.733416441875215, 40.431238986732204, 'fa-child'],
['CENTRO INFANTIL TEO', -3.693027708113166, 40.44069267170916, 'fa-child'],
['CENTRO INFANTIL LOS SOLECITOS', -3.7190309058326703, 40.38826096806122, 'fa-child'],
['ESCUELA INFANTIL VICKIE', -3.669914375931579, 40.39282743100321, 'fa-child'],
['ESCUELA INFANTIL LAS MARGARITAS', -3.698322024893864, 40.4012256403438, 'fa-child'],
['ESCUELA INFANTIL VALLE DE ORO  CONSEJERIA DE EDUCACION COMUNIDAD DE MA', -3.7251104205702665, 40.38969022344001, 'fa-child'],
['CENTRO EDUCACION INFANTIL CONCERTADO SANTA LUISA', -3.679175009955932, 40.354856471081234, 'fa-child'],
['ESCUELA INFANTIL SANTA ROSALIA', -3.6298213747379093, 40.46799160043608, 'fa-child'],
['GUARDERIA EL BEBE', -3.7299834033528705, 40.48196925043857, 'fa-child'],
['ESCUELA INFANTIL PATUCO', -3.708012849639573, 40.458661737602505, 'fa-child'],
['ESCUELA INFANTIL', -3.6442765702623605, 40.42993120280207, 'fa-child'],
['GUARDERIA SANTA ELENA', -3.7608513041744387, 40.39754017127558, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL SHANTALA', -3.663716366703304, 40.39046107846635, 'fa-child'],
['ESCUELA INFANTIL PLUTO', -3.754094221197603, 40.388317264252585, 'fa-child'],
['ESCUELA INFANTIL EL SE\xc3\x91OR DON GATO', -3.6195077479708306, 40.397467437286664, 'fa-child'],
['ESCUELA DE EDUCACION INFANTIL LA PLAZUELA', -3.689416734044592, 40.47265958471511, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL JARDIN DE LAS DELICIAS', -3.6913304909803673, 40.39953845294337, 'fa-child'],
['ESCUELA INFANTIL FUENCARRAL-EL PARDO N\xc2\xba 7', -3.6870059972316414, 40.502402085066535, 'fa-child'],
['EL CARMEN CENTRO INFANTIL', -3.7090253608357084, 40.40941829550541, 'fa-child'],
['ESCUELA INFANTIL INTERCULTURAL SOL Y LUNA', -3.7224043302970014, 40.46914164688249, 'fa-child'],
['CENTRO DE EDUCACION INFANTIL', -3.6455666706713123, 40.3974585803672, 'fa-child'],
['CENTRO INFANTIL LA JIRAFA AMARILLA', -3.591662170251541, 40.456911975448236, 'fa-child'],
['GUARDERIA NUESTRA SE\xc3\x91ORA DEL CAMINO', -3.662450080294309, 40.388040748392484, 'fa-child']
]
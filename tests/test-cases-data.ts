/**
 * Test case data from Assignment_1.xlsx
 * Each row: [TC ID, Test case name, Input length type, Input, Expected output, Actual output, Status, Justification, Coverage]
 */
export const TEST_CASE_HEADERS = [
  'TC ID',
  'Test case name',
  'Input length type',
  'Input',
  'Expected output',
  'Actual output',
  'Status',
  'Accuracy justification/ Description of issue type',
  'What is covered by the test',
] as const;

export type TestCaseRow = readonly [
  string, // id
  string, // name
  string, // inputLength (S | M | L)
  string, // input
  string, // expectedOutput
  string, // actualOutput
  string, // status
  string, // justification
  string, // coverage
];

export const COL = {
  ID: 0,
  NAME: 1,
  INPUT_LENGTH: 2,
  INPUT: 3,
  EXPECTED_OUTPUT: 4,
  ACTUAL_OUTPUT: 5,
  STATUS: 6,
  JUSTIFICATION: 7,
  COVERAGE: 8,
} as const;

const testCasesData: readonly TestCaseRow[] = [
  // Positive Functional Tests (24 cases)
  ['Pos_Fun_0001', 'Convert a simple past activity', 'S', 'mama pansal giyaa', 'මම පන්සල් ගියා', 'මම පන්සල් ගියා', 'Pass', '· The past tense meaning is correctly preserved', '· Daily language usage'],
  ['Pos_Fun_0002', 'Convert compound sentence with two activities', 'S', 'api sellam karalaa, kaema kanavaa', 'අපි සෙල්ලම් කරලා, කැම කනවා', 'අපි සෙල්ලම් කරලා, කැම කනවා', 'Pass', '· Both activities are correctly translated', '· Daily language usage'],
  ['Pos_Fun_0003', 'Convert conditional sentence', 'S', 'oyaa aavoth mamath enavaa', 'ඔයා ආවොත් මමත් එනවා', 'ඔයා ආවොත් මමත් එනවා', 'Pass', '· Conditional meaning is preserved correctly', '· Daily language usage'],
  ['Pos_Fun_0004', 'Convert interrogative question', 'S', 'oyaa vathura bivvadha?', 'ඔයා වතුර බිව්වද?', 'ඔයා වතුර බිව්වද?', 'Pass', '· Question format is preserved correctly', '· Daily language usage'],
  ['Pos_Fun_0005', 'Convert imperative command', 'S', 'methanin vaadivenna', 'මෙතනින් වාඩිවෙන්න', 'මෙතනින් වාඩිවෙන්න', 'Pass', '· Command meaning is preserved', '· Daily language usage'],
  ['Pos_Fun_0006', 'Convert negative sentence', 'S', 'mama heta paasal yanavaa', 'මම හෙට පාසල් යනවා', 'මම හෙට පාසල් යනවා', 'Pass', '· Negation is correctly preserved', '· Daily language usage'],
  ['Pos_Fun_0007', 'Convert common greeting', 'M', 'apita heta dhavalta chithrapatiya balanna venne naee', 'අපිට හෙට දවල්ට චිත්‍රපටිය බලන්න වෙන්නෙ නෑ', 'අපිට හෙට දවල්ට චිත්‍රපටිය බලන්න වෙන්නෙ නෑ', 'Pass', '· Greeting meaning is preserved', '· Greeting / request / response'],
  ['Pos_Fun_0008', 'Convert polite request', 'S', 'suBha dhahavalak!', 'සුභ දහවලක්!', 'සුභ දහවලක්!', 'Pass', '· Polite tone is maintained', '· Greeting / request / response'],
  ['Pos_Fun_0009', 'Convert multi-word expression', 'M', 'oyaata mee paarsalaya apee gedharata gihin dhenna puluvandha?', 'ඔයාට මේ පාර්සලය අපේ ගෙදරට ගිහින් දෙන්න පුලුවන්ද?', 'ඔයාට මේ පාර්සලය අපේ ගෙදරට ගිහින් දෙන්න පුලුවන්ද?', 'Pass', '· Common expression is correctly translated', '· Word combination / phrase pattern'],
  ['Pos_Fun_0010', 'Convert joined words without spaces', 'S', 'mehe balapan', 'මෙහෙ බලපන්', 'මෙහෙ බලපන්', 'Pass', '· System correctly handles missing spaces', '· Word combination / phrase pattern'],
  ['Pos_Fun_0011', 'Convert repeated word for emphasis', 'S', 'mama nidhaagena hitiye', 'මම නිදාගෙන හිටියෙ', 'මම නිදාගෙන හිටියෙ', 'Pass', '· Repetition pattern is recognized', '· Word combination / phrase pattern'],
  ['Pos_Fun_0012', 'Convert present tense sentence', 'S', 'ikmanata enna', 'ඉක්මනට එන්න', 'ඉක්මනට එන්න', 'Pass', '· Present tense is correctly maintained', '· Daily language usage'],
  ['Pos_Fun_0013', 'Convert future tense sentence', 'S', 'mata heta udhee vaedata yanna thiyenavaa', 'මට හෙට උදේ වැඩට යන්න තියෙනවා', 'මට හෙට උදේ වැඩට යන්න තියෙනවා', 'Pass', '· Future tense meaning is preserved', '· Daily language usage'],
  ['Pos_Fun_0014', 'Convert plural pronoun usage', 'S', 'ov ov', 'ඔව් ඔව්', 'ඔව් ඔව්', 'Pass', '· Plural form is correctly handled', '· Daily language usage'],
  ['Pos_Fun_0015', 'Convert sentence with English brand name', 'S', 'mama iiye gedhara gihin redhi tika heedhuvaa', 'මම ඊයෙ ගෙදර ගිහින් රෙදි ටික හේදුවා', 'මම ඊයෙ ගෙදර ගිහින් රෙදි ටික හේදුවා', 'Pass', '· English brand name is preserved correctly', '· Mixed Singlish + English'],
  ['Pos_Fun_0016', 'Convert sentence with place name', 'S', 'mama dhaen iskoole gedhara vaeda karanavaa', 'මම දැන් ඉස්කෝලෙ ගෙදර වැඩ කරනවා', 'මම දැන් ඉස්කෝලෙ ගෙදර වැඩ කරනවා', 'Pass', '· Place name remains in English', '· Names / places / common English words'],
  ['Pos_Fun_0017', 'Convert sentence with abbreviation', 'S', 'mata mee juice eka bonna baee', 'මට මේ juice එක බොන්න බෑ', 'මට මේ juice එක බොන්න බෑ', 'Pass', '· Abbreviation is preserved correctly', '· Mixed Singlish + English'],
  ['Pos_Fun_0018', 'Convert sentence with punctuation', 'S', 'eyaa party ekata giyaa', 'එයා party එකට ගියා', 'එයා party එකට ගියා', 'Pass', '· Punctuation marks are preserved', '· Punctuation / numbers'],
  ['Pos_Fun_0019', 'Convert sentence with currency', 'S', 'api lecture ekata yamu', 'අපි lecture එකට යමු', 'අපි lecture එකට යමු', 'Pass', '· Currency format is preserved correctly', '· Punctuation / numbers'],
  ['Pos_Fun_0020', 'Convert sentence with date', 'M', 'karuNaakaralaa mata eeka aaye kiyanna puluvandha?', 'කරුණාකරලා මට ඒක ආයෙ කියන්න පුලුවන්ද?', 'කරුණාකරලා මට ඒක ආයෙ කියන්න පුලුවන්ද?', 'Pass', '· Date format is preserved correctly', '· Punctuation / numbers'],
  ['Pos_Fun_0021', 'Convert input with multiple spaces', 'M', 'mee link eka open karalaa zoom meeting ekata Join venna', 'මේ link එක open කරලා zoom meeting එකට join වෙන්න', 'මේ link එක open කරලා zoom meeting එකට join වෙන්න', 'Pass', '· Extra spaces are handled gracefully', '· Formatting (spaces / line breaks / paragraph)'],
  ['Pos_Fun_0022', 'Convert medium-length paragraph', 'M', 'oyaa heta enakota ID saha NIC ekee photocopies anivaaryen aragena enna', 'ඔයා හෙට එනකොට ID සහ NIC එකේ photocopies අනිවාර්යෙන් අරගෙන එන්න', 'ඔයා හෙට එනකොට ID සහ NIC එකේ photocopies අනිවාර්යෙන් අරගෙන එන්න', 'Pass', '· Entire paragraph is translated correctly', '· Daily language usage'],
  ['Pos_Fun_0023', 'Convert long paragraph input', 'S', 'mata kadeeta gihin haal 1 kg k ganna ooni', 'මට කඩේට ගිහින් හාල් 1 kg ක් ගන්න ඕනි', 'මට කඩේට ගිහින් හාල් 1 kg ක් ගන්න ඕනි', 'Pass', '· Long text is handled successfully', '· Daily language usage'],
  ['Pos_Fun_0024', 'Convert slang expression', 'S', 'mama heta udhee 8.00 AM ta alarm ekak thibbaa', 'මම හෙට උදේ 8.00 AM ට alarm එකක් තිබ්බා', 'මම හෙට උදේ 8.00 AM ට alarm එකක් තිබ්බා', 'Pass', '· Slang meaning is captured correctly', '· Slang / informal language'],

  // Negative Functional Tests (10 cases)
  ['Neg_Fun_0001', 'Incorrect conversion of misspelled word', 'S', 'matabusekeeyannabaee', 'මටbusඑකේයන්නබෑ', 'මටබුසෙකේයන්නබෑ', 'Fail', '· Misspelling causes incorrect translation', '· Typographical error handling'],
  ['Neg_Fun_0002', 'Incorrect handling of ambiguous input', 'M', 'oyaa purudhu venna ooni real world problems ekka ganudhenu karanna', 'ඔයා පුරුදු වෙන්න ඕනි real world problems එක්ක ගනුදෙනු කරන්න', 'ඔයා පුරුදු වෙන්න ඕනි රේල් world problems එක්ක ගනුදෙනු කරන්න', 'Fail', '· Ambiguous phrasing leads to wrong interpretation', '· Daily language usage'],
  ['Neg_Fun_0003', 'Incorrect word segmentation', 'M', 'dhivayinata balapaa aethi ayahapath kaalaguNika thathvaya heethuven nuvaraeliya pradheeshayata 100 mm ikmavuu thadha vaesi balaaporoththu vea', 'දිවයිනට බලපා ඇති අයහපත් කාලගුණික තත්වය හේතුවෙන් නුවරඑලිය ප්‍රදේශයට 100 mm ඉක්මවූ තද වැසි බලාපොරොත්තු වේ', 'දිවයිනට බලපා ඇති අයහපත් කාලගුණික තත්වය හේතුවෙන් නුවරැලිය ප්‍රදේශයට 100 mm ඉක්මවූ තද වැසි බලාපොරොත්තු වේ', 'Fail', '· System fails to identify correct word boundaries', '· Word combination / phrase pattern'],
  ['Neg_Fun_0004', 'Incorrect tense conversion', 'M', 'man heta udheema pansal yanavaa. puluvannam oyath enna', 'මන් හෙට පන්සලට දානෙ අරන් යනවා. ඔයත් උදේම පන්සලට එන්න', 'man හෙට උදේම පන්සල් යනවා. පුලුවන්නම් ඔයත් එන්න', 'Fail', '· Tense marker is not recognized correctly', '· Daily language usage'],
  ['Neg_Fun_0005', 'Incorrect negation handling', 'M', 'mee QRCode eka scan karalaa attendance mark karanna', 'මේ QRCode එක scan කරලා attendance mark කරන්න', 'මේ QRCඔඩෙ එක scan කරලා attendance mark කරන්න', 'Fail', '· Negation pattern is not recognized', '· Daily language usage'],
  ['Neg_Fun_0006', 'Incorrect pronoun handling', 'M', 'oyaage issue eka gaena kiyala mata mailekak dhaanna', 'ඔයාගෙ issue එක ගැන කියල මට mailඑකක් දාන්න', 'ඔයාගෙ issue එක ගැන කියල මට මෛලෙකක් දාන්න', 'Fail', '· Wrong pronoun is used in translation', '· Daily language usage'],
  ['Neg_Fun_0007', 'Incorrect handling of mixed language', 'M', 'oyaa ara applicationeka download karagaththadha?', 'ඔයා අර applicationඑක download කරගත්තද?', 'ඔයා අර අප්ප්ලිcඅටිඔනෙක download කරගත්තද?', 'Fail', '· English words are incorrectly transliterated', '· Mixed Singlish + English'],
  ['Neg_Fun_0008', 'Incorrect punctuation preservation', 'L', 'Machan api kohedha yanne? Mama ayiyaa ekka giya lassana thaenak thiyenavaa. Oyaata kaemathi nam api ekka yanna puluvan. mage ammaa kivva apee gedhara enna kiyala. Ehenam thava minute dhekakin enna, mama mobile eka charge karanna yanavaa. Oya restaurant ekee bath packets godak rasayi, needha?', 'මචන් අපි කොහෙද යන්නෙ? මම අයියා එක්ක ගිය ලස්සන තැනක් තියෙනවා. ඔයාට කැමති නම් අපි එක්ක යන්න පුලුවන්. මගෙ අම්මා කිව්ව අපේ ගෙදර එන්න කියල. එහෙනම් තව minute දෙකකින් එන්න, මම mobile එක charge කරන්න යනවා. ඔය restaurant එකේ බත් packets ගොඩක් රසයි, නේද?', 'මචන් අපි කොහෙද යන්නෙ? මම අයියා එක්ක ගිය ලස්සන තැනක් තියෙනවා. ඔයාට කැමති නම් අපි එක්ක යන්න පුලුවන්. mage අම්මා කිව්ව අපේ ගෙදර එන්න කියල. එහෙනම් තව minute දෙකකින් එන්න, මම mobile එක charge කරන්න යනවා. ඔය restaurant එකේ බත් packets ගොඩක් රසයි, නේද?', 'Fail', '· Punctuation marks are lost or misplaced', '· Punctuation / numbers'],
  ['Neg_Fun_0009', 'Incorrect handling of line breaks', 'L', 'Ape class eka hari boring ekak nedha ayiye? Ape miss kiyapu dheeval monavadha kiyalaa thearunee naee. Oyaage phone eka bag ekee thiyenavaa. Ape gedharata yanna kalin mama kadee gihilla ape ammata kiri packet ekak ganna ooni. thava minute pahak inna puluvandha machan?', 'අපෙ class එක හරි boring එකක් නේද අයියෙ? අපෙ miss කියපු දේවල් මොනවද කියලා තේරුනේ නෑ. ඔයාගෙ phone එක bag එකේ තියෙනවා. අපෙ ගෙදරට යන්න කලින් මම කඩේ ගිහිල්ල අපෙ අම්මට කිරි packet එකක් ගන්න ඕනි. තව minute පහක් ඉන්න පුලුවන්ද මචන්?', 'Ape class එක හරි boring එකක් නේද අයියෙ? Ape miss කියපු දේවල් මොනවද කියලා තේරුනේ නෑ. ඔයාගෙ phone එක bag එකේ තියෙනවා. Ape ගෙදරට යන්න කලින් මම කඩේ ගිහිල්ල ape අම්මට කිරි packet එකක් ගන්න ඕනි. තව minute පහක් ඉන්න පුලුවන්ද මචන්?', 'Fail', '· Line breaks cause incorrect parsing', '· Formatting (spaces / line breaks / paragraph)'],
  ['Neg_Fun_0010', 'Incorrect slang interpretation', 'M', 'singlish valin type kalaata eyaata theerenne naee', 'singlish වලින් type කලාට එයාට තේරෙන්නෙ නෑ', 'සින්ග්ලිශ් වලින් type කලාට එයාට තේරෙන්නෙ නෑ', 'Fail', '· Slang expression is not recognized', '· Slang / informal language'],

  // UI Tests (1 case)
  ['Pos_UI_0001', 'Real-time output updates while typing', 'S', '1,2,3 & 4', '1,2,3 & 4', '1,2,3 & 4', 'Pass', '· Output updates automatically without clicking convert', '· Usability flow (real-time conversion)']
];

export default testCasesData;

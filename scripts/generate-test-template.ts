import * as fs from 'fs';

// Test case data from Assignment_1.xlsx (template: actualOutput and status to be filled after execution)
const testCases = [
  // Positive Functional Tests
  { id: 'Pos_Fun_0001', name: 'Convert a simple past activity', inputLength: 'S', input: 'mama pansal giyaa', expectedOutput: 'මම පන්සල් ගියා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· The past tense meaning is correctly preserved', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0002', name: 'Convert compound sentence with two activities', inputLength: 'S', input: 'api sellam karalaa, kaema kanavaa', expectedOutput: 'අපි සෙල්ලම් කරලා, කැම කනවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Both activities are correctly translated', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0003', name: 'Convert conditional sentence', inputLength: 'S', input: 'oyaa aavoth mamath enavaa', expectedOutput: 'ඔයා ආවොත් මමත් එනවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Conditional meaning is preserved correctly', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0004', name: 'Convert interrogative question', inputLength: 'S', input: 'oyaa vathura bivvadha?', expectedOutput: 'ඔයා වතුර බිව්වද?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Question format is preserved correctly', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0005', name: 'Convert imperative command', inputLength: 'S', input: 'methanin vaadivenna', expectedOutput: 'මෙතනින් වාඩිවෙන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Command meaning is preserved', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0006', name: 'Convert negative sentence', inputLength: 'S', input: 'mama heta paasal yanavaa', expectedOutput: 'මම හෙට පාසල් යනවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Negation is correctly preserved', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0007', name: 'Convert common greeting', inputLength: 'M', input: 'apita heta dhavalta chithrapatiya balanna venne naee', expectedOutput: 'අපිට හෙට දවල්ට චිත්‍රපටිය බලන්න වෙන්නෙ නෑ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Greeting meaning is preserved', coverage: '· Greeting / request / response' },
  { id: 'Pos_Fun_0008', name: 'Convert polite request', inputLength: 'S', input: 'suBha dhahavalak!', expectedOutput: 'සුභ දහවලක්!', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Polite tone is maintained', coverage: '· Greeting / request / response' },
  { id: 'Pos_Fun_0009', name: 'Convert multi-word expression', inputLength: 'M', input: 'oyaata mee paarsalaya apee gedharata gihin dhenna puluvandha?', expectedOutput: 'ඔයාට මේ පාර්සලය අපේ ගෙදරට ගිහින් දෙන්න පුලුවන්ද?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Common expression is correctly translated', coverage: '· Word combination / phrase pattern' },
  { id: 'Pos_Fun_0010', name: 'Convert joined words without spaces', inputLength: 'S', input: 'mehe balapan', expectedOutput: 'මෙහෙ බලපන්', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· System correctly handles missing spaces', coverage: '· Word combination / phrase pattern' },
  { id: 'Pos_Fun_0011', name: 'Convert repeated word for emphasis', inputLength: 'S', input: 'mama nidhaagena hitiye', expectedOutput: 'මම නිදාගෙන හිටියෙ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Repetition pattern is recognized', coverage: '· Word combination / phrase pattern' },
  { id: 'Pos_Fun_0012', name: 'Convert present tense sentence', inputLength: 'S', input: 'ikmanata enna', expectedOutput: 'ඉක්මනට එන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Present tense is correctly maintained', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0013', name: 'Convert future tense sentence', inputLength: 'S', input: 'mata heta udhee vaedata yanna thiyenavaa', expectedOutput: 'මට හෙට උදේ වැඩට යන්න තියෙනවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Future tense meaning is preserved', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0014', name: 'Convert plural pronoun usage', inputLength: 'S', input: 'ov ov', expectedOutput: 'ඔව් ඔව්', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Plural form is correctly handled', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0015', name: 'Convert sentence with English brand name', inputLength: 'S', input: 'mama iiye gedhara gihin redhi tika heedhuvaa', expectedOutput: 'මම ඊයෙ ගෙදර ගිහින් රෙදි ටික හේදුවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· English brand name is preserved correctly', coverage: '· Mixed Singlish + English' },
  { id: 'Pos_Fun_0016', name: 'Convert sentence with place name', inputLength: 'S', input: 'mama dhaen iskoole gedhara vaeda karanavaa', expectedOutput: 'මම දැන් ඉස්කෝලෙ ගෙදර වැඩ කරනවා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Place name remains in English', coverage: '· Names / places / common English words' },
  { id: 'Pos_Fun_0017', name: 'Convert sentence with abbreviation', inputLength: 'S', input: 'mata mee juice eka bonna baee', expectedOutput: 'මට මේ juice එක බොන්න බෑ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Abbreviation is preserved correctly', coverage: '· Mixed Singlish + English' },
  { id: 'Pos_Fun_0018', name: 'Convert sentence with punctuation', inputLength: 'S', input: 'eyaa party ekata giyaa', expectedOutput: 'එයා party එකට ගියා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Punctuation marks are preserved', coverage: '· Punctuation / numbers' },
  { id: 'Pos_Fun_0019', name: 'Convert sentence with currency', inputLength: 'S', input: 'api lecture ekata yamu', expectedOutput: 'අපි lecture එකට යමු', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Currency format is preserved correctly', coverage: '· Punctuation / numbers' },
  { id: 'Pos_Fun_0020', name: 'Convert sentence with date', inputLength: 'M', input: 'karuNaakaralaa mata eeka aaye kiyanna puluvandha?', expectedOutput: 'කරුණාකරලා මට ඒක ආයෙ කියන්න පුලුවන්ද?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Date format is preserved correctly', coverage: '· Punctuation / numbers' },
  { id: 'Pos_Fun_0021', name: 'Convert input with multiple spaces', inputLength: 'M', input: 'mee link eka open karalaa zoom meeting ekata Join venna', expectedOutput: 'මේ link එක open කරලා zoom meeting එකට join වෙන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Extra spaces are handled gracefully', coverage: '· Formatting (spaces / line breaks / paragraph)' },
  { id: 'Pos_Fun_0022', name: 'Convert medium-length paragraph', inputLength: 'M', input: 'oyaa heta enakota ID saha NIC ekee photocopies anivaaryen aragena enna', expectedOutput: 'ඔයා හෙට එනකොට ID සහ NIC එකේ photocopies අනිවාර්යෙන් අරගෙන එන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Entire paragraph is translated correctly', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0023', name: 'Convert long paragraph input', inputLength: 'S', input: 'mata kadeeta gihin haal 1 kg k ganna ooni', expectedOutput: 'මට කඩේට ගිහින් හාල් 1 kg ක් ගන්න ඕනි', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Long text is handled successfully', coverage: '· Daily language usage' },
  { id: 'Pos_Fun_0024', name: 'Convert slang expression', inputLength: 'S', input: 'mama heta udhee 8.00 AM ta alarm ekak thibbaa', expectedOutput: 'මම හෙට උදේ 8.00 AM ට alarm එකක් තිබ්බා', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Slang meaning is captured correctly', coverage: '· Slang / informal language' },

  // Negative Functional Tests
  { id: 'Neg_Fun_0001', name: 'Incorrect conversion of misspelled word', inputLength: 'S', input: 'matabusekeeyannabaee', expectedOutput: 'මටbusඑකේයන්නබෑ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Misspelling causes incorrect translation', coverage: '· Typographical error handling' },
  { id: 'Neg_Fun_0002', name: 'Incorrect handling of ambiguous input', inputLength: 'M', input: 'oyaa purudhu venna ooni real world problems ekka ganudhenu karanna', expectedOutput: 'ඔයා පුරුදු වෙන්න ඕනි real world problems එක්ක ගනුදෙනු කරන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Ambiguous phrasing leads to wrong interpretation', coverage: '· Daily language usage' },
  { id: 'Neg_Fun_0003', name: 'Incorrect word segmentation', inputLength: 'M', input: 'dhivayinata balapaa aethi ayahapath kaalaguNika thathvaya heethuven nuvaraeliya pradheeshayata 100 mm ikmavuu thadha vaesi balaaporoththu vea', expectedOutput: 'දිවයිනට බලපා ඇති අයහපත් කාලගුණික තත්වය හේතුවෙන් නුවරඑලිය ප්‍රදේශයට 100 mm ඉක්මවූ තද වැසි බලාපොරොත්තු වේ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· System fails to identify correct word boundaries', coverage: '· Word combination / phrase pattern' },
  { id: 'Neg_Fun_0004', name: 'Incorrect tense conversion', inputLength: 'M', input: 'man heta udheema pansal yanavaa. puluvannam oyath enna', expectedOutput: 'මන් හෙට පන්සලට දානෙ අරන් යනවා. ඔයත් උදේම පන්සලට එන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Tense marker is not recognized correctly', coverage: '· Daily language usage' },
  { id: 'Neg_Fun_0005', name: 'Incorrect negation handling', inputLength: 'M', input: 'mee QRCode eka scan karalaa attendance mark karanna', expectedOutput: 'මේ QRCode එක scan කරලා attendance mark කරන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Negation pattern is not recognized', coverage: '· Daily language usage' },
  { id: 'Neg_Fun_0006', name: 'Incorrect pronoun handling', inputLength: 'M', input: 'oyaage issue eka gaena kiyala mata mailekak dhaanna', expectedOutput: 'ඔයාගෙ issue එක ගැන කියල මට mailඑකක් දාන්න', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Wrong pronoun is used in translation', coverage: '· Daily language usage' },
  { id: 'Neg_Fun_0007', name: 'Incorrect handling of mixed language', inputLength: 'M', input: 'oyaa ara applicationeka download karagaththadha?', expectedOutput: 'ඔයා අර applicationඑක download කරගත්තද?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· English words are incorrectly transliterated', coverage: '· Mixed Singlish + English' },
  { id: 'Neg_Fun_0008', name: 'Incorrect punctuation preservation', inputLength: 'L', input: 'Machan api kohedha yanne? Mama ayiyaa ekka giya lassana thaenak thiyenavaa. Oyaata kaemathi nam api ekka yanna puluvan. mage ammaa kivva apee gedhara enna kiyala. Ehenam thava minute dhekakin enna, mama mobile eka charge karanna yanavaa. Oya restaurant ekee bath packets godak rasayi, needha?', expectedOutput: 'මචන් අපි කොහෙද යන්නෙ? මම අයියා එක්ක ගිය ලස්සන තැනක් තියෙනවා. ඔයාට කැමති නම් අපි එක්ක යන්න පුලුවන්. මගෙ අම්මා කිව්ව අපේ ගෙදර එන්න කියල. එහෙනම් තව minute දෙකකින් එන්න, මම mobile එක charge කරන්න යනවා. ඔය restaurant එකේ බත් packets ගොඩක් රසයි, නේද?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Punctuation marks are lost or misplaced', coverage: '· Punctuation / numbers' },
  { id: 'Neg_Fun_0009', name: 'Incorrect handling of line breaks', inputLength: 'L', input: 'Ape class eka hari boring ekak nedha ayiye? Ape miss kiyapu dheeval monavadha kiyalaa thearunee naee. Oyaage phone eka bag ekee thiyenavaa. Ape gedharata yanna kalin mama kadee gihilla ape ammata kiri packet ekak ganna ooni. thava minute pahak inna puluvandha machan?', expectedOutput: 'අපෙ class එක හරි boring එකක් නේද අයියෙ? අපෙ miss කියපු දේවල් මොනවද කියලා තේරුනේ නෑ. ඔයාගෙ phone එක bag එකේ තියෙනවා. අපෙ ගෙදරට යන්න කලින් මම කඩේ ගිහිල්ල අපෙ අම්මට කිරි packet එකක් ගන්න ඕනි. තව minute පහක් ඉන්න පුලුවන්ද මචන්?', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Line breaks cause incorrect parsing', coverage: '· Formatting (spaces / line breaks / paragraph)' },
  { id: 'Neg_Fun_0010', name: 'Incorrect slang interpretation', inputLength: 'M', input: 'singlish valin type kalaata eyaata theerenne naee', expectedOutput: 'singlish වලින් type කලාට එයාට තේරෙන්නෙ නෑ', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Slang expression is not recognized', coverage: '· Slang / informal language' },

  // UI Tests
  { id: 'Pos_UI_0001', name: 'Real-time output updates while typing', inputLength: 'S', input: '1,2,3 & 4', expectedOutput: '1,2,3 & 4', actualOutput: '[To be filled after test execution]', status: '[To be determined]', justification: '· Output updates automatically without clicking convert', coverage: '· Usability flow (real-time conversion)' },
];

// Generate CSV content
function generateCSV() {
  const headers = [
    'TC ID',
    'Test case name',
    'Input length type',
    'Input',
    'Expected output',
    'Actual output',
    'Status',
    'Accuracy justification/ Description of issue type',
    'What is covered by the test'
  ];

  let csv = headers.map(h => `"${h}"`).join(',') + '\n';

  testCases.forEach(tc => {
    const row = [
      tc.id,
      tc.name,
      tc.inputLength,
      tc.input,
      tc.expectedOutput,
      tc.actualOutput,
      tc.status,
      tc.justification,
      tc.coverage
    ];
    csv += row.map(cell => `"${(cell ?? '').toString().replace(/"/g, '""')}"`).join(',') + '\n';
  });

  return csv;
}

// Write CSV file
const csvContent = generateCSV();
fs.writeFileSync('./test-cases.csv', csvContent, 'utf-8');
console.log('Test cases CSV file generated successfully: test-cases.csv');
console.log(`Total test cases: ${testCases.length}`);

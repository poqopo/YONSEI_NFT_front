const baseOptions = [{ value: '000', label: '학과 상관없이 받을래요!' }];

const LiberalArtsOptions = [
  { value: '110', label: '국어국문학과' },
  { value: '111', label: '중어중문학과' },
  { value: '112', label: '영어영문학과' },
  { value: '113', label: '독어독문학과' },
  { value: '114', label: '불어불문학과' },
  { value: '115', label: '노어노문학과' },
  { value: '116', label: '사학과' },
  { value: '117', label: '철학과' },
  { value: '118', label: '문헌정보학과' },
  { value: '119', label: '심리학과' },
];

const CommerceEconomicsOptions = [
  { value: '121', label: '경제학부' },
  { value: '122', label: '응용통계학과' },
];

const SocialScienceOptions = [
  { value: '124', label: '정치외교학과' },
  { value: '125', label: '행정학과' },
  { value: '126', label: '사회복지학과' },
  { value: '127', label: '사회학과' },
  { value: '128', label: '문화인류학과' },
  { value: '129', label: '언론홍보영상학부' },
];

const ScienceOptions = [
  { value: '131', label: '수학과' },
  { value: '132', label: '물리학과' },
  { value: '133', label: '화학과' },
  { value: '134', label: '지구시스템과학과' },
  { value: '135', label: '천문우주학과' },
  { value: '136', label: '대기과학과' },
];

const EngineeringOptions = [
  { value: '141', label: '화공생명공학부' },
  { value: '142', label: '전기전자공학부' },
  { value: '1430', label: '건축공학과' },
  { value: '1435', label: '도시공학과' },
  { value: '144', label: '사회환경시스템공학부' },
  { value: '145', label: '기계공학부' },
  { value: '146', label: '신소재공학부' },
  { value: '1470', label: '산업공학과' },
  { value: '188', label: '디스플레이융합공학과' },
  { value: '189', label: '시스템반도체공학과' },
];

const ComputingOptions = [
  { value: '148', label: '컴퓨터과학과' },
  { value: '149', label: '인공지능학과' },
  { value: '193', label: 'IT융합공학과' },
];

const HumanEcologyOptions = [
  { value: '151', label: '의류환경학과' },
  { value: '152', label: '식품영양학과' },
  { value: '153', label: '실내건축학과' },
  { value: '154', label: '아동가족학과' },
  { value: '155', label: '통합디자인학과' },
];

const LifeScienceOptinons = [
  { value: '161', label: '시스템생물학과' },
  { value: '162', label: '생화학과' },
  { value: '163', label: '생명공학과' },
];

const BuisinessOptions = [{ value: '123', label: '경영학과' }];

const TheologyOptions = [{ value: '171', label: '신학과' }];

const MusicOptions = [{ value: '172', label: '음악대학' }];
const NursingOptions = [{ value: '172', label: '간호대학' }];

const EducationOptions = [{ value: '182', label: '교육학부' }];

const PhysicalScienceOptions = [
  { value: '180', label: '체육교육학과' },
  { value: '181', label: '스포츠응용산업학과' },
];

const MedicineOptions = [{ value: '191', label: '의과대학' }];

const DentistryOptions = [{ value: '192', label: '치과대학' }];

const PharmacyOptions = [{ value: '194', label: '약학과' }];
const GlobalLeadersOptions = [{ value: '106', label: '글로벌인재학부' }];

const UICOptions = [
  { value: '190', label: 'UD' },
  { value: '195', label: 'HASSD' },
  { value: '199', label: 'ISED' },
];

export const groupedOptions = [
  {
    label: '기본팜희',
    options: baseOptions,
  },
  {
    label: '글로벌인재대학',
    options: GlobalLeadersOptions,
  },
  {
    label: '문과대학',
    options: LiberalArtsOptions,
  },
  {
    label: '상경대학',
    options: CommerceEconomicsOptions,
  },
  {
    label: '경영대학',
    options: BuisinessOptions,
  },
  {
    label: '사회과학대학',
    options: SocialScienceOptions,
  },
  {
    label: '이과대학',
    options: ScienceOptions,
  },
  {
    label: '공과대학',
    options: EngineeringOptions,
  },
  {
    label: '인공지능융합대학',
    options: ComputingOptions,
  },
  {
    label: '생활과학대학',
    options: HumanEcologyOptions,
  },
  {
    label: '생명시스템대학',
    options: LifeScienceOptinons,
  },
  {
    label: '신과대학',
    options: TheologyOptions,
  },
  {
    label: '음악대학',
    options: MusicOptions,
  },
  {
    label: '간호대학',
    options: NursingOptions,
  },
  {
    label: '체육계열',
    options: PhysicalScienceOptions,
  },
  {
    label: '교육과학대학(교육계열)',
    options: EducationOptions,
  },
  {
    label: '의과대학',
    options: MedicineOptions,
  },
  {
    label: '치과대학',
    options: DentistryOptions,
  },
  {
    label: '약학대학',
    options: PharmacyOptions,
  },
  {
    label: '언더우드 국제대학',
    options: UICOptions,
  },
];
export default groupedOptions;

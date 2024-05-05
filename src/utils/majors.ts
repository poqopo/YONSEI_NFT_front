const baseOptions = [
  { value: 'ocean', label: '기본 파미', color: '#00B8D9' },
  { value: 'blue', label: '과잠 파미', color: '#0052CC' },
  { value: 'purple', label: '하키티 파미', color: '#5243AA' },
];

const LiberalArtsOptions = [
  { value: '110', label: '국어 국문학과' },
  { value: '111', label: '중어 중문학과' },
  { value: '112', label: '영어 영문학과' },
  { value: '113', label: '독어 독문학과' },
  { value: '114', label: '불어 불문학과' },
  { value: '115', label: '노어 노문학과' },
  { value: '116', label: '사학과' },
  { value: '117', label: '철학과' },
  { value: '118', label: '문헌 정보학과' },
  { value: '119', label: '심리학과' },
];

const CommerceEconomicsOptions = [
  { value: '121', label: '경제학부' },
  { value: '122', label: '응용통계학과' },
];

const BuisinessOptions = [{ value: '123', label: '경영학과' }];

export const groupedOptions = [
  {
    label: '기본 파미들',
    options: baseOptions,
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
];
export default groupedOptions;

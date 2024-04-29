import departmentData from './department.json';

export default function getMajor(studentNumber: string) {
  let code;
  code = studentNumber.substring(4, 7);
  if (code === '143' || code === '147') {
    code = studentNumber.substring(4, 8);
  }
  return departmentData[code as keyof typeof departmentData];
}

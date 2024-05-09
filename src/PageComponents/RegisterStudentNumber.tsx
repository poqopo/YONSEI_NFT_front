import { useEffect, useState } from 'react';
import { addNewUser, getUserByAdress } from '@/utils/axios';
import StudentInput from '@/Components/StudentNumberInput';
import PersonalInfo from '@/Components/PersonalInfo';
import getMajor from '@/utils/getMajor';

export default function RegisterStudentNumber({
  studentNumber,
  userAddress,
  major,
  setStudentNumber,
  setMajor,
  setShowMenu,
}: {
  studentNumber: any;
  userAddress: any;
  major: any;
  setStudentNumber: any;
  setMajor: any;
  setShowMenu: any;
}) {
  const [userToggle, setUserToggle] = useState(false);
  const [showconfirmModal, setShowConfirmModal] = useState(false);
  //   const [major, setMajor] = useState<
  //   { Department_KR: string; Department: string } | undefined
  // >(undefined);
  // const [showMenu, setShowMenu] = useState(false);

  const NewUser = async (
    _address: string,
    _studentNumber: string,
    _major: string | undefined,
  ) => {
    const res = await addNewUser(_address, _studentNumber, _major);
    if (res.status === 200) {
      setShowConfirmModal(false);
      setUserToggle(false);
      setShowMenu(true);
    } else {
      window.alert(res.result);
    }
  };

  async function searchMajor(input: string) {
    if (input.length !== 10) {
      window.alert('잘못된 학번입니다.');
      setShowConfirmModal(false);
    } else {
      const majorDict = await getMajor(input);
      if (majorDict === undefined) {
        window.alert('입력하신 학과는 아직 준비중입니다.');
        setShowConfirmModal(false);
      } else {
        setMajor(majorDict);
        setShowConfirmModal(true);
      }
    }
  }

  // Function that updates student number based on input change
  const handleInputChange = (value: string) => {
    setStudentNumber(value);
  };

  // Function that processes the submitted student number
  const handleSubmit = () => {
    searchMajor(studentNumber);
  };

  return (
    <div>
      {userToggle ? (
        <div className="fixed top-1/4 right-1/2 translate-x-1/2 w-5/6 rounded-[12px] max-w-[400px] bg-white z-50 p-5">
          <div className="p-3">
            <h2 className="text-start font-bold text-[18px]">
              여러분의 학번을 입력해주세요.
            </h2>
            <h3 className="text-[#475467] text-[17px] text-start">
              수정할 수 없으니 신중히 확인해 주세요!
            </h3>
          </div>
          {showconfirmModal ? (
            <div>
              <div className="text-[16px] text-start my-2">
                <span className="font-bold">{major?.Department_KR}</span>
                <span>가 맞으신가요?</span>
              </div>
              <div>
                <button
                  type="button"
                  className="mx-auto mt-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#FEE500] text-[#191919] border border-black"
                  onClick={async () => {
                    NewUser(userAddress, studentNumber, major?.Department);
                  }}
                >
                  네, 맞아요
                </button>
                <button
                  type="button"
                  className="mx-auto my-5 w-full font-extrabold rounded-[15px] w-fit px-6 py-3 bg-white text-[#191919] border border-black"
                  onClick={async () => {
                    setStudentNumber('');
                    setShowConfirmModal(false);
                  }}
                >
                  아니에요 -학번 다시 확인하기
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-start text-[15px] font-bold p-3">
                개인정보 수집 동의
              </h2>
              <PersonalInfo />
              <StudentInput
                inputText="학번 10자리를 입력해주세요"
                onChange={handleInputChange}
                onClick={handleSubmit}
                buttonText="동의하고 제출하기"
              />
            </div>
          )}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

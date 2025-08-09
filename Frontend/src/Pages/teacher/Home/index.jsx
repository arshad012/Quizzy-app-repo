import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import CustomButton from "../../../Components/Common/CustomButton";
import Header from "../../../Components/Teacher/Header";
import { useHeading } from "../../../Hooks";

const Home = () => {
  const navigate = useNavigate();
  const { heading, subHeading, setHeading, setSubHeading } = useHeading();

  useEffect(() => {
    setHeading('Home page');
    setSubHeading('Start your assesment journey from here');
  }, [])

  const handleClick = (forUser) => {
    navigate(`${forUser}/dashboard`);
  }

  return (
    <div>
      <Header />

      <h1 className='font-bold text-3xl text-center'>Quizzy Home page</h1>

      <div className="w-fit m-auto mt-5 flex flex-col gap-10">
        <CustomButton onClick={() => handleClick('/teacher')}>Teacher Dashboard</CustomButton>
        <CustomButton onClick={() => handleClick('/student')}>Student Dashboard</CustomButton>
      </div>
    </div>
  )
}

export default Home;

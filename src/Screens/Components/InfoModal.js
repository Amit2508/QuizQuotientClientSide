import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const InfoModal = ({ modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 p-2">
          <div className="bg-blue-200 p-4 rounded-lg shadow-xl max-h-full overflow-y-auto">
            <button
              onClick={() => modalOpen(false)}
              className="flex bg-gray-100 p-1 rounded-sm font-bold"
            >
              X
            </button>
            <div className="font-bold">About US</div>
            <p>
              QuizQuotient is a dynamic initiative designed to spark curiosity,
              ignite intellect, and reward the pursuit of knowledge. Our
              platform hosts a variety of engaging quizzes covering a broad
              spectrum of subjects, ensuring that there's something for
              everyone. Whether you're a science enthusiast, a history buff, or
              a literature lover, QuizQuotient is your gateway to a world of fun
              and learning.
            </p>
            <div className="font-bold">Our Mission</div>
            <p>
              We are on a mission to make learning not just informative but also
              rewarding. QuizQuotient strives to create an environment where
              students can test their knowledge, enhance their skills, and
              compete for exciting cash prizes. We believe that by combining
              education with incentives, we can inspire a new generation of
              learners who are passionate about continuous self-improvement.
            </p>
            <div className="font-bold">Note</div>
            <p>
              At QuizQuotient, we're more than just a quiz platform  we're a
              community of learners and enthusiasts. Our mission is to make
              learning fun and rewarding, offering a dynamic space where
              students can test their knowledge, challenge themselves, and earn
              valuable prizes. We believe that everyone should have the chance
              to participate. Our quizzes have a minimal entry fee ranging from
              Rs. 50 to Rs. 100, depending on the time and nature of the quiz.
              This affordability ensures that our platform remains accessible to
              a wide range of students.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default InfoModal;

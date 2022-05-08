import React from "react";
const path = "/src/images/teacher/";

const SingleTeacher = ({ teacher }) => {
  return (
    <div className="singleTeacher">
      <div className="teacherPhoto">
        <img className="rounded" src={path + teacher.avater} alt="Teacher" />
      </div>
      <h3>{teacher.name}</h3>
      <p>
        <i>{teacher.subject} Teacher</i>
      </p>
    </div>
  );
};

export default SingleTeacher;

import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  duration: string;
  difficulty: string;
  rating: number;
  instructor: string;
  link: string;
}

interface CourseCardProps {
  course: Course;
  isEnrolled: boolean;
  onEnroll: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isEnrolled,
  onEnroll,
}) => {
  const handleButtonClick = () => {
    if (isEnrolled) {
      window.location.href = `/courses/${course.id}`; // Redirect to the course page
    } else {
      onEnroll(course.id); // Enroll the user
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={course.imageSrc}
        alt={course.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl text-gray-700 font-semibold mb-2">
          {course.title}
        </h2>
        <p className="text-gray-600 mb-2">{course.category}</p>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500">
          Duration: {course.duration} | Difficulty: {course.difficulty}
        </p>
        <p className="text-sm text-gray-500">Rating: {course.rating} stars</p>
        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleButtonClick}
            className={`mt-4 px-4 py-2 ${
              isEnrolled ? "bg-green-500" : "bg-blue-500"
            } text-white rounded hover:shadow-lg`}
          >
            {isEnrolled ? "View Course" : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

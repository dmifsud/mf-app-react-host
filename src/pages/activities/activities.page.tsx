import CourseActivities from '@mf-app/remote/components/courses/CourseActivities';

const ActivitiesPage = () => {
  // Fetch activities from an API or use static data
  

  return (
    <div className='flex justify-center'>
      <div className='w-[50%] p-10'>
        <CourseActivities title="Course Activities" />
      </div>
    </div>
  );
};

export default ActivitiesPage;

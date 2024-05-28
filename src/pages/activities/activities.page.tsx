// import CourseActivities from "@mf-app/remote/components/courses/CourseActivities";
import { Activity } from '@mf-app/store/models/courses.models';
import useCourseActivityStore from '@mf-app/store/courses/activities/store.course-activities';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { devtoolsConfig } from "../../utils/store.utils";
import { lazy, Suspense } from 'react';
const CourseActivity = lazy(() => import("@mf-app/remote/components/courses/CourseActivity"));
const CourseActivities = lazy(() => import("@mf-app/remote/components/courses/CourseActivities"));
interface ActivitiesModalStore {
  activity: Activity | null;
  setActivityToShow: (id: number) => void;
  clearActivity: () => void;
}


const useActivitiesModalStore = create<ActivitiesModalStore>()(
  devtools((set) => ({
    activity: null as Activity | null,
    setActivityToShow: (id: number) => {
      const activity = useCourseActivityStore.getState().data?.activities.find((a) => a.id === id);
      if (activity) {
        set({ activity }, false, 'SHOW_ACTIVITY');
      }
    },
    clearActivity: () => set({ activity: null }, false, 'CLEAR_ACTIVITY'),
  }), devtoolsConfig('ActivitiesModalStore'))
);


const ActivityModal = () => {
  const { activity, clearActivity } = useActivitiesModalStore();

  return (
    <>
      {(
        activity && (
          <div
             id="small-modal"
             tabIndex={-1}
             onClick={(e) => {
              if ((e.target as any)?.id === "small-modal") {
                clearActivity();
              }
             }}
             className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-40"
           >
             <div className="relative w-full max-w-md max-h-full">
              <Suspense fallback={<div>Loading...</div>}>
                <CourseActivity activity={activity}/>
              </Suspense>
             </div>
           </div>
        )
      )}
    </>
  )
};

const ActivitiesPage = () => {
  // Fetch activities from an API or use static data
  const { setActivityToShow } = useActivitiesModalStore();

  const handleCourseSelection = (id: number) => {
    console.log("Selected course:", id);
    setActivityToShow(id);
  };

  return (
    <div className="flex justify-center">
      <ActivityModal />
      <div className="w-[50%] p-10">
        <Suspense fallback={<div>Loading...</div>}>
        <CourseActivities
          title="Course Activities"
          onSelected={handleCourseSelection}
        />
        </Suspense>
      </div>
    </div>
  );
};

export default ActivitiesPage;

import CourseActivities from "@mf-app/remote/components/courses/CourseActivities";
import CourseActivity from "@mf-app/remote/components/courses/CourseActivity";
import { Activity } from '@mf-app/store/models/courses.models';
import useCourseActivityStore from '@mf-app/store/courses/activities/store.course-activities';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// import zukeeper from 'zukeeper';

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
  }), { name: 'ActivitiesModalStore', enabled: true, store: "@mf-app/host" })
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
              <CourseActivity activity={activity}/>
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
        <CourseActivities
          title="Course Activities"
          onSelected={handleCourseSelection}
        />
      </div>
    </div>
  );
};

export default ActivitiesPage;

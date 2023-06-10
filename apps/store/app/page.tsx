import { OwnCalendar } from '../components/OwnCalendar';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
    <div className="h-full flex">
      <div className="h-full w-[300px] flex flex-col fixed bg-gray-900">
        <div className="p-2">
          <div className="">
            <OwnCalendar />
          </div>
        </div>
        <div className="overflow-scroll h-full flex-1">
          <div className="grid grid-cols-2 gap-0.5 flex-1">
            {[...Array(100)].map((_, index) => (
              <div
                key={index}
                className="rounded grid-item flex justify-center items-center bg-gray-800 h-[144px] w-[100%] hover:bg-slate-700 transition"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-[300px] flex flex-1 overflow-scroll justify-center">
        <div className="w-full">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="rounded bg-gray-900 w-full h-[300px] m-[2px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

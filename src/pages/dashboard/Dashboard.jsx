import { useState } from 'react';
import CustomButton from '../../components/button/CustomButton';
import CircleProgressBar from '../../components/progress-bar/CircleProgressBar';
import { DashboardLayout } from '../../layouts/DashboardLayout';

const Dashboard = () => {
  const [percentage, setPercentage] = useState(35);

  return (
    <DashboardLayout>
      <section className="section !pt-40">
        <div className="container-fluid">
          <div className=" flex justify-between ">
            <header>
              <h2>Overview</h2>
            </header>
            <div className="">
              <CustomButton
                name={'Resume Game'}
                to={'/play'}
                className={'bg-green-400 hover:bg-green-500'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
            <div className="card-body px-3 rounded-lg py-6 ring-1 flex flex-col gap-5 bg-neutral-100 pt-4">
              <h2 className="h4 card-title text-center">
                1st year of training
              </h2>
              <CircleProgressBar percentage={percentage} circleWidth={200} />

              <CustomButton
                name="Topics (113)"
                className={
                  'ring-1 hover:bg-neutral-900 hover:!text-white ring-neutral-900 !text-neutral-900'
                }
              />
              <CustomButton
                name="Start Game"
                className={'ring-1 bg-neutral-900 '}
              />
            </div>
            <div className="card-body px-3 rounded-lg py-6 ring-1 flex flex-col gap-5 bg-neutral-100 pt-4">
              <h2 className="h4 card-title text-center">
                1st year of training
              </h2>
              <CircleProgressBar percentage={percentage} circleWidth={200} />

              <CustomButton
                name="Topics (113)"
                className={
                  'ring-1 hover:bg-neutral-900 hover:!text-white ring-neutral-900 !text-neutral-900'
                }
              />
              <CustomButton
                name="Start Game"
                className={'ring-1 bg-neutral-900 '}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <div className="card-body px-3 rounded-lg py-6 ring-1 flex flex-col gap-5 bg-neutral-100 pt-4">
            <h2 className="h4 card-title text-center ">Overall Progress</h2>
            <hr />
            <CircleProgressBar percentage={20} circleWidth={200} />
          </div>
          <div className="card-body px-3 rounded-lg py-6 ring-1 flex flex-col gap-5 bg-neutral-100 pt-4">
            <h2 className="h4 card-title text-center">My Todos</h2>
            <hr />
            <CircleProgressBar percentage={30} circleWidth={200} />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;

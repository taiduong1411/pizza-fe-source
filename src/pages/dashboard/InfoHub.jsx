import { useState } from 'react';
import AccordionItem from '../../components/accordion/AccordionItem';
import { DashboardLayout } from '../../layouts/DashboardLayout';

const questionItems = [
  {
    title:
      'Do I need to have a social listening tool to get started with RILA ?',
    desc: 'No need to worry about it! RILA offers various packages that account for such cases. Reach out to us to find out more how we can help you.',
  },

  {
    title:
      'Can RILA help me choose the right in-house social listening vendor ?',
    desc: 'Absolutely! RILA will work with you to identify your business objectives for social listening, understand what metrics you should track, and how  to use the data to inform your marketing and business strategies.',
  },
  {
    title: 'How fast can RILA deliver a social listening report ? ',
    desc: 'We strive to work around client timelines and urgent requests. If you have an urgent request, please reach out to us immediately so we can help you deliver.',
  },
];
const InfoHub = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };
  return (
    <DashboardLayout>
      <section className="section !pt-40">
        <div className="container">
          <div className="flex flex-col gap-5">
            <header>
              <h2>Info:Hub</h2>
            </header>

            <p className="text-lg">
              With the Info:Hub you have access to all content of the training
              profession! It can be used as a reference book or as an aid in
              vocational school and in the training company. It can also be used
              as an aid to answering questions in the learning quiz. For
              trainers, it is available as a support for in-house training.
            </p>
          </div>

          <div className="">
            <div className="">
              <input
                type={'text'}
                id="confirm-password"
                className="bg-gray-50 ring-1 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="search"
                name="search"
              />
            </div>

            <div className="flex flex-col items-start justify-start ">
              {questionItems.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="h-[1px] w-full bg-darkgray px-2.5 "></div>
                    <div className="px-[15px]">
                      <AccordionItem
                        key={index}
                        open={index === open}
                        title={data.title}
                        desc={data.desc}
                        toggle={() => toggle(index)}
                      />
                    </div>

                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default InfoHub;

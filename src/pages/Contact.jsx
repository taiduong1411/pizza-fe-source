import { useForm } from 'react-hook-form';
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <section className="section bg-neutral-900 !pt-40">
        <div className="container">
          <header>
            <h2>
              <span className="text-white">Contact</span>
            </h2>
          </header>

          <h3 className="text-white mt-16">Sender</h3>

          <div className="">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-span-6 mb-8 flex flex-col">
                <label htmlFor="" className="text-primary mb-3">
                  Username*
                </label>
                <input
                  type="text"
                  {...register('username')}
                  className="form-control"
                />
              </div>

              <div className="col-span-6 mb-8 flex flex-col">
                <label htmlFor="" className="text-primary mb-3">
                  Email*
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="form-control"
                />
              </div>

              <div className="col-span-6 mb-8 flex flex-col">
                <label htmlFor="" className="text-primary mb-3">
                  Telephone*
                </label>
                <input
                  type="text"
                  {...register('telephone')}
                  className="form-control"
                />
              </div>

              <div className="col-span-6 mb-8 flex flex-col">
                <label htmlFor="" className="text-white mb-3 text-2xl">
                  Message
                </label>
                <textarea
                  name="message"
                  {...register('message')}
                  className="bg-white"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="rounded-full text-white bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
                >
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;

import PostCard from '../components/card/PostCard';
import MainLayout from '../layouts/MainLayout';

const News = () => {
  return (
    <MainLayout>
      <section className="section mt-16">
        <div className="container-fluid">
          <div className="ym-content text-center">
            <header>
              <h1>News</h1>
            </header>

            <div className="lead">
              <p>
                Find out about new developments and practical examples from our
                customers. We'll keep you posted.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default News;

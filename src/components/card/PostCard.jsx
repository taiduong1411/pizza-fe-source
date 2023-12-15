const PostCard = () => {
  return (
    <a
      href="#"
      className="group cursor-pointer duration-300 flex justify-center flex-col bg-[--ym-neutral-100] hover:bg-[--ym-neutral-900] hover:ring-[--ym-neutral-900] hover:text-white"
    >
      <img
        alt=""
        sizes="50vw"
        src="https://azubiweb.com/media/cache/w300_default/asset/72208d12-1aa2-466f-bfcb-0fd6d6a6c3db.jpg"
        srcSet="https://azubiweb.com/media/cache/w300_default/asset/72208d12-1aa2-466f-bfcb-0fd6d6a6c3db.jpg 300w, https://azubiweb.com/media/cache/w600_default/asset/72208d12-1aa2-466f-bfcb-0fd6d6a6c3db.jpg 600w, https://azubiweb.com/media/cache/w900_default/asset/72208d12-1aa2-466f-bfcb-0fd6d6a6c3db.jpg 900w, https://azubiweb.com/media/cache/w1200_default/asset/72208d12-1aa2-466f-bfcb-0fd6d6a6c3db.jpg 1200w"
        loading="lazy"
      />
      <div className=" block mx-6 ">
        <div className="date text-primary my-2">25/12/2023</div>
        <div className="flex items-center ">
          <h3 className="text-slate-900 group-hover:text-white font-semibold text-xl my-2">
            New project
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          Create a new project from a variety of starting templates. Create a
          Create a new project from a variety of starting templates. Create a
          new project from a variety of starting templates. Create a new project
          from a variety of starting templates. Create a new project from a
          variety of starting templates. Create a new project from a variety of
          starting templates. Create a new project from a variety of starting
          templates. Create a new project from a variety of starting templates.
          Create a new project from a variety of starting templates. Create a ne
          w project from a variety of starting templates. Create a new project
          from a variety of starting templates. Create a new project from a v
          ariety of starting templates. Create a new project from a variety of
          starting templates. new project from a variety of starting templates.
        </p>
      </div>
    </a>
  );
};

export default PostCard;

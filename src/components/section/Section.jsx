// eslint-disable-next-line react/prop-types
export default function Section({ className, fluid, title, children }) {
  return (
    <section className={className + ' section'}>
      <div className={fluid ? 'container-fluid' : 'container'}>
        <header>
          <h2>{title}</h2>
        </header>

        {children}
      </div>
    </section>
  );
}
